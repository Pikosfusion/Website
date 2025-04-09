import React from 'react';
import { Palette, Brush, ShoppingBag, Star, Anchor, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import TestimonialSlider from './TestimonialSlider';
import ContactForm from './ContactForm';

const services = [
  {
    icon: <Palette className="w-12 h-12" />,
    title: 'Interior Design',
    description: 'Erleben Sie die Kunst der Raumgestaltung in ihrer schönsten Form. Unser Interior Design-Service verwandelt Ihre Räume in harmonische Lebenslandschaften, die Funktionalität und Ästhetik perfekt vereinen. Von der strategischen Raumaufteilung bis zur Auswahl der perfekten Materialien und Farben - wir schaffen Atmosphären, die inspirieren und begeistern. Jedes Detail wird sorgfältig ausgewählt, um Ihren persönlichen Stil zu unterstreichen und gleichzeitig maximalen Komfort zu gewährleisten. Lassen Sie uns gemeinsam Ihren Traum von einem perfekt gestalteten Zuhause verwirklichen.'
  },
  {
    icon: <Brush className="w-12 h-12" />,
    title: 'Wand-Kunst',
    description: 'Entdecken Sie die transformative Kraft der Wandgestaltung. Unsere Wand-Kunst-Expertise reicht von handgemalten Murals bis zu innovativen Tapetenlösungen, die Ihren Räumen eine einzigartige Persönlichkeit verleihen. Wir arbeiten mit verschiedensten Techniken und Materialien, um atemberaubende visuelle Effekte zu erzielen - von subtilen Texturen bis hin zu dramatischen Statements. Jedes Wandkunstwerk wird speziell für Ihren Raum konzipiert und spiegelt Ihre individuelle Geschichte wider. Verwandeln Sie Ihre Wände in lebendige Kunstwerke, die Ihre Räume zum Leben erwecken.'
  },
  {
    icon: <ShoppingBag className="w-12 h-12" />,
    title: 'Lieblingsprodukte',
    description: 'Entdecken Sie unsere liebevoll kuratierte Kollektion regionaler, handgefertigter Schätze für Ihr Kind. Jedes Stück wird von lokalen Kunsthandwerkern mit Hingabe speziell für Kinderzimmer geschaffen. Von verspielten Wanddekorationen bis zu einzigartigen Aufbewahrungslösungen - unsere Kollektion vereint Kreativität mit Funktionalität. Mit nachhaltigen Materialien und kindgerechter Gestaltung schaffen wir eine magische Atmosphäre im Reich Ihres Kindes.'
  }
];

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

const testimonials = [
  {
    name: "Anidi Anida",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    date: "vor 11 Monaten",
    text: "Ich wollte meinem Kind mit einem neuen Kinderzimmer eine Freude bereiten und bin auf meiner Suche nach einer passenden Interieur Designerin auf Pikos Fusion (Sandra) gestoßen. Die Zusammenarbeit war stets professionell und hat mir viel Freude bereitet. Auf all meine Wünsche ist sie eingegangen und das Ergebnis am Ende war überwältigend! Ich kann daher nur eine 100% Empfehlung aussprechen!"
  },
  {
    name: "Marie Schmidt",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    date: "vor 8 Monaten",
    text: "Sandra hat aus dem Zimmer meiner Zwillinge einen wahren Traumort geschaffen. Ihre Fähigkeit, die Persönlichkeiten meiner Kinder in das Design einzubringen, war beeindruckend. Der Raum ist nicht nur wunderschön, sondern auch praktisch und mitwachsend gestaltet."
  },
  {
    name: "Thomas Weber",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    date: "vor 6 Monaten",
    text: "Als alleinerziehender Vater war es mir wichtig, für meine Tochter einen Raum zu schaffen, der sowohl kreativ als auch beruhigend wirkt. Sandra hat genau verstanden, was ich mir vorgestellt habe. Das Ergebnis übertrifft alle Erwartungen. Meine Tochter liebt ihr neues Reich!"
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
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
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
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-8">
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
      </div>
    </section>
  );
};

export default Services;