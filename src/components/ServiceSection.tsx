import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ServiceImage from './ServiceImage';
import { Service } from '../types/service';

interface ServiceSectionProps {
  service: Service;
  index: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, index }) => {
  const Icon = service.icon;

  return (
      <section
          id={service.id}
          className={`py-16 ${index !== 2 ? 'border-b border-gray-200' : ''}`}
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="mb-6">
            <Icon className="w-12 h-12 text-yellow-500" />
          </div>
          <h2 className="text-4xl font-serif mb-4">{service.title}</h2>
          <p className="text-gray-600 max-w-2xl">{service.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {service.features?.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-8">
          {service.images.map((image, idx) => (
              <ServiceImage
                  key={idx}
                  image={image}
                  title={service.title}
                  index={idx}
              />
          ))}
        </div>

        <div className="md:hidden">
          <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full"
          >
            {service.images.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <ServiceImage
                      image={image}
                      title={service.title}
                      index={idx}
                  />
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  );
};

export default ServiceSection;