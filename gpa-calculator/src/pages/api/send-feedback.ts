import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abubakarshahid1309@gmail.com', // Your email
      pass: process.env.EMAIL_PASSWORD // Create an app password in your Google Account
    }
  });

  try {
    // Send email
    await transporter.sendMail({
      from: email,
      to: 'abubakarshahid1309@gmail.com',
      subject: `GPA Calculator Feedback from ${name}`,
      html: `
        <h2>New Feedback Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending feedback' });
  }
}
