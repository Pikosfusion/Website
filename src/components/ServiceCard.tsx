import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { ServiceCardProps } from '../types/service';

const ServiceCard: React.FC<ServiceCardProps> = ({ id, icon, title, subtitle, description, features }) => {
  const navigate = useNavigate();

  // Function to handle smooth scrolling after navigation
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/services#${id}`);
  };

  return (
    <div className="relative h-[600px] perspective-1000">
      <div className="h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front of the card */}
        <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center backface-hidden">
          <div className="text-yellow-500 mb-6">{icon}</div>
          <h3 className="text-2xl font-serif mb-2">{title}</h3>
          {subtitle && (
            <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
          )}
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
          <div className="flex-grow">
            <p className="text-white text-center leading-relaxed mb-12">
              {description}
            </p>
            {features && (
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="text-white">
                    <h4 className="font-serif text-lg mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/90">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-6 -mb-12 w-full flex justify-center">
            <button 
              onClick={handleClick}
              className="bg-white text-yellow-500 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;