'use client';

import { useState } from 'react';
import Link from 'next/link';

const challenges = [
  {
    id: 'fragmented',
    title: 'Too Many AI Options',
    icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    description: 'With hundreds of AI tools on the market, each pushing their own solution, it\'s overwhelming to know where to start. We aggregate the best options across all categories.',
    solution: 'AI Solution Aggregation'
  },
  {
    id: 'expertise',
    title: 'Lack of AI Expertise',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    description: 'Most businesses don\'t have the technical expertise to evaluate or implement AI tools. We handle everything from selection to setup to training.',
    solution: 'Full Implementation Service'
  },
  {
    id: 'biased',
    title: 'Biased AI Recommendations',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    description: 'Most AI providers are selling their own products with their own agenda. We\'re vendor-agnostic and only recommend what\'s truly best for your specific needs.',
    solution: 'Unbiased AI Consulting'
  },
  {
    id: 'integration',
    title: 'Complex Integration Needs',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
    description: 'Making different AI tools work together is challenging. We create a cohesive system that integrates with your existing software and workflows.',
    solution: 'Seamless AI Integration'
  },
  {
    id: 'roi',
    title: 'Uncertain AI ROI',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    description: 'Many businesses are unsure which AI investments will deliver actual returns. We focus on practical solutions with measurable impact on your bottom line.',
    solution: 'ROI-Focused AI Strategy'
  },
  {
    id: 'custom',
    title: 'Unique Business Needs',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    description: 'Your business isn\'t one-size-fits-all, and neither should your AI solutions be. We tailor our recommendations to your specific industry, size, and challenges.',
    solution: 'Custom AI Solution'
  }
];

const BusinessChallenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);

  const handleSelectChallenge = (id: string) => {
    setSelectedChallenge(id);
  };

  const getSelectedChallenge = () => {
    return challenges.find(challenge => challenge.id === selectedChallenge);
  };

  return (
    <div className="bg-white py-16 border-y border-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            What's Your Biggest Business Challenge?
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Select your biggest pain point and see how we can transform it with AI
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {challenges.map((challenge) => (
            <button
              key={challenge.id}
              onClick={() => handleSelectChallenge(challenge.id)}
              className={`p-6 rounded-xl border transition-all ${
                selectedChallenge === challenge.id
                  ? 'border-primary bg-primary bg-opacity-5 shadow-md'
                  : 'border-lightGray hover:border-primary hover:shadow-sm'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  selectedChallenge === challenge.id
                    ? 'bg-primary text-white'
                    : 'bg-primary bg-opacity-10 text-primary'
                }`}>
                  <svg 
                    className="w-8 h-8" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d={challenge.icon} 
                    />
                  </svg>
                </div>
                <h3 className={`font-bold ${
                  selectedChallenge === challenge.id
                    ? 'text-primary'
                    : 'text-black'
                }`}>
                  {challenge.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {selectedChallenge && (
          <div className="bg-white border border-primary rounded-xl p-8 max-w-3xl mx-auto transition-all shadow-md">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <svg 
                  className="w-8 h-8" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d={getSelectedChallenge()?.icon || ''} 
                  />
                </svg>
              </div>
              <div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary text-sm font-medium rounded-full">
                    {getSelectedChallenge()?.solution}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{getSelectedChallenge()?.title}</h3>
                <p className="text-black mb-6">{getSelectedChallenge()?.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://calendly.com/yourcompany/consultation" target="_blank" className="btn btn-primary">
                    Get Your Custom Solution
                  </Link>
                  <Link href="/solutions" className="btn btn-secondary">
                    See All Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {!selectedChallenge && (
          <div className="bg-primary bg-opacity-5 border border-primary border-opacity-20 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-3">Select any challenge above to see how AI can help</h3>
              <p className="text-black mb-6">
                Or if you don't see your specific challenge, we can create a custom AI solution for your unique business needs.
              </p>
              <Link href="https://calendly.com/yourcompany/consultation" target="_blank" className="btn btn-primary">
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-darkGray">
            We've helped businesses solve these challenges and more. <br />
            <span className="font-medium">No problem is too big or too small for our AI solutions.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessChallenges; 