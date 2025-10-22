import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation({ onLoginClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-orange-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">ek</span>
          </div>
          <span className="text-white font-bold text-xl">ekbill</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-orange-500 transition">
            Features
          </a>
          <a href="#benefits" className="text-gray-300 hover:text-orange-500 transition">
            Benefits
          </a>
          <a href="#inventory" className="text-gray-300 hover:text-orange-500 transition">
            Inventory
          </a>
          <button
            onClick={onLoginClick}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium"
          >
            Login
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-orange-500/10 px-4 py-4 space-y-4">
          <a href="#features" className="block text-gray-300 hover:text-orange-500 transition">
            Features
          </a>
          <a href="#benefits" className="block text-gray-300 hover:text-orange-500 transition">
            Benefits
          </a>
          <a href="#inventory" className="block text-gray-300 hover:text-orange-500 transition">
            Inventory
          </a>
          <button
            onClick={() => {
              onLoginClick();
              setIsMenuOpen(false);
            }}
            className="w-full px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}