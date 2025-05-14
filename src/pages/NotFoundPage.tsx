import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Section from '../components/layout/Section';
import PageContainer from '../components/layout/PageContainer';

const NotFoundPage = () => {
  return (
    <Section className="min-h-screen bg-gray-50 pt-32">
      <PageContainer>
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
          <h1 className="text-9xl font-serif text-yellow-500 mb-4">404</h1>
          <h2 className="text-3xl font-serif mb-6">Seite nicht gefunden</h2>
          <p className="text-gray-600 mb-8">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors"
            >
              <Home size={20} />
              <span>Zur Startseite</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Zurück</span>
            </button>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
};

export default memo(NotFoundPage);