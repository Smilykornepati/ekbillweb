import React from 'react';
import { Zap, BarChart3, Lock } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Instant Invoice Generation",
      desc: "Create professional invoices in seconds. Automate recurring billing and reduce manual data entry by 95%."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Real-time Analytics",
      desc: "Track payment statuses, revenue trends, and vendor performance with intuitive dashboards and reports."
    },
    {
      icon: <Lock size={32} />,
      title: "Bank-Level Security",
      desc: "Enterprise-grade encryption and compliance with industry standards to protect sensitive billing data."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Powerful Features for Modern Vendors
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition group"
            >
              <div className="text-orange-500 mb-4 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}