import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Home, Palette, ArrowRight } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[90] p-2 text-gray-600 hover:text-yellow-500 transition-colors"
        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
      >
        <div className="relative w-6 h-6">
          <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-out ${
            isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'
          }`} />
          <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-out ${
            isOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
          }`} />
          <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-out ${
            isOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-1'
          }`} />
        </div>
      </button>

      {/* Full Screen Menu */}
      <div 
        className={`fixed inset-0 z-[80] transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop mit Glaseffekt */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.97), rgba(0, 0, 0, 0.95))'
          }}
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        {/* Menu Container mit Animation */}
        <div 
          className={`relative h-screen flex flex-col transition-all duration-500 transform ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
          style={{ backgroundColor: '#969595' }}
        >
          {/* Logo Area mit Glaseffekt */}
          <div className="pt-24 pb-12 text-center relative">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-yellow-500/10 to-transparent" />
            <div className="relative">
              <div className="text-2xl font-serif text-white mb-1">Sandra Pittelkow</div>
              <div className="text-yellow-500 text-sm tracking-[0.2em]">INTERIOR DESIGN</div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow flex flex-col justify-center px-8">
            <div className="space-y-8">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="group flex items-center text-white/90 hover:text-yellow-500 transition-colors"
              >
                <span className="relative overflow-hidden">
                  <Home className="w-8 h-8 mr-6 transform transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-lg" />
                </span>
                <span className="text-3xl font-serif group-hover:translate-x-2 transition-transform duration-300">
                  Home
                </span>
              </Link>
              
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="group flex items-center text-white/90 hover:text-yellow-500 transition-colors"
              >
                <span className="relative overflow-hidden">
                  <Palette className="w-8 h-8 mr-6 transform transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-lg" />
                </span>
                <span className="text-3xl font-serif group-hover:translate-x-2 transition-transform duration-300">
                  Leistungen
                </span>
              </Link>
            </div>
          </nav>

          {/* Contact Section mit Glaseffekt */}
          <div className="pb-12 px-8 relative">
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-yellow-500/10 to-transparent" />
            <div className="relative space-y-4">
              <h3 className="text-yellow-500 text-sm tracking-[0.2em] mb-6">KONTAKT</h3>
              
              <a
                href="mailto:info@pikosfusion.de"
                className="group flex items-center space-x-4 text-white/90 hover:text-yellow-500 transition-colors"
              >
                <div className="relative">
                  <Mail className="w-6 h-6" />
                  <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-lg" />
                </div>
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                  info@pikosfusion.de
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>

              <a
                href="tel:+491786167808"
                className="group flex items-center space-x-4 text-white/90 hover:text-yellow-500 transition-colors"
              >
                <div className="relative">
                  <Phone className="w-6 h-6" />
                  <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-lg" />
                </div>
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                  0178 6167808
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;