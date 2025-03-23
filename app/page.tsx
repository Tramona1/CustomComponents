'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Custom components
import EmailForm from './components/EmailForm';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import SolutionsPreview from './components/SolutionsPreview';
import TrustElements from './components/TrustElements';
import BusinessChallenges from './components/BusinessChallenges';

export default function Home() {
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions-section');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                  Simplify AI for Your Business
                </h1>
                <p className="text-xl text-black mb-8">
                  Stop struggling with the complexity of AI. We find, set up, and manage the perfect AI tools for your small business, so you can save time and grow effortlessly.
                </p>
                <p className="text-lg text-black mb-8">
                  With hundreds of AI tools out there, each pushing their own agenda, it's hard to know where to start—or how to make them work for your business. We cut through the noise: we aggregate the best solutions, consult with you to match your needs, and handle the setup. No tech expertise required—just results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://calendly.com/yourcompany/consultation" target="_blank" className="btn btn-primary">
                    Book a Free Consultation
                  </Link>
                  <button onClick={scrollToVideo} className="btn btn-secondary">
                    Watch How It Works
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/hero-illustration.svg"
                  alt="AI for small business illustration"
                  width={600}
                  height={400}
                  className="max-w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Challenges Section */}
      <BusinessChallenges />

      {/* Video Section */}
      <section id="video-section" className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              See How It Works
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Watch how we identify, set up, and manage the perfect AI tools for your business
            </p>
          </div>
          
          <VideoSection />
        </div>
      </section>

      {/* Trust Elements */}
      <TrustElements />

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              See how we've helped small businesses just like yours
            </p>
          </div>

          <Testimonials />

          <div className="mt-12 text-center">
            <Link href="https://calendly.com/yourcompany/consultation" target="_blank" className="btn btn-primary">
              Get Started With a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <SolutionsPreview />

      {/* Final CTA */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Guessing. Start Growing with AI.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free consultation, and let us simplify AI for your business. We'll find the right tools, implement them, and support you every step of the way.
          </p>
          <Link 
            href="https://calendly.com/yourcompany/consultation" 
            target="_blank" 
            className="btn bg-white text-primary hover:bg-opacity-90 px-8 py-4 text-lg font-medium"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
} 