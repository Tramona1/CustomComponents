'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Custom components
import EmailForm from './components/EmailForm';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import SolutionGrid from './components/SolutionGrid';
import BusinessChallenges from './components/BusinessChallenges';
import AIVisualization from './components/AIVisualization';
import WinningWithAI from './components/WinningWithAI';
import LogoCarousel from './components/LogoCarousel';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const handleMouseMove = (e: MouseEvent) => {
        if (heroRef.current) {
          const rect = heroRef.current.getBoundingClientRect();
          setCursorPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    } catch (error) {
      console.error("Error in hero section effect:", error);
      setIsVisible(true);
    }
  }, []);

  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const solutionsSection = document.querySelector('.py-16.bg-white');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-16 overflow-hidden bg-white" ref={heroRef}>
        {/* Content starts directly with minimal decorative elements */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 md:py-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Announcement banner like Mercor's */}
              <div className="inline-block mb-4 px-4 py-1.5 bg-gray-100 rounded-full">
                <p className="text-sm font-medium text-text-sub">
                  Simplifying AI for Your Business – Trusted by Hundreds of SMBs
                </p>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6 leading-tight tracking-tight">
              Looking for an AI Solution? We Make It Simple.
              </h1>
              <p className="text-lg md:text-xl text-text-sub mb-8 leading-relaxed">
              AI should be straightforward and effective, not overwhelming. We partner with you to understand your unique challenges and select the best tools from our network of over 1,000 AI solutions—tailored to fit your business perfectly. </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  href="https://calendly.com/singletonsgroup/consultation" 
                  target="_blank" 
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
                >
                  Schedule a Free Intro Call
                </Link>
                <Link 
                  href="#solutions-section"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all"
                  onClick={scrollToSolutions}
                >
                  See Our Solutions
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="mt-5">
                <span className="inline-block text-sm text-text-sub bg-gray-100 px-3 py-1 rounded-full">No signup needed. Discover how AI can transform your business today.</span>
              </div>
            </div>
            
            <div className={`relative transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              {/* AI Visualization without the colored border for better blending */}
              <div className="rounded-xl">
                <AIVisualization />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Companies Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-8">
            AI Is Confusing—We Understand. We're Here to Make It Simple.
          </h2>
          
          <p className="text-lg text-text-sub mb-10 max-w-3xl mx-auto">
            Every business should be using AI to grow, but with thousands of tools and complex jargon out there, it's easy to feel overwhelmed. That's why businesses trust us to cut through the noise and deliver AI solutions that work for them.
          </p>
          
          {/* Using our new LogoCarousel component */}
          <LogoCarousel />
          
          <div className="mt-10 max-w-2xl mx-auto">
            <p className="text-lg text-text-sub mb-6">
              "They made AI so simple. I always knew AI could help my business, but there were so many options and AI is so confusing. They did all the heavy lifting and now I can focus on growing my business."
            </p>
            <p className="text-sm text-text-sub">
              — Sarah T., Small Business Owner
            </p>
          </div>
          
          <div className="mt-8">
            <Link href="/success-stories" className="inline-flex items-center text-text-accent font-medium hover:underline">
              See More Customer Success Stories
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
              Unlock the Power of AI in your business
            </h2>
            <p className="text-xl text-text-sub max-w-3xl mx-auto">
              AI should be a game-changer for your business, not a source of confusion. Here's a few real challenges business owners face every day AI can solve
            </p>
          </div>
          
          {/* Solution Offerings Grid - Updated with SolutionGrid cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Using the solution offerings from SolutionGrid */}
            {[
              {
                id: 'automation',
                title: 'Automate Routine Tasks',
                description: 'Struggling with time-consuming tasks like scheduling or data entry? AI can automate these processes, freeing you to focus on growing your business.',
                icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
                highlight: 'Time Saver',
                highlightColor: 'bg-green-100 text-green-800',
                complexity: 'Moderate',
                complexityColor: 'bg-yellow-100 text-yellow-800',
                cost: 'Moderate Cost',
                costColor: 'bg-yellow-100 text-yellow-800'
              },
              {
                id: 'customer-support',
                title: 'Enhance Customer Support',
                description: 'Can\'t keep up with customer inquiries? AI chatbots provide instant, 24/7 responses, ensuring your customers are always supported.',
                icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
                highlight: 'Best Seller',
                highlightColor: 'bg-purple-100 text-purple-800',
                complexity: 'Simple',
                complexityColor: 'bg-blue-100 text-blue-800',
                cost: 'Moderate Cost',
                costColor: 'bg-yellow-100 text-yellow-800'
              },
              {
                id: 'sales',
                title: 'Boost Sales Conversions',
                description: 'Finding it hard to identify high-potential leads? AI can score leads and personalize outreach, helping you close more deals faster.',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                highlight: 'Revenue Driver',
                highlightColor: 'bg-blue-100 text-blue-800',
                complexity: 'Moderate',
                complexityColor: 'bg-yellow-100 text-yellow-800',
                cost: 'Expensive',
                costColor: 'bg-red-100 text-red-800'
              },
              {
                id: 'data-analysis',
                title: 'Uncover Data Insights',
                description: 'Overwhelmed by business data? AI analyzes your data to reveal trends and opportunities, empowering smarter decisions.',
                icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                highlight: 'Strategic',
                highlightColor: 'bg-amber-100 text-amber-800',
                complexity: 'Complex',
                complexityColor: 'bg-orange-100 text-orange-800',
                cost: 'Moderate Cost',
                costColor: 'bg-yellow-100 text-yellow-800'
              },
              {
                id: 'content',
                title: 'Streamline Content Creation',
                description: 'Struggling to create marketing content fast enough? AI generates blog posts, social media content, and more, matching your brand voice.',
                icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
                highlight: 'Time Saver',
                highlightColor: 'bg-green-100 text-green-800',
                complexity: 'Simple',
                complexityColor: 'bg-blue-100 text-blue-800',
                cost: 'Moderate Cost',
                costColor: 'bg-yellow-100 text-yellow-800'
              },
              {
                id: 'custom',
                title: 'Solve Unique Challenges',
                description: 'Facing a challenge that\'s one-of-a-kind? We\'ll design a custom AI solution to tackle your specific business problem.',
                icon: 'M12 6v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6v-4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6v-4',
                highlight: 'Tailored',
                highlightColor: 'bg-indigo-100 text-indigo-800',
                complexity: 'Complex',
                complexityColor: 'bg-orange-100 text-orange-800',
                cost: 'Expensive',
                costColor: 'bg-red-100 text-red-800'
              }
            ].map((solution) => (
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
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${solution.highlightColor}`}>
                        {solution.highlight}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${solution.complexityColor}`}>
                        {solution.complexity}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${solution.costColor}`}>
                        {solution.cost}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text-main mb-1">{solution.title}</h3>
                  </div>
                </div>
                <p className="text-text-sub mb-6">
                  {solution.description}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/solutions" className="text-text-accent font-medium flex items-center group-hover:underline">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="mb-6 text-[#374151] max-w-2xl mx-auto">
              And much, much more. We can keep it as simple or as complex as needed to fulfill your specific business needs.
            </p>
            
            <Link 
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
            >
              Discover More on Our Solutions Page
            </Link>
          </div>
        </div>
      </section>

      {/* WinningWithAI Section - Now positioned after the Key Benefits section */}
      <WinningWithAI />

      {/* Solutions Grid - moved above Video Section */}
      {/* Removing this redundant SolutionGrid component as requested */}
      
      {/* Video Section */}
      <section id="video-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoSection />
        </div>
      </section>

      {/* Business Challenges */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BusinessChallenges />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 