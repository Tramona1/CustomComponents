'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import IntegrationVisual from '../components/IntegrationVisual';
import SolutionBuilder from '../components/SolutionBuilder';
import SolutionBundles from '../components/SolutionBundles';
import AIGridSolutions from '../components/AIGridSolutions';
import { allAISolutions } from '../data/aiSolutions';

export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomBuilderOpen, setIsCustomBuilderOpen] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              AI Solutions That Grow Your Business
            </h1>
            <p className="text-xl font-['ui-sans-serif,system-ui,sans-serif'] text-[#1F2937] mb-8">
              Find the perfect AI tools to save time, reduce costs, and boost efficiency—no technical expertise required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#popular-bundles"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-[15px] font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all font-['ui-sans-serif,system-ui,sans-serif']"
              >
                View AI Bundles
              </a>
              <Link
                href="https://calendly.com/singletonsgroup/consultation"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-[15px] font-medium rounded-full text-[#1F2937] bg-white hover:bg-gray-50 transition-all font-['ui-sans-serif,system-ui,sans-serif']"
              >
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Bundles Section */}
      <SolutionBundles />

      {/* Integration Visual */}
      <IntegrationVisual />
      
      {/* All AI Solutions Grid */}
      <AIGridSolutions solutions={allAISolutions} />

      {/* Solution Builder */}
      <div id="customSolution" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Your Custom AI Solution</h2>
            <p className="text-xl font-['ui-sans-serif,system-ui,sans-serif'] text-[#1F2937] max-w-3xl mx-auto">
              Tell us about your business, and we'll recommend the perfect AI solution for your specific needs.
            </p>
          </div>
          <SolutionBuilder />
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl font-['ui-sans-serif,system-ui,sans-serif'] mb-8">
            Take the first step toward a more efficient, productive future with AI that works for your business.
          </p>
          <Link 
            href="https://calendly.com/singletonsgroup/consultation" 
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-[15px] font-medium rounded-full text-primary bg-white hover:bg-gray-100 shadow-lg transition-all font-['ui-sans-serif,system-ui,sans-serif']"
          >
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </main>
  );
} 