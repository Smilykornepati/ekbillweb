import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    "Save 10+ hours per week on billing operations",
    "Reduce billing errors by 99% with automated calculations",
    "Get paid 40% faster with instant invoice delivery",
    "Scale your vendor network without increasing overhead",
    "Improve cash flow with real-time payment tracking",
    "Eliminate manual reconciliation tasks completely"
  ];

  const stats = [
    { number: "95%", label: "Time reduction in billing operations" },
    { number: "10K+", label: "Vendors already automating with ekbill" },
    { number: "$2M+", label: "Payments processed monthly" }
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Why Automation Matters for Your Business
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4 items-start">
                <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-blue-900/5 border border-orange-500/20 rounded-2xl p-12 flex flex-col justify-center">
            <div className="space-y-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-5xl font-bold text-orange-500">{stat.number}</p>
                  <p className="text-gray-300 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}