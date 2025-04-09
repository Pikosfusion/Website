import React, { useState, useEffect } from 'react';
import { Palette, Brush, ShoppingBag } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        description: 'Professionelle Farbkonzepte, die Harmonie und Wohlbefinden schaffen.'
      },
      {
        title: 'Möblierung',
        description: 'Durchdachte Möblierungskonzepte für optimale Raumnutzung und maximalen Komfort.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&h=600&q=80'
    ]
  },
  {
    id: 'wand-kunst',
    icon: <Brush className="w-16 h-16" />,
    title: 'Wand-Kunst',
    description: 'Verwandeln Sie Ihre Wände in einzigartige Kunstwerke.',
    features: [
      {
        title: 'Wandmalerei',
        description: 'Handgemalte Murals und künstlerische Wandgestaltungen.'
      },
      {
        title: 'Tapeten Design',
        description: 'Exklusive Tapetenlösungen und innovative Wandverkleidungen.'
      },
      {
        title: 'Akzente',
        description: 'Kreative Akzente und Details, die Ihren Raum einzigartig machen.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=800&h=600&q=80'
    ]
  },
  {
    id: 'lieblingsprodukte',
    icon: <ShoppingBag className="w-16 h-16" />,
    title: 'Lieblingsprodukte',
    description: 'Handgefertigte Schätze für das Kinderzimmer.',
    features: [
      {
        title: 'Regionale Handarbeit',
        description: 'Von lokalen Kunsthandwerkern liebevoll gefertigte Einzelstücke.'
      },
      {
        title: 'Nachhaltige Materialien',
        description: 'Umweltfreundliche und kindgerechte Materialien für gesundes Wohnen.'
      },
      {
        title: 'Kreative Lösungen',
        description: 'Innovative Aufbewahrungslösungen und Dekorationselemente.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1617104551322-7ee6f2b0b7b5?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1617104540035-9c61f1fa0978?auto=format&fit=crop&w=800&h=600&q=80'
    ]
  }
];

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (id: string) => {
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
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      {/* Navigation Pills */}
      <div className="bg-white shadow-lg sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative">
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-wrap justify-center gap-4 py-2">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className={`group relative px-6 py-3 transition-all duration-300 ${
                    activeSection === service.id ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'
                  }`}
                >
                  <span className="relative z-10">{service.title}</span>
                  {activeSection === service.id && (
                    <span className="absolute inset-0 bg-yellow-50 rounded-full -z-1 animate-fade-in" />
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
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
        </div>
      </div>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {servicesData.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 ${index !== servicesData.length - 1 ? 'border-b border-gray-200' : ''}`}
          >
            <div className="flex flex-col items-center mb-12 text-center">
              <div className="text-yellow-500 mb-6">{service.icon}</div>
              <h2 className="text-4xl font-serif mb-4">{service.title}</h2>
              <p className="text-xl text-gray-600 max-w-2xl">{service.description}</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {service.features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Image Gallery - Desktop */}
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

            {/* Image Gallery - Mobile Slider */}
            <div className="md:hidden">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
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
      </div>
    </div>
  );
};

export default ServicesPage;