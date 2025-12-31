import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { GoogleAuth } from 'google-auth-library';

export async function POST(req: NextRequest) {
    console.log("Career API call received");

    // Debug Env Vars (Masked)
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

        // 1. Prepare Google Auth (using lighter library)
        // We need scopes for Drive and Spreadsheets
        const auth = new GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive.file', // usage of drive.file is cleaner if we only need to access files we created
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const client = await auth.getClient();
        const accessToken = (await client.getAccessToken()).token;

        if (!accessToken) {
            throw new Error("Failed to generate Google Access Token");
        }

        // 2. Upload CV to Google Drive via fetch (Multipart upload)
        let fileUrl = "Attached in Email (Drive Upload Failed)";

        try {
            const fileMetadata = {
                name: `${fullName}_${role}_CV_${Date.now()}${cvFile.name.substring(cvFile.name.lastIndexOf('.'))}`,
                parents: process.env.GOOGLE_DRIVE_FOLDER_ID ? [process.env.GOOGLE_DRIVE_FOLDER_ID] : [],
            };

            const form = new FormData();
            // Google Drive Multipart Upload requires specific order: Metadata first JSON, then Media
            // We can use the 'multipart/related' upload method or just simple upload if small.
            // 'uploadType=multipart' is best for metadata + content.

            const metadataBlob = new Blob([JSON.stringify(fileMetadata)], { type: 'application/json' });
            form.append('metadata', metadataBlob);
            form.append('file', cvFile); // Check if this works with node fetch or needs buffer conversion

            // Note: Request.formData() returns standard File objects which native fetch can handle in body...
            // BUT we are constructing a NEW FormData. 
            // Let's use the 'resumable' upload or simpler 'multipart' endpoint.

            // Added supportsAllDrives=true to handle Shared Drives
            const driveUploadRes = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink&supportsAllDrives=true', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    // Do NOT set Content-Type header manually for FormData, let fetch set boundary
                },
                body: form as any,
            });

            if (!driveUploadRes.ok) {
                // Log details but don't throw to stop the whole process
                const errText = await driveUploadRes.text();
                console.error(`Drive Upload Failed: ${driveUploadRes.status} ${errText}`);
                console.warn("Continuing without Drive link...");
            } else {
                const driveData = await driveUploadRes.json();
                const fileId = driveData.id;
                fileUrl = driveData.webViewLink;

                console.log("File uploaded to Drive:", fileId);

                // Make file readable by anyone with link (optional but good for visibility)
                // We use the permissions API
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
            // fileUrl already set to fallback
        }

        // 3. Append to Google Sheet via fetch
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

        // Use 'Sheet1' (whole sheet) to find the absolute last row. 
        // Add insertDataOption=INSERT_ROWS to ensure we don't overwrite.
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
            // We log but maybe don't fail the whole request if email succeeds?
        } else {
            console.log("Row added to sheet");
        }

        // 4. Send Email via Nodemailer
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("Email credentials missing");
        }

        // Clean password (remove spaces if any)
        const emailPass = process.env.EMAIL_PASS.replace(/\s+/g, '');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: emailPass,
            },
        });

        // Convert File to Buffer for attachment
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
            // We log but don't fail the request so the user gets a "Success" message if possible,
            // or we could throw. Given "fix that", if email fails, it's bad.
            // But let's log heavily.
            throw emailErr; // Let it fail so user knows to check config
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
