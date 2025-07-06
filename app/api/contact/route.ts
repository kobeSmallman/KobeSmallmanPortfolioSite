import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

// Initialize Twilio client
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_FROM;
const adminPhone = process.env.ADMIN_PHONE;

let twilioClient: twilio.Twilio | null = null;

try {
  if (accountSid && authToken) {
    twilioClient = twilio(accountSid, authToken);
  }
} catch (error) {
  console.error('Twilio initialization error:', error);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, contactMethod } = body;

    // Validate required fields
    if (!name || !message || !contactMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate contact method specific fields
    if (contactMethod === 'email' && !email) {
      return NextResponse.json(
        { error: 'Email is required when contact method is email' },
        { status: 400 }
      );
    }

    if (contactMethod === 'sms' && !phone) {
      return NextResponse.json(
        { error: 'Phone number is required when contact method is SMS' },
        { status: 400 }
      );
    }

    // Send SMS if contact method is SMS
    if (contactMethod === 'sms' && twilioClient && twilioPhone) {
      try {
        // Format phone number for SMS
        const formattedPhone = phone.startsWith('+1') ? phone : `+1${phone.replace(/\D/g, '')}`;
        
        // Send confirmation SMS to user
        await twilioClient.messages.create({
          body: `Hi ${name}, thank you for your message! I'll get back to you soon via SMS. This is an automated confirmation - please do not reply to this number. - Kobe`,
          from: twilioPhone,
          to: formattedPhone
        });

        // Send notification SMS to admin
        if (adminPhone) {
          await twilioClient.messages.create({
            body: `New SMS contact from ${name} (${phone}): ${message}`,
            from: twilioPhone,
            to: adminPhone
          });
        }
      } catch (smsError) {
        console.error('SMS sending error:', smsError);
        return NextResponse.json(
          { error: 'Failed to send SMS' },
          { status: 500 }
        );
      }
    }

    // For email contacts, you would integrate with SendGrid here
    // For now, we'll just return success
    
    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        method: contactMethod 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
