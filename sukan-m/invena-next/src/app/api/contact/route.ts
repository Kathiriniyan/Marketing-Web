import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, phone, email, message } = await req.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // Check for environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const emailPass = process.env.EMAIL_PASS.replace(/\s+/g, '');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: emailPass,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to self as per request
            subject: `New Contact Enquiry from ${name}`,
            text: `
          New Contact Enquiry Received!
          
          Name: ${name}
          Phone: ${phone || 'N/A'}
          Email: ${email}
          
          Message:
          ${message}
        `,
            html: `
            <h3>New Contact Enquiry Received!</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });

    } catch (error: any) {
        console.error('Error sending contact email:', error);
        return NextResponse.json(
            { error: 'Failed to send message', details: error.message },
            { status: 500 }
        );
    }
}
