const nodemailer = require('nodemailer');

async function sendTestEmail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'deelakaporfolio@outlook.com', // Your email address
      pass: 'deelaka2001', // Your email password or app password
    },
  });

  const mailOptions = {
    from: 'deelakaporfolio@outlook.com', // sender address
    to: 'deelaka.lakpura94@gmail.com', // receiver address (replace with a valid email)
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent from Node.js!', // Plain text body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendTestEmail();
