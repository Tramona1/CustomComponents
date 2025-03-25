'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HowItWorks() {
  const [currentTab, setCurrentTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const handleTabClick = (index: number) => {
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentTab(index);
      setIsVisible(true);
    }, 300);
  };

  // FAQ section
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What happens during the discovery call?",
      answer: "During our 30-minute call, we'll discuss your business challenges, goals, and current processes. No technical preparation needed—just bring your business knowledge. We'll explain potential AI solutions tailored to your needs and outline next steps if you'd like to proceed."
    },
    {
      question: "How long does the AI implementation process take?",
      answer: "Most implementations are complete within 1-2 weeks. Simple solutions like chatbots or automation tools can be ready in as little as 3 days. More complex integrations may take up to 3 weeks. We'll provide a specific timeline during your discovery call."
    },
    {
      question: "Do I need technical knowledge to use your AI solutions?",
      answer: "Absolutely not. We handle all the technical aspects, from selection to setup. Once implemented, our solutions feature intuitive interfaces designed for non-technical users, and we provide training for your team to ensure everyone is comfortable."
    },
    {
      question: "How do you ensure the AI solutions work with my existing tools?",
      answer: "We start by mapping your current tech stack. Then we select AI tools with proven integration capabilities or built-in connectors for your systems. Before full deployment, we run integration tests to ensure seamless data flow and functionality with your existing tools."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "All our packages include ongoing support. We provide user training, regular check-ins, performance monitoring, and a dedicated support channel. If issues arise, our team responds quickly to resolve them, and we continuously optimize your solutions as your business evolves."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              How We Make AI Simple for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We take the complexity out of AI, so you only see the benefits.
            </p>
            <Link
              href="https://calendly.com/singletonsgroup/consultation"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
            >
              Schedule a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Simple Four-Step Process</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative z-10 transition-all hover:shadow-md hover:border-primary">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                  1. Free Discovery Call
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  A 30-minute chat to understand your business and goals—no technical jargon, just solutions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Discuss your business challenges</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Identify potential AI solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No pressure, no commitment</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative z-10 transition-all hover:shadow-md hover:border-primary">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                  2. Custom AI Plan
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  We select the perfect AI tools from our network of 1000+ partners—no overwhelm for you.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vendor-neutral recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detailed implementation timeline</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clear pricing with no surprises</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative z-10 transition-all hover:shadow-md hover:border-primary">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                  3. Full Setup & Integration
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  We handle all technical setup and integrate seamlessly with your existing systems.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complete technical implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Team training and onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Seamless integration with existing tools</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 4 - NEW */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative z-10 transition-all hover:shadow-md hover:border-primary">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                  4. Ongoing Support & Growth
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  We provide continuous support and optimization to maximize your business results.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regular performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Continuous optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Business impact tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
            >
              See Popular Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Client Journey Example */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other businesses like yours have successfully implemented AI solutions with our help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Client Journey 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Jane's Retail Store</h3>
                  <p className="text-gray-600">Small Retail Business</p>
                </div>
              </div>

              <h4 className="font-bold text-gray-900 mb-2">The Challenge</h4>
              <p className="text-gray-600 mb-4">
                Jane was overwhelmed with customer inquiries and spent 15+ hours weekly responding to basic questions, leaving little time for business growth.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Discovery Call</h5>
                    <p className="text-gray-600">Jane shared her challenge with managing customer inquiries and desire for a 24/7 solution that wouldn't break the bank.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Custom Plan</h5>
                    <p className="text-gray-600">We recommended an AI chatbot tailored to her brand, with custom responses to the 20 most common questions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Implementation</h5>
                    <p className="text-gray-600">We set up the chatbot, integrated it with her website, and trained her team in just 5 days.</p>
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-gray-900 mb-2">The Results</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduced customer response time from hours to seconds</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Saved 10+ hours weekly on customer service</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Increased customer satisfaction scores by 22%</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-gray-200">
                <p className="italic text-gray-600 mb-4">
                  "SingletonsGroup made AI so approachable. They found the perfect solution for my needs and handled everything. Now I have more time to focus on growing my business."
                </p>
                <p className="font-medium text-gray-900">- Jane T., Owner</p>
              </div>
            </div>

            {/* Client Journey 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mike's Marketing Agency</h3>
                  <p className="text-gray-600">Small Marketing Firm</p>
                </div>
              </div>

              <h4 className="font-bold text-gray-900 mb-2">The Challenge</h4>
              <p className="text-gray-600 mb-4">
                Mike's team was spending 20+ hours per week on repetitive content creation tasks, limiting their capacity to take on new clients.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Discovery Call</h5>
                    <p className="text-gray-600">Mike explained how content creation was bottlenecking his agency's growth and wanted a solution to scale production.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Custom Plan</h5>
                    <p className="text-gray-600">We recommended an AI content assistant that could generate first drafts and integrate with their existing workflow tools.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Implementation</h5>
                    <p className="text-gray-600">We set up the AI solution, created templates, and trained his team over a 1-week period.</p>
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-gray-900 mb-2">The Results</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduced content creation time by 65%</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Increased content output by 3x without adding staff</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Onboarded 4 new clients in the first month after implementation</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-gray-200">
                <p className="italic text-gray-600 mb-4">
                  "I was skeptical about AI for creative work, but SingletonsGroup found a solution that enhances our creativity rather than replacing it. The ROI has been incredible."
                </p>
                <p className="font-medium text-gray-900">- Mike R., Agency Owner</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies" className="inline-flex items-center text-primary font-medium hover:underline">
              See More Success Stories
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions About Our Process</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with SingletonsGroup
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-200 hover:shadow-sm"
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFaq === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/faq" className="inline-flex items-center text-primary font-medium hover:underline">
              See All FAQs
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Simplify AI for Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule a free discovery call today and take the first step toward effortless AI implementation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://calendly.com/singletonsgroup/consultation"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
            >
              Schedule a Free Discovery Call
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center text-gray-500">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Trusted by 500+ SMBs</span>
            </div>
            <div className="flex items-center text-gray-500">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">1000+ AI Partners</span>
            </div>
            <div className="flex items-center text-gray-500">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Vendor-Neutral Certified</span>
            </div>
            <div className="flex items-center text-gray-500">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">30-Day Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 