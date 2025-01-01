import React from 'react';
import { scrollTo } from '../../utils/scrollTo';

const links = [
  { name: 'Features', id: 'features' },
  { name: 'How it Works', id: 'how-it-works' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Contact', id: 'contact' }
];

export function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <button
          key={link.name}
          onClick={() => scrollTo(link.id)}
          className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
        >
          {link.name}
        </button>
      ))}
    </div>
  );
}