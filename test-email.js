// Simple script to test email sending with Resend
require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'blake@singletonsgroup.com',
      subject: 'Test Email from SingletonsGroup Website',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0057D9;">Email Setup Test</h2>
          <p>This is a test email to verify that the email submission system is working correctly.</p>
          <p>If you received this email, it means the setup is successful and we can now send directly to your business email!</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px; margin-top: 30px;">This is a test message from the SingletonsGroup website email setup.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Test email sent successfully!');
      console.log('Email ID:', data.id);
    }
  } catch (error) {
    console.error('Exception occurred:', error);
  }
}

sendTestEmail(); 