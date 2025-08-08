import React from 'react';
import { Star, Anchor, Heart, ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import TestimonialSlider from './TestimonialSlider';
import ContactForm from './ContactForm';
import { servicesData as services } from '../data/services';
import { testimonials } from '../data/testimonials';
import portrait from '../images/portrait.jpg';

const features = [
  {
    title: "Entwicklungsfördernd",
    description: "Von kreativen Wandgestaltungen bis zu durchdachten Raumkonzepten - alles unterstützt die natürliche Entwicklung und Entfaltung"
  },
  {
    title: "Anpassungsfähig",
    description: "Flexible Gestaltungslösungen für Räume, Wände und Einrichtung, die sich Ihren wandelnden Bedürfnissen anpassen"
  },
  {
    title: "Harmonische Balance",
    description: "Perfektes Zusammenspiel von Design, Kunst und Funktion für eine stimmige Gesamtatmosphäre"
  },
  {
    title: "Sicher und Robust",
    description: "Qualitativ hochwertige Materialien und professionelle Verarbeitung für langlebige Freude an Raum, Kunst und Produkten"
  },
  {
    title: "Farbenfroh und Inspirierend",
    description: "Lebendige Farbkonzepte und kreative Gestaltung, die Räume, Wände und Accessoires zum Leben erwecken"
  }
];

const Services = () => {
  return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Unsere Leistungen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie unsere exklusiven Services für Ihr perfektes Zuhause
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                  <ServiceCard
                      key={index}
                      id={service.id}
                      icon={<Icon className="w-12 h-12" />}
                      title={service.title}
                      subtitle={service.subtitle}
                      description={service.description}
                      features={service.features}
                  />
              );
            })}
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                      <Star className="w-6 h-6 text-yellow-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-serif mb-2 text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
              ))}
            </div>
          </div>

          {/* Personal Message Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Message Side */}
              <div className="p-6 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <div className="flex items-center gap-2 text-yellow-500 mb-4 md:mb-6 justify-center md:justify-start">
                  <Anchor className="w-6 h-6" />
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6 leading-tight text-center md:text-left">
                  "Die Kindheit ist wie eine Reise auf hoher See - voller Abenteuer, manchmal stürmisch, immer aufregend."
                </h3>
                <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-center md:text-left">
                  Meine Mission ist es, Kindern einen sicheren Hafen zu schaffen - einen Ort, der sie beschützt und zugleich ihre Fantasie beflügelt. Einen magischen Raum, in dem Träume wachsen können und Kreativität keine Grenzen kennt. Denn in einer geborgenen Umgebung können kleine Entdecker zu großen Träumern werden.
                </p>

                {/* Contact Form */}
                <ContactForm className="bg-gray-50 rounded-lg p-6" />
              </div>

              {/* Portrait Side */}
              <div className="relative h-64 md:h-auto order-1 md:order-2">
                <img
                    src={portrait}
                    alt="Portrait Sandra Pittelkow"
                    className="w-full h-full object-cover md:object-top object-[center_25%]"
                />
                <div className="text-white backdrop-blur-sm bg-black/30 p-4 rounded-lg absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-8">
                  <div className="text-white">
                    <h4 className="font-serif text-xl md:text-2xl mb-1 md:mb-2">Sandra Pittelkow</h4>
                    <p className="text-yellow-400 font-light mb-2 md:mb-4">Kreative Visionärin & Designerin</p>
                    <p className="text-sm leading-relaxed hidden md:block">
                      Mit Leidenschaft gestalte ich seit meiner Kindheit Räume, die Geschichten erzählen. Meine Designs verbinden spielerische Kreativität mit durchdachter Funktionalität. Jedes Projekt ist eine neue Reise in die Welt der kindlichen Fantasie, bei der ich meine Expertise in Objekt- und Raumdesign mit endloser Neugierde für innovative Gestaltungsmöglichkeiten verbinde.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <TestimonialSlider testimonials={testimonials} />

          {/* FFT Partner Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-20">
            <div className="flex flex-col md:grid md:grid-cols-2">
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-600 font-medium tracking-wide text-sm">OFFIZIELLER PARTNER</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif mb-6 leading-tight">
                  FFT – Großformatige Wandkunst, professionell umgesetzt
                </h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    FFT – Funktionsflächentextil steht für hochwertige, nahtlose Oberflächenbeläge im XXL-Format. Entwickelt und produziert in Deutschland, kombiniert das System gestalterische Freiheit mit technischer Präzision – ideal für anspruchsvolle Innenraumlösungen.
                  </p>

                  <p>
                    Dank unserer Partnerschaft mit FFT können wir individuelle Wandkunst in beeindruckender Größe realisieren: druckbar bis 5 Meter Breite, frei wählbar in Motiv, Farbe und Form – ganz ohne sichtbare Nähte. Dabei entstehen Lösungen, die nicht nur ästhetisch überzeugen, sondern auch langlebig und dimensionsstabil sind.
                  </p>

                  <p>
                    Als Gestaltungspartner übernehmen wir die kreative Konzeption und auf Wunsch auch die Projektbetreuung – mit dem Anspruch, Räume in einzigartige Bildwelten zu verwandeln. Unsere Kund*innen profitieren von maßgeschneiderten Motiven, fachgerechter Umsetzung und der gebündelten Kompetenz aus Design und Technik.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Made in Germany
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    XXL-Format bis 5m
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Nahtlose Verarbeitung
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Dimensionsstabil
                  </span>
                </div>

                <a
                    href="https://www.fftextil.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 mt-8 inline-flex items-center gap-2 w-fit group"
                >
                  <span>Mehr über FFT erfahren</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Image Side */}
              <div className="relative h-100 md:h-auto order-1 md:order-2">
                {/* Mobile Image */}
                <img
                    src="https://www.pikosfusion.de/images/fft_banner.jpg"
                    alt="FFT Partner - Großformatige Wandkunst Mobile"
                    className="w-full h-full object-cover object-top md:hidden"
                />
                {/* Tablet Image */}
                <img
                    src="https://www.pikosfusion.de/images/fft_banner.jpg"
                    alt="FFT Partner - Großformatige Wandkunst Tablet"
                    className="w-full h-full object-cover hidden md:block lg:hidden"
                />
                {/* Desktop Image */}
                <img
                    src="https://www.pikosfusion.de/images/fft_banner.jpg"
                    alt="FFT Partner - Großformatige Wandkunst Desktop"
                    className="w-full h-full object-cover hidden lg:block"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Mynt Partner Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-20">
            <div className="flex flex-col md:grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-100 md:h-auto order-1 md:order-1">
                <img
                    src="https://www.pikosfusion.de/images/mynt_partner.jpg"
                    alt="Mynt Partner - Nachhaltige Farbprodukte"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium tracking-wide text-sm">OFFIZIELLER PARTNER</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif mb-6 leading-tight">
                  Wie wir mit Mynt nachhaltige und wohngesunde Farbwelten mit ökologischen Wandfarben schaffen
                </h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Wir sind stolz darauf, ein offizieller Partner von Mynt zu sein, einem Vorreiter im Bereich nachhaltiger und wohngesunder Farbprodukte, die ohne den Einsatz von Erdöl hergestellt werden. Wandfarben sind ein allgegenwärtiges Element in jedem Raum, doch was viele nicht wissen: Konventionelle Wandfarben basieren auf Erdöl und tragen laut einer Studie aus der Schweiz mit 58 Prozent zu den Mikroplastikbelastungen in unseren Ozeanen bei.
                  </p>

                  <p>
                    Im Gegensatz dazu setzt Mynt auf eine Revolution in der Farbbranche durch die Verwendung von biologischen Bindemitteln und Naturpigmenten. Diese nachhaltige Herangehensweise garantiert nicht nur eine verbesserte Raumluftqualität und langlebige Farbbrillanz, sondern vermeidet auch Erdöl, Mikroplastik und unangenehme Gerüche.
                  </p>

                  <p>
                    Als offizieller Mynt-Partner haben wir Zugang zu dieser exklusiven Auswahl an ökologischen, erdölfreien und hochwertigen Farbprodukten. Wir freuen uns darauf, Sie zu den umweltfreundlichen Farboptionen von Mynt zu beraten und diese in unseren Projekten zu implementieren.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Erdölfrei
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Mikroplastikfrei
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Klimaneutral
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Made in Germany
                  </span>
                </div>

                <a
                    href="https://mynthome.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 mt-8 inline-flex items-center gap-2 w-fit group"
                >
                  <span>Mehr über Mynt erfahren</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Services;