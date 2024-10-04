// app/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using your email service provider (Outlook)
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // Outlook SMTP server
      port: 587, // Outlook SMTP port
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'deelakalakpura2001@outlook.com', // Your Outlook email address
        pass: '#Deelaka2001', // Your Outlook email password
      },
    });

    // Set up email data
    const mailOptions = {
      from: email, // sender address
      to: 'recipient@example.com', // recipient address
      subject: 'New Contact Form Submission', // Subject line
      text: `You have a new message from ${name} (${email}): ${message}`, // plain text body
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
