import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Solution {
  id: string;
  name: string;
  title?: string;
  icon: string | React.ReactNode;
  description: string;
  scenario: string;
  features: string[];
  integrations: string[];
}

interface EnhancedSolutionGridProps {
  solutions: Solution[];
}

const EnhancedSolutionGrid = ({ solutions }: EnhancedSolutionGridProps) => {
  const [activeSolution, setActiveSolution] = useState<string | null>(null);

  return (
    <div className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Featured Solutions</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These proven AI tools have helped hundreds of businesses like yours save time, reduce costs, and boost efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <div 
            key={solution.id}
            className={`bg-white rounded-xl overflow-hidden border transition-all duration-200 hover:shadow-md ${activeSolution === solution.id ? 'border-primary shadow-md' : 'border-gray-200'}`}
            onMouseEnter={() => setActiveSolution(solution.id)}
            onMouseLeave={() => setActiveSolution(null)}
          >
            <div className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                {typeof solution.icon === 'string' ? (
                  <Image src={solution.icon} alt={solution.name} width={24} height={24} />
                ) : (
                  solution.icon
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.name}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              
              {/* Scenario */}
              <div className="bg-gray-50 rounded-lg p-4 mb-5 border border-gray-100">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Real-world impact: </span>
                  {solution.scenario}
                </p>
              </div>
              
              {/* Features */}
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
              <ul className="space-y-1 mb-5">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <svg className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Integrations */}
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Integrates With:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {solution.integrations.map((integration, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/5 text-primary"
                  >
                    {integration}
                  </span>
                ))}
              </div>
              
              <Link
                href={`https://calendly.com/singletonsgroup/consultation?solution=${solution.name}`}
                target="_blank"
                className="block w-full text-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
              >
                Get This Solution
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Don't see what you need? We have 1000+ AI solutions in our network.</p>
        <Link 
          href="#custom-solution"
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all"
        >
          Build Your Custom Solution
          <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EnhancedSolutionGrid; 