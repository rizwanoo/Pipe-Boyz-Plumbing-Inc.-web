import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Phone, Check, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';
import { PageTab } from '../types';
import { COMPANY, SERVICES_DATA } from '../data/companyData';
import { QuoteForm } from '../components/QuoteForm';

interface ServicesPageProps {
  initialServiceId?: string;
  onNavigate: (tab: PageTab, serviceId?: string) => void;
  onRequestQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialServiceId,
  onNavigate,
  onRequestQuote,
}) => {
  const [activeServiceId, setActiveServiceId] = useState(
    initialServiceId || SERVICES_DATA[0].id
  );

  useEffect(() => {
    if (initialServiceId) {
      setActiveServiceId(initialServiceId);
      const elem = document.getElementById(initialServiceId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialServiceId]);

  const scrollToService = (id: string) => {
    setActiveServiceId(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-[#F8F9F6] text-[#202B32]">
      {/* Header Banner (Cinematic Dark Header) */}
      <section className="bg-[#102C3A] text-white pt-28 sm:pt-36 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#12C7C5] font-black font-display">
              <span>California C-36 Certified Disciplines</span>
              <span>·</span>
              <span>Lic. #1112334</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight text-white">
              Comprehensive Plumbing Engineering
            </h1>
            <p className="text-base sm:text-xl text-white/80 leading-relaxed font-medium">
              From high-pressure water main diagnostics to precision commercial installations, we execute every project according to California building codes and uncompromising plumbing craftsmanship.
            </p>
          </div>

          {/* Unboxed Editorial Anchor Bar */}
          <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-black uppercase tracking-wider font-display">
            <span className="text-white/60">Jump to Discipline:</span>
            {SERVICES_DATA.map((srv) => (
              <button
                key={srv.id}
                onClick={() => scrollToService(srv.id)}
                className={`transition-colors py-1 relative ${
                  activeServiceId === srv.id
                    ? 'text-[#12C7C5] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#12C7C5]'
                    : 'text-white/80 hover:text-[#12C7C5]'
                }`}
              >
                {srv.number}. {srv.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTIONS (Full-Width Asymmetrical Editorial Layouts, NO CARDS) */}
      <div className="divide-y divide-[#202B32]/10">
        {SERVICES_DATA.map((srv, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={srv.id}
              id={srv.id}
              className={`py-24 sm:py-32 scroll-mt-28 ${
                isEven ? 'bg-[#F8F9F6]' : 'bg-[#EDF5F5]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {/* Header Title Row */}
                <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6 border-b border-[#202B32]/10 pb-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl sm:text-5xl font-extrabold font-display text-[#00A6B2]">
                      {srv.number}
                    </span>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#202B32]">
                        {srv.title}
                      </h2>
                      <p className="text-sm font-semibold text-[#00A6B2] tracking-wider uppercase mt-1">
                        {srv.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onRequestQuote}
                    className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102C3A] hover:text-[#00A6B2] transition-colors py-2 border-b border-current self-start lg:self-auto"
                  >
                    <span>Request Estimate For This Service</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* Asymmetric Content & Photography Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  {/* Left / Right Alternating Image */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="space-y-4">
                      <div className="overflow-hidden">
                        <img
                          src={srv.image}
                          alt={srv.imageAlt}
                          className="w-full h-[400px] sm:h-[480px] object-cover object-center filter grayscale-[8%] hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <p className="text-xs text-[#647681] italic">
                        {srv.imageAlt}
                      </p>
                    </div>
                  </div>

                  {/* Left / Right Alternating Detailed Prose & Specs */}
                  <div className={`lg:col-span-6 space-y-8 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-[#102C3A]">
                        Technical Scope & Engineering Approach
                      </h3>
                      <p className="text-base text-[#202B32]/85 leading-relaxed">
                        {srv.fullDesc}
                      </p>
                    </div>

                    {/* Scope Items (Clean Line-Separated Editorial, NO CARDS) */}
                    <div className="space-y-3 pt-4 border-t border-[#202B32]/10">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#00A6B2]">
                        Included Capabilities & Procedures:
                      </p>
                      <ul className="space-y-2.5 text-sm text-[#202B32]">
                        {srv.scopeItems.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-[#00A6B2] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Specifications Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#202B32]/10 text-xs">
                      {srv.keySpecs.map((spec, i) => (
                        <div key={i}>
                          <span className="block text-[#647681] uppercase tracking-wider font-semibold mb-1">
                            {spec.label}
                          </span>
                          <span className="block text-sm font-bold text-[#102C3A]">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Call Out CTA */}
                    <div className="pt-4 flex items-center gap-6 text-xs text-[#647681]">
                      <span>Questions regarding {srv.title.toLowerCase()}?</span>
                      <a
                        href={`tel:${COMPANY.contact.phone}`}
                        className="text-[#00A6B2] font-bold hover:underline inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>(818) 476-9945</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Service Request Section (Underline Input Form, NO BOXES) */}
      <section className="py-24 sm:py-32 bg-[#102C3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#12C7C5] font-bold block">
                Direct Service Dispatch
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
                Book a Master Plumber
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Provide the details of your plumbing repair, replacement, or new construction project. We provide transparent upfront pricing and rapid dispatch across North Hollywood and the San Fernando Valley.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-white/60">
                <p>· California C-36 Licensed Plumbing Contractor #1112334</p>
                <p>· Title 24 & California Uniform Plumbing Code Compliance</p>
                <p>· Same-Day Emergency Dispatch for Critical Line Failures</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuoteForm theme="dark" initialServiceId={activeServiceId} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
