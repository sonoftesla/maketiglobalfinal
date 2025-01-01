import React from 'react';
import { NavBrand } from './NavBrand';
import { NavLinks } from './NavLinks';
import { NavActions } from './NavActions';

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavBrand />
          <NavLinks />
          <NavActions />
        </div>
      </div>
    </nav>
  );
}