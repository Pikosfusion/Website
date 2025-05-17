import React, { useState, useEffect, useCallback, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Palette, Brush, ShoppingBag } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Section from '../components/layout/Section';
import PageContainer from '../components/layout/PageContainer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import interior_design_raumkonzepte from "../images/interior_design_raumkonzepte.jpg";
import interior_design_farbberatung from "../images/interior_design_farbberatung.jpg";
import interior_design_moebelierung from "../images/interior_design_moeblierung.jpg";

import lieblingsprodukte_handgemachtes from "../images/lieblingsprodukte_handgemachtes.jpg";
import lieblingsprodukte_pikos_fusion from "../images/lieblingsprodukte_pikos_fusion.jpg";
import lieblingsprodukte_von_uns_empfohlen from "../images/lieblingsprodukte_von_uns_empfohlen.jpg";

import wand_kunst_akzente from "../images/wand_kunst_akzente.jpg";
import wand_kunst_tapeten_design from "../images/wand_kunst_tapeten_design.jpg";
import wand_kunst_wandgemaelde from "../images/wand_kunst_wandgemaelde.jpg";

const servicesData = [
  {
    id: 'interior-design',
    icon: <Palette className="w-16 h-16" />,
    title: 'Interior Design',
    description: 'Erleben Sie die Kunst der Raumgestaltung in ihrer schönsten Form.',
    features: [
      {
        title: 'Raumkonzepte',
        description: 'Individuelle Gestaltungskonzepte für jeden Raum, die Funktionalität und Ästhetik perfekt vereinen.'
      },
      {
        title: 'Farbberatung',
        description: 'Oberflächen, Materialien und Strukturen, die Harmonie und Wohlbefinden schaffen.'
      },
      {
        title: 'Möblierung',
        description: 'Durchdachte Ausbaupläne für optimale Raumnutzung und maximalen Komfort.'
      }
    ],
    images: [
      interior_design_raumkonzepte,
      interior_design_farbberatung,
      interior_design_moebelierung
    ]
  },
  {
    id: 'wand-kunst',
    icon: <Brush className="w-16 h-16" />,
    title: 'Wand-Kunst',
    description: 'Verwandeln Sie Ihre Wände in einzigartige Kunstwerke.',
    features: [
      {
        title: 'Wandgemälde',
        description: 'Handgemalte Murals und künstlerische Wandgestaltungen.'
      },
      {
        title: 'Tapeten Design',
        description: 'XXL Tapetenlösungen und innovative Wandverkleidungen.'
      },
      {
        title: 'Akzente',
        description: 'Gemälde auf Leinwand und andere Geschenkideen, die Persönlichkeit und das gewisse Extra mitbringen.'
      }
    ],
    images: [
      wand_kunst_wandgemaelde,
      wand_kunst_tapeten_design,
      wand_kunst_akzente
    ]
  },
  {
    id: 'lieblingsprodukte',
    icon: <ShoppingBag className="w-16 h-16" />,
    title: 'Lieblingsprodukte',
    description: 'Entdecken Sie unsere liebevoll ausgewählten Schätze fürs Kind und Kinderzimmer.',
    features: [
      {
        title: 'Pikos Fusion stellt vor',
        description: 'Mein erstes Mal - Rätsel - und Wissensbuch'
      },
      {
        title: 'Von uns empfohlen',
        description: 'Wenn schon, denn schon - schönes und nützliches.'
      },
      {
        title: 'Handgemachtes',
        description: 'Von Kunsthandwerkern liebevoll gefertigte Schätze'
      }
    ],
    images: [
      lieblingsprodukte_pikos_fusion,
      lieblingsprodukte_von_uns_empfohlen,
      lieblingsprodukte_handgemachtes
    ]
  }
];

const NavButton = memo(({ 
  id, 
  active, 
  onClick, 
  children 
}: { 
  id: string; 
  active: boolean; 
  onClick: (id: string) => void; 
  children: React.ReactNode;
}) => (
  <button
    onClick={() => onClick(id)}
    className={`group relative px-6 py-3 transition-all duration-300 ${
      active ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'
    }`}
  >
    <span className="relative z-10">{children}</span>
    {active && (
      <span className="absolute inset-0 bg-yellow-50 rounded-full -z-1 animate-fade-in" />
    )}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
  </button>
));

NavButton.displayName = 'NavButton';

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Handle initial scroll to hash on page load
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = element.offsetTop - 120;
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
          setActiveSection(hash);
        }
      }, 100);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      const sections = servicesData.map(service => ({
        id: service.id,
        offset: document.getElementById(service.id)?.offsetTop || 0
      }));

      const scrollPosition = window.scrollY + 200;

      const currentSection = sections.reduce((acc, section) => {
        return scrollPosition >= section.offset ? section.id : acc;
      }, sections[0].id);

      setActiveSection(currentSection);
    }
  }, [isScrolling]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((id: string) => {
    setIsScrolling(true);
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 120;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="bg-white shadow-lg sticky top-20 z-10">
        <PageContainer>
          <div className="py-6">
            <div className="hidden md:flex flex-wrap justify-center gap-4 py-2">
              {servicesData.map((service) => (
                <NavButton
                  key={service.id}
                  id={service.id}
                  active={activeSection === service.id}
                  onClick={scrollToSection}
                >
                  {service.title}
                </NavButton>
              ))}
            </div>
            
            <div className="md:hidden">
              <div className="flex flex-wrap gap-3 justify-center py-2">
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => scrollToSection(service.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === service.id
                        ? 'bg-yellow-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500'
                    }`}
                  >
                    <span className="text-current whitespace-nowrap">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </div>

      <PageContainer className="py-12">
        {servicesData.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 ${index !== servicesData.length - 1 ? 'border-b border-gray-200' : ''}`}
          >
            <div className="flex flex-col items-center mb-12 text-center">
              <div className="text-yellow-500 mb-6">{service.icon}</div>
              <h2 className="text-4xl font-serif mb-4">{service.title}</h2>
              {service.subtitle && (
                <p className="text-xl text-gray-600 mb-2">{service.subtitle}</p>
              )}
              <p className="text-gray-600 max-w-2xl">{service.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="bg-whites rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="hidden md:grid grid-cols-3 gap-4">
              {service.images.map((image, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={image}
                      alt={`${service.title} Beispiel ${idx + 1}`}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  </div>
                </div>
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
                className="w-full rounded-lg overflow-hidden shadow-lg"
              >
                {service.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="aspect-w-4 aspect-h-3">
                      <img
                        src={image}
                        alt={`${service.title} Beispiel ${idx + 1}`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        ))}
      </PageContainer>
    </div>
  );
};

export default memo(ServicesPage);