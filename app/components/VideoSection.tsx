'use client';

import Link from 'next/link';

const VideoSection = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          How We Simplify AI
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We handle all the complexity so you don't have to. Our proven process makes AI implementation simple and stress-free.
        </p>
      </div>
    
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 mb-8">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
              <span className="text-primary font-bold text-lg">1</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-black mb-2">We Get to Know You</h4>
              <p className="text-black text-lg">A quick call to understand your challenges and goals. We listen to your needs and tailor our recommendations accordingly.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
              <span className="text-primary font-bold text-lg">2</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-black mb-2">We Find the Right Tools</h4>
              <p className="text-black text-lg">From our network of 1000+ AI partners, we tailor the perfect solutions that fit your needs</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
              <span className="text-primary font-bold text-lg">3</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-black mb-2">Discuss Use Cases</h4>
              <p className="text-black text-lg">We have a detailed conversation about specific use cases and how implementing the right AI solutions will enhance your business operations and results.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
              <span className="text-primary font-bold text-lg">4</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-black mb-2">We Handle Everything</h4>
              <p className="text-black text-lg">Full setup, integration, and ongoing support—no stress for you. We make sure everything works seamlessly with your existing systems.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link
            href="https://calendly.com/blake-singletonsgroup/30min"
            target="_blank" 
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
          >
            Inquire how AI can help your business
          </Link>
        </div>
      </div>
    </>
  );
};

export default VideoSection; 