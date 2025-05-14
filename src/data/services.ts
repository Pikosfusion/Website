import { Palette, Brush, ShoppingBag } from 'lucide-react';

export const services = [
  {
    id: 'interior-design',
    icon: Palette,
    title: 'Interior Design',
    description: 'Verwandeln Sie Räume in magische Orte des Lernens und der Entwicklung. Mit durchdachten Konzepten schaffen wir Umgebungen, die Kinder inspirieren und in ihrer Entfaltung unterstützen.',
    features: [
      {
        title: 'Pädagogische Raumkonzepte',
        description: 'Entwicklungsgerechte Gestaltung für optimales Lernen und Wachsen'
      },
      {
        title: 'Harmonische Farbwelten',
        description: 'Ausgewogene Farbkonzepte für eine beruhigende Atmosphäre'
      },
      {
        title: 'Flexible Raumlösungen',
        description: 'Anpassungsfähige Konzepte, die mit Ihren Kindern mitwachsen'
      }
    ]
  },
  {
    id: 'wand-kunst',
    icon: Brush,
    title: 'Wand-Kunst',
    description: 'Lassen Sie Wände Geschichten erzählen. Mit kreativen Wandgestaltungen erschaffen wir einzigartige Erlebniswelten, die Fantasie und Vorstellungskraft Ihrer Kinder beflügeln.',
    features: [
      {
        title: 'Kreative Wandbilder',
        description: 'Handgemalte Motive, die Kinderaugen zum Leuchten bringen'
      },
      {
        title: 'Interaktive Elemente',
        description: 'Spielerische Wandgestaltungen zum Anfassen und Erleben'
      },
      {
        title: 'Individuelle Themen',
        description: 'Persönliche Gestaltungen nach Ihren Wünschen'
      }
    ]
  },
  {
    id: 'lieblingsprodukte',
    icon: ShoppingBag,
    title: 'Lieblingsprodukte',
    subtitle: 'Schätze für´s Kind und Kinderzimmer',
    description: 'Entdecken Sie unsere Auswahl an Schätzen für Ihr Kind und Kinderzimmer.',
    features: [
      {
        title: 'Pikos Fusion stellt vor',
        description: 'Babytiere-Mein erstes Mal-Rätsel und Wissensbuch'
      },
      {
        title: 'Lieblingsprodukt diesen Quartals',
        description: 'XXX'
      },
      {
        title: 'Handgemachtes',
        description: 'Von Kunsthandwerkern liebevoll gefertigte Produkte'
      }
    ]
  }
];