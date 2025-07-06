import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';
import sgMail from '@sendgrid/mail';

// Initialize Twilio client
const accountSid = process.env.TWILIO_SID || process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_FROM;
const adminPhone = process.env.ADMIN_PHONE;

// Initialize SendGrid
const sendGridApiKey = process.env.SENDGRID_API_KEY;
const adminEmail = process.env.ADMIN_EMAIL;
const fromEmail = process.env.FROM_EMAIL;

if (sendGridApiKey) {
  sgMail.setApiKey(sendGridApiKey);
}

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
    console.log('📧 Contact form submission received');
    console.log('🔑 Environment check:', {
      hasTwilioSid: !!accountSid,
      hasTwilioToken: !!authToken,
      hasTwilioPhone: !!twilioPhone,
      hasAdminPhone: !!adminPhone,
      hasSendGrid: !!sendGridApiKey,
      hasFromEmail: !!fromEmail,
      hasAdminEmail: !!adminEmail
    });
    
    const body = await request.json();
    const { name, email, phone, message, contactMethod } = body;
    
    console.log('📝 Form data:', { name, email, phone: phone ? 'PROVIDED' : 'MISSING', contactMethod });

    // Validate required fields
    if (!name || !message || !contactMethod) {
      console.log('❌ Validation failed: Missing required fields');
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
    if (contactMethod === 'sms') {
      if (!twilioClient || !twilioPhone || !accountSid || !authToken) {
        console.error('❌ Missing Twilio configuration:', {
          hasClient: !!twilioClient,
          hasPhone: !!twilioPhone,
          hasSid: !!accountSid,
          hasToken: !!authToken
        });
        return NextResponse.json(
          { error: 'SMS service not configured properly' },
          { status: 500 }
        );
      }
      // Format phone number for SMS
      const formattedPhone = phone.startsWith('+1') ? phone : `+1${phone.replace(/\D/g, '')}`;
      
      try {
        console.log('📱 Sending SMS to:', formattedPhone);
        
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
        
        console.log('✅ SMS sent successfully!');
      } catch (smsError) {
        console.error('📱 SMS sending error:', smsError);
        console.error('📱 Twilio config:', {
          hasAccountSid: !!accountSid,
          hasAuthToken: !!authToken,
          hasFrom: !!twilioPhone,
          hasAdmin: !!adminPhone,
          originalPhone: phone,
          formattedPhone
        });
        return NextResponse.json(
          { error: `Failed to send SMS: ${smsError instanceof Error ? smsError.message : 'Unknown error'}` },
          { status: 500 }
        );
      }
    }

    // Send Email if contact method is email
    if (contactMethod === 'email') {
      if (!sendGridApiKey || !adminEmail || !fromEmail) {
        console.error('❌ Missing SendGrid configuration:', {
          hasApiKey: !!sendGridApiKey,
          hasAdminEmail: !!adminEmail,
          hasFromEmail: !!fromEmail
        });
        return NextResponse.json(
          { error: 'Email service not configured properly' },
          { status: 500 }
        );
      }
      try {
        console.log('📧 Attempting to send email...');
        
        // Send confirmation email to user
        await sgMail.send({
          to: email,
          from: fromEmail,
          subject: 'Thank you for your message!',
          html: `
            <h2>Hi ${name},</h2>
            <p>Thank you for reaching out! I've received your message and will get back to you via email soon.</p>
            <p><strong>Your message:</strong></p>
            <p>${message}</p>
            <p>Best regards,<br>Kobe</p>
          `
        });
        
        // Send notification email to admin
        await sgMail.send({
          to: adminEmail,
          from: fromEmail,
          subject: `New Contact Form Message from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        });
        
        console.log('✅ Email sent successfully!');
      } catch (emailError) {
        console.error('📧 Email sending error:', emailError);
        return NextResponse.json(
          { error: `Failed to send email: ${emailError instanceof Error ? emailError.message : 'Unknown error'}` },
          { status: 500 }
        );
      }
    }
    
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
