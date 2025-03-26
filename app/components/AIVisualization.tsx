'use client';

import React, { useState } from 'react';

interface AIVisualizationProps {
  width?: string;
  height?: string;
}

export default function AIVisualization({ 
  width = "100%",
  height = "auto"
}: AIVisualizationProps) {
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      // Send the form data to our API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subject: 'AI Strategy Request',
          message: `Industry: ${industry}\n\nUser is interested in getting an AI strategy for their business.`,
          formType: 'AI Strategy Request',
          page: 'AI Visualization Widget'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      // Success! Form was submitted and email was sent
      setSubmitted(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
        setIndustry("");
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-[#0A1D37] via-[#1E3A8A] to-[#3B82F6] rounded-xl shadow-xl overflow-hidden">
        <div className="px-6 py-12 md:px-12 md:py-16 relative">
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{ 
              backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Interested in leveraging AI in your business?
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Schedule a call with one of our professionals for an analysis of your needs
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              {submitted ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-400/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
                  <p className="text-blue-100">
                    We'll contact you within 24 hours with AI recommendations tailored to your industry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  {error && (
                    <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded text-white text-sm">
                      {error}
                    </div>
                  )}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Your email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="industry" className="block text-white text-sm font-medium mb-2">
                      Your industry
                    </label>
                    <select
                      id="industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="" disabled>Select your industry</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance & Banking</option>
                      <option value="Retail">Retail & E-commerce</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="RealEstate">Real Estate</option>
                      <option value="Legal">Legal Services</option>
                      <option value="Marketing">Marketing & Advertising</option>
                      <option value="Education">Education</option>
                      <option value="Technology">Technology</option>
                      <option value="Hospitality">Hospitality & Tourism</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-blue-50 text-[#1E3A8A] font-bold py-3 px-4 rounded-md transition-colors duration-200 shadow-lg"
                  >
                    I am interested in learning more
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 