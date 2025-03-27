// Test script to verify domain verification configuration
require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Log the API key length for verification (don't log the actual key)
if (process.env.RESEND_API_KEY) {
  console.log(`API Key found with length: ${process.env.RESEND_API_KEY.length}`);
} else {
  console.error('No API key found in environment variables. Make sure .env.local has RESEND_API_KEY set.');
  process.exit(1);
}

async function testVerifiedDomain() {
  console.log('Starting domain verification test...');
  
  try {
    // First, test with the verified domain
    console.log('Testing with verified domain (should work):');
    const verifiedDomainTest = await resend.emails.send({
      from: 'info@singletonsgroup.com',
      to: 'blakesingleton@hotmail.com',
      subject: 'Test Email - Verified Domain',
      html: '<p>This is a test email sent from the verified domain.</p>',
    });
    console.log('Result:', verifiedDomainTest);
    
    // Then test with Resend's test domain (should only work when sending to the account owner)
    console.log('\nTesting with Resend test domain (should only work for admin):');
    const resendDomainTest = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'blakesingleton@hotmail.com',
      subject: 'Test Email - Resend Domain',
      html: '<p>This is a test email sent from the Resend test domain.</p>',
    });
    console.log('Result:', resendDomainTest);
    
    // Test case that should fail - sending to another address with Resend test domain
    try {
      console.log('\nTesting failure case (should fail):');
      const shouldFailTest = await resend.emails.send({
        from: 'onboarding@resend.dev',
        // Use a non-existent address to avoid sending actual emails
        to: 'test-nonexistent@example.com',
        subject: 'This Should Fail',
        html: '<p>This email should not be sent due to domain verification restrictions.</p>',
      });
      console.log('Result:', shouldFailTest);
    } catch (error) {
      console.log('Expected failure occurred:', error.message);
    }
    
    console.log('\nTests completed. Check the results above to verify your domain configuration.');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Run the test
testVerifiedDomain(); 