'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// AI Benefits cards from WhyNeedAI
const aiCards = [
  {
    id: 'efficiency',
    title: 'Simplify Your Day-to-Day Operations',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    description: 'Every business—no matter how traditional—can save time and money with the right AI tools. Think of AI as a reliable assistant that handles your repetitive tasks while you focus on growing your business.'
  },
  {
    id: 'righttool',
    title: 'The Right Tool for the Right Job',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    description: 'Not all AI tools are created equal. What works for a tech company might not work for your business. We match solutions to your specific industry, business size, and challenges—no technical expertise required.'
  },
  {
    id: 'nohype',
    title: 'True Partnership, Not Sales Pressure',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    description: 'We\'re consultants first, not salespeople. Our focus is on understanding your business challenges and finding the right solutions—not pushing products you don\'t need. We succeed only when your business sees real results.'
  },
  {
    id: 'integration',
    title: 'Seamless Integration with Your Current Systems',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    description: 'The best AI solutions work with what you already have. We ensure any AI tools integrate smoothly with your existing software, processes, and team—without disrupting your daily operations.'
  }
];

// Our advantages from WhyUs
const advantages = [
  {
    id: 'neutral',
    title: 'Vendor-Neutral Expertise & True Partnership',
    description: 'We prioritize your business needs, not selling specific AI tools. We\'re consultants first, not salespeople—our recommendations are based on what works for you, not commission rates. We succeed only when your business sees real results.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    id: 'integration',
    title: 'Seamless Integration with Your Current Systems',
    description: 'The best AI solutions work with what you already have. We handle the technical complexity so you don\'t have to. Our team ensures all your AI tools integrate smoothly with your existing software, processes, and team—without disrupting your daily operations.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 'personalized',
    title: 'Personalized AI Strategy & The Right Tools',
    description: 'Every business is unique. We match solutions to your specific industry, business size, and challenges—no technical expertise required. We build custom AI solutions that address your specific needs, not one-size-fits-all packages.',
    icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
  },
  {
    id: 'efficiency',
    title: 'Simplify Your Day-to-Day Operations',
    description: 'Every business—no matter how traditional—can save time and money with the right AI tools. Think of AI as a reliable assistant that handles your repetitive tasks while you focus on growing your business.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    id: 'ongoing',
    title: 'Ongoing Support & Optimization',
    description: 'AI isn\'t set-it-and-forget-it. As your business evolves and AI capabilities advance, we continuously optimize your solutions for maximum impact.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  }
];

// FAQ items from WhyNeedAI
const faqItems = [
  {
    question: "Isn't AI just for big tech companies?",
    answer: "Not at all. Small businesses often see the biggest benefits from AI because it helps them compete with larger companies by automating tasks that would otherwise require additional staff. If you have repetitive tasks in your business, AI can help—regardless of your industry or size."
  },
  {
    question: "Will AI replace my employees?",
    answer: "AI is designed to assist your team, not replace them. It handles the repetitive, time-consuming tasks so your employees can focus on the human aspects that truly grow your business—like building relationships, creative problem-solving, and providing personalized service."
  },
  {
    question: "Do I need technical knowledge to use AI?",
    answer: "With our approach, absolutely not. We handle all the technical aspects—from selecting the right tools to setting them up and training your team. You don't need to understand how AI works to benefit from it, just like you don't need to know how a car engine works to drive to work."
  },
  {
    question: "Is AI too expensive for my small business?",
    answer: "AI comes in all price ranges. Many tools start at just $20-50 per month—less than the hourly wage of an employee. We help find solutions that match your budget and deliver real ROI. In fact, most of our clients see AI paying for itself within 2-3 months through time savings alone."
  },
  {
    question: "How do you differ from other AI vendors?",
    answer: "Unlike most AI providers who push their own products, we're vendor-neutral. We recommend solutions based solely on what's best for your business. We also handle the entire implementation process and provide ongoing support, making the transition to AI completely seamless."
  },
  {
    question: "How long does it take to implement AI solutions?",
    answer: "This varies by solution, but most of our implementations take 1-3 weeks. We work closely with your team to ensure minimal disruption to your operations. The majority of our clients start seeing positive results within the first month."
  }
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAdvantage, setActiveAdvantage] = useState('neutral');
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const compareSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const toggleQuestion = (index: number) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24">
        {/* Light Pattern Background */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute inset-0">
            <div className="h-full w-full">
              <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
                  </pattern>
                  <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#smallGrid)" />
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Subtle accent orbs */}
        <div className="absolute top-20 left-[20%] w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[20%] w-40 h-40 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6">
                Why Your Business <span className="text-primary">Needs AI</span> and Why Choose Us
              </h1>
              <p className="text-xl text-text-sub mb-8">
                Each business is different, and AI is complex. We are the only company that sits down with you and finds the perfect solution for your business.
              </p>
              <Link 
                href="https://calendly.com/singletonsgroup/consultation" 
                target="_blank" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
              >
                Schedule a Free 30-Minute Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-100"></div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
              We're not just another AI vendor. <span className="text-primary">We're your guide</span> through the complex AI landscape, focused on real business results.
            </h2>
          </div>
          
          {/* The AI Landscape Explanation - MOVED HERE */}
          <div className="bg-white rounded-xl p-8 mb-16 border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-main mb-4">The Problem with Today's AI Landscape</h3>
            <p className="text-text-sub mb-6">
              There are over 7,000 AI companies today, each claiming their solution is perfect for everyone. The truth? Most business owners waste money on the wrong AI tools because:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-text-sub"><strong className="text-text-main">AI is overwhelming and confusing</strong> – Most businesses know they need AI but don't know where to start or which solutions will actually deliver ROI</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-text-sub"><strong className="text-text-main">Too many options</strong> – With thousands of AI tools available across different verticals, finding the right one is like finding a needle in a haystack</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-text-sub"><strong className="text-text-main">Biased advice</strong> – Most AI companies are selling their own products, not what's best for YOUR specific needs</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-text-sub"><strong className="text-text-main">Technical complexity</strong> – Many AI tools require technical expertise to set up and integrate properly, which most small and medium businesses lack</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-6 mb-12">
            <div className="md:col-span-1">
              <div className="mb-8">
                <ul className="space-y-3 text-lg">
                  {advantages.map((advantage) => (
                    <li key={advantage.id}>
                      <button 
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                          activeAdvantage === advantage.id 
                            ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                            : 'bg-gray-100 text-text-main hover:bg-gray-200'
                        }`}
                        onClick={() => setActiveAdvantage(advantage.id)}
                      >
                        <div className="flex items-center">
                          <svg 
                            className={`w-5 h-5 mr-3 ${activeAdvantage === advantage.id ? 'text-white' : 'text-primary'}`}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d={advantage.icon} 
                            />
                          </svg>
                          <span className="font-medium">{advantage.title}</span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg 
                      className="w-6 h-6 text-primary" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={advantages.find(adv => adv.id === activeAdvantage)?.icon || ''} 
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mb-4">
                    {advantages.find(adv => adv.id === activeAdvantage)?.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="mb-4 font-semibold text-text-main">SingletonsGroup Approach:</h4>
                    <ul className="space-y-3 pl-5 list-disc text-text-sub">
                      <li>We're vendor-neutral, recommending solutions based solely on your needs</li>
                      <li>Full implementation support from selection to training</li>
                      <li>Ongoing optimization and expert guidance</li>
                      <li>Seamless integration with your existing tools</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="mb-4 font-semibold text-text-main">Others:</h4>
                    <div className="p-5 bg-gray-100 rounded-lg">
                      <p className="text-sm font-medium text-text-main">Traditional AI Vendors</p>
                      <ul className="space-y-2 mt-3 pl-5 list-disc text-text-sub">
                        <li>Promote their own products regardless of fit</li>
                        <li>Leave implementation to your team</li>
                        <li>One-size-fits-all approach</li>
                        <li>Limited ongoing support</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="mt-6 text-text-sub">
                  {advantages.find(adv => adv.id === activeAdvantage)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-main mb-6">Common Questions About AI for Your Business</h2>
            <p className="text-xl text-text-sub max-w-3xl mx-auto">
              Get answers to the most frequently asked questions about AI implementation and our approach.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all"
                >
                  <button 
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="font-medium text-text-main">{item.question}</span>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedQuestion === index ? 'transform rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedQuestion === index && (
                    <div className="p-5 border-t border-gray-200 bg-gray-50">
                      <p className="text-text-sub">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
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
                  No technical knowledge required. No obligation. Just a simple conversation about your business challenges and how AI might help.
                </p>
                <Link
                  href="https://calendly.com/singletonsgroup/consultation"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-primary bg-white hover:bg-opacity-90 md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Schedule a Free 30-Minute Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 