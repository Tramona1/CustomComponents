'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const plans = [
  {
    name: 'Starter AI Package',
    price: 'From $499/mo',
    description: 'Perfect for businesses just beginning their AI journey.',
    features: [
      'Access to 25+ AI tools',
      'Initial business assessment',
      'Custom implementation of 1-2 AI solutions',
      'Basic integration with existing systems',
      'Email & chat support',
      'Monthly check-ins'
    ],
    highlighted: false,
    badge: '',
    ctaText: 'Get Started'
  },
  {
    name: 'Business Accelerator',
    price: 'From $999/mo',
    description: 'Comprehensive AI solutions to transform key business operations.',
    features: [
      'Access to 75+ AI tools',
      'Comprehensive business workflow analysis',
      'Custom implementation of 3-5 AI solutions',
      'Full integration with existing systems',
      'Priority support with 24-hour response',
      'Bi-weekly optimization calls',
      'AI usage analytics dashboard',
      'Staff training workshops'
    ],
    highlighted: true,
    badge: 'Most Popular',
    ctaText: 'Accelerate Your Business'
  },
  {
    name: 'Enterprise Suite',
    price: 'Custom Pricing',
    description: 'Tailored AI strategy and implementation for larger organizations.',
    features: [
      'Access to 100+ AI tools',
      'Enterprise-wide AI strategy',
      'Unlimited AI implementations',
      'Advanced custom integrations',
      'Dedicated account manager',
      'Weekly strategy sessions',
      'Advanced analytics & reporting',
      'Unlimited training sessions',
      'Custom AI solution development'
    ],
    highlighted: false,
    badge: '',
    ctaText: 'Contact Sales'
  }
];

const faqs = [
  {
    question: "How does your pricing model work?",
    answer: "Our pricing is based on the scope of AI implementation and ongoing support your business needs. Each plan includes a bundle of services, from initial assessment to implementation, integration, and ongoing optimization. The monthly fee covers your access to the AI tools and our continuous support in managing them."
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! As your business grows or your AI needs evolve, you can seamlessly upgrade or adjust your plan. We'll work with you to ensure a smooth transition and that you're always getting the right level of service."
  },
  {
    question: "What if I only need one specific AI solution?",
    answer: "We offer custom packages for businesses with specific needs. During your free consultation, we'll discuss your requirements and can create a tailored package that focuses only on the solutions you need."
  },
  {
    question: "Is there a setup fee or contract?",
    answer: "There's no additional setup fee beyond your monthly plan cost. Our contracts are flexible with monthly and annual options. Annual plans come with a discount, while monthly plans offer maximum flexibility."
  },
  {
    question: "What kind of support is included?",
    answer: "All plans include technical support for your AI tools. The difference is in the response time and access methods. Business Accelerator and Enterprise plans include more direct, priority support channels and faster response times."
  },
  {
    question: "Do I need technical staff to use your services?",
    answer: "No, that's the beauty of our approach. We handle all the technical aspects of implementing and managing AI tools for you. Your team can focus on using the solutions while we handle the complex technical work behind the scenes."
  }
];

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to middle plan
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-black to-primary/20 py-32">
        {/* Particle Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="40" cy="0" r="1" fill="white" />
                  <circle cx="0" cy="40" r="1" fill="white" />
                  <circle cx="0" cy="0" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Flexible <span className="text-primary">Pricing</span> for Every Business
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Simple, transparent pricing designed to scale with your AI needs.
                No hidden fees, just real business value.
              </p>
              <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full p-1">
                <Link 
                  href="https://calendly.com/yourcompany/consultation" 
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary/90 transition-all"
                >
                  Book a Free Consultation
                </Link>
                <span className="mx-4 text-white/80">or</span>
                <button 
                  onClick={() => {
                    const element = document.getElementById('pricing-plans');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-all"
                >
                  See Pricing
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mb-6">
              <div className="bg-white p-2 rounded-full">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              What's Included in <span className="text-primary">Every Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pricing includes everything you need to successfully implement AI in your business.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vendor-Neutral Advice</h3>
                <p className="text-gray-600">
                  We recommend the right tools for your business, not just the ones with the best commission rates.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full Implementation</h3>
                <p className="text-gray-600">
                  We handle the technical setup, integration, and configuration to get you up and running quickly.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">User Training</h3>
                <p className="text-gray-600">
                  We'll train your team on how to use the tools and get the most out of your AI implementation.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  Regular check-ins and support to optimize your AI solutions as your business evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing-plans" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Choose Your <span className="text-primary">AI Partnership</span> Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the level of AI support that fits your business needs and budget.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden transform transition-all duration-300 ${
                    selectedPlan === index 
                      ? 'scale-105 shadow-xl z-10 relative' 
                      : 'shadow-lg hover:shadow-xl'
                  } ${
                    plan.highlighted 
                      ? 'bg-gradient-to-b from-white to-primary/5 border-primary'
                      : 'bg-white'
                  }`}
                  onMouseEnter={() => setSelectedPlan(index)}
                >
                  {plan.badge && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    </div>
                    <p className="text-gray-600 mb-8">{plan.description}</p>
                    
                    <div className="space-y-4 mb-10">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="ml-3 text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href="https://calendly.com/yourcompany/consultation"
                      target="_blank"
                      className={`block w-full text-center py-3 px-4 rounded-lg transition-colors ${
                        plan.highlighted
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'border border-primary text-primary hover:bg-primary/5'
                      }`}
                    >
                      {plan.ctaText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Content */}
              <div className="p-12 md:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  No two businesses are alike. If our standard plans don't fit your unique needs, we'll create a custom package tailored specifically for you.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">Tailored solution package</span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">Flexible payment options</span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">Customized AI tool selection</span>
                  </div>
                </div>
                
                <Link
                  href="https://calendly.com/yourcompany/consultation"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-100 transition-colors"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
              
              {/* Right Visual */}
              <div className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-primary/10">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="custom-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="white" fillOpacity="0.3" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#custom-dots)" />
                  </svg>
                </div>
                
                {/* Custom Solution Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 relative">
                    <div className="absolute inset-0 border-4 border-dashed border-white/20 rounded-full"></div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-primary font-bold">Your Custom</div>
                          <div className="text-primary text-xs">Solution</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Orbiting Items */}
                    <div className="absolute" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}>
                      <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xs text-white">AI Tools</div>
                    </div>
                    
                    <div className="absolute" style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}>
                      <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xs text-white">Support</div>
                    </div>
                    
                    <div className="absolute" style={{ left: '10%', top: '50%', transform: 'translateY(-50%)' }}>
                      <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xs text-white">Budget</div>
                    </div>
                    
                    <div className="absolute" style={{ right: '10%', top: '50%', transform: 'translateY(-50%)' }}>
                      <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xs text-white">Needs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and services.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden shadow-md transition-all ${
                    expandedFaq === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <button
                    className="w-full p-6 text-left flex justify-between items-center"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-primary transition-transform ${
                        expandedFaq === index ? 'transform rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="relative p-12 text-center">
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
                  Schedule a free consultation today to discuss your business needs and find the right plan for you.
                </p>
                <Link
                  href="https://calendly.com/yourcompany/consultation"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-primary bg-white hover:bg-opacity-90 md:text-lg transition-all transform hover:scale-105"
                >
                  Book Your Free Consultation
                </Link>
                <p className="mt-6 text-white text-opacity-80">
                  No credit card required. No obligation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 