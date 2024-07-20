import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { fullName, contactEmail, message } = await request.json();

    // Setup transporter using environment variables
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
            to: process.env.RECEIVER_EMAIL,   // list of receivers
            subject: "Message from JKTurner.site", 
            text: `You have received a new message from ${fullName} (${contactEmail}):\n\n${message}`,
        });

        console.log('Email sent: %s', info.messageId);
        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: "Error sending email" }, { status: 500 });
    }
}



// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }

//     const { fullName, contactEmail, message } = req.body;

//     // Setup transporter
//     const transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false,
//         auth: {
//             user: "sasha.windler@ethereal.email", // use your ethereal email
//             pass: "TnpJyMfC8KZGJ3UHng", // use your ethereal password
//         },
//     });

//     try {
//         // Send mail
//         await transporter.sendMail({
//             from: `"${fullName}" <${contactEmail}>`,   // sender address
//             to: "jkturner107@gmail.com",   // list of receivers
//             subject: "Message from JKTurner.site", 
//             text: message,
//         });

//         res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error sending email" });
//     }
// }

// export default sendEmail;


