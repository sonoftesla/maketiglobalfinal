import React from 'react';
import { features } from './features';
import { FeatureCard } from './FeatureCard';

export function HowItWorks() {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Maketi Global Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform streamlines your SME manufacturing from start to finish
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}