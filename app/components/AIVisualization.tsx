'use client';

import React, { useEffect, useState, useRef } from 'react';

// AI Use cases with icons
const aiUseCases = [
  {
    id: 1,
    name: "Customer Service",
    description: "AI-powered chatbots and virtual assistants that handle customer inquiries 24/7, reducing response times and improving satisfaction for SMBs.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "text-blue-500"
  },
  {
    id: 2,
    name: "Sales Automation",
    description: "AI tools that qualify leads, personalize outreach, and automate follow-ups, helping SMBs close more deals with fewer resources.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18.5 4V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18.5 21V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "text-green-500"
  },
  {
    id: 3,
    name: "Data Analysis",
    description: "AI systems that identify patterns and insights from your business data, helping SMBs make better decisions without needing data scientists.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 14L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "text-purple-500"
  },
  {
    id: 4,
    name: "Content Creation",
    description: "AI tools that generate marketing copy, blog posts, and social media content, allowing SMBs to maintain a consistent online presence.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 17H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 10L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 7L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "text-yellow-500"
  },
  {
    id: 5,
    name: "Process Automation",
    description: "AI workflows that automate repetitive tasks like data entry, scheduling, and document processing, freeing up time for SMBs to focus on growth.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "text-red-500"
  }
];

interface AIVisualizationProps {
  width?: string;
  height?: string;
}

export default function AIVisualization({ 
  width = "100%",
  height = "500px"
}: AIVisualizationProps) {
  // State variables
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Timing constants (in milliseconds)
  const ZOOM_IN_DURATION = 5000; // 5 seconds for each case to be shown (increased from 4s)
  const TRANSITION_DURATION = 1500; // 1.5 second transition between cases (increased from 1s)
  
  // Initialize animation cycle
  useEffect(() => {
    let cycleTimeout: NodeJS.Timeout;
    let currentIndex = 0;
    
    // Function to start the cycle
    const startCycle = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsZoomed(true);
        setActiveCase(aiUseCases[currentIndex].id);
        setIsTransitioning(false);
      
        // Set a timeout to zoom out after displaying for ZOOM_IN_DURATION
        cycleTimeout = setTimeout(() => {
          setIsTransitioning(true);
          setTimeout(() => {
            setIsZoomed(false);
            setIsTransitioning(false);
            
            // After zooming out, set a timeout to move to the next use case
            setTimeout(() => {
              currentIndex = (currentIndex + 1) % aiUseCases.length;
              startCycle();
            }, TRANSITION_DURATION / 2);
          }, 300); // Short delay for transitioning out
        }, ZOOM_IN_DURATION);
      }, 300); // Short delay for transitioning in
    };
    
    // Start the cycle after a short delay
    const initialTimeout = setTimeout(() => {
      startCycle();
    }, 1000);
    
    // Clean up all timeouts on unmount
    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(cycleTimeout);
    };
  }, []);
  
  // Get the active use case object
  const activeUseCase = activeCase ? aiUseCases.find(c => c.id === activeCase) : null;
  
  return (
    <div className="relative bg-white rounded-lg overflow-visible" style={{ height, width }}>
      {/* Base Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main center circle */}
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg z-10">
          <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center animate-pulse-strong">
            <span className="text-primary font-bold text-xl">AI</span>
          </div>
        </div>
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <line x1="400" y1="300" x2="200" y2="150" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="3" strokeDasharray="5,5" className="animate-fadeIn" style={{ animationDelay: '0.1s' }} />
          <line x1="400" y1="300" x2="600" y2="150" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="3" strokeDasharray="5,5" className="animate-fadeIn" style={{ animationDelay: '0.2s' }} />
          <line x1="400" y1="300" x2="600" y2="450" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="3" strokeDasharray="5,5" className="animate-fadeIn" style={{ animationDelay: '0.3s' }} />
          <line x1="400" y1="300" x2="200" y2="450" stroke="rgba(234, 179, 8, 0.5)" strokeWidth="3" strokeDasharray="5,5" className="animate-fadeIn" style={{ animationDelay: '0.4s' }} />
        </svg>
        
        {/* Satellite nodes for each AI use case */}
        {aiUseCases.map((useCase) => (
          <div 
            key={useCase.id}
            className={`absolute w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-[800ms] ease-in-out ${useCase.color} shadow-md z-20
              ${isZoomed && activeCase === useCase.id ? 'scale-150 z-30' : 'scale-100'}
              ${isZoomed && activeCase !== useCase.id ? 'opacity-40' : 'opacity-100'}
              ${isTransitioning ? 'transition-all duration-[800ms] ease-in-out' : ''}
              ${useCase.id === 1 ? 'top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2' : ''}
              ${useCase.id === 2 ? 'top-1/5 right-1/4 translate-x-1/2 -translate-y-1/2' : ''}
              ${useCase.id === 3 ? 'bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2' : ''}
              ${useCase.id === 4 ? 'bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2' : ''}
              ${useCase.id === 5 ? 'top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2' : ''}
            `}
          >
            <div className="w-10 h-10">
              {useCase.icon}
            </div>
          </div>
        ))}
        
        {/* Spinning animations when not zoomed */}
        {!isZoomed && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-50 z-0">
            <div className="w-full h-full rounded-full border-4 border-dashed border-primary/40 animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-dashed border-blue-400/40 animate-spin-slow-reverse"></div>
          </div>
        )}
      </div>
      
      {/* Modal overlay for active case - completely separate from the visualization */}
      {isZoomed && activeUseCase && (
        <div className={`absolute inset-0 flex items-center justify-center z-50 transition-opacity duration-[800ms] ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="relative w-[90%] max-w-md bg-white rounded-xl p-6 shadow-2xl border-2 border-primary z-[999]">
            <div className={`w-16 h-16 mx-auto mb-4 ${activeUseCase.color}`}>
              {activeUseCase.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{activeUseCase.name}</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              {activeUseCase.description}
            </p>
            <div className="mt-4 p-4 bg-primary/20 rounded-lg">
              <p className="text-base text-primary font-medium">
                <span className="font-bold">SMB Impact:</span> {' '}
                {activeUseCase.id === 1 && "Reduce customer service costs by up to 30% while improving response times."}
                {activeUseCase.id === 2 && "Increase sales conversion rates by 25% with personalized, automated follow-ups."}
                {activeUseCase.id === 3 && "Make data-driven decisions that improve profitability by 15-20%."}
                {activeUseCase.id === 4 && "Save 10+ hours per week on content creation while maintaining quality."}
                {activeUseCase.id === 5 && "Reduce manual processing time by up to 80% through intelligent automation."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 