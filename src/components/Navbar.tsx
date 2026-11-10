import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { PageTab } from '../types';
import { COMPANY, SERVICES_DATA } from '../data/companyData';

interface NavbarProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab, serviceId?: string) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate, onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: PageTab, serviceId?: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    onNavigate(tab, serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#102C3A]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
        : 'bg-gradient-to-b from-black/80 via-black/35 to-transparent backdrop-blur-[2px] border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Wordmark & Original Logo (shrink-0 to prevent any collision) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#12C7C5] group shrink-0"
          aria-label="Pipe Boyz Plumbing Inc. Homepage"
        >
          <img
            src="/assets/pipeboyz-logo.png"
            alt="Pipe Boyz Plumbing Inc. Original Logo"
            className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <div className="hidden sm:block shrink-0">
            <span className="block text-sm sm:text-base font-black tracking-tight uppercase font-display text-white leading-none">
              Pipe Boyz Plumbing
            </span>
            <span className="block text-[11px] font-black text-[#00F0FF] tracking-wider uppercase mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              Lic. #1112334 · C-36 Contractor
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Bold, Stylish, High-Contrast Typography, NO PILLS) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-extrabold tracking-wider shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap transition-colors relative py-1.5 focus-visible:outline-none uppercase ${
              currentTab === 'home'
                ? 'text-[#12C7C5] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#12C7C5]'
                : 'text-white/90 hover:text-[#12C7C5]'
            }`}
          >
            HOME
          </button>

          {/* Services with smooth bridge dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('services')}
              className={`flex items-center gap-1.5 whitespace-nowrap transition-colors relative py-1.5 focus-visible:outline-none uppercase ${
                currentTab === 'services'
                  ? 'text-[#12C7C5] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#12C7C5]'
                  : 'text-white/90 hover:text-[#12C7C5]'
              }`}
            >
              <span>SERVICES</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesDropdownOpen ? 'rotate-180 text-[#12C7C5]' : 'text-white/60'
                }`}
              />
            </button>

            {/* Editorial Dropdown Menu without boxy cards */}
            {isServicesDropdownOpen && (
              <div className="absolute top-full -left-4 pt-2 w-72 z-50">
                <div className="bg-[#102C3A] text-white border border-white/15 shadow-2xl p-4 divide-y divide-white/10">
                  <div className="pb-2 text-[10px] tracking-widest text-[#12C7C5] uppercase font-black">
                    Master Plumbing Services
                  </div>
                  <div className="pt-2 flex flex-col gap-1">
                    {SERVICES_DATA.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => handleNavClick('services', srv.id)}
                        className="text-left py-2 px-2 text-xs font-bold text-white/90 hover:text-[#12C7C5] hover:translate-x-1 transition-all flex items-center justify-between group"
                      >
                        <span>{srv.title}</span>
                        <span className="text-[10px] text-white/40 group-hover:text-[#12C7C5]">
                          {srv.number}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('work')}
            className={`whitespace-nowrap transition-colors relative py-1.5 focus-visible:outline-none uppercase ${
              currentTab === 'work'
                ? 'text-[#12C7C5] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#12C7C5]'
                : 'text-white/90 hover:text-[#12C7C5]'
            }`}
          >
            OUR WORK
          </button>

          <button
            onClick={() => handleNavClick('about-contact')}
            className={`whitespace-nowrap transition-colors relative py-1.5 focus-visible:outline-none uppercase ${
              currentTab === 'about-contact'
                ? 'text-[#12C7C5] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#12C7C5]'
                : 'text-white/90 hover:text-[#12C7C5]'
            }`}
          >
            ABOUT & CONTACT
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Click-to-call + Bold Unboxed CTA, shrink-0) */}
        <div className="flex items-center gap-4 xl:gap-6 shrink-0">
          <a
            href={`tel:${COMPANY.contact.phone}`}
            className="hidden sm:flex items-center gap-2 text-[#12C7C5] hover:text-white transition-colors text-sm font-black tracking-wide whitespace-nowrap"
            aria-label={`Call Pipe Boyz Plumbing at ${COMPANY.contact.phoneFormatted}`}
          >
            <Phone className="w-4 h-4 text-[#12C7C5]" />
            <span>{COMPANY.contact.phoneFormatted}</span>
          </a>

          <button
            onClick={onRequestQuote}
            className="group flex items-center gap-2 text-xs sm:text-sm font-black tracking-wider uppercase text-white hover:text-[#12C7C5] transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#12C7C5] hover:after:bg-white after:transition-all whitespace-nowrap shrink-0"
          >
            <span>REQUEST FREE QUOTE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#12C7C5]" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#12C7C5] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Editorial, zero-card full-bleed layout) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#102C3A] text-white border-b border-white/15 px-6 py-8 space-y-6">
          <div className="space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left text-lg font-black font-display tracking-tight uppercase ${
                currentTab === 'home' ? 'text-[#12C7C5]' : 'text-white/90'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`block w-full text-left text-lg font-black font-display tracking-tight uppercase ${
                currentTab === 'services' ? 'text-[#12C7C5]' : 'text-white/90'
              }`}
            >
              SERVICES
            </button>
            <div className="pl-4 space-y-2 border-l border-white/10">
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => handleNavClick('services', srv.id)}
                  className="block text-left text-sm font-bold text-white/75 hover:text-[#12C7C5] py-1"
                >
                  {srv.number}. {srv.title}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavClick('work')}
              className={`block w-full text-left text-lg font-black font-display tracking-tight uppercase ${
                currentTab === 'work' ? 'text-[#12C7C5]' : 'text-white/90'
              }`}
            >
              OUR WORK
            </button>
            <button
              onClick={() => handleNavClick('about-contact')}
              className={`block w-full text-left text-lg font-black font-display tracking-tight uppercase ${
                currentTab === 'about-contact' ? 'text-[#12C7C5]' : 'text-white/90'
              }`}
            >
              ABOUT & CONTACT
            </button>
          </div>

          <div className="pt-6 border-t border-white/15 space-y-3">
            <a
              href={`tel:${COMPANY.contact.phone}`}
              className="flex items-center gap-3 text-[#12C7C5] font-black text-base"
            >
              <Phone className="w-5 h-5 text-[#12C7C5]" />
              <span>{COMPANY.contact.phoneFormatted}</span>
            </a>
            <p className="text-xs text-white/60">
              7242 Beck Ave, North Hollywood, CA 91605 · Lic. #1112334
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
