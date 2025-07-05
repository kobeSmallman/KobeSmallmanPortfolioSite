import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';
import sgMail from '@sendgrid/mail';

// Initialize Twilio
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, contactMethod, phoneNumber } = await request.json();

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

      // Send email
      const msg = {
        to: process.env.SENDGRID_FROM_EMAIL as string,
        from: process.env.SENDGRID_FROM_EMAIL as string,
        subject: `Portfolio Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        replyTo: email,
      };

      await sgMail.send(msg);

      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully' 
      });

    } else if (contactMethod === 'sms') {
      if (!phoneNumber) {
        return NextResponse.json(
          { error: 'Phone number is required for SMS contact' },
          { status: 400 }
        );
      }

      // Send SMS
      const smsMessage = `Portfolio Contact - Name: ${name}, Email: ${email || 'N/A'}, Message: ${message}`;
      
      const result = await twilioClient.messages.create({
        body: smsMessage,
        from: process.env.TWILIO_PHONE_NUMBER as string,
        to: process.env.TWILIO_PHONE_NUMBER as string, // Send to yourself
      });

      return NextResponse.json({ 
        success: true, 
        messageSid: result.sid 
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
