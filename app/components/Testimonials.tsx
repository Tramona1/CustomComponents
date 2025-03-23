'use client';

import { useState, useEffect } from 'react';

// Testimonial data
const testimonialData = [
  {
    id: 1,
    quote: "We cut meeting time by 50% with AI tools set up by Your Company. It's like having an extra team member!",
    name: "Sarah T.",
    role: "Owner",
    company: "GreenLeaf Retail",
    location: "Chicago, IL",
    industry: "Retail",
    results: "50% less meeting time",
  },
  {
    id: 2,
    quote: "Our customer support went from chaotic to seamless overnight. The setup was so easy—I wish we'd done this sooner.",
    name: "Mike R.",
    role: "Manager",
    company: "BlueSky Hospitality",
    location: "Austin, TX",
    industry: "Hospitality",
    results: "24/7 customer support",
  },
  {
    id: 3,
    quote: "Since partnering with Your Company, our productivity has skyrocketed. The AI tools handle all our scheduling and data entry, freeing up hours each week.",
    name: "Emily S.",
    role: "Owner",
    company: "Urban Eats Cafe",
    location: "Seattle, WA",
    industry: "Food & Beverage",
    results: "15+ hours saved weekly",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  return (
    <div className="relative">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Real Results from Real Businesses</h2>
        <p className="text-lg text-darkGray max-w-2xl mx-auto">
          See how small businesses just like yours are transforming with our AI solutions
        </p>
      </div>
      
      {/* Testimonial Cards */}
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonialData.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white border border-lightGray p-8 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-primary rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-lg text-black">{testimonial.name}</p>
                      <p className="text-darkGray">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary text-sm font-medium rounded-full">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>
                
                <blockquote className="text-xl font-medium mb-8 text-black relative">
                  <div className="absolute -left-2 -top-2 text-primary opacity-20">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.762 4C5.301 8.038 2 13.355 2 19.224C2 24.828 5.29 28 9.985 28C13.24 28 16 25.634 16 22.042C16 18.45 13.311 16.084 10.056 16.084C9.25 16.084 8.088 16.3 7.427 16.66C7.86 13.787 10.689 10.158 14.298 7.932L10.762 4ZM25.762 4C20.301 8.038 17 13.355 17 19.224C17 24.828 20.29 28 24.985 28C28.24 28 31 25.634 31 22.042C31 18.45 28.311 16.084 25.056 16.084C24.25 16.084 23.088 16.3 22.427 16.66C22.86 13.787 25.689 10.158 29.298 7.932L25.762 4Z" />
                    </svg>
                  </div>
                  <div className="pl-6">"{testimonial.quote}"</div>
                </blockquote>
                
                <div className="flex items-center justify-between border-t border-lightGray pt-6">
                  <div className="text-sm text-darkGray">
                    {testimonial.location}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-black">{testimonial.results}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonialData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => goToTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 