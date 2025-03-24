'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Define our solution options based on the screenshot
const solutions = [
  {
    id: 'custom',
    title: 'Custom solutions',
    description: 'We craft tailored AI solutions that address your specific business challenges, whether it\'s automating repetitive tasks, enhancing customer service, or extracting insights from your data.',
    color: 'bg-primary',
    textColor: 'text-text-accent',
    lightBg: 'bg-blue-50',
    borderColor: 'border-primary',
    segmentLabel: 'Custom solutions'
  },
  {
    id: 'integration',
    title: 'Integration and set up',
    description: 'Our team handles all the technical details of setting up and integrating AI tools with your existing systems, making implementation seamless with minimal disruption to your operations.',
    color: 'bg-purple-600',
    textColor: 'text-text-accent',
    lightBg: 'bg-purple-50',
    borderColor: 'border-purple-600',
    segmentLabel: 'Integration'
  },
  {
    id: 'business',
    title: 'Business owners win',
    description: 'By partnering with us, business owners gain powerful AI capabilities without the technical complexity, saving time and resources while improving operations and customer experiences.',
    color: 'bg-cyan-500',
    textColor: 'text-text-accent',
    lightBg: 'bg-cyan-50',
    borderColor: 'border-cyan-500',
    segmentLabel: 'Business owners'
  }
];

const WinningWithAI = () => {
  const [activeTab, setActiveTab] = useState('custom');
  const [contentVisible, setContentVisible] = useState(true);

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setContentVisible(false);
      
      setTimeout(() => {
        setActiveTab(tabId);
        setTimeout(() => {
          setContentVisible(true);
        }, 100);
      }, 300);
    }
  };

  useEffect(() => {
    // Initial animation on mount
    setContentVisible(true);
  }, []);

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <div className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-text-main text-center mb-10 tracking-tight">
          We make using AI with your business simple and easy
        </h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="grid grid-cols-3 gap-x-12 md:gap-x-16 max-w-4xl mx-auto">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => handleTabChange(solution.id)}
                className="relative px-4 py-2 text-xl font-bold focus:outline-none transition-colors duration-300"
              >
                <span className={`transition-colors duration-300 ${activeTab === solution.id ? solution.textColor : 'text-text-main'}`}>
                  {solution.title}
                </span>
                <div 
                  className={`absolute bottom-0 left-0 w-full h-1 rounded-full transform scale-x-0 transition-transform duration-300 ${solution.color} ${
                    activeTab === solution.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content with Left Circle and Right Box Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-4">
          {/* Left Circle with Segments */}
          <div className="relative flex-shrink-0 w-[400px] h-[400px]">
            {/* Creating a perfectly round circle with equal 120° segments */}
            <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              {/* First segment - Custom solutions (0° to 120°) */}
              <path 
                d="M 100,100 L 100,10 A 90,90 0 0 1 177.94,145 Z" 
                className={`transition-colors duration-500 ${activeTab === 'custom' ? 'fill-blue-100' : 'fill-gray-50'}`}
                stroke="#e5e7eb"
                strokeWidth="0.5"
              />
              
              {/* Second segment - Integration (120° to 240°) */}
              <path 
                d="M 100,100 L 177.94,145 A 90,90 0 0 1 22.06,145 Z" 
                className={`transition-colors duration-500 ${activeTab === 'integration' ? 'fill-purple-100' : 'fill-gray-50'}`}
                stroke="#e5e7eb"
                strokeWidth="0.5"
              />
              
              {/* Third segment - Business owners (240° to 360°) */}
              <path 
                d="M 100,100 L 22.06,145 A 90,90 0 0 1 100,10 Z" 
                className={`transition-colors duration-500 ${activeTab === 'business' ? 'fill-cyan-100' : 'fill-gray-50'}`}
                stroke="#e5e7eb"
                strokeWidth="0.5"
              />
              
              {/* Center Circle */}
              <circle cx="100" cy="100" r="30" fill="#0c1142" />
              
              {/* Heart Icon */}
              <svg x="85" y="85" width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              
              {/* Segment Labels - repositioned to better fit within segments */}
              {/* Custom solutions label */}
              <text 
                x="140" 
                y="60" 
                className={`${activeTab === 'custom' ? 'fill-blue-600' : 'fill-gray-400'}`}
                textAnchor="middle"
                fontSize="10"
              >
                Custom
              </text>
              <text 
                x="140" 
                y="75" 
                className={`${activeTab === 'custom' ? 'fill-blue-600' : 'fill-gray-400'}`}
                textAnchor="middle"
                fontSize="10"
              >
                solutions
              </text>
              
              {/* Integration label */}
              <text 
                x="100" 
                y="160" 
                className={`${activeTab === 'integration' ? 'fill-purple-600' : 'fill-gray-400'}`}
                textAnchor="middle"
                fontSize="10"
              >
                Integration
              </text>
              
              {/* Business owners label */}
              <text 
                x="60" 
                y="60" 
                className={`${activeTab === 'business' ? 'fill-cyan-600' : 'fill-gray-400'}`}
                textAnchor="middle"
                fontSize="10"
              >
                Business
              </text>
              <text 
                x="60" 
                y="75" 
                className={`${activeTab === 'business' ? 'fill-cyan-600' : 'fill-gray-400'}`}
                textAnchor="middle"
                fontSize="10"
              >
                owners
              </text>
            </svg>
          </div>

          {/* Content Box - Right Side */}
          <div className="flex-1 w-full md:max-w-2xl mt-8 md:mt-0">
            <div className="relative">
              {/* Arrow connecting to circle - only visible on wider screens */}
              <div 
                className={`hidden md:block absolute left-0 top-1/2 w-8 h-16 transform -translate-x-full -translate-y-1/2 ${activeSolution.lightBg}`}
                style={{ 
                  clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                }}
              ></div>
              
              {/* Content card */}
              <div 
                className={`p-8 rounded-xl transition-all duration-500 ease-in-out transform ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${activeSolution.lightBg}`}
              >
                <h3 className={`text-3xl font-bold mb-4 text-text-main`}>
                  {activeSolution.title}
                </h3>
                <p className="text-lg text-[#374151] mb-6">
                  {activeSolution.description}
                </p>
                <Link
                  href="/solutions"
                  className={`inline-flex items-center font-medium text-text-accent hover:underline`}
                >
                  Learn more
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinningWithAI;