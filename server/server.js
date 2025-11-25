const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_APP_PASSWORD, // Gmail App Password
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`, // From user's email
    to: 'saividesh29@gmail.com', // Your receiving email
    subject: `Portfolio Review: ${subject}`,
    html: `
      <div style="font-family: 'Courier New', monospace; background-color: #000000; color: #ffffff; padding: 20px; border: 2px solid #ff0000;">
        <h2 style="color: #ff0000; border-bottom: 2px solid #ff0000; padding-bottom: 10px;">
          New Portfolio Message
        </h2>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #0a0a0a; border-left: 3px solid #ff0000;">
          <p style="margin: 5px 0;"><strong style="color: #ff0000;">From:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong style="color: #ff0000;">Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong style="color: #ff0000;">Subject:</strong> ${subject}</p>
        </div>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #0a0a0a; border: 1px solid #ff0000;">
          <h3 style="color: #ff0000; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ff0000; font-size: 12px; color: #999;">
          <p>Sent from your portfolio website - ${new Date().toLocaleString()}</p>
          <p>Reply directly to this email to respond to ${name}</p>
        </div>
      </div>
    `,
    text: `
Portfolio Review: ${subject}

From: ${name}
Email: ${email}

Message:
${message}

---
Sent from your portfolio website
${new Date().toLocaleString()}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log(`Email sent from ${name} (${email})`);
    
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
