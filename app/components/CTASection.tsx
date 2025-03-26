'use client';

import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const CTASection = () => {
  return (
    <section className="bg-primary py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-8">
            Schedule a consultation with our AI experts and discover how our solutions can streamline operations, boost productivity, and drive growth for your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="https://calendly.com/blake-singletonsgroup/30min"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-full text-primary bg-white hover:bg-white/90 shadow-md transition-all"
            >
              Book a call to learn what AI can do for you
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <CheckCircleIcon className="h-10 w-10 text-white mb-3" />
            <p className="text-white font-medium">Trusted by 500+ SMBs</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircleIcon className="h-10 w-10 text-white mb-3" />
            <p className="text-white font-medium">1000+ AI Partners</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircleIcon className="h-10 w-10 text-white mb-3" />
            <p className="text-white font-medium">98% Client Satisfaction</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircleIcon className="h-10 w-10 text-white mb-3" />
            <p className="text-white font-medium">30-Day Satisfaction Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 