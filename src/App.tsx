import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { AboutContactPage } from './pages/AboutContactPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Sync hash routing for browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash.startsWith('services')) {
        const parts = hash.split('/');
        setCurrentTab('services');
        if (parts[1]) setSelectedServiceId(parts[1]);
      } else if (hash === 'work' || hash === 'projects') {
        setCurrentTab('work');
      } else if (hash === 'about' || hash === 'contact' || hash === 'about-contact') {
        setCurrentTab('about-contact');
      } else {
        setCurrentTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: PageTab, serviceId?: string) => {
    setCurrentTab(tab);
    setSelectedServiceId(serviceId);

    if (tab === 'home') {
      window.location.hash = '#/';
    } else if (tab === 'services') {
      window.location.hash = serviceId ? `#/services/${serviceId}` : '#/services';
    } else if (tab === 'work') {
      window.location.hash = '#/work';
    } else if (tab === 'about-contact') {
      window.location.hash = '#/about-contact';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestQuote = () => {
    if (currentTab === 'home') {
      const elem = document.getElementById('estimate-section');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleNavigate('about-contact');
    setTimeout(() => {
      const formElem = document.getElementById('contact-form');
      if (formElem) {
        formElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F6] text-[#202B32] selection:bg-[#00A6B2] selection:text-white relative">
      {/* Cinematic Top Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onRequestQuote={handleRequestQuote}
      />

      {/* Main Dynamic Viewport Page Content */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}
        {currentTab === 'services' && (
          <ServicesPage
            initialServiceId={selectedServiceId}
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}
        {currentTab === 'work' && (
          <WorkPage
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}
        {currentTab === 'about-contact' && (
          <AboutContactPage
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}
      </main>

      {/* Floating WhatsApp / Contact Us Quick Action Button */}
      <FloatingWhatsApp onScrollToContact={handleRequestQuote} />

      {/* Cinematic Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={handleRequestQuote}
      />
    </div>
  );
}
