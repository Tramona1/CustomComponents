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
    <main className="flex min-h-screen flex-col">
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
              AI should be easy and helpful, not difficult and confusing
            </h2>
            <p className="text-xl text-text-sub max-w-3xl mx-auto">
              Some of the uses cases we help can help with:
            </p>
          </div>
          
          {/* Solution Offerings Grid - Updated with SolutionGrid cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Using the solution offerings from SolutionGrid */}
            {[
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
                    <span className={`inline-block px-3 py-1 ${solution.highlightColor} text-xs font-medium rounded-full mb-2`}>
                      {solution.highlight}
                    </span>
                    
                    {/* Adding complexity and cost badges */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {solution.id === 'automation' && (
                        <>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Complex</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Expensive</span>
                        </>
                      )}
                      {solution.id === 'customer-support' && (
                        <>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Moderate</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Moderate Cost</span>
                        </>
                      )}
                      {solution.id === 'sales' && (
                        <>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Moderate</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Expensive</span>
                        </>
                      )}
                      {solution.id === 'data-analysis' && (
                        <>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Complex</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Moderate Cost</span>
                        </>
                      )}
                      {solution.id === 'content' && (
                        <>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Simple</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Moderate Cost</span>
                        </>
                      )}
                      {solution.id === 'custom' && (
                        <>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Complex</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Expensive</span>
                        </>
                      )}
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
              href="#solutions-section"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
              onClick={scrollToSolutions}
            >
              See Our Solutions
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

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-8 tracking-tight">Ready to Transform Your Business?</h2>
          <p className="text-xl text-text-sub mb-12">
            Book a free 30-minute consultation to discuss how our AI solutions can help your specific business needs.<br />
            <span className="inline-block mt-2 text-text-sub bg-gray-100 px-4 py-1.5 rounded-full">No sign up needed. No commitment required.</span>
          </p>
          <Link 
            href="https://calendly.com/singletonsgroup/consultation" 
            target="_blank"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
          >
            Schedule Your Free Intro Call
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                  <span className="text-white font-bold">AI</span>
                </div>
                <span className="text-xl font-bold text-text-main">SingletonsGroup</span>
              </div>
              <p className="text-text-sub mb-6">
                Making AI simple for SMBs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-text-accent">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-text-accent">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-text-main font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="/solutions#automation" className="text-text-sub hover:text-text-accent">AI Automation</a></li>
                <li><a href="/solutions#customer-support" className="text-text-sub hover:text-text-accent">Customer Support</a></li>
                <li><a href="/solutions#sales-tools" className="text-text-sub hover:text-text-accent">Sales Tools</a></li>
                <li><a href="/solutions#data-analysis" className="text-text-sub hover:text-text-accent">Data Analysis</a></li>
                <li><a href="/solutions#custom" className="text-text-sub hover:text-text-accent">Custom Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-text-main font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-text-sub hover:text-text-accent">About</Link></li>
                <li><Link href="/how-it-works" className="text-text-sub hover:text-text-accent">How It Works</Link></li>
                <li><Link href="/why-choose-us" className="text-text-sub hover:text-text-accent">Why Choose Us</Link></li>
                <li><Link href="/success-stories" className="text-text-sub hover:text-text-accent">Success Stories</Link></li>
                <li><Link href="/case-studies" className="text-text-sub hover:text-text-accent">Case Studies</Link></li>
                <li><Link href="/pricing" className="text-text-sub hover:text-text-accent">Pricing</Link></li>
                <li><Link href="/blog" className="text-text-sub hover:text-text-accent">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-text-main font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-text-sub">info@singletonsgroup.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-text-sub">(555) 123-4567</span>
                </li>
                <li className="mt-6">
                  <Link 
                    href="https://calendly.com/singletonsgroup/consultation" 
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
                  >
                    Schedule a Free Intro Call
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-sub text-sm">© 2023 SingletonsGroup. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-text-sub hover:text-text-accent text-sm">Privacy Policy</a>
              <a href="/terms-of-service" className="text-text-sub hover:text-text-accent text-sm">Terms of Service</a>
              <a href="/cookie-policy" className="text-text-sub hover:text-text-accent text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 