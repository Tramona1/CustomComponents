'use client';

import Link from 'next/link';

export default function WhyUs() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-xl text-black text-center mb-6">
          Why Choose Your Company for AI?
        </h1>
        <p className="subheading text-center mb-16">
          AI doesn't have to be hard. Here's why we're the partner your business needs:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Reason 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">We Do the Work For You</h2>
            <p className="text-black">
              Forget hunting for tools or figuring out setups. We handle everything—finding the right AI, integrating it, and making sure it works perfectly for your business.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Dead Simple to Use</h2>
            <p className="text-black">
              No tech skills? No problem. Our team sets up user-friendly solutions and trains you, so you're up and running fast.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Free Consultation, Real Results</h2>
            <p className="text-black">
              Start with a no-cost, no-strings call. We'll show you exactly how AI can save time, cut costs, and grow your business—tailored to you.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Affordable and Flexible</h2>
            <p className="text-black">
              Pay only for what you need. Our pricing fits your budget and scales with your business, powered by the best AI tools out there.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="heading-md text-black text-center mb-8">
            What Our Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-lightGray p-6 rounded-xl">
              <blockquote className="text-black mb-4">
                "Your Company saved us 10 hours a week on admin tasks. It's simple and affordable—exactly what we needed."
              </blockquote>
              <p className="text-darkGray text-sm">
                - Lisa K., Founder, Peak Performance Services (Denver, CO)
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-lightGray p-6 rounded-xl">
              <blockquote className="text-black mb-4">
                "The consultation showed us AI we'd never have found on our own. Setup was a breeze, and sales are up 15%."
              </blockquote>
              <p className="text-darkGray text-sm">
                - James P., Owner, Riverfront Manufacturing (Portland, OR)
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-lightGray p-6 rounded-xl">
              <blockquote className="text-black mb-4">
                "I was skeptical about AI, but the team made it so easy. Now, our customer service runs 24/7, and clients love it."
              </blockquote>
              <p className="text-darkGray text-sm">
                - David L., Manager, TechFix Solutions (Boston, MA)
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg text-black text-center mb-8">
          We're here to make AI work for you—not the other way around.
        </p>

        <div className="text-center">
          <p className="text-lg text-black mb-6">
            Book your free consultation and see the difference.
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