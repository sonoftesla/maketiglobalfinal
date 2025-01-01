import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <div className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Scale Your Manufacturing Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join hundreds of manufacturers who have automated their operations, improved quality, and gained access to new markets with Maketi Global.
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
          Request a Demo
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}