import React from 'react';

export function NavActions() {
  return (
    <div className="flex items-center gap-4">
      <button className="hidden sm:block px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors">
        Log in
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );
}