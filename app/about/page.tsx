'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Team data
const teamMembers = [
  {
    name: 'Alexandra Chen',
    role: 'Founder & CEO',
    bio: 'Former AI strategy consultant with 15+ years experience helping businesses implement cutting-edge technology. Started the company to make AI accessible for small businesses.',
    image: '/images/team/alex.jpg',
    placeholder: 'AC',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    name: 'Marcus Williams',
    role: 'Chief Technology Officer',
    bio: 'Ex-Google AI engineer with expertise in machine learning integration and solution architecture. Passionate about simplifying complex technologies.',
    image: '/images/team/marcus.jpg',
    placeholder: 'MW',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Client Success',
    bio: 'Background in business operations and technology adoption. Sarah ensures every client implementation delivers measurable ROI and solves real problems.',
    image: '/images/team/sarah.jpg',
    placeholder: 'SJ',
    color: 'bg-green-100 text-green-800'
  },
  {
    name: 'David Rodriguez',
    role: 'AI Solutions Architect',
    bio: 'Specialized in matching business needs with perfect-fit AI solutions. David has helped 50+ small businesses successfully adopt AI tools.',
    image: '/images/team/david.jpg',
    placeholder: 'DR',
    color: 'bg-orange-100 text-orange-800'
  }
];

// Company milestones
const milestones = [
  {
    year: '2021',
    title: 'Founded',
    description: 'Launched with a mission to democratize AI for small businesses through a tailored, consultative approach.',
    icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6'
  },
  {
    year: '2022',
    title: '50+ Client Milestone',
    description: 'Helped our first 50 businesses implement AI solutions, with an average efficiency increase of 32%.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    year: '2022',
    title: 'First 100 AI Partners',
    description: 'Expanded our AI solution network to include 100+ specialized tools spanning all key business functions.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    year: '2023',
    title: 'AI Strategy Framework',
    description: 'Developed our proprietary framework for assessing business needs and matching them to the right AI tools.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
  },
  {
    year: '2024',
    title: 'Today',
    description: 'Continuing our mission to be the "Salesforce for AI" — the central hub that connects businesses with the right AI tools for their unique needs.',
    icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
  }
];

// Values
const values = [
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

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-black to-primary/20 py-32">
        {/* Circuit Background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1" fill="white" />
                <circle cx="50" cy="0" r="1" fill="white" />
                <circle cx="0" cy="50" r="1" fill="white" />
                <circle cx="50" cy="50" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-primary">Mission</span> & Vision
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're creating a world where AI is accessible, understandable, 
                and valuable for every business, regardless of size or technical expertise.
              </p>
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

      {/* Our Story Section */}
      <section className="py-20 bg-white">
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Why We Created the <span className="text-primary">"Salesforce for AI"</span>
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Our journey began with a simple observation: while AI was transforming large enterprises, 
                  small and medium businesses were being left behind due to complexity, cost, and confusion.
                </p>
                
                <p>
                  Our founder, Alexandra Chen, had spent years consulting with businesses on technology 
                  adoption and saw firsthand how the fragmented AI landscape was creating unnecessary barriers. 
                  The problem wasn't a lack of solutions—it was the overwhelming number of options without 
                  clear guidance on what would truly work for each unique business.
                </p>
                
                <p>
                  We built our company to be the bridge between powerful AI technology and the businesses 
                  that need it most. By taking a vendor-neutral, consultative approach, we help you navigate 
                  the complex AI landscape and implement only the tools that will truly drive results.
                </p>
                
                <div className="flex items-center space-x-2 text-primary font-medium">
                  <span>Our vision in one sentence:</span>
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="italic">"AI made simple for every business."</span>
                </div>
              </div>
            </div>
            
            {/* Image/Visual Side */}
            <div className={`relative transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
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
                        <line x1="50%" y1="0" x2="50%" y2="50%" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" strokeDasharray="4" />
                        <line x1="50%" y1="100%" x2="50%" y2="50%" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" strokeDasharray="4" />
                        <line x1="0" y1="50%" x2="50%" y2="50%" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" strokeDasharray="4" />
                        <line x1="100%" y1="50%" x2="50%" y2="50%" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" strokeDasharray="4" />
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

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our <span className="text-primary">Journey</span> So Far
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to becoming a trusted AI partner for businesses across industries.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Interactive Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              {/* Timeline Events */}
              <div className="relative z-10">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
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
                        className={`w-12 h-12 rounded-full flex items-center justify-center transform transition-all ${
                          activeMilestone === index 
                            ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30' 
                            : 'bg-white text-primary border border-gray-200 hover:border-primary'
                        }`}
                        onClick={() => setActiveMilestone(index)}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={milestone.icon} />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Content Box */}
                    <div className="w-1/2 flex justify-center">
                      <div 
                        className={`max-w-xs bg-white rounded-xl shadow-md p-6 transition-all transform ${
                          activeMilestone === index ? 'scale-105 shadow-lg border-l-4 border-primary' : ''
                        }`}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Meet the <span className="text-primary">Team</span> 
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of experts dedicated to making AI accessible for businesses of all sizes.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="h-64 bg-gray-200 relative overflow-hidden">
                    {/* Placeholder if image fails to load */}
                    <div className={`absolute inset-0 flex items-center justify-center ${member.color}`}>
                      <span className="text-4xl font-bold">{member.placeholder}</span>
                    </div>
                    
                    {/* Real image with fallback */}
                    {member.image && (
                      <div className="absolute inset-0">
                        <Image 
                          src={member.image}
                          alt={member.name}
                          width={500}
                          height={500}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            // This will make the placeholder visible if image fails
                            e.currentTarget.style.opacity = '0';
                          }}
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
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
                  Join Us on Our Mission
                </h2>
                <p className="text-xl text-white text-opacity-90 mb-10 max-w-3xl mx-auto">
                  Partner with us to navigate the AI landscape and transform your business with the right solutions.
                </p>
                <Link
                  href="https://calendly.com/yourcompany/consultation"
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