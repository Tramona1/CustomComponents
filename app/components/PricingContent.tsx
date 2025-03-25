'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define types for the pricing plan data
interface PricingPlan {
  id: string;
  popular: boolean;
  name: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  example: string;
}

// Define types for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

// Quote form state interface
interface QuoteFormState {
  name: string;
  email: string;
  company: string;
  requirements: string;
  budget: string;
  submitted: boolean;
}

// Pricing plans data
const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    popular: false,
    name: 'Starter AI Package',
    description: 'Perfect for small businesses looking to start with a single AI solution.',
    features: [
      'Initial AI readiness assessment',
      'Implementation of 1 AI solution (e.g., a chatbot)',
      '4 weeks of implementation support',
      'Basic ROI tracking',
      'Email support',
    ],
    ctaText: 'Request a Custom Quote',
    ctaLink: '#quote-form',
    example: 'A small insurance brokerage implemented a chatbot, saving 10 hours per week on customer support.'
  },
  {
    id: 'business',
    popular: true,
    name: 'Business Accelerator',
    description: 'Ideal for growing SMBs needing AI across multiple functions.',
    features: [
      'Comprehensive AI opportunity analysis',
      'Implementation of up to 3 AI solutions (e.g., fraud detection, lead scoring)',
      '8 weeks of implementation support',
      'Detailed ROI tracking dashboard',
      'Employee training sessions',
      'Priority support with 24-hour response',
    ],
    ctaText: 'Request a Custom Quote',
    ctaLink: '#quote-form',
    example: 'A mid-sized brokerage reduced fraud losses by 20% with AI solutions.'
  },
  {
    id: 'enterprise',
    popular: false,
    name: 'Enterprise Suite',
    description: 'A fully tailored AI transformation for larger organizations.',
    features: [
      'Enterprise-wide AI strategy',
      'Unlimited AI solutions',
      'Dedicated implementation team',
      'Custom integrations with existing systems',
      'Advanced security implementations',
      'Ongoing quarterly strategy reviews',
      '24/7 priority support',
    ],
    ctaText: 'Request a Custom Quote',
    ctaLink: '#quote-form',
    example: 'A large insurance provider improved efficiency by 30% with custom AI solutions.'
  }
];

// FAQ data
const faqItems: FAQItem[] = [
  {
    question: 'When am I charged?',
    answer: "Nothing is charged until after your free consultation and we agree on a plan together. We'll provide a detailed quote first, and only proceed once you're completely comfortable with the solution and pricing."
  },
  {
    question: 'Why does pricing vary?',
    answer: "Each AI solution has different costs from different providers. We negotiate directly with over 1000 AI providers to get you the best rates based on your specific needs. This means pricing depends entirely on which tools best solve your business challenges."
  },
  {
    question: 'What factors affect my quote?',
    answer: "Your quote will be customized based on: 1) Which AI solutions you need, 2) Volume of usage expected, 3) Implementation complexity, 4) Integration requirements with your existing systems, and 5) Level of ongoing support needed."
  },
  {
    question: 'Can I add more solutions later?',
    answer: "Yes, you can scale up anytime—just request another quote to discuss your evolving needs. There's no commitment required."
  },
  {
    question: 'Do you offer solutions for my industry?',
    answer: "Yes, we specialize in industries like insurance, retail, healthcare, financial services, and more with tailored solutions addressing your unique challenges."
  },
  {
    question: 'Do I need technical staff?',
    answer: "No, we handle everything—selection, setup, and training—so you don't need tech expertise. Our approach is designed specifically for businesses without technical teams."
  }
];

export default function PricingContent() {
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set([0]));
  const [quoteForm, setQuoteForm] = useState<QuoteFormState>({
    name: '',
    email: '',
    company: '',
    requirements: '',
    budget: '',
    submitted: false
  });

  const toggleFaq = (index: number) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedFaqs(newExpanded);
  };

  const handleQuoteFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuoteFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend or email service
    console.log('Quote requested:', quoteForm);
    setQuoteForm(prev => ({
      ...prev,
      submitted: true
    }));
    // In production, you would add API call to submit the form data
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Quote Form */}
      <section className="relative overflow-hidden bg-white py-24">
        {/* Light Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="pricing-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20h40M20 0v40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-pattern)" />
          </svg>
        </div>

        {/* Subtle accent orbs */}
        <div className="absolute top-20 left-[20%] w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[20%] w-40 h-40 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="md:flex md:items-center md:gap-12">
            {/* Left side - Heading and description */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="transition-all duration-500">
                <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
                  Custom <span className="text-primary">AI Pricing</span> Tailored to Your Business
                </h1>
                <p className="text-xl text-text-sub mb-4">
                  <span className="font-semibold text-primary">No Charges Until We Agree</span>
                </p>
                <p className="text-lg text-text-sub mb-8">
                  We negotiate directly with over 1,000 AI providers to get you the best possible pricing based on your specific needs. Each solution has variable pricing models, so we create a custom quote after understanding your requirements.
                </p>
                <div className="hidden md:block">
                  <p className="flex items-center text-text-sub mb-2">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vendor-neutral AI provider selection
                  </p>
                  <p className="flex items-center text-text-sub mb-2">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Transparent pricing structure
                  </p>
                  <p className="flex items-center text-text-sub">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No charges until we agree on a plan
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Quote Form */}
            <div className="md:w-1/2" id="quote-form">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                {quoteForm.submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-main mb-2">Quote Request Received!</h3>
                    <p className="text-text-sub mb-6">
                      We'll analyze your requirements and get back to you within 1 business day with a custom quote.
                    </p>
                    <button
                      onClick={() => setQuoteForm(prev => ({ ...prev, submitted: false }))}
                      className="text-primary font-medium hover:underline"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-text-main mb-4">Get Your Custom AI Quote</h3>
                    <p className="text-text-sub mb-6">
                      Tell us about your business needs, and we'll create a personalized quote with the right AI solutions and best negotiated pricing.
                    </p>
                    
                    <form onSubmit={handleQuoteFormSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-text-main mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={quoteForm.name}
                            onChange={handleQuoteFormChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                            placeholder="John Smith"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={quoteForm.email}
                            onChange={handleQuoteFormChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                            placeholder="john@company.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-text-main mb-1">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={quoteForm.company}
                            onChange={handleQuoteFormChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                            placeholder="Acme Inc."
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="requirements" className="block text-sm font-medium text-text-main mb-1">
                            What AI solutions are you looking for? *
                          </label>
                          <textarea
                            id="requirements"
                            name="requirements"
                            required
                            value={quoteForm.requirements}
                            onChange={handleQuoteFormChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                            placeholder="Describe your business challenges and what you're hoping AI can help with..."
                          ></textarea>
                        </div>
                        
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-text-main mb-1">
                            Budget Range (if known)
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={quoteForm.budget}
                            onChange={handleQuoteFormChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          >
                            <option value="">Select a range</option>
                            <option value="Under $2,000">Under $2,000</option>
                            <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                            <option value="$10,000+">$10,000+</option>
                            <option value="Not sure">Not sure (we can advise)</option>
                          </select>
                        </div>
                        
                        <button
                          type="submit"
                          className="w-full bg-primary text-white py-3.5 px-8 rounded-full font-medium hover:bg-primary-dark transition-colors"
                        >
                          Request Your Custom Quote
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-100"></div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-main mb-6">Why Choose SingletonsGroup for AI Implementation?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-xl p-8 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">No Upfront Costs</h3>
              <p className="text-text-sub">
                We don't charge anything until after your free consultation and we've agreed on a plan together that works for your business.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-xl p-8 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Customized for You</h3>
              <p className="text-text-sub">
                With over 1000 AI providers using varied pricing models, we find and implement the best solutions for your business needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-xl p-8 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Negotiated Terms</h3>
              <p className="text-text-sub">
                We secure favorable pricing and terms from AI providers on your behalf, ensuring you get the best value for your investment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-xl p-8 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Guaranteed Results</h3>
              <p className="text-text-sub">
                We track ROI to ensure your AI investment delivers measurable impact, from time savings to revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
              Solution <span className="text-primary">Options</span> for Every Business
            </h2>
            <p className="text-lg text-text-sub max-w-3xl mx-auto mb-4">
              <span className="font-semibold">Pricing Available Upon Request – Customized to Your Needs</span>
            </p>
            <p className="text-lg text-text-sub max-w-3xl mx-auto">
              We offer various solution packages to fit different business sizes and needs. Since each AI tool has its own pricing model, we create custom quotes based on which solutions you need and negotiate the best rates directly with providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl ${
                  plan.popular ? 'md:scale-105 md:-translate-y-2 z-10 border-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 font-medium text-sm">
                    Most Popular Choice
                  </div>
                )}
                <div className="p-8 flex flex-col" style={{ height: '750px' }}>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-main mb-2">{plan.name}</h3>
                    <div className="border-b border-gray-100 pb-4 mb-4">
                      <p className="text-md text-text-sub font-medium">Custom pricing based on your specific requirements and selected AI solutions</p>
                    </div>
                    <p className="text-text-sub mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-sub">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-primary mb-2">EXAMPLE:</p>
                      <div className="text-sm text-text-sub">
                        {plan.example}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href={plan.ctaLink}
                      className={`w-full block text-center py-3.5 px-6 rounded-full font-medium transition-all ${
                        plan.id === 'enterprise'
                          ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                          : 'bg-primary text-white hover:bg-primary-dark'
                      }`}
                    >
                      {plan.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solution */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-blue-100 rounded-2xl overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-text-main mb-4">Why We Can't List Exact Prices</h2>
                <h3 className="text-xl font-semibold text-text-main mb-2">AI Pricing Is Complex and Variable</h3>
                <p className="text-lg font-medium text-primary mb-4">Different for Every Business</p>
                <p className="text-text-sub mb-6">
                  Each AI provider uses a different pricing model: per API call, per user, per task, subscription-based, or usage-based. Your specific needs and volume will determine the actual costs, which is why we create custom quotes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-sub">Some AI tools charge per API call (from $0.01 to $0.50 per call)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-sub">Others use monthly subscriptions ($50-$1000/month)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-sub">We negotiate the best rates and provide a transparent quote</span>
                  </li>
                </ul>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium bg-primary text-white hover:bg-primary-dark transition-all"
                >
                  Get Your Custom Quote
                </a>
              </div>
              <div className="md:w-1/2 p-8 hidden md:flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 rounded-full bg-primary opacity-5 blur-3xl"></div>
                  <div className="relative z-10">
                    <svg className="w-full h-full text-primary opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" fill="currentColor"/>
                      <path d="M100 40c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60-26.9-60-60-60zm0 100c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="currentColor"/>
                      <circle cx="100" cy="100" r="20" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-main mb-6">
              How Our <span className="text-primary">Pricing</span> Works
            </h2>
            <p className="text-xl text-text-sub max-w-3xl mx-auto">
              <span className="font-semibold">Transparent Process – Finalized After Negotiation</span>
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-text-sub mb-6">
              Each AI solution has a unique pricing model from its provider. We evaluate your needs, negotiate with providers, and create a transparent quote that combines all costs. Nothing is charged until you approve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-bold text-text-main mb-2">AI Tool Selection</h3>
                <p className="text-sm text-text-sub">
                  We identify which AI solutions will best address your business challenges
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-bold text-text-main mb-2">Provider Negotiation</h3>
                <p className="text-sm text-text-sub">
                  We leverage our partnerships to negotiate the best possible rates for your selected tools
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-bold text-text-main mb-2">Custom Quote Creation</h3>
                <p className="text-sm text-text-sub">
                  You receive a transparent quote with all costs clearly detailed before making any commitment
                </p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <svg className="w-10 h-10 text-primary mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-text-sub font-medium">
                We ensure transparency — no charges until we agree, just clear value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Negotiate */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-main mb-6">
              How We Negotiate with AI Providers for You
            </h2>
            <p className="text-xl text-text-sub max-w-3xl mx-auto">
              <span className="font-semibold">Getting You the Best Possible Rates – Customized to Your Needs</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-xl p-8 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Customized Tool Selection</h3>
              <p className="text-text-sub">
                We identify the best-fit AI tools from our network of 1000+ providers, looking for the perfect balance of functionality and value.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-xl p-8 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Direct Price Negotiation</h3>
              <p className="text-text-sub">
                We leverage our relationships with AI providers to negotiate preferential pricing that would be unavailable if you approached them directly.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-xl p-8 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Transparent Quote Creation</h3>
              <p className="text-text-sub">
                We present all costs clearly, showing exactly what you're paying for each AI solution and what value you'll receive.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-lg font-medium text-primary mb-6">
              Every AI provider has different pricing models. We navigate this complexity for you to create a clear, value-driven proposal.
            </p>
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium bg-primary text-white hover:bg-primary-dark transition-all"
            >
              Request Your Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-main mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-text-sub">
              Everything You Need to Know About Our Custom AI Pricing
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all shadow-sm"
              >
                <button 
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-text-main">{item.question}</span>
                  <svg 
                    className={`w-5 h-5 text-primary transition-transform ${expandedFaqs.has(index) ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaqs.has(index) && (
                  <div className="p-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-text-sub">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="relative px-8 py-12 md:p-12 text-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid-pattern-cta" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern-cta)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-xl text-white text-opacity-90 mb-10 max-w-3xl mx-auto">
                  Get Your Custom Quote Today – We'll Find the Perfect AI Solutions and Negotiate the Best Pricing on Your Behalf
                </p>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-full text-primary bg-white hover:bg-opacity-90 md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Request Your Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 