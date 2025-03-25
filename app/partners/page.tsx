'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Partners() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    aiSolution: '',
    message: '',
    submitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server or a third-party service
    console.log('Partner form submitted:', formData);
    
    // Simulate successful submission
    setFormData(prevState => ({
      ...prevState,
      submitted: true
    }));
    
    // In a real app, you'd reset the form after server confirmation
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        companyName: '',
        aiSolution: '',
        message: '',
        submitted: false
      });
    }, 5000);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6 transition-all duration-700">
            Partner With Us to Grow Your AI Business
          </h1>
          <p className="text-xl text-text-sub max-w-3xl mx-auto mb-12">
            Join our network of trusted AI solution providers and connect with businesses who need your technology.
          </p>
        </div>
      </section>
      
      {/* Form Section - Moved to the top */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-text-main mb-6">
              Become a Partner
            </h2>
            
            {formData.submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-2">Thank You!</h3>
                <p className="text-text-sub">
                  We've received your information and will contact you within 2 business days to discuss partnership opportunities.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-main mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    placeholder="john@aicompany.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-text-main mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    placeholder="AI Solutions Inc."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="aiSolution" className="block text-sm font-medium text-text-main mb-1">
                    Type of AI Solution
                  </label>
                  <select
                    id="aiSolution"
                    name="aiSolution"
                    value={formData.aiSolution}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="nlp">Natural Language Processing</option>
                    <option value="computer-vision">Computer Vision</option>
                    <option value="predictive-analytics">Predictive Analytics</option>
                    <option value="chatbot">Chatbot / Conversational AI</option>
                    <option value="rpa">Robotic Process Automation</option>
                    <option value="ml-tools">Machine Learning Tools</option>
                    <option value="industry-specific">Industry-Specific AI</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-main mb-1">
                    Tell us about your AI solution
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    placeholder="Please describe your AI solution, target market, and what makes it unique..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Submit Partnership Inquiry
                  </button>
                </div>
                
                <p className="text-xs text-text-sub text-center mt-4">
                  By submitting this form, you agree to our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> and <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* Why Partner With Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-main mb-8 text-center">
              Why Partner With SingletonsGroup?
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main mb-2">Access to Qualified Clients</h3>
                  <p className="text-text-sub">
                    We match your AI solution with businesses that have specific needs your technology can solve. No more wasted marketing spend on unqualified leads.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main mb-2">Simplified Client Acquisition</h3>
                  <p className="text-text-sub">
                    We handle client education, needs assessment, and integration planning. You focus on what you do best—developing and delivering your AI technology.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main mb-2">Increased Implementation Success</h3>
                  <p className="text-text-sub">
                    Our implementation expertise means your solution gets properly integrated, reducing churn and increasing client satisfaction and retention.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main mb-2">Revenue Growth Opportunities</h3>
                  <p className="text-text-sub">
                    With our transparent pricing model, you'll know exactly what to expect. Many of our partners see 25-40% growth in their customer base within the first year.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold text-text-main mb-3">Our Partner Network Includes:</h3>
              <p className="text-text-sub mb-4">
                AI solutions across all major categories, from automation and customer service to data analysis, content generation, and specialized industry tools.
              </p>
              <p className="text-text-sub">
                <span className="font-semibold">Partner requirements:</span> Production-ready AI solutions with demonstrated success cases and appropriate data privacy measures.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership Process - Moved below the "Why Partner With Us" section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main mb-6">
              The Partnership Process
            </h2>
            <p className="text-lg text-text-sub max-w-3xl mx-auto">
              Becoming a SingletonsGroup partner is straightforward. Here's what to expect:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Initial Contact</h3>
              <p className="text-text-sub">
                Submit your information through our partnership form. We'll review and reach out within 2 business days.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Solution Review</h3>
              <p className="text-text-sub">
                We'll evaluate your AI solution, understanding its capabilities, target market, and unique selling points.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Partnership Agreement</h3>
              <p className="text-text-sub">
                We'll create a tailored partnership agreement that outlines referral processes, compensation, and expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Active Collaboration</h3>
              <p className="text-text-sub">
                Your solution joins our network, and we begin connecting you with businesses that match your ideal client profile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 