'use client';

import { useState, useEffect } from 'react';

// Testimonial data
const testimonialData = [
  {
    id: 1,
    quote: "I was extremely skeptical about AI - it seemed like something only big tech companies could use. We were drowning in customer emails and spending hours on data entry. SingletonsGroup walked us through everything step by step, and within two weeks, our AI assistant was handling 70% of customer inquiries. The best part? No technical knowledge required from us. We're now saving 23 hours a week that we can spend on actual business growth.",
    name: "Sarah T.",
    role: "Owner",
    company: "GreenLeaf Retail",
    location: "Chicago, IL",
    industry: "Retail",
    results: "70% reduction in customer response time",
    before: "Overwhelmed by manual tasks",
    after: "23+ hours saved weekly"
  },
  {
    id: 2,
    quote: "The thought of implementing AI in our small hotel was intimidating. We had tried a chatbot before, but it was useless and frustrating to set up. SingletonsGroup showed us that AI isn't just chatbots - they integrated an AI system that manages our bookings, sends personalized follow-ups, and even predicts our busiest periods for staffing. Our occupancy rate has increased by 32% this year, and our staff can focus on in-person hospitality rather than staring at screens. The transition was remarkably smooth.",
    name: "Mike R.",
    role: "Manager",
    company: "BlueSky Hospitality",
    location: "Austin, TX",
    industry: "Hospitality",
    results: "32% increase in occupancy rate",
    before: "Failed attempt with basic chatbot",
    after: "Comprehensive AI booking & prediction system"
  },
  {
    id: 3,
    quote: "As a restaurant owner, I never thought AI was relevant for a business like mine. I was spending 15+ hours weekly on inventory, scheduling, and supplier communication. Now our AI system predicts our ingredient needs, automatically places orders when supplies run low, and even helps with menu planning based on seasonal availability. The implementation was worry-free - SingletonsGroup handled all the technical parts and trained our staff in just two sessions. Our food waste is down 40%, and I finally have time to develop new recipes again.",
    name: "Emily S.",
    role: "Owner",
    company: "Urban Eats Cafe",
    location: "Seattle, WA",
    industry: "Food & Beverage",
    results: "40% reduction in food waste",
    before: "15+ hours on admin tasks weekly",
    after: "Automated inventory & scheduling"
  },
  {
    id: 4,
    quote: "I run a small legal practice and was drowning in document review and client intake forms. I thought AI was either too expensive or too complicated for a 3-person firm like ours. SingletonsGroup recommended specific AI tools that now handle our document analysis, highlight key clauses, and automate our client intake process. The most surprising thing was how affordable it was compared to hiring another paralegal. Cases that took 6 hours to review now take just 45 minutes, and the accuracy has actually improved. I was worried about confidentiality, but they ensured all our AI solutions were legally compliant.",
    name: "James H.",
    role: "Attorney",
    company: "Heritage Law",
    location: "Portland, OR",
    industry: "Legal Services",
    results: "87% faster document review",
    before: "Concerned about cost and compliance",
    after: "More accurate work at a fraction of the time"
  }
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
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Real AI Transformations from First-Time Adopters</h2>
        <p className="text-lg text-darkGray max-w-2xl mx-auto">
          See how these businesses overcame their AI hesitations and achieved remarkable results, even with no prior technical experience
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
                
                {/* Before and After Section */}
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-gray-700">Before AI</span>
                    </div>
                    <p className="text-gray-600">{testimonial.before}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-gray-700">After AI</span>
                    </div>
                    <p className="text-gray-600">{testimonial.after}</p>
                  </div>
                </div>
                
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