import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (email && password) {
        window.location.href = '/dashboard';
      }
      setIsLoading(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-orange-500/20 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-white">Login to ekbill</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 font-medium mb-3">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-orange-500" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-slate-800/50 border border-orange-500/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-3">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-orange-500" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-800/50 border border-orange-500/20 rounded-lg pl-12 pr-12 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-orange-500 hover:text-orange-400 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 bg-slate-800 border border-orange-500/20 rounded cursor-pointer"
              />
              Remember me
            </label>
            <a href="#" className="text-orange-500 hover:text-orange-400 transition font-medium">
              Forgot password?
            </a>
          </div>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing in...
              </>
            ) : (
              <>
                Sign In <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{' '}
          <a href="#" className="text-orange-500 hover:text-orange-400 transition font-medium">
            Request access
          </a>
        </p>
      </div>
    </div>
  );
}