import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive?: boolean;
}

export function TestimonialCard({ testimonial, isActive = false }: TestimonialCardProps) {
  return (
    <div 
      className={`
        transform transition-all duration-500 ease-out
        ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
      `}
    >
      <div className="relative bg-white rounded-2xl p-8 shadow-xl">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8 font-light">
          "{testimonial.quote}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-blue-50">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
          
          <div>
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <p className="text-sm text-blue-600">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}