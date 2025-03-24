'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Solution offerings data
const solutionOfferings = [
  {
    id: 'automation',
    title: 'AI Automation',
    description: 'Say goodbye to repetitive tasks. We\'ll find or create AI tools to handle scheduling, data entry, and more.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    highlight: 'Time Saver',
    highlightColor: 'bg-green-100 text-green-800'
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    description: 'Deliver instant, 24/7 support with AI chatbots we select and set up to match your brand.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    highlight: 'Best Seller',
    highlightColor: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'sales',
    title: 'Sales Boosters',
    description: 'Close more deals with AI that scores leads and personalizes outreach—picked just for your process.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    highlight: 'Revenue Driver',
    highlightColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Turn your business data into actionable insights with AI tools that identify patterns and opportunities.',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    highlight: 'Strategic',
    highlightColor: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'Generate high-quality marketing content, product descriptions, and more with AI trained on your brand voice.',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    highlight: 'Time Saver',
    highlightColor: 'bg-green-100 text-green-800'
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    description: 'Don\'t see what you need? We\'ll build custom AI solutions tailored to your specific business requirements.',
    icon: 'M12 6v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6v-4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6v-4',
    highlight: 'Tailored',
    highlightColor: 'bg-indigo-100 text-indigo-800'
  }
];

// Industry data
const industries = [
  { id: 'healthcare', name: 'Healthcare', icon: 'M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { id: 'retail', name: 'Retail', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
  { id: 'finance', name: 'Finance', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
  { id: 'education', name: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222' },
  { id: 'real-estate', name: 'Real Estate', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'manufacturing', name: 'Manufacturing', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { id: 'hospitality', name: 'Hospitality', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
  { id: 'technology', name: 'Technology', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' }
];

export default function SolutionGrid() {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll industries carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustryIndex((prevIndex) => 
        prevIndex === industries.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Scroll carousel when active industry changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = (activeIndustryIndex * 120); // Adjust based on item width + gap
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeIndustryIndex]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight text-center">
            AI custom fit for your business needs
          </h2>
          <p className="text-lg text-gray-600">
            We bring together hundreds of solutions—automation, support, sales, and more—and tailor them to your needs. If it doesn't exist, we'll build it.
          </p>
        </div>

        {/* Solution Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutionOfferings.map((solution) => (
            <div 
              key={solution.id}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-md hover:border-primary group"
            >
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary group-hover:bg-opacity-20 transition-all">
                  <svg 
                    className="w-7 h-7 text-primary" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
                  </svg>
                </div>
                <div>
                  <span className={`inline-block px-3 py-1 ${solution.highlightColor} text-xs font-medium rounded-full mb-2`}>
                    {solution.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-1">{solution.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                {solution.description}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <Link href="/solutions" className="text-primary font-medium flex items-center group-hover:underline">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Serving businesses across all industries
          </h3>
          
          <div className="relative">
            {/* Carousel container */}
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide space-x-6 py-6 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {industries.map((industry, index) => (
                <div 
                  key={industry.id}
                  className={`flex-shrink-0 flex flex-col items-center transition-all duration-300 ${
                    index === activeIndustryIndex ? 'opacity-100 scale-110' : 'opacity-70 scale-100'
                  }`}
                  style={{ width: '120px' }}
                >
                  <div className={`w-16 h-16 ${index === activeIndustryIndex ? 'bg-primary bg-opacity-20' : 'bg-gray-100'} rounded-full flex items-center justify-center mb-3 transition-colors duration-300`}>
                    <svg 
                      className={`w-8 h-8 ${index === activeIndustryIndex ? 'text-primary' : 'text-gray-500'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                    </svg>
                  </div>
                  <span className={`text-sm font-medium text-center ${index === activeIndustryIndex ? 'text-primary' : 'text-gray-600'}`}>
                    {industry.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Carousel navigation indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {industries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndustryIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndustryIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="text-center">
          <div className="inline-block px-6 py-3 bg-gray-50 rounded-full mb-6">
            <span className="text-xl font-bold text-gray-900">+ many more solutions</span>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            With access to a vast AI network and the ability to craft custom solutions, we solve any challenge—regardless of your industry or specific needs.
          </p>
          <Link href="/solutions" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm transition-all">
            Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
} 