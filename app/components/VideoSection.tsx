'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import VideoEmailModal from './VideoEmailModal';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (!hasSubmittedEmail) {
      setShowEmailModal(true);
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play()
          .catch(error => {
            console.error("Error playing video:", error);
          });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEmailSubmit = (email: string) => {
    // In a real application, you would save this email to your database
    console.log('Email submitted:', email);
    setHasSubmittedEmail(true);
    setShowEmailModal(false);
    
    // Auto-play the video after email submission
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
          .catch(error => {
            console.error("Error playing video:", error);
          });
        setIsPlaying(true);
      }
    }, 100);
  };

  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Three Easy Steps to get started with AI
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We handle all the complexity so you don't have to. Our proven process makes AI implementation simple and stress-free.
        </p>
      </div>
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-xl overflow-hidden shadow-xl bg-white border border-lightGray">
          <div className="relative aspect-video">
            {/* Video Fallback Image */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-5">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg" onClick={handlePlayClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-bold drop-shadow-md">How We Make AI Simple for SMBs</p>
                  <p className="text-sm drop-shadow-md">03:45 min</p>
                </div>
              </div>
            )}
            
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              onEnded={() => setIsPlaying(false)}
              poster="/video-thumbnail.jpg"
            >
              <source src="/explainer-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">How We Simplify AI</h3>
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">We Get to Know You</h4>
                <p className="text-black">A quick call to understand your challenges and goals. We listen to your needs and tailor our recommendations accordingly.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">We Find the Right Tools</h4>
                <p className="text-black">From our network of 1000+ AI partners, we tailor the perfect solutions that fit your needs</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">Discuss Use Cases</h4>
                <p className="text-black">We have a detailed conversation about specific use cases and how implementing the right AI solutions will enhance your business operations and results.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-primary font-bold">4</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">We Handle Everything</h4>
                <p className="text-black">Full setup, integration, and ongoing support—no stress for you. We make sure everything works seamlessly with your existing systems.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://calendly.com/singletonsgroup/consultation" 
              target="_blank" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
            >
              Schedule a Free Call
            </Link>
            <button 
              onClick={handlePlayClick}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all"
            >
              Watch Video
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      <VideoEmailModal 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
        onEmailSubmit={handleEmailSubmit} 
      />
    </>
  );
};

export default VideoSection; 