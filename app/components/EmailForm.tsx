'use client';

import { useState } from 'react';

type EmailFormProps = {
  formType?: string;
  pageLocation?: string;
};

const EmailForm = ({ 
  formType = 'Newsletter Subscription', 
  pageLocation = 'Home Page' 
}: EmailFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send the form data to our API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subject: 'New Website Inquiry',
          message: 'A user has submitted the contact form on singletonsgroup.com and requested more information.',
          formType: formType,
          page: pageLocation
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      // Success! Form was submitted and email was sent
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-sm border border-lightGray">
      <h3 className="text-xl font-bold text-black mb-3">Want to Learn More? Get Started Here.</h3>
      
      {isSubmitted ? (
        <div className="bg-primary bg-opacity-10 p-5 rounded-lg">
          <div className="flex items-center mb-2">
            <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-black font-medium">Thank you!</p>
          </div>
          <p className="text-black">We'll send more information to your email shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <input
                type="email"
                className={`w-full p-4 border-2 ${error ? 'border-red-500' : 'border-primary'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-black`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && (
              <div className="mt-2 flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-1 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}
          </div>
          
          <button
            type="submit"
            className="btn btn-primary w-full py-4 text-lg font-medium transition-transform hover:translate-y-[-2px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit'
            )}
          </button>
          
          <p className="text-xs text-darkGray mt-2">
            By submitting, you agree to our{' '}
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            {' '}and{' '}
            <a href="/terms-of-service" className="text-primary hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );
};

export default EmailForm; 