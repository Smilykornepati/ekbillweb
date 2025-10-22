import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Dashboard</h1>
        <p className="text-xl text-gray-300 mb-8">Your billing dashboard will appear here</p>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}