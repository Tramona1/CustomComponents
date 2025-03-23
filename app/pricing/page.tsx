'use client';

import Link from 'next/link';

export default function Pricing() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-xl text-black text-center mb-6">
          Pricing That Fits Your Business
        </h1>
        <p className="subheading text-center mb-16">
          We believe AI should work for every SMB, so our pricing is simple, flexible, and based on what you need. No hidden fees—just value.
        </p>

        {/* How It Works */}
        <div className="bg-lightGray p-8 rounded-xl mb-16">
          <h2 className="heading-md text-primary mb-4">How It Works</h2>
          <p className="text-black mb-6">
            After your free consultation, we'll design a custom plan with the AI tools that fit your business. You pay per user and per tool—only for what you use. We handle setup and support, so you get results without the headache.
          </p>
        </div>

        {/* Pricing Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Per Seat */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Per Seat</h2>
            <div className="text-3xl font-bold text-black mb-4">$50<span className="text-lg font-normal">/month per user</span></div>
            <p className="text-black">
              Covers access, setup, and basic support for your team.
            </p>
          </div>

          {/* Per Tool */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Per Tool</h2>
            <div className="text-3xl font-bold text-black mb-4">$25-$100<span className="text-lg font-normal">/month per tool</span></div>
            <p className="text-black">
              Scales with the number of tools you choose. Exact costs depend on the tools selected and will be provided during your consultation.
            </p>
          </div>
        </div>

        {/* Example */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-primary mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">Example</h2>
          <p className="text-black mb-6">
            A 5-person team using 3 tools might pay $400/month ($250 for seats + $150 for tools). Your exact cost will depend on the tools we select together.
          </p>
          <div className="bg-lightGray p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-black font-medium">5 users × $50/seat</p>
              </div>
              <div className="text-right">
                <p className="text-black font-medium">$250/month</p>
              </div>
              <div>
                <p className="text-black font-medium">3 tools × avg. $50/tool</p>
              </div>
              <div className="text-right">
                <p className="text-black font-medium">$150/month</p>
              </div>
              <div>
                <p className="text-black font-bold">Total</p>
              </div>
              <div className="text-right">
                <p className="text-black font-bold">$400/month</p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">What You Get</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-black">Full setup and onboarding</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-black">Custom workflows tailored to your business</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-black">Ongoing support and troubleshooting</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-black">Free consultation to start</span>
            </li>
          </ul>
        </div>

        {/* Optional Setup Fee */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">Optional Setup Fee</h2>
          <p className="text-black">
            For complex setups, a one-time fee of $500-$2,000 may apply, often waived for simpler implementations or annual commitments.
          </p>
        </div>

        <p className="text-lg text-black text-center mb-8">
          Not sure what you need? Our free consultation will give you a clear, custom quote.
        </p>

        <div className="text-center">
          <p className="text-lg text-black mb-6">
            Book a free consultation to get your custom quote.
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