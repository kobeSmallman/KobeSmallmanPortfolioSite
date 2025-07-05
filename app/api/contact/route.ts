import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { Twilio } from 'twilio';

// Types
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  contactMethod?: 'email' | 'sms';
}

// Initialize services
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Debug Twilio environment variables
console.log('Twilio Debug:', {
  hasTwilioSID: !!process.env.TWILIO_SID,
  hasAccountSID: !!process.env.TWILIO_ACCOUNT_SID,
  hasToken: !!process.env.TWILIO_AUTH_TOKEN,
  hasPhone: !!process.env.TWILIO_FROM,
  twilioSidLength: process.env.TWILIO_SID?.length,
  accountSidLength: process.env.TWILIO_ACCOUNT_SID?.length,
  tokenLength: process.env.TWILIO_AUTH_TOKEN?.length
});

const twilioClient = process.env.TWILIO_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_ACCOUNT_SID
  ? new Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN, { accountSid: process.env.TWILIO_ACCOUNT_SID })
  : null;

const isDevelopment = process.env.NODE_ENV === 'development';

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // SMS validation
    if (body.contactMethod === 'sms' && !body.phone) {
      return NextResponse.json(
        { error: 'Phone number is required for SMS contact' },
        { status: 400 }
      );
    }

    // Log the contact attempt
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      contactMethod: body.contactMethod,
      phone: body.phone ? body.phone.substring(0, 3) + '***' : undefined,
      messageLength: body.message.length,
      timestamp: new Date().toISOString()
    });

    // Admin notification - send via same method user prefers
    if (body.contactMethod === 'email' && process.env.SENDGRID_API_KEY && process.env.ADMIN_EMAIL) {
      // Send admin notification via email
      const adminEmailData = {
        to: process.env.ADMIN_EMAIL,
        from: process.env.FROM_EMAIL || 'noreply@kobesmallman.dev',
        subject: `Portfolio Contact: ${body.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f1ea;">
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #15202B; margin-bottom: 20px;">New Portfolio Contact</h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="color: #D75F4E; margin-top: 0;">Contact Information</h3>
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Preferred Contact Method:</strong> Email</p>
              </div>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
                <h3 style="color: #D75F4E; margin-top: 0;">Message</h3>
                <p style="white-space: pre-wrap; line-height: 1.6;">${body.message}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e9ecef; font-size: 12px; color: #6c757d;">
                <p>Received: ${new Date().toLocaleString()}</p>
                <p>Portfolio Contact Form - kobesmallman.dev</p>
              </div>
            </div>
          </div>
        `
      };

      try {
        await sgMail.send(adminEmailData);
        console.log('Admin email notification sent successfully');
      } catch (error) {
        console.error('Failed to send admin email notification:', error);
      }
    } else if (body.contactMethod === 'sms' && twilioClient && process.env.ADMIN_PHONE) {
      // Send admin notification via SMS
      const adminSmsMessage = `New Portfolio Contact:\n\nName: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\n\nMessage: ${body.message}`;
      
      try {
        await twilioClient.messages.create({
          body: adminSmsMessage,
          from: process.env.TWILIO_FROM,
          to: process.env.ADMIN_PHONE
        });
        console.log('Admin SMS notification sent successfully');
      } catch (error) {
        console.error('Failed to send admin SMS notification:', error);
      }
    }

    // Customer confirmation
    if (body.contactMethod === 'email' && process.env.SENDGRID_API_KEY) {
      // Send email confirmation
      const confirmationEmailData = {
        to: body.email,
        from: process.env.FROM_EMAIL || 'noreply@kobesmallman.dev',
        subject: 'Thank you for contacting me!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f1ea;">
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #15202B; margin-bottom: 20px;">Thank you for reaching out!</h2>
              
              <p style="color: #15202B; font-size: 16px; line-height: 1.6;">Hi ${body.name},</p>
              
              <p style="color: #15202B; font-size: 16px; line-height: 1.6;">
                Thank you for contacting me through my portfolio website. I've received your message and will get back to you via email as soon as possible.
              </p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D75F4E;">
                <h3 style="color: #D75F4E; margin-top: 0;">Your Message</h3>
                <p style="white-space: pre-wrap; line-height: 1.6; color: #15202B;">${body.message}</p>
              </div>
              
              <p style="color: #15202B; font-size: 16px; line-height: 1.6;">
                I look forward to connecting with you!
              </p>
              
              <p style="color: #15202B; font-size: 16px; line-height: 1.6;">
                Best regards,<br>
                <strong>Kobe Smallman</strong><br>
                Full-Stack Developer
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e9ecef; font-size: 12px; color: #6c757d;">
                <p>This is an automated confirmation. Please do not reply to this email.</p>
                <p>Portfolio: kobesmallman.dev</p>
              </div>
            </div>
          </div>
        `
      };

      try {
        await sgMail.send(confirmationEmailData);
        console.log('Email confirmation sent successfully');
      } catch (error) {
        console.error('Failed to send email confirmation:', error);
        // Don't fail the request if confirmation fails
      }
    } else if (body.contactMethod === 'sms' && twilioClient && body.phone) {
      // Send SMS confirmation
      // Format phone number to ensure international format
      let formattedPhone = body.phone.replace(/\D/g, ''); // Remove all non-digits
      if (formattedPhone.length === 10) {
        formattedPhone = '+1' + formattedPhone; // Add North American country code
      } else if (formattedPhone.length === 11 && formattedPhone.startsWith('1')) {
        formattedPhone = '+' + formattedPhone; // Add + if missing
      }
      
      console.log('SMS Debug:', {
        hasTwilioClient: !!twilioClient,
        fromPhone: process.env.TWILIO_PHONE_NUMBER,
        toPhone: formattedPhone,
        originalPhone: body.phone
      });
      
      try {
        await twilioClient.messages.create({
          body: `Hi ${body.name}! Thank you for contacting me through my portfolio. I've received your message and will get back to you via SMS soon. - Kobe Smallman`,
          from: process.env.TWILIO_FROM,
          to: formattedPhone
        });
        console.log('SMS confirmation sent successfully');
      } catch (error: any) {
        console.error('Failed to send SMS confirmation:', {
          message: error.message,
          code: error.code,
          status: error.status,
          moreInfo: error.moreInfo,
          credentialsPresent: {
            sid: !!process.env.TWILIO_ACCOUNT_SID,
            token: !!process.env.TWILIO_AUTH_TOKEN,
            phone: !!process.env.TWILIO_PHONE_NUMBER
          }
        });
        // Don't fail the request if SMS confirmation fails
      }
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: body.contactMethod === 'sms' 
        ? 'Thank you! Your message has been sent successfully. I\'ll get back to you via SMS soon.'
        : 'Thank you! Your message has been sent successfully. I\'ll get back to you via email soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
