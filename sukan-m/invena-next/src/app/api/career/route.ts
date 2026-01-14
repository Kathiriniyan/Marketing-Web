import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { GoogleAuth } from 'google-auth-library';

export async function POST(req: NextRequest) {
    console.log("Career API call received");

    const emailUser = process.env.EMAIL_USER;
    console.log("EMAIL_USER present:", !!emailUser);
    if (!emailUser) {
        console.error("Critical: EMAIL_USER env var is missing!");
    }

    try {
        const formData = await req.formData();

        const fullName = formData.get('fullName') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const role = formData.get('role') as string;
        const coverLetter = formData.get('coverLetter') as string;
        const cvFile = formData.get('cv') as File | null;

        if (!cvFile) {
            return NextResponse.json({ error: 'CV file is required' }, { status: 400 });
        }
        const auth = new GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const client = await auth.getClient();
        const accessToken = (await client.getAccessToken()).token;

        if (!accessToken) {
            throw new Error("Failed to generate Google Access Token");
        }

        let fileUrl = "Attached in Email (Drive Upload Failed)";

        try {
            const fileMetadata = {
                name: `${fullName}_${role}_CV_${Date.now()}${cvFile.name.substring(cvFile.name.lastIndexOf('.'))}`,
                parents: process.env.GOOGLE_DRIVE_FOLDER_ID ? [process.env.GOOGLE_DRIVE_FOLDER_ID] : [],
            };

            const form = new FormData();

            const metadataBlob = new Blob([JSON.stringify(fileMetadata)], { type: 'application/json' });
            form.append('metadata', metadataBlob);
            form.append('file', cvFile); 
            const driveUploadRes = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink&supportsAllDrives=true', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: form as any,
            });

            if (!driveUploadRes.ok) {
                const errText = await driveUploadRes.text();
                console.error(`Drive Upload Failed: ${driveUploadRes.status} ${errText}`);
                console.warn("Continuing without Drive link...");
            } else {
                const driveData = await driveUploadRes.json();
                const fileId = driveData.id;
                fileUrl = driveData.webViewLink;

                console.log("File uploaded to Drive:", fileId);

                
                await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        role: 'reader',
                        type: 'anyone'
                    })
                }).catch(e => console.error("Permission update failed:", e));
            }
        } catch (driveErr) {
            console.error("Drive integration error:", driveErr);
            
        }

        
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const values = [
            [
                new Date().toLocaleString(),
                fullName,
                email,
                phone,
                role,
                coverLetter,
                fileUrl
            ]
        ];

        
        const sheetRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values })
        });

        if (!sheetRes.ok) {
            const errText = await sheetRes.text();
            console.error("Sheet Append Failed:", errText);
        } else {
            console.log("Row added to sheet");
        }

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("Email credentials missing");
        }

        const emailPass = process.env.EMAIL_PASS.replace(/\s+/g, '');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: emailPass,
            },
        });

        const arrayBuffer = await cvFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Job Application: ${role} - ${fullName}`,
            text: `
          New Application Received!
          
          Role: ${role}
          Name: ${fullName}
          Email: ${email}
          Phone: ${phone}
          
          Cover Letter:
          ${coverLetter}
          
          CV Link (Drive): ${fileUrl}
        `,
            attachments: [
                {
                    filename: cvFile.name,
                    content: buffer
                }
            ]
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log("Email sent successfully to:", process.env.EMAIL_USER);
        } catch (emailErr: any) {
            console.error("Email sending failed:", emailErr);
            throw emailErr; 
        }

        return NextResponse.json({ success: true, message: 'Application submitted successfully' });

    } catch (error: any) {
        console.error('Error processing application:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error.message },
            { status: 500 }
        );
    }
}
