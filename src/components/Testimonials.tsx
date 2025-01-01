import React from 'react';
import { TestimonialCard } from './testimonials/TestimonialCard';
import { TestimonialControls } from './testimonials/TestimonialControls';
import { useTestimonialCarousel } from './testimonials/useTestimonialCarousel';

export function Testimonials() {
  const { currentIndex, next, previous, testimonials } = useTestimonialCarousel();

  return (
    <div className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Manufacturers
          </h2>
          <p className="text-lg text-gray-600">
            Join these successful manufacturers who have transformed their operations
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="flex justify-center items-center min-h-[400px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`
                    absolute w-full transition-all duration-500 ease-in-out
                    ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                  `}
                >
                  <TestimonialCard 
                    testimonial={testimonial}
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          <TestimonialControls
            onPrevious={previous}
            onNext={next}
            currentIndex={currentIndex}
            total={testimonials.length}
          />
        </div>
      </div>
    </div>
  );
}