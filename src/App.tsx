import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import NotFoundPage from './pages/NotFoundPage';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero'));
const Services = React.lazy(() => import('./components/Services'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const LegalPage = React.lazy(() => import('./pages/LegalPage'));

function App() {
  return (
    <Router basename="/apps/sandra">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Services />
                </>
              } />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/impressum" element={<LegalPage />} />
              <Route path="/datenschutz" element={<LegalPage />} />
              <Route path="/agb" element={<LegalPage />} />
              <Route path="/widerruf" element={<LegalPage />} />
              <Route path="/cookies" element={<LegalPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;