import React from 'react';

export default function CTASection({ onLoginClick }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Billing?</h2>
        <p className="text-lg text-orange-50 mb-8 max-w-2xl mx-auto">
          Join thousands of vendors automating their invoicing and scaling their business. Start free today.
        </p>
        <button
          onClick={onLoginClick}
          className="px-8 py-4 bg-white text-orange-600 rounded-lg font-bold hover:bg-orange-50 transition"
        >
          Get Started Now
        </button>
      </div>
    </section>
  );
}