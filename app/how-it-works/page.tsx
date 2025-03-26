'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Simplifying AI for Your Business
            </h1>
            <p className="text-xl text-[#1F2937] mb-8">
              Our straightforward process makes implementing AI tools easy, affordable, and stress-free—even if you have zero technical expertise.
            </p>
            <Link 
              href="https://calendly.com/singletonsgroup/consultation" 
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-[15px] font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
            >
              Request a Custom Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our 4-Step Process</h2>
            <p className="mt-4 text-xl text-[#1F2937] max-w-3xl mx-auto">
              From discovery to implementation, we handle the entire AI transition for your business.
            </p>
          </div>
          
          <div className="relative mt-20">
            {/* Timeline connector line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
                <div className="md:text-right md:pr-16">
                  <div className="md:hidden flex items-center mb-4">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">1</div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">Free Discovery Call</h3>
                  </div>
                  <h3 className="hidden md:block text-2xl font-bold text-gray-900 mb-4">Free Discovery Call</h3>
                  <p className="text-[15px] text-[#1F2937] mb-4">
                    We start with a 30-minute call to understand your business needs, challenges, and goals. No technical jargon—just a conversation about how we can help your business thrive.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start md:justify-end">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span className="text-[15px] text-[#1F2937]">Discover potential AI use cases for your business</span>
                    </li>
                    <li className="flex items-start md:justify-end">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span className="text-[15px] text-[#1F2937]">Learn about cost savings and efficiency gains</span>
                    </li>
                    <li className="flex items-start md:justify-end">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span className="text-[15px] text-[#1F2937]">Get answers to all your questions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:pl-16">
                  <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">1</div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md bg-blue-50 h-64 flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg className="mx-auto h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      <h4 className="mt-4 text-lg font-medium text-primary">Discovery Call</h4>
                      <p className="mt-2 text-sm text-gray-500">Understanding your business needs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
                <div className="md:order-2 md:pl-16">
                  <div className="md:hidden flex items-center mb-4">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">2</div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">Custom AI Plan</h3>
                  </div>
                  <h3 className="hidden md:block text-2xl font-bold text-gray-900 mb-4">Custom AI Plan</h3>
                  <p className="text-[15px] text-[#1F2937] mb-4">
                    Within 48 hours, we'll deliver a tailored AI implementation plan designed specifically for your business needs, complete with tools, timeline, and ROI projections.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <span className="text-[15px] text-[#1F2937]">Receive a custom AI solution blueprint</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <span className="text-[15px] text-[#1F2937]">Review transparent pricing with no hidden costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <span className="text-[15px] text-[#1F2937]">See projected ROI and implementation timeline</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:order-1 md:text-right md:pr-16">
                  <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">2</div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md bg-green-50 h-64 flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg className="mx-auto h-24 w-24 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="mt-4 text-lg font-medium text-green-600">Custom AI Plan</h4>
                      <p className="mt-2 text-sm text-gray-500">Tailored for your specific needs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
                <div className="md:text-right md:pr-16">
                  <div className="md:hidden flex items-center mb-4">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">3</div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">Full Setup & Integration</h3>
                  </div>
                  <h3 className="hidden md:block text-2xl font-bold text-gray-900 mb-4">Full Setup & Integration</h3>
                  <p className="text-[15px] text-[#1F2937] mb-4">
                    We handle all technical setup and integrate seamlessly with your existing systems. Our team takes care of everything from installation to configuration.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start md:justify-end">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span className="text-[15px] text-[#1F2937]">Complete technical implementation</span>
                    </li>
                    <li className="flex items-start md:justify-end">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span className="text-[15px] text-[#1F2937]">Team training and onboarding</span>
                    </li>
                    <li className="flex items-start md:justify-end">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span className="text-[15px] text-[#1F2937]">Seamless integration with existing tools</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:pl-16">
                  <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">3</div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md bg-purple-50 h-64 flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg className="mx-auto h-24 w-24 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <h4 className="mt-4 text-lg font-medium text-purple-600">Setup & Integration</h4>
                      <p className="mt-2 text-sm text-gray-500">Seamless implementation process</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
                <div className="md:order-2 md:pl-16">
                  <div className="md:hidden flex items-center mb-4">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">4</div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">Ongoing Support & Growth</h3>
                  </div>
                  <h3 className="hidden md:block text-2xl font-bold text-gray-900 mb-4">Ongoing Support & Growth</h3>
                  <p className="text-[15px] text-[#1F2937] mb-4">
                    We provide continuous support and optimization to maximize your business results. Our team is always available to help you get the most from your AI solutions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <span className="text-[15px] text-[#1F2937]">Regular performance monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <span className="text-[15px] text-[#1F2937]">Continuous optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <span className="text-[15px] text-[#1F2937]">Business impact tracking</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:order-1 md:text-right md:pr-16">
                  <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">4</div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md bg-orange-50 h-64 flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg className="mx-auto h-24 w-24 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <h4 className="mt-4 text-lg font-medium text-orange-600">Ongoing Support</h4>
                      <p className="mt-2 text-sm text-gray-500">Continuous optimization and growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="https://calendly.com/singletonsgroup/consultation" 
              target="_blank" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-[15px] font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
            >
              Schedule Your Free Discovery Call
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
                  <h3 className="text-xl font-bold text-gray-900">Jane- Retail Store Owner</h3>
                  <p className="text-gray-600">Retail Business</p>
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
                  <h3 className="text-xl font-bold text-gray-900">Mike- Marketing Agency Owner</h3>
                  <p className="text-gray-600">Marketing Agency</p>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-[#1F2937] max-w-3xl mx-auto">
              Everything you need to know about our AI implementation process
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-[15px] text-[#1F2937]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 