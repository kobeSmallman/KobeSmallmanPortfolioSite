import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const { to, from, subject, text, html } = await request.json();

    if (!to || !subject || (!text && !html)) {
      return NextResponse.json(
        { error: 'To, subject, and message content are required' },
        { status: 400 }
      );
    }

    const msg = {
      to: to,
      from: from || process.env.SENDGRID_FROM_EMAIL,
      subject: subject,
      text: text,
      html: html,
    };

    await sgMail.send(msg);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
