import React, { useState, useEffect, useCallback, memo } from 'react';
import { Palette, Brush, ShoppingBag } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';
import PageContainer from '../components/layout/PageContainer';
import { servicesData } from '../data/services';

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
              <ServiceSection
                  key={service.id}
                  service={service}
                  index={index}
              />
          ))}
        </PageContainer>
      </div>
  );
};

export default memo(ServicesPage);