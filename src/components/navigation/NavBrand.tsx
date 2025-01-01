import React from 'react';
import { Factory } from 'lucide-react';

export function NavBrand() {
  return (
    <div className="flex items-center gap-2">
      <Factory className="w-8 h-8 text-blue-600" />
      <span className="text-xl font-bold text-gray-900">Maketi Global</span>
    </div>
  );
}