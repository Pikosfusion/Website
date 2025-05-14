import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { slides } from '../data/slides';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const swiperRef = useRef<any>(null);
  const autoplayDelay = 5000;

  useEffect(() => {
    const swiper = swiperRef.current;
    let element: HTMLElement | null = null;

    if (swiper?.el) {
      element = swiper.el;
      const handleMouseEnter = () => {
        if (swiper?.autoplay) {
          swiper.autoplay.stop();
        }
      };

      const handleMouseLeave = () => {
        if (swiper?.autoplay) {
          swiper.autoplay.start();
        }
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (element) {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  }, []);

  return (
    <div className="relative h-screen">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1000}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide-overlay">
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex flex-col items-center text-white text-center px-4">
                {/* Logo without gradient stripe */}
                <div className="relative w-full mb-12">
                  <div className="relative">
                    <img
                      src="https://www.red-it.org/apps/sandra/images/logo.png"
                      alt="Logo"
                      className="w-48 h-48 mx-auto object-contain"
                    />
                  </div>
                </div>

                {/* Content with horizontal gradient */}
                <div className="relative max-w-6xl mx-auto p-8">
                  {/* Horizontal gradient background */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide text-white drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg font-light text-white/90 drop-shadow">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;