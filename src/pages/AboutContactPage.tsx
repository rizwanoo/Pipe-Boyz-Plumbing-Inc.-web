import React, { useState } from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Clock, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PageTab } from '../types';
import { COMPANY } from '../data/companyData';
import { QuoteForm } from '../components/QuoteForm';
import { ServiceAreaChecker } from '../components/ServiceAreaChecker';

interface AboutContactPageProps {
  onNavigate: (tab: PageTab, serviceId?: string) => void;
  onRequestQuote: () => void;
}

export const AboutContactPage: React.FC<AboutContactPageProps> = ({ onNavigate, onRequestQuote }) => {
  const [activeMapLayer, setActiveMapLayer] = useState<'headquarters' | 'valley-radius'>('headquarters');

  return (
    <div className="w-full pt-28 sm:pt-36 bg-[#F8F9F6] text-[#202B32]">
      {/* Header Banner (Editorial Full-Width, No Box) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#202B32]/10">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#00A6B2] font-bold">
            <span>Company Headquarters & Dispatch</span>
            <span>·</span>
            <span>North Hollywood, California</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight leading-tight">
            About & Contact
          </h1>
          <p className="text-base sm:text-xl text-[#647681] leading-relaxed">
            Pipe Boyz Plumbing Inc. is a licensed California C-36 plumbing contractor (#1112334) providing residential and commercial plumbing services across the San Fernando Valley and Greater Los Angeles.
          </p>
        </div>
      </section>

      {/* SECTION 1: AUTHENTIC COMPANY PROFILE & LICENSING (Zero Cards, No Box Clutter) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Company Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A6B2]">
                Our Practice & Scope
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#102C3A]">
                Licensed C-36 Plumbing Contractor
              </h2>
              <p className="text-base sm:text-lg text-[#202B32]/85 leading-relaxed">
                Headquartered at <strong>7242 Beck Ave, North Hollywood, CA 91605</strong>, Pipe Boyz Plumbing Inc. provides master mechanical plumbing for single-family residences, accessory dwelling units (ADUs), multi-family properties, and commercial facilities.
              </p>
              <p className="text-base text-[#647681] leading-relaxed">
                Plumbing systems in Southern California face distinctive demands: high municipal water pressure that frequently exceeds safe residential thresholds, aging clay sewer laterals vulnerable to aggressive ficus and eucalyptus roots, and strict California Title 24 water and energy conservation mandates. We approach every repair and installation with engineering rigor, code-mandated materials, and clean technical execution.
              </p>
            </div>

            {/* Verified Credentials List */}
            <div className="pt-6 border-t border-[#202B32]/10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#102C3A]">
                State of California Licensing & Insurance Verification
              </h3>
              <div className="space-y-3 text-sm text-[#202B32]">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#00A6B2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#102C3A]">CSLB License Number:</span>{' '}
                    <span className="font-mono font-bold text-[#00A6B2]">1112334</span> (C-36 Plumbing Contractor)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#00A6B2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#102C3A]">Legal Entity:</span> Pipe Boyz Plumbing Inc.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#00A6B2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#102C3A]">Municipal Coverage:</span> City of Los Angeles (LADBS), Burbank, Glendale, and Los Angeles County Building & Safety departments.
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Logo Display Preserving Original */}
            <div className="pt-8 border-t border-[#202B32]/10 flex items-center gap-6">
              <img
                src="/assets/pipeboyz-logo.png"
                alt="Original Pipe Boyz Plumbing Inc. Brand Logo"
                className="h-20 w-auto object-contain"
              />
              <div className="text-xs text-[#647681]">
                <p className="font-bold text-[#102C3A] text-sm">Pipe Boyz Plumbing Inc.</p>
                <p>Authentic brand identity & registered California plumbing contractor.</p>
              </div>
            </div>
          </div>

          {/* Contact Details Column (Editorial Underline / Dividers, NO BOXES) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A6B2]">
                Direct Contact Information
              </span>
              <h3 className="text-2xl font-bold font-display text-[#102C3A]">
                Get in Touch
              </h3>
              <p className="text-sm text-[#647681]">
                Contact our dispatch team directly by phone, email, or estimate form.
              </p>
            </div>

            <div className="divide-y divide-[#202B32]/10 text-sm">
              <div className="py-4 space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#647681] font-semibold block">
                  Office & Dispatch Address
                </span>
                <p className="font-medium text-[#102C3A] text-base">
                  7242 Beck Ave
                  <br />
                  North Hollywood, CA 91605, USA
                </p>
                <a
                  href="https://maps.google.com/?q=7242+Beck+Ave,+North+Hollywood,+CA+91605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A6B2] hover:underline pt-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="py-4 space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#647681] font-semibold block">
                  Direct Phone
                </span>
                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="text-xl font-bold font-display text-[#102C3A] hover:text-[#00A6B2] transition-colors block"
                >
                  +1 818-476-9945
                </a>
                <p className="text-xs text-[#647681]">Click to dial directly from your mobile device.</p>
              </div>

              <div className="py-4 space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#647681] font-semibold block">
                  Email Inquiries
                </span>
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="text-base font-semibold text-[#00A6B2] hover:underline block"
                >
                  pipeboyzinc@gmail.com
                </a>
                <p className="text-xs text-[#647681]">Send plans, photos, and project bid specifications.</p>
              </div>

              <div className="py-4 space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#647681] font-semibold block">
                  Operating Hours
                </span>
                <p className="text-sm font-medium text-[#102C3A]">
                  Monday – Friday: 7:00 AM – 6:00 PM
                  <br />
                  Saturday – Sunday: 8:00 AM – 4:00 PM
                </p>
                <p className="text-xs text-[#00A6B2] font-semibold pt-1">
                  24/7 Emergency Dispatch Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: GOOGLE MAPS LOCATION & SERVICE RADIUS VISUALIZER */}
      <section className="py-20 bg-[#EDF5F5] border-t border-b border-[#202B32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202B32]/10 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#00A6B2] font-bold block mb-1">
                Geographic Presence
              </span>
              <h2 className="text-3xl font-extrabold font-display text-[#102C3A]">
                Headquarters & Valley Service Radius
              </h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => setActiveMapLayer('headquarters')}
                className={`py-1 relative transition-colors ${
                  activeMapLayer === 'headquarters'
                    ? 'text-[#00A6B2] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00A6B2]'
                    : 'text-[#647681] hover:text-[#102C3A]'
                }`}
              >
                7242 Beck Ave View
              </button>
              <button
                onClick={() => setActiveMapLayer('valley-radius')}
                className={`py-1 relative transition-colors ${
                  activeMapLayer === 'valley-radius'
                    ? 'text-[#00A6B2] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00A6B2]'
                    : 'text-[#647681] hover:text-[#102C3A]'
                }`}
              >
                San Fernando Valley Radius
              </button>
            </div>
          </div>

          {/* Interactive Map Visualizer Container (Full-bleed aesthetic, clean border) */}
          <div className="relative w-full h-[450px] sm:h-[550px] bg-[#102C3A] overflow-hidden border border-[#202B32]/15">
            {/* Embedded Responsive Google Map Centered at 7242 Beck Ave, North Hollywood CA 91605 */}
            <iframe
              title="Pipe Boyz Plumbing Inc. Headquarters Map"
              src={`https://maps.google.com/maps?q=7242+Beck+Ave,+North+Hollywood,+CA+91605&t=&z=${
                activeMapLayer === 'headquarters' ? '15' : '11'
              }&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0 filter contrast-[105%]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Map Overlay Badge (Unboxed, Minimalist Corner Overlay) */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-[#102C3A]/95 backdrop-blur-md text-white p-5 border border-white/15">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#12C7C5] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#00A6B2] font-bold">
                    Pipe Boyz Plumbing Inc. Dispatch Hub
                  </p>
                  <p className="text-sm font-semibold">
                    7242 Beck Ave, North Hollywood, CA 91605
                  </p>
                  <p className="text-xs text-white/70">
                    Serving North Hollywood, Burbank, Studio City, Sherman Oaks, Van Nuys, Arleta, Montrose and Greater LA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Zip Code Checker Component */}
          <ServiceAreaChecker onRequestQuote={onRequestQuote} />
        </div>
      </section>

      {/* SECTION 3: ESTIMATE REQUEST FORM (Underline Input Form, NO BOXES) */}
      <section id="contact-form" className="py-24 sm:py-32 bg-[#F8F9F6] text-[#202B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#00A6B2] font-bold block">
                Direct Work Order & Estimate
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#102C3A]">
                Request an Official Plumbing Estimate
              </h2>
              <p className="text-base text-[#647681] leading-relaxed">
                Fill out the form with your project specifications or maintenance needs. We review requests promptly and contact you with scheduling availability and transparent pricing.
              </p>
              <div className="space-y-3 pt-4 border-t border-[#202B32]/10 text-sm text-[#202B32]">
                <p className="font-semibold text-[#102C3A]">Direct Communication Channels:</p>
                <p>
                  <a href={`tel:${COMPANY.contact.phone}`} className="hover:text-[#00A6B2] font-medium">
                    Phone: {COMPANY.contact.phoneFormatted}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-[#00A6B2] font-medium">
                    Email: {COMPANY.contact.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuoteForm theme="light" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
