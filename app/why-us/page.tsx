'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const advantages = [
  {
    id: 'neutral',
    title: 'Vendor-Neutral Expertise',
    description: 'We prioritize your business needs, not selling specific AI tools. Our recommendations are based on what works for you, not commission rates.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    id: 'integration',
    title: 'Seamless Integration',
    description: 'We handle the technical complexity so you don\'t have to. Our team ensures all your AI tools work together flawlessly with your existing systems.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 'personalized',
    title: 'Personalized AI Strategy',
    description: 'Every business is unique. We build custom AI solutions that address your specific challenges and goals, not one-size-fits-all packages.',
    icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
  },
  {
    id: 'ongoing',
    title: 'Ongoing Support & Optimization',
    description: 'AI isn\'t set-it-and-forget-it. As your business evolves and AI capabilities advance, we continuously optimize your solutions for maximum impact.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  }
];

const testimonials = [
  {
    quote: "They simplified what seemed like an overwhelming AI landscape. Now we're using technology I didn't think was accessible to a business our size.",
    author: "Sarah T.",
    role: "Marketing Agency Owner",
    image: "/images/testimonial1.jpg"
  },
  {
    quote: "Instead of pushing specific tools, they truly listened to our problems first. The AI solutions they recommended have transformed our customer service.",
    author: "Michael R.",
    role: "Retail Business Director",
    image: "/images/testimonial2.jpg"
  },
  {
    quote: "Their ongoing support has been invaluable. As our business grew, they helped us scale our AI tools without missing a beat.",
    author: "Jennifer L.",
    role: "Healthcare Practice Manager",
    image: "/images/testimonial3.jpg"
  }
];

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAdvantage, setActiveAdvantage] = useState('neutral');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const compareSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleScroll = () => {
    if (compareSectionRef.current) {
      compareSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-black to-primary/20 py-32">
        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <div className="h-full w-full">
              <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  </pattern>
                  <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#smallGrid)" />
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-[20%] w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[20%] w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose Us as Your <span className="text-primary">AI Partner</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                In a sea of AI vendors, we stand apart as your trusted navigator, consultant, and implementation team.
              </p>
              <button 
                onClick={handleScroll}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-all transform hover:scale-105"
              >
                See How We Compare
                <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
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

      {/* Our Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mb-4">
              <div className="bg-white p-2 rounded-full">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              The <span className="text-primary">AI Strategic Partner</span> Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another AI company. We're the only company that sources, negotiates and works directly with you to fufill all your buiesnns needs
            </p>
          </div>

          {/* Interactive Advantages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Navigation Pills */}
            <div className="flex flex-col space-y-4 px-4">
              {advantages.map((advantage) => (
                <button
                  key={advantage.id}
                  onClick={() => setActiveAdvantage(advantage.id)}
                  className={`px-6 py-4 rounded-xl text-left transition-all flex items-start ${
                    activeAdvantage === advantage.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <svg className={`w-6 h-6 mr-3 mt-1 flex-shrink-0 ${
                    activeAdvantage === advantage.id ? 'text-white' : 'text-primary'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantage.icon} />
                  </svg>
                  <span className="font-semibold">{advantage.title}</span>
                </button>
              ))}
            </div>

            {/* Visual Display */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="dots-pattern-advantage" width="4" height="4" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="0.7" fill="currentColor" className="text-primary" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots-pattern-advantage)" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="bg-white w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantages.find(adv => adv.id === activeAdvantage)?.icon || ''} />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {advantages.find(adv => adv.id === activeAdvantage)?.title}
                </h3>

                <div className="text-gray-700 text-lg mb-6 flex-grow">
                  {advantages.find(adv => adv.id === activeAdvantage)?.description}
                </div>

                {activeAdvantage === 'neutral' && (
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-semibold text-primary mb-3">How We're Different</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-900">Traditional AI Vendors</p>
                        <p className="text-xs text-gray-500">Push specific tools based on partnerships and commission rates</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <p className="text-sm font-medium text-primary">Our Approach</p>
                        <p className="text-xs text-gray-700">Recommend only what's right for your specific business needs</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeAdvantage === 'integration' && (
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-semibold text-primary mb-3">Technical Complexity, Simplified</h4>
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="w-10 h-10 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-500">Complex Setup</p>
                      </div>

                      <svg className="w-16 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>

                      <div className="text-center">
                        <div className="w-10 h-10 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-700">Working Solution</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeAdvantage === 'personalized' && (
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-semibold text-primary mb-3">Custom-Tailored for Your Business</h4>
                    <div className="flex space-x-2">
                      <div className="bg-gray-50 p-3 rounded-lg flex-1">
                        <p className="text-xs text-gray-500">One-size-fits-all solutions</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg flex-1">
                        <p className="text-xs text-gray-700">Analysis of your specific needs</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg flex-1">
                        <p className="text-xs text-gray-700">Custom implementation</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg flex-1">
                        <p className="text-xs text-gray-700">Tailored training</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeAdvantage === 'ongoing' && (
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-semibold text-primary mb-3">Continuous Evolution</h4>
                    <div className="flex items-center">
                      <div className="flex-1 h-3 rounded-full bg-gradient-to-r from-gray-200 via-primary/30 to-primary relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-around">
                          <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
                          <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
                          <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
                          <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="text-gray-500">Implementation</span>
                      <span className="text-gray-500">Optimization</span>
                      <span className="text-gray-500">Growth</span>
                      <span className="text-primary">Evolution</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section ref={compareSectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              How We Compare to Other <span className="text-primary">AI Options</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a fundamentally different approach—a comprehensive AI strategy partner, not just another tool provider.
            </p>
          </div>

          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-4 divide-x divide-gray-200">
                {/* Header Row */}
                <div className="p-6 bg-gray-50">
                  <div className="h-12"></div>
                </div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-lg font-bold text-gray-900 text-center">DIY Approach</h3>
                </div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-lg font-bold text-gray-900 text-center">Single AI Provider</h3>
                </div>
                <div className="p-6 bg-primary/10">
                  <h3 className="text-lg font-bold text-primary text-center">Us: Your AI Partner</h3>
                </div>

                {/* Row 1: Options */}
                <div className="p-6 bg-gray-50">
                  <h4 className="font-semibold text-gray-900">Available Options</h4>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700">Limited by your knowledge</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-red-400"></span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700">Only their own solutions</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
                  </div>
                </div>
                <div className="p-6 text-center bg-primary/5">
                  <p className="text-gray-700">100+ AI tools across categories</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
                  </div>
                </div>

                {/* Row 2: Implementation */}
                <div className="p-6 bg-gray-50">
                  <h4 className="font-semibold text-gray-900">Implementation</h4>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700">Your team's responsibility</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-red-400"></span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700">Basic support for their tool</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
                  </div>
                </div>
                <div className="p-6 text-center bg-primary/5">
                  <p className="text-gray-700">Full implementation and training</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
                  </div>
                </div>

                {/* Row 3: Integration */}
                <div className="p-6 bg-gray-50">
                  <h4 className="font-semibold text-gray-900">Integration</h4>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700">Technical overhead & complexity</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-red-400"></span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700">Limited to their ecosystem</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
                  </div>
                </div>
                <div className="p-6 text-center bg-primary/5">
                  <p className="text-gray-700">Seamless cross-tool integration</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
                  </div>
                </div>

                {/* Row 4: Ongoing Support */}
                <div className="p-6 bg-gray-50">
                  <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700">Self-service only</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-red-400"></span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700">Limited to their product updates</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
                  </div>
                </div>
                <div className="p-6 text-center bg-primary/5">
                  <p className="text-gray-700">Continuous optimization & strategy</p>
                  <div className="mt-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Tech Background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Are Saying
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Testimonial Slider */}
            <div className="relative h-[300px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute w-full max-w-3xl transition-all duration-500 transform ${
                    index === activeTestimonial 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-95 z-0'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl">
                    <div className="flex flex-col items-center">
                      <svg className="w-12 h-12 text-primary mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      
                      <p className="text-lg text-white mb-8 text-center">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-primary font-bold">
                            {testimonial.author.charAt(0)}
                          </div>
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-white">{testimonial.author}</h4>
                          <p className="text-sm text-gray-300">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-primary scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                  Book a free consultation to see how we can help you navigate the AI landscape and implement solutions that drive real results.
                </p>
                <Link
                  href="https://calendly.com/blake-singletonsgroup/30min" 
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-primary bg-white hover:bg-opacity-90 md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book Your Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 