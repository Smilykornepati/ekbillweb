import React from 'react';
import { BarChart3, ArrowRight } from 'lucide-react';

export default function InventorySection({ onLoginClick }) {
  return (
    <section id="inventory" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Intelligent Inventory Management
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-orange-500/20 rounded-2xl p-12 h-80 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="text-orange-500 mx-auto mb-4" size={64} />
              <p className="text-gray-300 text-lg">Smart Stock Level Tracking</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Automated Stock Monitoring</h3>
              <p className="text-gray-300">
                Track inventory levels in real-time. Get alerts when stock runs low and automate reorder
                processes directly from your billing system.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-300">
                AI-powered demand forecasting helps you maintain optimal inventory levels, reduce waste, and
                improve order fulfillment rates.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Seamless Integration</h3>
              <p className="text-gray-300">
                Connect with your existing warehouse and inventory systems. Sync data automatically and
                eliminate manual spreadsheet management.
              </p>
            </div>

            <button
              onClick={onLoginClick}
              className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2 group"
            >
              Explore Full Features <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}