import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-orange-500/10 bg-slate-950/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">ek</span>
              </div>
              <span className="text-white font-bold">ekbill</span>
            </div>
            <p className="text-gray-400 text-sm">Automating billing for modern vendors.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-500/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} ekbill. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}