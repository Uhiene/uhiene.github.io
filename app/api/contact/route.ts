import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'princessuhiene@gmail.com',
      pass: 'mehunupafjzqqyee',
    },
  });

  const mailOptions = {
    from: email,
    to: 'princessuhiene@gmail.com',
    subject: `${name} is trying to contact you from your portfolio`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to send email' });
  }
}
