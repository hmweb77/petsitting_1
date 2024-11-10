"use client";

import { useState } from 'react';
import { Menu, X, PawPrint } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <PawPrint className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">PawPals</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-gray-600 hover:text-purple-600">Services</Link>
            <Link href="/#about" className="text-gray-600 hover:text-purple-600">About</Link>
            <Link href="/#testimonials" className="text-gray-600 hover:text-purple-600">Testimonials</Link>
            <Link href="/#contact" 
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/#services" 
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/#about" 
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/#testimonials" 
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}>
                Testimonials
              </Link>
              <Link href="/#contact" 
                className="block px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                onClick={() => setIsOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}