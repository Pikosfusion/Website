import { Palette, Brush, ShoppingBag } from 'lucide-react';
import { Service } from '../types/service';

import interior_design_raumkonzepte from "../images/interior_design_raumkonzepte.jpg";
import interior_design_farbberatung from "../images/interior_design_farbberatung.jpg";
import interior_design_moebelierung from "../images/interior_design_moeblierung.jpg";

import lieblingsprodukte_handgemachtes from "../images/lieblingsprodukte_handgemachtes.jpg";
import lieblingsprodukte_pikos_fusion from "../images/lieblingsprodukte_pikos_fusion.jpg";
import lieblingsprodukte_von_uns_empfohlen from "../images/lieblingsprodukte_von_uns_empfohlen.jpg";

import wand_kunst_akzente from "../images/wand_kunst_akzente.jpg";
import wand_kunst_tapeten_design from "../images/wand_kunst_tapeten_design.jpg";
import wand_kunst_wandgemaelde from "../images/wand_kunst_wandgemaelde.jpg";

export const servicesData: Service[] = [
  {
    id: 'interior-design',
    icon: Palette,
    title: 'Interior Design',
    description: 'Verwandeln Sie Räume in magische Orte des Lernens und der Entwicklung. Mit durchdachten Konzepten schaffen wir Umgebungen, die Kinder inspirieren und in ihrer Entfaltung unterstützen.',
    features: [
      {
        title: 'Raumkonzepte',
        description: 'Individuelle Gestaltungskonzepte für jeden Raum, die Funktionalität und Ästhetik perfekt vereinen'
      },
      {
        title: 'Farbberatung',
        description: 'Oberflächen, Materialien und Strukturen, die Harmonie und Wohlbefinden schaffen'
      },
      {
        title: 'Möblierung',
        description: 'Durchdachte Ausbaupläne für optimale Raumnutzung und maximalen Komfort'
      }
    ],
    images: [
      {
        url: interior_design_raumkonzepte,
      },
      {
        url: interior_design_farbberatung
      },
      {
        url: interior_design_moebelierung
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
        title: 'Wandgemälde',
        description: 'Handgemalte Murals und künstlerische Wandgestaltungen'
      },
      {
        title: 'Tapeten Design',
        description: 'XXL Tapetenlösungen und innovative Wandverkleidungen'
      },
      {
        title: 'Akzente',
        description: 'Gemälde auf Leinwand und andere Geschenkideen, die Persönlichkeit und das gewisse Extra mitbringen'
      }
    ],
    images: [
      {
        url: wand_kunst_wandgemaelde
      },
      {
        url: wand_kunst_tapeten_design
      },
      {
        url: wand_kunst_akzente
      }
    ]
  },
  {
    id: 'lieblingsprodukte',
    icon: ShoppingBag,
    title: 'Lieblingsprodukte',
    description: 'Entdecken Sie unsere liebevoll ausgewählten Schätze fürs Kind und Kinderzimmer.',
    features: [
      {
        title: 'Pikos Fusion stellt vor',
        description: 'Mein erstes Mal - Rätsel - und Wissensbuch'
      },
      {
        title: 'Von uns empfohlen',
        description: 'Wenn schon, denn schon - schönes und nützliches'
      },
      {
        title: 'Handgemachtes',
        description: 'Von Kunsthandwerkern liebevoll gefertigte Schätze'
      }
    ],
    images: [
      {
        url: lieblingsprodukte_pikos_fusion,
        text: "Demnächst erhältlich"
      },
      {
        url: lieblingsprodukte_von_uns_empfohlen,
        link: "https://www.amazon.de/LIFEZEAL-Schaukelstuhl-Kindersessel-Samtmaterial-Massivholzbeinen/dp/B0C6LM5H24/ref=sr_1_5?sr=8-5",
        text: "Mein neuer Lieblingsplatz"
      },
      {
        url: lieblingsprodukte_handgemachtes,
        link: "https://www.etsy.com/de/listing/1371580297/hakelanleitung-hund-amigurumi-anleitung?ls=s&ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=gehekelte+tiere&ref=sr_gallery-1-11&pro=1&pop=1&sts=1&dd=1&content_source=074d20fdf3171a701ff163ad426f8ba673803a65%253A1371580297&search_preloaded_img=1&organic_search_click=1&logging_key=074d20fdf3171a701ff163ad426f8ba673803a65%3A1371580297",
        text: "Häkelanleitung zum Selbermachen"
      }
    ]
  }
];