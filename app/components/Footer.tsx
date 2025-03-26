'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
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
          </div>
          
          <div>
            <h3 className="text-text-main font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions#automation" className="text-text-sub hover:text-text-accent">AI Automation</Link></li>
              <li><Link href="/solutions#customer-support" className="text-text-sub hover:text-text-accent">Customer Support</Link></li>
              <li><Link href="/solutions#sales-tools" className="text-text-sub hover:text-text-accent">Sales Tools</Link></li>
              <li><Link href="/solutions#data-analysis" className="text-text-sub hover:text-text-accent">Data Analysis</Link></li>
              <li><Link href="/solutions#custom" className="text-text-sub hover:text-text-accent">Custom Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-text-main font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-text-sub hover:text-text-accent">About</Link></li>
              <li><Link href="/how-it-works" className="text-text-sub hover:text-text-accent">How It Works</Link></li>
              <li><Link href="/why-choose-us" className="text-text-sub hover:text-text-accent">Why Choose Us</Link></li>
              <li><Link href="/success-stories" className="text-text-sub hover:text-text-accent">Success Stories</Link></li>
              <li><Link href="/pricing" className="text-text-sub hover:text-text-accent">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-text-main font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-text-sub">blake@singletonsgroup.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-text-sub">(425) 877-8881</span>
              </li>
              <li className="mt-6">
                <Link 
                  href="https://calendly.com/blake-singletonsgroup/30min" 
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
          <p className="text-text-sub text-sm">© {currentYear} SingletonsGroup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 