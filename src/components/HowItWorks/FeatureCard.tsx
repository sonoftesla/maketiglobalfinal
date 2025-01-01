import React from 'react';
import type { Feature } from './types';

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { icon: Icon, title, description } = feature;
  
  return (
    <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="mb-4 relative">
        <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-100 transition-all duration-300" />
        <Icon className="w-8 h-8 text-blue-600 relative z-10" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}