'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-xl text-black text-center mb-6">
          Meet the Team Making AI Simple for SMBs
        </h1>
        <p className="subheading text-center mb-16">
          At Your Company, we're passionate about helping small businesses thrive with AI. Our mission? Take the complexity out of tech so you can focus on what you do best.
        </p>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="heading-md text-primary mb-6">Our Story</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-black mb-4">
                We started because we saw too many SMBs missing out on AI—either because it's too confusing or too expensive. With years in business and tech, we've built a service that delivers real value without the hassle.
              </p>
              <p className="text-black">
                And we're just getting started—soon, we'll offer a unified platform to make AI even simpler for businesses like yours.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 w-full bg-lightGray rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-primary opacity-20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="mb-16">
          <h2 className="heading-md text-primary mb-6">Our Promise</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 md:order-2">
              <p className="text-black">
                We're not just a vendor—we're your partner. From the first call to ongoing support, we're here to make sure AI boosts your business, not burdens it.
              </p>
            </div>
            <div className="md:w-1/2 md:order-1">
              <div className="relative h-64 w-full bg-lightGray rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-primary opacity-20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="heading-md text-primary mb-6">Our Team</h2>
          <p className="text-black text-center mb-8">
            Our team brings expertise in AI, business strategy, and customer success—ready to help you succeed.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-lightGray rounded-full mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-darkGray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">Alex Johnson</h3>
              <p className="text-darkGray">CEO & Founder</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-lightGray rounded-full mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-darkGray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">Maria Rodriguez</h3>
              <p className="text-darkGray">Head of AI Strategy</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-lightGray rounded-full mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-darkGray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">James Chen</h3>
              <p className="text-darkGray">Customer Success Lead</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-black mb-6">
            Ready to work with us? Book a free consultation today.
          </p>
          <Link
            href="https://calendly.com/yourcompany/consultation"
            target="_blank"
            className="btn btn-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
} 