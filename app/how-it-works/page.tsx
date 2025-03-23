'use client';

import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-xl text-black text-center mb-6">
          How We Bring AI to Your Business in 3 Easy Steps
        </h1>
        <p className="subheading text-center mb-16">
          We take the complexity out of AI so you can focus on what matters—running your business. Here's how it works:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <span className="text-primary text-2xl font-bold">1</span>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Free Discovery Call</h2>
            <p className="text-black">
              We start with a 30-minute chat to learn about your business, your goals, and your challenges. No pressure, no jargon—just a conversation to find where AI can help.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <span className="text-primary text-2xl font-bold">2</span>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Custom AI Plan</h2>
            <p className="text-black">
              Our team designs a tailored solution, picking the best AI tools for your needs—whether it's automating tasks, managing emails, or supporting customers. We handle the details so you don't have to.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <span className="text-primary text-2xl font-bold">3</span>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Full Setup & Support</h2>
            <p className="text-black">
              We set everything up—tools, workflows, integrations—and train your team to use it. Plus, we're here with ongoing support to keep things running smoothly.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-black mb-6">
            Ready to get started? Book your free consultation today.
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