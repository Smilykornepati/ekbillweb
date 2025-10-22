import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import InventorySection from '../components/InventorySection';
import CTASection from '../components/CTASection';
import LoginModal from '../components/LoginModal';
import Footer from '../components/Footer';

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation onLoginClick={() => setIsLoginOpen(true)} />
      
      <main>
        <HeroSection onLoginClick={() => setIsLoginOpen(true)} />
        <FeaturesSection />
        <BenefitsSection />
        <InventorySection onLoginClick={() => setIsLoginOpen(true)} />
        <CTASection onLoginClick={() => setIsLoginOpen(true)} />
      </main>

      <Footer />
      
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}