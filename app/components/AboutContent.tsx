'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Company milestones
const milestones = [
  {
    year: '2024',
    title: 'AI Is Ready for Every Business',
    description: 'AI is now powerful and versatile enough for every business—but only if integrated correctly. SMBs no longer need to fear complexity with SingletonsGroup as their trusted guide, cutting through the noise and delivering measurable results.',
    icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
  },
  {
    year: 'Late 2023',
    title: 'AI Matures with Advanced LLMs',
    description: 'Significant improvements in large language models enabled custom AI solutions, leading to thousands of new B2B AI tools. This fragmented market left SMBs more confused than ever—exactly where our AI selection framework proved most valuable.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
  },
  {
    year: '2023',
    title: 'Early Enterprise Adoption',
    description: 'Large companies with dedicated tech teams started implementing basic AI tools. We recognized that SMBs needed a different approach—simplified solutions with hands-on implementation support to achieve the same benefits without the overhead.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    year: 'Late 2022',
    title: 'AI Gains Initial Traction',
    description: 'As experimentation with AI grew, we founded SingletonsGroup with a mission to make these new technologies accessible to businesses of all sizes. Our first 50 clients achieved an average efficiency increase of 32% through our tailored approach.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    year: '2022',
    title: 'ChatGPT Launched - The Revolution Begins',
    description: 'The AI landscape changed forever with the release of ChatGPT. While this opened new possibilities, we recognized early that businesses would need guidance to turn this technology into practical, ROI-driven tools for their specific needs.',
    icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6'
  }
];

// Values
const values = [
  {
    title: 'Clients First',
    description: 'We always prioritize your business needs above all else. Every recommendation and implementation is guided by what will deliver the most value to you, not what\'s convenient for us.',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Vendor Neutrality',
    description: 'We recommend solutions based on what will work best for your business, not based on commissions or partnerships.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Simplification',
    description: 'We make complex AI technologies understandable and manageable for businesses of all sizes.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Real Business Impact',
    description: 'We measure success by the tangible value and ROI our solutions deliver to your business.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    title: 'Continuous Evolution',
    description: 'We continuously evaluate new AI tools and optimize existing implementations as technology evolves.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  }
];

export default function AboutContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16">
        {/* Light Pattern Background */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute inset-0">
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

        {/* Subtle accent orbs */}
        <div className="absolute top-20 left-[20%] w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[20%] w-40 h-40 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6">
                Our <span className="text-primary">Mission</span> & Vision
              </h1>
              <p className="text-xl text-text-sub mb-8">
                We're creating a world where every business can benefit from AI. We want to eliminate the complexity and improve all our partners buinesses.
              </p>
              <Link 
                href="https://calendly.com/blake-singletonsgroup/30min" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
              >
                Schedule a Free Intro Call
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-100"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="inline-block p-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mb-6">
                <div className="bg-white p-2 rounded-full">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                    <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                Why We Created the <span className="text-primary">"SingletonsGroup"</span>
              </h2>
              
              <div className="space-y-6 text-text-sub">
                <p>
                  AI shouldn't be complicated, expensive, or confusing—but for most small and medium businesses, it is. 
                  While big companies have entire departments dedicated to AI implementation, smaller businesses are left trying 
                  to navigate thousands of AI tools without clear guidance.
                </p>
                
                <p>
                  We see this as a problem. Businesses paying for AI tools they don't need, struggling with 
                  implementation, or avoiding AI altogether because it seems too complex. The issue wasn't a shortage of 
                  solutions—it was the overwhelming number of options and the lack of unbiased, practical guidance.
                </p>
                
                <p>
                  That's why we built SingletonsGroup—to be your trusted guide in the AI landscape. We eliminate the complexity 
                  by handling everything from selecting the right tools to implementation and training. No technical experience 
                  required on your part. Just real business results like reduced costs, saved time, and improved operations.
                </p>
                
                <div className="flex items-center space-x-2 text-primary font-medium">
                  <span>Our promise to you:</span>
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="italic">"AI made simple, with measurable business impact."</span>
                </div>
              </div>
            </div>
            
            {/* Image/Visual Side */}
            <div className={`relative transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-md border border-gray-200">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20">
                  <div className="absolute inset-0">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="dots-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
                          <circle cx="8" cy="8" r="1" fill="currentColor" className="text-primary" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#dots-pattern)" />
                    </svg>
                  </div>
                </div>
                
                {/* Visual Representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[400px] h-[400px]">
                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-primary">
                        <div className="text-center">
                          <div className="text-primary font-bold">Your Business</div>
                          <div className="text-xs text-gray-500">At the center</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Connecting Nodes - First Ring */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs font-medium text-gray-800 text-center w-24">
                          Productivity
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                        <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs font-medium text-gray-800 text-center w-24">
                          Communication
                        </div>
                      </div>
                      
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs font-medium text-gray-800 text-center w-24">
                          Analytics
                        </div>
                      </div>
                      
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs font-medium text-gray-800 text-center w-24">
                          Customer Service
                        </div>
                      </div>
                      
                      {/* Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="50%" y1="0" x2="50%" y2="50%" stroke="rgba(0, 87, 217, 0.2)" strokeWidth="2" strokeDasharray="4" />
                        <line x1="50%" y1="100%" x2="50%" y2="50%" stroke="rgba(0, 87, 217, 0.2)" strokeWidth="2" strokeDasharray="4" />
                        <line x1="0" y1="50%" x2="50%" y2="50%" stroke="rgba(0, 87, 217, 0.2)" strokeWidth="2" strokeDasharray="4" />
                        <line x1="100%" y1="50%" x2="50%" y2="50%" stroke="rgba(0, 87, 217, 0.2)" strokeWidth="2" strokeDasharray="4" />
                      </svg>
                    </div>
                    
                    {/* Outer Ring */}
                    <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-text-sub max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we help businesses navigate the AI landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-md delay-${index * 100} duration-500`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">{value.title}</h3>
                <p className="text-text-sub">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
              The AI <span className="text-primary">Journey</span> & Our Role
            </h2>
            <p className="text-xl text-text-sub max-w-3xl mx-auto">
              From ChatGPT's launch to today's enterprise-ready AI tools, we've evolved to make advanced AI accessible to businesses of all sizes.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Enhanced Timeline */}
            <div className="relative">
              {/* Present Day Indicator */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-primary text-white text-sm px-4 py-1 rounded-full shadow-md">
                  Present Day
                </div>
              </div>

              {/* Timeline container - contains line and events, with a set height */}
              <div className="relative pb-20">
                {/* Timeline Line - Fixed height, only within the timeline events */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-[calc(100%-40px)] w-0.5 bg-gray-200"></div>
                
                {/* Timeline Events */}
                <div className="relative z-10">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index}
                      className={`flex items-center mb-20 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} ${index === milestones.length-1 ? 'mb-8' : ''}`}
                    >
                      {/* Date Marker */}
                      <div className="w-1/2 flex justify-center">
                        <div className={`transition-all w-36 py-2 rounded-lg shadow-md text-center ${
                          activeMilestone === index ? 'bg-primary text-white scale-110' : 'bg-white text-primary'
                        }`}>
                          <span className="font-bold">{milestone.year}</span>
                        </div>
                      </div>
                      
                      {/* Center Point */}
                      <div className="flex-shrink-0">
                        <button
                          className={`w-14 h-14 rounded-full flex items-center justify-center transform transition-all ${
                            activeMilestone === index 
                              ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30' 
                              : 'bg-white text-primary border border-gray-200 hover:border-primary'
                          }`}
                          onClick={() => setActiveMilestone(index)}
                        >
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={milestone.icon} />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Content Box */}
                      <div className="w-1/2 flex justify-center">
                        <div 
                          className={`max-w-sm bg-white rounded-xl shadow-md p-6 transition-all transform ${
                            activeMilestone === index ? 'scale-105 shadow-lg border-l-4 border-primary' : ''
                          }`}
                        >
                          <h3 className="text-xl font-bold text-text-main mb-3">{milestone.title}</h3>
                          <p className="text-text-sub">{milestone.description}</p>
                          
                          {/* Add visual indicator for current period */}
                          {index === 0 && (
                            <div className="mt-4 flex items-center">
                              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                              <span className="text-sm font-medium text-green-600">Current Period</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Bottom Summary - Clearly separated from the timeline */}
              <div className="text-center mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-text-main mb-3">Why Choose SingletonsGroup?</h3>
                <p className="text-text-sub mb-4">
                  We've grown alongside the AI revolution, evolving to meet the needs of SMBs at every stage. Our mission remains 
                  the same: to make AI simple, accessible, and impactful for your business.
                </p>
                <Link
                  href="https://calendly.com/blake-singletonsgroup/30min"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
                >
                  Schedule a Call with Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 