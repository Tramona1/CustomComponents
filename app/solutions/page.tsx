'use client';

import Link from 'next/link';

export default function Solutions() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-xl text-black text-center mb-6">
          AI Solutions That Solve Your Biggest Problems
        </h1>
        <p className="subheading text-center mb-16">
          We partner with a vast network of AI innovators to bring you hundreds of cutting-edge tools tailored to your business needs. Here's how we can help your business thrive:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Solution 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Smarter Meetings</h2>
            <p className="text-black">
              Cut meeting prep and follow-up time with AI that takes notes, schedules, and summarizes—keeping you focused on the big picture.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Effortless Email</h2>
            <p className="text-black">
              Let AI draft replies, prioritize your inbox, and keep you on top of communication—no more email overload.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">24/7 Customer Support</h2>
            <p className="text-black">
              Answer customer questions anytime with AI chatbots that feel human, without hiring extra staff.
            </p>
          </div>

          {/* Solution 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-lightGray">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Task Automation</h2>
            <p className="text-black">
              Free your team from repetitive work—AI can handle inventory, data entry, and more, so you can grow without burnout.
            </p>
          </div>
        </div>

        <p className="text-lg text-black text-center mb-10">
          With access to a diverse range of AI solutions, we'll craft the perfect combination for your unique challenges and goals.
        </p>

        <div className="text-center">
          <p className="text-lg text-black mb-6">
            See what's possible—book a free consultation.
          </p>
          <Link
            href="https://calendly.com/yourcompany/consultation"
            target="_blank"
            className="btn btn-primary"
          >
            Book Now
          </Link>
          <p className="mt-6 text-sm text-primary font-medium">
            Powered by 100+ AI Innovators
          </p>
        </div>
      </div>
    </section>
  );
} 