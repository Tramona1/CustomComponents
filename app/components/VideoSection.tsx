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
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">See How We Simplify AI for Your Business</h3>
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">Understand Your Business</h4>
                <p className="text-black">We start with a quick call to understand your business challenges and where AI can make the biggest impact.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">Find the Right AI Tools</h4>
                <p className="text-black">We select the perfect AI solutions from our network of 100+ tools—based on your needs, not vendor relationships.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">Implementation & Support</h4>
                <p className="text-black">We handle all the technical setup, integration with your systems, and team training—with ongoing support.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary bg-opacity-5 p-4 rounded-lg mb-8">
            <p className="text-black font-medium">
              "They made AI so simple. Instead of us evaluating dozens of tools, they found the perfect solution and set everything up. It was effortless."
            </p>
            <p className="text-sm text-darkGray mt-2">
              — Sarah T., Small Business Owner
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="https://calendly.com/yourcompany/consultation" target="_blank" className="btn btn-primary text-lg">
              Book a Free Consultation
            </Link>
            <button 
              onClick={handlePlayClick} 
              className="btn btn-secondary text-lg"
            >
              Watch Demo Video
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