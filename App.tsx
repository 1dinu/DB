
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './components/Home.tsx';
import Products from './components/Products.tsx';
import Gallery from './components/Gallery.tsx';
import Contact from './components/Contact.tsx';
import QuotationWizard from './components/QuotationWizard.tsx';
import { Page } from './types.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Simple routing logic based on hash for a true SPA feel
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'products', 'gallery', 'contact', 'quote'].includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Handle initial load
    if (window.location.hash) {
      handleHashChange();
    }
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: Page) => {
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'products': return <Products />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      case 'quote': return <QuotationWizard />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-grow pt-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
