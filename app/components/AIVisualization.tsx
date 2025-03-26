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
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [industry, setIndustry] = useState("");
  const [painPoint, setPainPoint] = useState("");
  const [otherPainPoint, setOtherPainPoint] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate step 1 fields
    if (step === 1 && (!email || !businessName)) {
      setError("Please fill in all required fields to continue.");
      return;
    }
    
    setError("");
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setError("");
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !businessName || !industry || !employeeCount) {
      setError("Please fill in all required fields.");
      return;
    }
    
    // Determine final pain point value (use custom text if "Other" is selected)
    const finalPainPoint = painPoint === "Other" ? otherPainPoint : painPoint;
    
    try {
      // Send the form data to our API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          businessName,
          phoneNumber,
          employeeCount,
          industry,
          painPoint: finalPainPoint,
          subject: 'AI Strategy Request',
          message: `Business Name: ${businessName}\nIndustry: ${industry}\nEmployee Count: ${employeeCount}\nPhone: ${phoneNumber || 'Not provided'}\nPain Point/Use Case: ${finalPainPoint || 'Not specified'}\n\nUser is interested in getting an AI strategy for their business.`,
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
        setBusinessName("");
        setPhoneNumber("");
        setEmployeeCount("");
        setIndustry("");
        setPainPoint("");
        setOtherPainPoint("");
        setStep(1);
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError("Something went wrong. Please try again.");
    }
  };

  // Render progress indicators
  const renderStepIndicators = () => {
    return (
      <div className="flex justify-center mb-4">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
              i + 1 === step ? 'bg-white text-primary' : 
              i + 1 < step ? 'bg-green-400 text-white' : 'bg-white/30 text-white'
            }`}>
              {i + 1 < step ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            {i < totalSteps - 1 && (
              <div className={`w-10 h-1 ${i + 1 < step ? 'bg-green-400' : 'bg-white/30'}`}></div>
            )}
          </div>
        ))}
      </div>
    );
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
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  {renderStepIndicators()}
                  
                  {error && (
                    <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded text-white text-sm">
                      {error}
                    </div>
                  )}
                  
                  {step === 1 && (
                    <form onSubmit={handleNext}>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                          Your email address <span className="text-red-300">*</span>
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
                      
                      <div className="mb-4">
                        <label htmlFor="businessName" className="block text-white text-sm font-medium mb-2">
                          Business name <span className="text-red-300">*</span>
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Your company name"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-white text-sm font-medium mb-2">
                          Phone number <span className="text-blue-200/60">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-white hover:bg-blue-50 text-[#1E3A8A] font-bold py-3 px-4 rounded-md transition-colors duration-200 shadow-lg mt-4"
                      >
                        Continue
                      </button>
                    </form>
                  )}
                  
                  {step === 2 && (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="employeeCount" className="block text-white text-sm font-medium mb-2">
                          Number of employees <span className="text-red-300">*</span>
                        </label>
                        <select
                          id="employeeCount"
                          value={employeeCount}
                          onChange={(e) => setEmployeeCount(e.target.value)}
                          className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                          required
                        >
                          <option value="" disabled>Select employee count</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501+">501+ employees</option>
                        </select>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="industry" className="block text-white text-sm font-medium mb-2">
                          Your industry <span className="text-red-300">*</span>
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
                      
                      <div className="mb-4">
                        <label htmlFor="painPoint" className="block text-white text-sm font-medium mb-2">
                          What's your biggest business pain point? <span className="text-blue-200/60">(optional)</span>
                        </label>
                        <select
                          id="painPoint"
                          value={painPoint}
                          onChange={(e) => setPainPoint(e.target.value)}
                          className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                          <option value="">Select a pain point</option>
                          <option value="Time Management">Time Management</option>
                          <option value="Customer Support">Customer Support</option>
                          <option value="Lead Generation">Lead Generation</option>
                          <option value="Content Creation">Content Creation</option>
                          <option value="Data Analysis">Data Analysis</option>
                          <option value="Process Automation">Process Automation</option>
                          <option value="Sales Optimization">Sales Optimization</option>
                          <option value="Administrative Tasks">Administrative Tasks</option>
                          <option value="Other">Other (please specify)</option>
                        </select>
                      </div>
                      
                      {painPoint === "Other" && (
                        <div className="mb-4">
                          <label htmlFor="otherPainPoint" className="block text-white text-sm font-medium mb-2">
                            Please describe your pain point
                          </label>
                          <input
                            type="text"
                            id="otherPainPoint"
                            value={otherPainPoint}
                            onChange={(e) => setOtherPainPoint(e.target.value)}
                            className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Describe your specific use case or pain point"
                          />
                        </div>
                      )}
                      
                      <div className="flex space-x-4 mt-4">
                        <button
                          type="button"
                          onClick={handlePrevious}
                          className="w-1/2 bg-transparent border border-white/50 hover:bg-white/10 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="w-1/2 bg-white hover:bg-blue-50 text-[#1E3A8A] font-bold py-3 px-4 rounded-md transition-colors duration-200 shadow-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 