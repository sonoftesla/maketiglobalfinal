import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

export function TestimonialControls({ 
  onPrevious, 
  onNext, 
  currentIndex, 
  total 
}: TestimonialControlsProps) {
  return (
    <div className="flex items-center justify-center gap-8 mt-12">
      <button
        onClick={onPrevious}
        className="group p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
      </button>

      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`
              h-1.5 rounded-full transition-all duration-300
              ${currentIndex === index 
                ? 'w-8 bg-blue-600' 
                : 'w-1.5 bg-blue-200'
              }
            `}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="group p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-1"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}