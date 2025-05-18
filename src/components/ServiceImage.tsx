import React from 'react';
import { ServiceImage as ServiceImageType } from '../types/service';

interface ServiceImageProps {
  image: ServiceImageType;
  title: string;
  index: number;
}

const ServiceImage: React.FC<ServiceImageProps> = ({ image, title, index }) => {
  return (
      <div className="flex flex-col space-y-4">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <div className="aspect-w-4 aspect-h-3">
            {image.link ? (
                <a href={image.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img
                      src={image.url}
                      alt={`${title} Beispiel ${index + 1}`}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>
            ) : (
                <>
                  <img
                      src={image.url}
                      alt={`${title} Beispiel ${index + 1}`}
                      className="object-cover w-full h-full transform transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-all duration-300" />
                </>
            )}
          </div>
        </div>

        {image.text && (
            <div className="w-full">
              {image.link ? (
                  <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                  >
                    {image.text}
                  </a>
              ) : (
                  <button className="block w-full text-center px-6 py-2 bg-yellow-500 text-white rounded-full cursor-default">
                    {image.text}
                  </button>
              )}
            </div>
        )}
      </div>
  );
};

export default ServiceImage;