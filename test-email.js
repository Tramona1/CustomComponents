// Simple script to test email sending with Resend
require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmails() {
  try {
    // Test 1: Admin notification email
    console.log("Testing admin notification email...");
    const adminEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'blake@singletonsgroup.com',
      subject: 'Test: AI Strategy Request Submission',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0057D9;">Test: AI Strategy Request</h2>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
            <p><strong>Form Type:</strong> AI Strategy Request</p>
            <p><strong>Submitted From:</strong> Test Script</p>
          </div>
          <div style="margin-bottom: 20px;">
            <p><strong>Submitter's Email:</strong> test@example.com</p>
            <p><strong>Business Name:</strong> Test Company</p>
            <p><strong>Phone Number:</strong> (555) 123-4567</p>
            <p><strong>Employee Count:</strong> 11-50</p>
            <p><strong>Industry:</strong> Technology</p>
            <p><strong>Pain Point/Use Case:</strong> Process Automation</p>
          </div>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <div>
            <p><strong>Message:</strong></p>
            <p>This is a test message to verify the admin notification email works correctly.</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">This is a test message from the email testing script.</p>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error('Error sending admin test email:', adminEmail.error);
    } else {
      console.log('Admin test email sent successfully!');
      console.log('Email ID:', adminEmail.data.id);
    }

    // Test 2: Auto-response email to user
    console.log("\nTesting user auto-response email...");
    const userEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'blake@singletonsgroup.com', // Sending to admin for testing
      subject: 'Thank you for contacting SingletonsGroup',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="background-color: #0057D9; display: inline-block; width: 40px; height: 40px; border-radius: 50%; color: white; line-height: 40px; margin-right: 10px; font-weight: bold; font-size: 16px;">AI</div>
            <span style="font-size: 20px; font-weight: bold; vertical-align: middle; color: #333;">SingletonsGroup</span>
          </div>
          
          <div style="background-color: #f7f9fc; border-radius: 8px; padding: 30px; margin-bottom: 20px; border-left: 4px solid #0057D9;">
            <h2 style="margin-top: 0; color: #0057D9; font-size: 22px;">Thank You for Reaching Out!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">Hi from Test Company,</p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">Thank you for your interest in leveraging AI for your business. We've received your inquiry and are excited to help you explore how AI can address your specific needs, particularly around your interest in Process Automation.</p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;"><strong>What's Next?</strong></p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">A member of our team will review your information and contact you within the next 24 hours to schedule a personalized consultation. We're looking forward to understanding your business better and finding the right AI solutions for you.</p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-top: 25px;">In the meantime, if you have any urgent questions, please don't hesitate to reply to this email or call us at (425) 877-8881.</p>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
            <p style="font-size: 14px; color: #666; margin-bottom: 5px;">Want to schedule right away?</p>
            <a href="https://calendly.com/blake-singletonsgroup/30min" style="display: inline-block; background-color: #0057D9; color: white; padding: 10px 20px; text-decoration: none; border-radius: 30px; font-weight: bold; margin-bottom: 20px;">Book a Call Now</a>
            
            <div style="margin-top: 20px;">
              <p style="font-size: 14px; color: #666; margin-bottom: 10px;">Connect with us:</p>
              <div>
                <a href="https://singletonsgroup.com" style="color: #0057D9; text-decoration: none; margin: 0 10px;">Website</a>
                <a href="mailto:blake@singletonsgroup.com" style="color: #0057D9; text-decoration: none; margin: 0 10px;">Email</a>
                <a href="tel:4258778881" style="color: #0057D9; text-decoration: none; margin: 0 10px;">Call</a>
              </div>
            </div>
            
            <p style="font-size: 12px; color: #999; margin-top: 30px;">© ${new Date().getFullYear()} SingletonsGroup. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    if (userEmail.error) {
      console.error('Error sending user test email:', userEmail.error);
    } else {
      console.log('User auto-response test email sent successfully!');
      console.log('Email ID:', userEmail.data.id);
    }
  } catch (error) {
    console.error('Exception occurred:', error);
  }
}

sendTestEmails(); 