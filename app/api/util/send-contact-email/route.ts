import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { topic, fullName, contactEmail, phoneNumber, message } = await request.json();

    // First, Setup transporter using environment variables
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        // Send mail
        const info = await transporter.sendMail({
            from: `"${fullName}" <${contactEmail}>`,   // sender address
            to: process.env.RECEIVER_EMAIL,   // list of receivers, just myself for now :)
            subject: `Contact JKTurner: Topic: ${topic}`, 
            html: `
            <p>You have received a new message from <strong>${fullName}</strong></p>
            <p>Contact info:</p>
            <ul>
                <li>Email: ${contactEmail}</li>
                <li>Number: ${phoneNumber}</li>
            </ul>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        });

        console.log('Email sent: %s', info.messageId);
        return NextResponse.json({ message: "Email sent successfully" });
        
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: "Error sending email" }, { status: 500 });
    }
}