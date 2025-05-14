import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
      <header className="fixed w-full z-50">
        <div className="bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              {/* Left side - Logo */}
              <Link to="/" onClick={handleLogoClick} className="group">
                <div className="flex flex-col">
                  <span className="text-2xl font-serif tracking-wide">Sandra Pittelkow</span>
                  <span className="text-sm text-yellow-500 font-light tracking-widest group-hover:text-yellow-600 transition-colors">
                  INTERIOR DESIGN
                </span>
                </div>
              </Link>

              {/* Center - Navigation Links */}
              <div className="hidden md:flex items-center space-x-12">
                <Link
                    to="/"
                    className="text-gray-800 hover:text-yellow-500 transition-colors tracking-wide"
                >
                  HOME
                </Link>
                <Link
                    to="/services"
                    className="text-gray-800 hover:text-yellow-500 transition-colors tracking-wide"
                >
                  LEISTUNGEN
                </Link>
              </div>

              {/* Right side - Contact Info */}
              <div className="hidden lg:flex items-center space-x-6">
                <a
                    href="mailto:info@pikosfusion.de"
                    className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500 transition-colors group"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">info@pikosfusion.de</span>
                </a>
                <div className="h-4 w-px bg-gray-200"></div>
                <a
                    href="tel:+491786167808"
                    className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500 transition-colors group"
                >
                  <Phone size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">0178 6167808</span>
                </a>
              </div>

              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;