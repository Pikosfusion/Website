import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative h-[600px] perspective-1000">
      <div className="h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front of the card */}
        <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center backface-hidden">
          <div className="text-yellow-500 mb-6">{icon}</div>
          <h3 className="text-2xl font-serif mb-4">{title}</h3>
          <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-2 text-gray-400">
              <Sparkles className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-500" />
              <span className="text-sm font-light tracking-wide transition-colors duration-300 group-hover:text-yellow-500">ENTDECKEN</span>
              <Sparkles className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-500" />
            </div>
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>
        
        {/* Back of the card */}
        <div className="absolute inset-0 bg-yellow-500 p-8 rounded-lg shadow-lg flex flex-col items-center backface-hidden rotate-y-180">
          <div className="flex-grow overflow-hidden">
            <p className="text-white text-center leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-6 -mb-12 w-full flex justify-center">
            <Link 
              to={`/services#${title.toLowerCase().replace(' ', '-')}`}
              className="bg-white text-yellow-500 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard