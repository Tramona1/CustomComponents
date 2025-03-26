'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Bundle = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  setupTime: string;
  idealFor: string[];
  solutions: string[];
  icon: string;
};

const bundles: Bundle[] = [
  {
    id: 'starter',
    name: 'Communication Assistant',
    tagline: 'Streamline daily communication tasks',
    description: 'Perfect for small businesses looking to save time on emails, meetings, and customer interactions.',
    price: 'Customized for your business needs',
    setupTime: '',
    idealFor: ['Solo entrepreneurs', 'Small teams (1-5 employees)', 'Service businesses'],
    solutions: [
      'Email drafting and management',
      'Meeting summaries and action items',
      'Customer inquiry responses',
      'Social media content creation',
      'Simple document generation'
    ],
    icon: '/images/icons/communication.svg'
  },
  {
    id: 'growth',
    name: 'Customer Experience Bundle',
    tagline: 'Enhance your customer interactions',
    description: 'Elevate your customer service with AI-powered tools that provide fast, personalized support.',
    price: 'Tailored to your requirements',
    setupTime: '',
    idealFor: ['Small to medium businesses', 'E-commerce stores', 'Service-based businesses'],
    solutions: [
      '24/7 customer chat support',
      'Email inquiry automation',
      'Customer behavior analysis',
      'Personalized product recommendations',
      'Review generation and management'
    ],
    icon: '/images/icons/customer-care.svg'
  },
  {
    id: 'enterprise',
    name: 'Business Operations Suite',
    tagline: 'Transform your business workflows',
    description: 'Comprehensive AI solution set that optimizes core business processes and unlocks new efficiencies.',
    price: 'Custom enterprise pricing',
    setupTime: '',
    idealFor: ['Growing businesses', 'Professional services firms', 'Multi-location businesses'],
    solutions: [
      'Document analysis and processing',
      'Administrative task automation',
      'Business intelligence dashboards',
      'Financial forecasting',
      'Inventory and resource optimization'
    ],
    icon: '/images/icons/operations.svg'
  }
];

export default function SolutionBundles() {
  const [activeBundle, setActiveBundle] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const toggleBundle = (bundleId: string) => {
    if (activeBundle === bundleId) {
      setActiveBundle(null);
    } else {
      setActiveBundle(bundleId);
    }
  };

  return (
    <section id="popular-bundles" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-gray-100 flex flex-col`}
            >
              {/* Bundle Header */}
              <div className="p-6 bg-gradient-to-r from-primary-light to-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`dots-pattern-${bundle.id}`} width="4" height="4" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="0.7" fill="currentColor" className="text-white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#dots-pattern-${bundle.id})`} />
                  </svg>
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{bundle.name}</h3>
                    <p className="text-white text-opacity-90 text-sm">{bundle.tagline}</p>
                  </div>
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bundle Content */}
              <div className="p-6 space-y-5 flex-grow flex flex-col">
                <div>
                  <p className="text-gray-600">{bundle.description}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Pricing</p>
                  <p className="text-lg font-semibold text-gray-900">{bundle.price}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Ideal For:</p>
                  <ul className="grid grid-cols-1 gap-2">
                    {bundle.idealFor.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-grow">
                  <button
                    onClick={() => toggleBundle(bundle.id)}
                    className="text-primary hover:text-primary-dark font-medium text-sm flex items-center focus:outline-none transition-colors w-full justify-between"
                  >
                    <span>View included solutions</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${activeBundle === bundle.id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeBundle === bundle.id && (
                    <div className="mt-3 transition-all">
                      <ul className="space-y-2">
                        {bundle.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                              <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-4">
                  <Link
                    href="https://calendly.com/blake-singletonsgroup/30min"
                    target="_blank"
                    className="inline-flex w-full items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
                  >
                    Schedule a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Don't see what you're looking for? We can create a custom bundle tailored to your specific needs.
          </p>
          <Link
            href="https://calendly.com/blake-singletonsgroup/30min"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
} 