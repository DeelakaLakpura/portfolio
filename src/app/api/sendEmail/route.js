// app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Set up the SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your email address
      pass: process.env.SMTP_PASS, // Your email password
    },
  });

  // Set up the email options
  const mailOptions = {
    from: process.env.SMTP_USER, // sender address
    to: process.env.SMTP_USER, // receiver (you can change this to another email)
    subject: `New contact form submission from ${name}`, // Subject line
    text: `You have received a new message from ${name} (${email}):\n\n${message}`, // Plain text body
    html: `<p>You have received a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`, // HTML body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}
