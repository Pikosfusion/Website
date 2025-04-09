import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-serif text-white">Sandra Pittelkow</span>
              <span className="text-sm text-yellow-500">INTERIOR DESIGN</span>
            </div>
            <p className="text-sm leading-relaxed">
              Kreative Raumgestaltung für kleine Entdecker. Wir schaffen magische Orte, 
              die Kinderträume wahr werden lassen.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-white">Kontakt</h3>
            <div className="space-y-3">
              <a href="tel:+491786167808" className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
                <Phone size={16} />
                <span className="text-sm">0178 6167808</span>
              </a>
              <a href="mailto:info@pikosfusion.de" className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
                <Mail size={16} />
                <span className="text-sm">info@pikosfusion.de</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Erenbertstraße 3<br />
                  44379 Dortmund<br />
                  Deutschland
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-white">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm hover:text-yellow-500 transition-colors">Home</Link>
              <Link to="/services" className="block text-sm hover:text-yellow-500 transition-colors">Leistungen</Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-white">Rechtliches</h3>
            <div className="space-y-2">
              <Link to="/impressum" className="block text-sm hover:text-yellow-500 transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="block text-sm hover:text-yellow-500 transition-colors">Datenschutzerklärung</Link>
              <Link to="/agb" className="block text-sm hover:text-yellow-500 transition-colors">AGB</Link>
              <Link to="/widerruf" className="block text-sm hover:text-yellow-500 transition-colors">Widerrufsbelehrung</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Sandra Pittelkow Interior Design. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/cookies" className="hover:text-yellow-500 transition-colors">Cookie-Einstellungen</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;