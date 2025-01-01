import React from 'react';
import { ClipboardList, BoxesIcon, Shield, TrendingUp, Globe } from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Centralized Order Management',
    description: 'Receive orders from any channel, manage pricing, quantities, and delivery deadlines in a single, automated workflow.'
  },
  {
    icon: BoxesIcon,
    title: 'Real-Time Inventory Tracking',
    description: 'Track materials and resources in real-time to reduce waste and easily reorder supplies.'
  },
  {
    icon: Shield,
    title: 'Quality Control Automation',
    description: 'Automate quality checks and ensure every product meets specifications.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable for Growth',
    description: 'Scalable features that grow with your needs, no matter the size of your operation.'
  },
  {
    icon: Globe,
    title: 'Market Access',
    description: 'Connect with micro and macro sellers to expand your customer base and grow your business.'
  }
];

export function Features() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          Empowering Manufacturing SMEs to do more
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}