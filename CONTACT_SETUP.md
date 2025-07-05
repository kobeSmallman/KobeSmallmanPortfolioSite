# Contact Form SMS & Email Setup Guide

This guide will help you set up the SMS and email functionality for your portfolio contact form.

## Overview

The contact form now supports:
- **Email submissions** with confirmation emails
- **SMS submissions** with confirmation text messages
- **Admin notifications** via email for all submissions
- **Dual contact method** selection (Email or SMS)
- **File attachment support** (ready for future enhancement)

## Required Environment Variables

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

### 1. Gmail SMTP Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings → Security
   - Under "Signing in to Google", select "App passwords"
   - Generate a new app password for "Mail"
3. **Set Environment Variables**:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   ```

### 2. Twilio SMS Setup

1. **Create Twilio Account** at https://www.twilio.com
2. **Purchase Phone Number**:
   - Go to Console → Phone Numbers → Manage → Buy a number
   - Choose a number that supports SMS
3. **Get Credentials**:
   - Account SID and Auth Token from Console Dashboard
4. **Set Environment Variables**:
   ```
   TWILIO_ACCOUNT_SID=your-account-sid
   TWILIO_AUTH_TOKEN=your-auth-token
   TWILIO_PHONE_NUMBER=+1234567890
   ```

### 3. Admin Contact Information

```
ADMIN_EMAIL=kobe4smallman@gmail.com
ADMIN_PHONE=+15873701108
```

### 4. Development Testing (Optional)

For testing without sending to real recipients:

```
TEST_EMAIL_TO=test@example.com
TEST_SMS_TO=+1234567890
NODE_ENV=development
```

## Features

### Contact Method Selection
- **Email**: Customer receives email confirmation, admin gets email notification
- **SMS**: Customer receives text confirmation, admin gets email notification
- **Validation**: Phone required for SMS, email always required for record keeping

### Form Validation
- **Conditional validation** based on contact method
- **Real-time error display** with visual feedback
- **Phone number formatting** with international support
- **Email format validation**

### Admin Notifications
- **Always sent via email** for record keeping
- **Rich HTML templates** with contact details
- **Formatted message display** with proper styling

### Customer Confirmations
- **Email confirmations** with professional templates
- **SMS confirmations** with concise, friendly messages
- **Delivery status handling** (logs failures but doesn't break form)

## Testing

### Development Mode
- Set `NODE_ENV=development` to use test email/SMS recipients
- Check console logs for debugging information
- Test both email and SMS contact methods

### Production Testing
1. **Test email delivery** - check spam folders
2. **Test SMS delivery** - verify phone number formatting
3. **Test form validation** - try invalid inputs
4. **Test both contact methods** - ensure proper routing

## Security Considerations

1. **Environment Variables**
   - Never commit `.env.local` to version control
   - Use different credentials for development/production
   - Rotate credentials regularly

2. **Rate Limiting** (Future Enhancement)
   - Consider implementing form submission rate limiting
   - Add CAPTCHA for additional protection

3. **Input Validation**
   - All inputs are validated server-side
   - HTML content is escaped in emails
   - Phone numbers are formatted and validated

## Troubleshooting

### Email Issues
- **Gmail blocking**: Ensure app password is correct, not regular password
- **Spam folder**: Warn users to check spam folders
- **SMTP errors**: Check firewall/network restrictions

### SMS Issues
- **Twilio errors**: Check phone number format (+1 prefix for North America)
- **Character limits**: SMS messages are kept under 160 characters
- **International numbers**: Ensure proper country code formatting

### Form Issues
- **Validation errors**: Check browser console for client-side errors
- **API errors**: Check server logs for detailed error messages
- **Network issues**: Verify all environment variables are set

## File Structure

```
app/api/contact/route.ts          # Main API endpoint
components/ContactForm.tsx        # Contact form component
.env.example                     # Environment variables template
CONTACT_SETUP.md                 # This setup guide
```

## Dependencies

Already installed in your project:
- `nodemailer` - Email sending
- `twilio` - SMS sending
- `@types/nodemailer` - TypeScript types

## Next Steps

1. Set up environment variables
2. Test in development mode
3. Deploy and test in production
4. Monitor logs for any issues
5. Consider adding rate limiting or CAPTCHA if needed

## Support

If you encounter any issues:
1. Check the console logs for error details
2. Verify all environment variables are set correctly
3. Test with the development test recipients first
4. Ensure Twilio phone number supports SMS in your region
