import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://red-it.org/apps/sandra/images/Kinderzimmer.webp',
    title: 'Kinderzimmer',
    subtitle: 'Zeit Träume zu leben - So individuell wie du bist, so einzigartig ist dein Raum.',
  },
  {
    image: 'https://www.red-it.org/apps/sandra/images/Warteraum.webp',
    title: 'Wartebereich',
    subtitle: 'Wo Wartezeit zur Qualitätszeit wird - Entspannen Sie in unserer einladenden Atmosphäre.',
  },
  {
    image: 'https://red-it.org/apps/sandra/images/Therapieraum.webp',
    title: 'Therapieraum',
    subtitle: 'Entdecken, Wachsen, Entwickeln - Hier wird Lernen zur Freude.',
  },
  {
    image: 'https://red-it.org/apps/sandra/images/Kita-Einrichtung.webp',
    title: 'Kita-Einrichtung',
    subtitle: 'Ein Raum voller Möglichkeiten – kindgerecht, funktional und mit Liebe zum Detail gestaltet.',
  },
];

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
              
              <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
                {/* Logo with gradient stripe */}
                <div className="relative mb-8 w-full">
                  {/* Horizontal gradient stripes */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-32">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
                    <div className="absolute inset-0 backdrop-blur-sm" />
                  </div>
                  
                  {/* Logo container */}
                  <div className="relative">
                    <img 
                      src="https://www.red-it.org/apps/sandra/images/logo.png" 
                      alt="Logo" 
                      className="w-48 h-48 mx-auto object-contain" 
                    />
                  </div>
                </div>

                {/* Content with glassmorphism effect */}
                <div className="relative max-w-4xl mx-auto p-8 rounded-xl overflow-hidden">
                  {/* Glassmorphism background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-white/20 to-yellow-500/10 backdrop-blur-md" />
                  
                  {/* Content */}
                  <div className="relative">
                    <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide text-white drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed mb-8 text-white/90 drop-shadow">
                      {slide.subtitle}
                    </p>
                    <button className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      MEHR ERFAHREN
                    </button>
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