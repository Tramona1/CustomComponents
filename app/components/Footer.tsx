'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lightGray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-black mb-4">Your Company</h3>
            <p className="text-darkGray mb-4">
              Supercharge your small business with AI tools that automate tasks, save time, and boost growth—all set up for you.
            </p>
            <p className="text-darkGray">
              <a href="mailto:info@yourcompany.com" className="text-primary hover:underline">
                info@yourcompany.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-darkGray hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-darkGray hover:text-primary">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-darkGray hover:text-primary">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-darkGray hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-darkGray hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-black mb-4">Get Started</h3>
            <p className="text-darkGray mb-4">
              Ready to transform your business with AI?
            </p>
            <Link
              href="https://calendly.com/yourcompany/consultation"
              target="_blank"
              className="btn btn-primary"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-darkGray text-sm">
            &copy; {currentYear} Your Company. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-primary text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-primary text-sm hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 