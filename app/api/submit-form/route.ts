import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
// You'll need to add RESEND_API_KEY to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Target email that will receive form submissions
const TARGET_EMAIL = 'blake@singletonsgroup.com';

export async function POST(request: Request) {
  try {
    const { 
      email, 
      name = '', 
      subject = 'New Form Submission', 
      message = 'A user has submitted a form',
      formType = 'Contact Form', // Default form type if not specified
      page = 'Unknown Page' // The page where the form was submitted
    } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Create a descriptive subject that includes the form type
    const enhancedSubject = `${formType} Submission from ${page}`;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Using Resend's verified sender domain
      to: TARGET_EMAIL,
      subject: enhancedSubject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0057D9;">${enhancedSubject}</h2>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
            <p><strong>Form Type:</strong> ${formType}</p>
            <p><strong>Submitted From:</strong> ${page}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <p><strong>From:</strong> ${name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <div>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">This message was sent from the SingletonsGroup website.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
} 