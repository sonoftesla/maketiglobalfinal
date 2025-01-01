import React from 'react';
import { ClipboardList, Settings, Package, CheckCircle, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Manage Orders',
    description: 'Start receiving orders from sellers and manage them in one centralized system.'
  },
  {
    icon: Settings,
    title: 'Automate Production',
    description: 'Create and manage Standard Operating Procedures (SOPs) to ensure efficiency.'
  },
  {
    icon: Package,
    title: 'Real-Time Inventory',
    description: 'Track materials and stay up-to-date with stock levels automatically.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Maintain product consistency with automated quality control systems.'
  },
  {
    icon: TrendingUp,
    title: 'Scale Operations',
    description: 'Expand your business with automated workflows and reliable delivery.'
  },
  {
    icon: CheckCircle,
    title: 'Unlock financing',
    description: 'Easily get working capital financing, as well as other forms of financing.'
  }
];

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
            <div 
              key={index}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-100 transition-all duration-300" />
                <feature.icon className="w-8 h-8 text-blue-600 relative z-10" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}