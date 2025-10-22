import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onLoginClick }) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Automate Your
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {' '}Billing
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Instantly
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your invoicing workflow with intelligent automation. Save hours every week and scale
            your business without the administrative burden.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onLoginClick}
            className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2 group"
          >
            Get Started <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
          </button>
          <button className="px-8 py-4 border-2 border-orange-500/30 text-white rounded-lg font-semibold hover:border-orange-500/60 transition">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}