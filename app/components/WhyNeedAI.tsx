'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define the tab content
const WhyNeedAI = () => {
  // Define cards for different aspects of AI benefits
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
      title: 'Cut Through the AI Hype',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      description: 'Tired of buzzwords like "machine learning" and "neural networks"? We speak plain English, not tech jargon. We translate the possibilities of AI into clear business benefits you can actually understand.'
    },
    {
      id: 'integration',
      title: 'Seamless Integration with Your Current Systems',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      description: 'The best AI solutions work with what you already have. We ensure any AI tools integrate smoothly with your existing software, processes, and team—without disrupting your daily operations.'
    }
  ];

  // Addresses common questions or misconceptions
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
    }
  ];

  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
          Why Your Business Needs AI in Plain English
        </h2>
        <p className="text-xl text-text-sub max-w-3xl mx-auto">
          No technical jargon. No buzzwords. Just practical ways AI can help your business thrive in today's economy.
        </p>
      </div>

      {/* AI Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {aiCards.map((card) => (
          <div 
            key={card.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-md"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg 
                  className="w-6 h-6 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d={card.icon} 
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-main mb-2">{card.title}</h3>
                <p className="text-text-sub">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The AI Landscape Explanation */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16 border border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-text-main mb-4">The Problem with Today's AI Landscape</h3>
          <p className="text-text-sub mb-6">
            Ai is new, and complicated. There are also over 7,000 AI companies today, each claiming their solution is the best. The truth? Most business owners waste money on the wrong AI tools because:
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-text-sub"><strong className="text-text-main">Too many options</strong> – With thousands of AI tools available, finding the right one is like finding a needle in a haystack</span>
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
              <span className="text-text-sub"><strong className="text-text-main">Technical complexity</strong> – Many AI tools require technical expertise to set up and integrate properly</span>
            </li>
          </ul>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="text-lg font-bold text-text-main mb-3">Our Approach: The "Salesforce for AI"</h4>
            <p className="text-text-sub mb-4">
              We're not tied to any specific AI vendor. Instead, we act as your trusted advisor to navigate the complex AI landscape. We:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-text-sub"><strong className="text-text-main">Find the right tools</strong> for your specific business from our network of 1000+ AI solutions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-text-sub"><strong className="text-text-main">Implement everything</strong> so you don't have to worry about the technical details</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-text-sub"><strong className="text-text-main">Provide ongoing support</strong> to ensure you get real, measurable results</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-text-main mb-6 text-center">Common Questions About AI for Your Business</h3>
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

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-text-main mb-4">Ready to See What AI Can Do for Your Business?</h3>
        <p className="text-text-sub mb-8 max-w-2xl mx-auto">
          No technical knowledge required. No obligation. Just a simple conversation about your business challenges and how AI might help.
        </p>
        <Link 
          href="https://calendly.com/blake-singletonsgroup/30min" 
          target="_blank"
          className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
        >
          Schedule a Free AI Consultation
        </Link>
      </div>
    </div>
  );
};

export default WhyNeedAI; 