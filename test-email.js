// Test script to verify rate limiting solution
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

// Simple delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function testRateLimiting() {
  console.log('Starting email rate limit test...');
  
  try {
    // First email
    console.log('Sending first email...');
    const firstEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'blakesingleton@hotmail.com',
      subject: 'Test Email 1',
      html: '<p>This is test email 1</p>',
    });
    console.log('First email result:', firstEmail);
    
    // Second email with no delay (should hit rate limit if limit is 1 per second)
    console.log('Sending second email immediately...');
    const secondEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'blakesingleton@hotmail.com',
      subject: 'Test Email 2',
      html: '<p>This is test email 2</p>',
    });
    console.log('Second email result:', secondEmail);
    
    // Wait for 2 seconds
    console.log('Waiting for 2 seconds...');
    await delay(2000);
    
    // Third email after delay (should work)
    console.log('Sending third email after delay...');
    const thirdEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'blakesingleton@hotmail.com',
      subject: 'Test Email 3',
      html: '<p>This is test email 3</p>',
    });
    console.log('Third email result:', thirdEmail);
    
    console.log('Test completed.');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Run the test
testRateLimiting(); 