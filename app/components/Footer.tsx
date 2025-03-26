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
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-text-accent">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-text-accent">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-text-main font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="/solutions#automation" className="text-text-sub hover:text-text-accent">AI Automation</a></li>
              <li><a href="/solutions#customer-support" className="text-text-sub hover:text-text-accent">Customer Support</a></li>
              <li><a href="/solutions#sales-tools" className="text-text-sub hover:text-text-accent">Sales Tools</a></li>
              <li><a href="/solutions#data-analysis" className="text-text-sub hover:text-text-accent">Data Analysis</a></li>
              <li><a href="/solutions#custom" className="text-text-sub hover:text-text-accent">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-text-main font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-text-sub hover:text-text-accent">About</Link></li>
              <li><Link href="/how-it-works" className="text-text-sub hover:text-text-accent">How It Works</Link></li>
              <li><Link href="/why-choose-us" className="text-text-sub hover:text-text-accent">Why Choose Us</Link></li>
              <li><Link href="/success-stories" className="text-text-sub hover:text-text-accent">Success Stories</Link></li>
              <li><Link href="/case-studies" className="text-text-sub hover:text-text-accent">Case Studies</Link></li>
              <li><Link href="/pricing" className="text-text-sub hover:text-text-accent">Pricing</Link></li>
              <li><Link href="/blog" className="text-text-sub hover:text-text-accent">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-text-main font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-text-sub">info@singletonsgroup.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-text-sub">(425) 877-8881</span>
              </li>
              <li className="mt-6">
                <Link 
                  href="https://calendly.com/singletonsgroup/consultation" 
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
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-text-sub hover:text-text-accent text-sm">Privacy Policy</a>
            <a href="/terms-of-service" className="text-text-sub hover:text-text-accent text-sm">Terms of Service</a>
            <a href="/cookie-policy" className="text-text-sub hover:text-text-accent text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 