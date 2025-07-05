import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';
import nodemailer from 'nodemailer';

// Initialize Twilio
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Initialize Gmail SMTP
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, contactMethod, phoneNumber, phone } = await request.json();
    
    // Handle both phoneNumber and phone field names
    const userPhone = phoneNumber || phone;

    if (!name || !message || !contactMethod) {
      return NextResponse.json(
        { error: 'Name, message, and contact method are required' },
        { status: 400 }
      );
    }

    // Log environment variables for debugging (remove in production)
    console.log('Environment check:', {
      SENDGRID_FROM_EMAIL: process.env.SENDGRID_FROM_EMAIL ? 'SET' : 'MISSING',
      TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER ? 'SET' : 'MISSING',
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY ? 'SET' : 'MISSING',
      TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID ? 'SET' : 'MISSING',
      TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN ? 'SET' : 'MISSING'
    });

    if (contactMethod === 'email') {
      if (!email) {
        return NextResponse.json(
          { error: 'Email is required for email contact' },
          { status: 400 }
        );
      }

      // Send admin notification email
      const adminEmail = {
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL || 'kobe4smallman@gmail.com',
        subject: `Portfolio Contact from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        replyTo: email,
      };

      await transporter.sendMail(adminEmail);

      // Send customer confirmation email
      const customerEmail = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Thank you for contacting me!',
        html: `<p>Hi ${name},</p><p>Thank you for reaching out! I've received your message and will get back to you soon.</p><p>Best regards,<br>Kobe</p>`,
      };

      await transporter.sendMail(customerEmail);

      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully' 
      });

    } else if (contactMethod === 'sms') {
      if (!userPhone) {
        return NextResponse.json(
          { error: 'Phone number is required for SMS contact' },
          { status: 400 }
        );
      }

      // Send SMS to customer
      const cleanedPhone = userPhone.replace(/\D/g, '');
      const formattedPhone = cleanedPhone.startsWith('1') ? `+${cleanedPhone}` : `+1${cleanedPhone}`;
      
      const customerSMS = `Hi ${name}, thanks for reaching out! I've received your message and will get back to you soon. - Kobe`;
      
      await twilioClient.messages.create({
        body: customerSMS,
        from: process.env.TWILIO_PHONE_NUMBER as string,
        to: formattedPhone,
      });

      // Send admin notification email
      const adminEmail = {
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL || 'kobe4smallman@gmail.com',
        subject: `SMS Contact from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${userPhone}</p><p><strong>Email:</strong> ${email || 'N/A'}</p><p><strong>Message:</strong> ${message}</p>`,
      };

      await transporter.sendMail(adminEmail);

      return NextResponse.json({ 
        success: true, 
        message: 'SMS sent successfully' 
      });

    } else {
      return NextResponse.json(
        { error: 'Invalid contact method' },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
