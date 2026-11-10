import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY, SERVICES_DATA } from '../data/companyData';
import { PageTab } from '../types';

interface FooterProps {
  onNavigate: (tab: PageTab, serviceId?: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <footer className="bg-[#102C3A] text-white border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Licensing Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/pipeboyz-logo.png"
                alt="Pipe Boyz Plumbing Inc. Logo"
                className="h-16 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold tracking-tight font-display text-white">
                  PIPE BOYZ PLUMBING INC.
                </h3>
                <p className="text-xs text-[#00A6B2] tracking-wider font-semibold uppercase mt-0.5">
                  California C-36 Licensed Plumbing Contractor
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              Dedicated master plumbing engineering for custom residences, multi-family properties,
              and commercial spaces across North Hollywood, the San Fernando Valley, and Greater Los Angeles.
            </p>

            <div className="flex items-center gap-3 text-xs text-white/80 border-t border-white/10 pt-4">
              <ShieldCheck className="w-4 h-4 text-[#12C7C5] shrink-0" />
              <span>
                California State License Board C-36 Lic. #<strong>1112334</strong> · Fully Bonded & Insured
              </span>
            </div>
          </div>

          {/* Core Services Navigation */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#00A6B2] uppercase">
              Core Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      onNavigate('services', srv.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-white/75 hover:text-[#12C7C5] transition-colors flex items-center justify-between w-full group py-0.5 text-left"
                  >
                    <span>{srv.title}</span>
                    <span className="text-[11px] text-white/30 group-hover:text-[#00A6B2]">
                      {srv.number}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Direct Contacts & Office */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#00A6B2] uppercase">
              Headquarters & Dispatch
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00A6B2] shrink-0 mt-1" />
                <span>
                  7242 Beck Ave
                  <br />
                  North Hollywood, CA 91605
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00A6B2] shrink-0" />
                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="hover:text-[#12C7C5] transition-colors font-semibold"
                >
                  {COMPANY.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00A6B2] shrink-0" />
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="hover:text-[#12C7C5] transition-colors"
                >
                  {COMPANY.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onRequestQuote}
                className="text-xs font-bold uppercase tracking-wider text-[#12C7C5] hover:text-white transition-colors inline-flex items-center gap-2 group"
              >
                <span>Request Project Estimate</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Coverage Strip (Editorial Text, No Pills) */}
        <div className="py-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
          <div>
            <span className="text-[#00A6B2] font-semibold uppercase tracking-wider mr-2">
              Primary Service Territory:
            </span>
            <span>
              North Hollywood · Burbank · Studio City · Sherman Oaks · Van Nuys · Arleta · Montrose · Glendale · Valley Village · Greater Los Angeles
            </span>
          </div>
          <div className="text-white/50">
            {COMPANY.contact.hours}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Pipe Boyz Plumbing Inc. All rights reserved. California C-36 Contractor License #1112334.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                onNavigate('about-contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white/80 transition-colors"
            >
              Licensing & Insurance
            </button>
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white/80 transition-colors"
            >
              Services Overview
            </button>
            <button
              onClick={() => {
                onNavigate('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white/80 transition-colors"
            >
              Project Documentation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
