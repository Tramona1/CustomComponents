import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
// You'll need to add RESEND_API_KEY to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Target email that will receive form submissions
const TARGET_EMAIL = 'blakesingleton@hotmail.com';

// Simple delay function to avoid rate limiting
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(request: Request) {
  try {
    const { 
      email, 
      name = '',
      businessName = '',
      phoneNumber = 'Not provided',
      employeeCount = '',
      industry = '',
      painPoint = 'Not specified',
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

    // STEP 1: Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: 'info@singletonsgroup.com', // Using verified sender domain
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
            <p><strong>Submitter's Email:</strong> ${email}</p>
            ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
            ${businessName ? `<p><strong>Business Name:</strong> ${businessName}</p>` : ''}
            ${phoneNumber ? `<p><strong>Phone Number:</strong> ${phoneNumber}</p>` : ''}
            ${employeeCount ? `<p><strong>Employee Count:</strong> ${employeeCount}</p>` : ''}
            ${industry ? `<p><strong>Industry:</strong> ${industry}</p>` : ''}
            ${painPoint ? `<p><strong>Pain Point/Use Case:</strong> ${painPoint}</p>` : ''}
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

    if (adminEmailResult.error) {
      console.error('Error sending admin email:', adminEmailResult.error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
    
    // Wait for 1.5 seconds to avoid rate limiting
    await delay(1500);
    
    // Build personalized greeting and content
    const companyGreeting = businessName ? `the team at ${businessName}` : 'there';
    
    // Create industry-specific messaging when possible
    let industryMessage = '';
    if (industry) {
      switch(industry) {
        case 'Healthcare':
          industryMessage = ' Healthcare organizations like yours can particularly benefit from AI for patient management, scheduling, and record analysis.';
          break;
        case 'Finance':
          industryMessage = ' Financial businesses like yours are leveraging AI for risk assessment, fraud detection, and customer service automation.';
          break;
        case 'Retail':
          industryMessage = ' Retail businesses like yours are using AI to personalize customer experiences, optimize inventory, and streamline operations.';
          break;
        case 'Manufacturing':
          industryMessage = ' Manufacturing companies are transforming their operations with AI for predictive maintenance, quality control, and supply chain optimization.';
          break;
        case 'Legal':
          industryMessage = ' Legal firms are using AI to expedite document review, contract analysis, and legal research.';
          break;
        case 'Marketing':
          industryMessage = ' Marketing agencies are leveraging AI for content creation, campaign optimization, and customer insights.';
          break;
        default:
          industryMessage = ` We've worked with many ${industry} businesses to implement tailored AI solutions.`;
      }
    }
    
    // Create size-specific messaging
    let sizeMessage = '';
    if (employeeCount) {
      if (employeeCount === '1-10') {
        sizeMessage = ' For smaller teams like yours, we focus on high-impact, low-effort solutions that don\'t require technical expertise.';
      } else if (employeeCount === '11-50') {
        sizeMessage = ' For growing businesses like yours, we focus on scalable solutions that can grow with your team.';
      } else if (employeeCount === '51-200' || employeeCount === '201-500') {
        sizeMessage = ' For mid-sized organizations like yours, we can implement department-specific AI solutions or company-wide systems.';
      } else if (employeeCount === '501+') {
        sizeMessage = ' For larger enterprises, we offer enterprise-grade AI solutions with robust integration capabilities.';
      }
    }
    
    // Create pain point specific messaging
    let painPointMessage = '';
    if (painPoint && painPoint !== 'Not specified') {
      painPointMessage = ` Based on your interest in addressing ${painPoint}, we're already thinking about solutions that could help streamline this area of your business.`;
    }
    
    // STEP 2: Send auto-response email to the user
    const userEmailResult = await resend.emails.send({
      from: 'info@singletonsgroup.com', // Using verified sender domain
      to: email,
      subject: 'Thank you for contacting SingletonsGroup',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="background-color: #0057D9; display: inline-block; width: 40px; height: 40px; border-radius: 50%; color: white; line-height: 40px; margin-right: 10px; font-weight: bold; font-size: 16px;">AI</div>
            <span style="font-size: 20px; font-weight: bold; vertical-align: middle; color: #333;">SingletonsGroup</span>
          </div>
          
          <div style="background-color: #f7f9fc; border-radius: 8px; padding: 30px; margin-bottom: 20px; border-left: 4px solid #0057D9;">
            <h2 style="margin-top: 0; color: #0057D9; font-size: 22px;">Thank You for Reaching Out, ${companyGreeting}!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">We're excited to help you explore how AI can transform your business operations and results.${industryMessage}${sizeMessage}${painPointMessage}</p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;"><strong>What Happens Next:</strong></p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">A member of our team will reach out to you within the next 24 hours to discuss potential solutions tailored to your specific needs.</p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;"><strong>Want to Skip the Wait?</strong> You can book a call right now using the link below:</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://calendly.com/blake-singletonsgroup/30min" style="display: inline-block; background-color: #0057D9; color: white; padding: 14px 24px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Schedule Your Free Consultation</a>
              <p style="font-size: 14px; color: #666; margin-top: 10px;">30 minutes to discuss your needs and explore AI solutions</p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; font-style: italic; color: #555; margin-top: 25px;">We're looking forward to showing you how the right AI tools can save you time, reduce costs, and help your business grow—all without requiring any technical expertise on your part.</p>
          </div>
          
          <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px; border: 1px solid #e9ecef;">
            <h3 style="margin-top: 0; color: #333; font-size: 18px;">Your Information</h3>
            <p style="font-size: 14px; color: #666; margin-bottom: 15px;">We've received the following information from you:</p>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 5px; border-bottom: 1px solid #e9ecef; color: #666; width: 40%;">Business Name:</td>
                <td style="padding: 8px 5px; border-bottom: 1px solid #e9ecef; font-weight: 500;">${businessName || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 5px; border-bottom: 1px solid #e9ecef; color: #666;">Email Address:</td>
                <td style="padding: 8px 5px; border-bottom: 1px solid #e9ecef; font-weight: 500;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 5px; border-bottom: 1px solid #e9ecef; color: #666;">Phone Number:</td>
                <td style="padding: 8px 5px; border-bottom: 1px solid #e9ecef; font-weight: 500;">${phoneNumber !== 'Not provided' ? phoneNumber : 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 5px; border-bottom: 1px solid #e9ecef; color: #666;">Industry:</td>
                <td style="padding: 8px 5px; border-bottom: 1px solid #e9ecef; font-weight: 500;">${industry || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 5px; border-bottom: 1px solid #e9ecef; color: #666;">Company Size:</td>
                <td style="padding: 8px 5px; border-bottom: 1px solid #e9ecef; font-weight: 500;">${employeeCount || 'Not specified'} employees</td>
              </tr>
              <tr>
                <td style="padding: 8px 5px; color: #666;">Primary Interest:</td>
                <td style="padding: 8px 5px; font-weight: 500;">${painPoint !== 'Not specified' ? painPoint : 'General AI solutions'}</td>
              </tr>
            </table>
            
            <p style="font-size: 13px; color: #888; margin-top: 15px;">If you need to update any of this information, please reply to this email.</p>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
            <div style="margin-top: 20px;">
              <p style="font-size: 14px; color: #666; margin-bottom: 10px;">Connect with us:</p>
              <div>
                <a href="https://singletonsgroup.com" style="color: #0057D9; text-decoration: none; margin: 0 10px;">Website</a>
                <a href="mailto:blakesingleton@hotmail.com" style="color: #0057D9; text-decoration: none; margin: 0 10px;">Email</a>
                <a href="tel:4258778881" style="color: #0057D9; text-decoration: none; margin: 0 10px;">Call (425) 877-8881</a>
              </div>
            </div>
            
            <p style="font-size: 12px; color: #999; margin-top: 30px;">© ${new Date().getFullYear()} SingletonsGroup. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    if (userEmailResult.error) {
      console.error('Error sending user auto-response email:', userEmailResult.error);
      
      // Handle rate limit errors
      if (userEmailResult.error && 
          typeof userEmailResult.error === 'object' && 
          'statusCode' in userEmailResult.error && 
          userEmailResult.error.statusCode === 429) {
        console.log('Rate limit hit, retrying after a delay...');
        
        // Wait for 3 seconds before retrying
        await delay(3000);
        
        // Try sending the auto-response email again
        const retryEmailResult = await resend.emails.send({
          from: 'info@singletonsgroup.com', // Using verified sender domain
          to: email,
          subject: 'Thank you for contacting SingletonsGroup',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
              <div style="text-align: center; margin-bottom: 20px;">
                <div style="background-color: #0057D9; display: inline-block; width: 40px; height: 40px; border-radius: 50%; color: white; line-height: 40px; margin-right: 10px; font-weight: bold; font-size: 16px;">AI</div>
                <span style="font-size: 20px; font-weight: bold; vertical-align: middle; color: #333;">SingletonsGroup</span>
              </div>
              
              <div style="background-color: #f7f9fc; border-radius: 8px; padding: 30px; margin-bottom: 20px; border-left: 4px solid #0057D9;">
                <h2 style="margin-top: 0; color: #0057D9; font-size: 22px;">Thank You for Reaching Out, ${companyGreeting}!</h2>
                
                <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">We're excited to help you explore how AI can transform your business operations and results.${industryMessage}${sizeMessage}${painPointMessage}</p>
                
                <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;"><strong>What Happens Next:</strong></p>
                <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">A member of our team will reach out to you within the next 24 hours to discuss potential solutions tailored to your specific needs.</p>
                
                <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;"><strong>Want to Skip the Wait?</strong> You can book a call right now using the link below:</p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://calendly.com/blake-singletonsgroup/30min" style="display: inline-block; background-color: #0057D9; color: white; padding: 14px 24px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Schedule Your Free Consultation</a>
                  <p style="font-size: 14px; color: #666; margin-top: 10px;">30 minutes to discuss your needs and explore AI solutions</p>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6; font-style: italic; color: #555; margin-top: 25px;">We're looking forward to showing you how the right AI tools can save you time, reduce costs, and help your business grow—all without requiring any technical expertise on your part.</p>
              </div>
              
              <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
                <div style="margin-top: 20px;">
                  <p style="font-size: 14px; color: #666; margin-bottom: 10px;">Connect with us:</p>
                  <div>
                    <a href="https://singletonsgroup.com" style="color: #0057D9; text-decoration: none; margin: 0 10px;">Website</a>
                    <a href="mailto:blakesingleton@hotmail.com" style="color: #0057D9; text-decoration: none; margin: 0 10px;">Email</a>
                    <a href="tel:4258778881" style="color: #0057D9; text-decoration: none; margin: 0 10px;">Call (425) 877-8881</a>
                  </div>
                </div>
                
                <p style="font-size: 12px; color: #999; margin-top: 30px;">© ${new Date().getFullYear()} SingletonsGroup. All rights reserved.</p>
              </div>
            </div>
          `,
        });
        
        if (retryEmailResult.error) {
          console.error('Error on retry of auto-response email:', retryEmailResult.error);
        } else {
          console.log('Auto-response email sent successfully on retry!');
          userEmailResult.data = retryEmailResult.data;
        }
      } 
      // Handle domain verification errors
      else if (userEmailResult.error && 
          typeof userEmailResult.error === 'object' && 
          'statusCode' in userEmailResult.error && 
          userEmailResult.error.statusCode === 403 &&
          'name' in userEmailResult.error &&
          userEmailResult.error.name === 'validation_error') {
        console.error('Domain verification error: Please ensure the domain singletonsgroup.com is properly verified in Resend and that the from address is using this domain.');
      }
      
      // Still return success since we sent the admin email successfully
    }
    
    return NextResponse.json({ 
      success: true, 
      adminEmail: adminEmailResult.data,
      userEmail: userEmailResult.data || userEmailResult.error
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
} 