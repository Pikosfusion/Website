import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../components/layout/Section';
import PageContainer from '../components/layout/PageContainer';

interface LegalContent {
  [key: string]: {
    title: string;
    content: React.ReactNode;
  };
}

const legalContent: LegalContent = {
  '/impressum': {
    title: 'Impressum',
    content: (
      <>
        <h2 className="text-2xl font-serif mb-6">Angaben gemäß § 5 TMG</h2>
        <div className="space-y-4">
          <p>Sandra Pittelkow<br />
          Interior Design<br />
          Erenbertstraße 3<br />
          44379 Dortmund</p>

          <h3 className="text-xl font-serif mt-8 mb-4">Kontakt</h3>
          <p>Telefon: 0178 6167808<br />
          E-Mail: info@pikosfusion.de</p>

          <h3 className="text-xl font-serif mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>Sandra Pittelkow<br />
          Erenbertstraße 3<br />
          44379 Dortmund</p>

          <h3 className="text-xl font-serif mt-8 mb-4">Streitschlichtung</h3>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

          <p className="mt-4">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <h3 className="text-xl font-serif mt-8 mb-4">Haftung für Inhalte</h3>
          <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        </div>
      </>
    ),
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung',
    content: (
      <>
        <h2 className="text-2xl font-serif mb-6">Datenschutzerklärung</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-serif">1. Datenschutz auf einen Blick</h3>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

          <h3 className="text-xl font-serif mt-8">2. Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>

          <h3 className="text-xl font-serif mt-8">3. Datenerfassung auf unserer Website</h3>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
        </div>
      </>
    ),
  },
  '/widerruf': {
    title: 'Widerrufsbelehrung',
    content: (
      <>
        <h2 className="text-2xl font-serif mb-6">Widerrufsbelehrung</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-serif">Widerrufsrecht</h3>
          <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>

          <h3 className="text-xl font-serif mt-8">Folgen des Widerrufs</h3>
          <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
        </div>
      </>
    ),
  },
  '/cookies': {
    title: 'Cookie-Einstellungen',
    content: (
      <>
        <h2 className="text-2xl font-serif mb-6">Cookie-Einstellungen</h2>
        <div className="space-y-4">
          <p>Auf dieser Website werden nur technisch notwendige Cookies verwendet. Ein Cookie ist eine kleine Datei, die beim Besuch einer Website auf Ihrem Computer gespeichert werden kann.</p>

          <h3 className="text-xl font-serif mt-8">Notwendige Cookies</h3>
          <p>Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.</p>
        </div>
      </>
    ),
  },
};

const LegalPage = () => {
  const location = useLocation();
  const pageContent = legalContent[location.pathname];

  return (
    <Section className="min-h-screen bg-gray-50 pt-32">
      <PageContainer>
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-serif mb-8">{pageContent.title}</h1>
          {pageContent.content}
        </div>
      </PageContainer>
    </Section>
  );
};

export default memo(LegalPage);