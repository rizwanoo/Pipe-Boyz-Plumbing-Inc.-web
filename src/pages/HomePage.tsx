import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, ShieldCheck, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageTab } from '../types';
import { COMPANY, SERVICES_DATA, PROJECTS_DATA } from '../data/companyData';
import { QuoteForm } from '../components/QuoteForm';
import { ServiceAreaChecker } from '../components/ServiceAreaChecker';
import { ServiceIcon } from '../components/ServiceIcons';

gsap.registerPlugin(ScrollTrigger);

interface HomePageProps {
  onNavigate: (tab: PageTab, serviceId?: string) => void;
  onRequestQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onRequestQuote }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance Animation: Staggered text reveal
      gsap.from('.gsap-hero-kicker', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.15,
      });

      gsap.from('.gsap-hero-title', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: 'power4.out',
        delay: 0.3,
      });

      gsap.from('.gsap-hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.5,
      });

      gsap.from('.gsap-hero-ctas', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.7,
      });

      gsap.from('.gsap-hero-stats > div', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.85,
      });

      // 2. Hero Background Subtle Parallax (Scrub as user scrolls)
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          scrollTrigger: {
            trigger: '#hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
          yPercent: 12,
          ease: 'none',
        });
      }

      // 3. Manifesto Section Reveal
      gsap.from('.gsap-manifesto-text', {
        scrollTrigger: {
          trigger: '#manifesto-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // 4. Scope Split Sections Reveal & Parallax
      const splitSections = document.querySelectorAll('.gsap-split-block');
      splitSections.forEach((block) => {
        const textElements = block.querySelectorAll('.gsap-split-text');
        const img = block.querySelector('.gsap-parallax-img');

        if (textElements.length) {
          gsap.from(textElements, {
            scrollTrigger: {
              trigger: block,
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
            y: 35,
            opacity: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
          });
        }

        if (img) {
          gsap.to(img, {
            scrollTrigger: {
              trigger: block,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
            yPercent: -8,
            ease: 'none',
          });
        }
      });

      // 5. Numbered Services Rows Staggered Reveal
      const serviceRows = document.querySelectorAll('.gsap-service-row');
      serviceRows.forEach((row) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          x: -25,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      // 6. Project Photography Parallax & Stagger
      const projectBlocks = document.querySelectorAll('.gsap-project-block');
      projectBlocks.forEach((block) => {
        const projectImg = block.querySelector('.gsap-project-img');
        const projectText = block.querySelectorAll('.gsap-project-content');

        if (projectImg) {
          gsap.to(projectImg, {
            scrollTrigger: {
              trigger: block,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
            yPercent: -6,
            ease: 'none',
          });
        }

        if (projectText.length) {
          gsap.from(projectText, {
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            y: 30,
            opacity: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
          });
        }
      });

      // 7. Operational Standards Columns
      gsap.from('.gsap-standard-col', {
        scrollTrigger: {
          trigger: '#standards-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
      });

      // 8. License & Service Area sections
      gsap.from('.gsap-license-reveal', {
        scrollTrigger: {
          trigger: '#license-section',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* SECTION 1: FULL-SCREEN CINEMATIC HERO (USER SUPPLIED CINEMATIC CONSTRUCTION IMAGE AS IT IS) */}
      <section
        id="hero-section"
        className="relative min-h-[100vh] lg:min-h-[105vh] flex flex-col justify-end pb-12 sm:pb-16 pt-24 overflow-hidden bg-[#102C3A]"
      >
        {/* Untinted, 100% natural, cinematic construction jobsite photograph */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={heroImageRef}
            src="/assets/hero-cinematic-construction.png"
            alt="Pipe Boyz Plumbing Inc. Cinematic Construction Facility with 3D Brand Sign"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center will-change-transform"
          />
          {/* High-contrast gradient at very bottom ONLY so text is legible while header & image are 100% untinted */}
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0A1A24] via-[#0A1A24]/80 to-transparent pointer-events-none" />
        </div>

        {/* Content Container (High-Contrast Bold Yellow, Cyan & White Typography) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-5">
            {/* Unboxed Kicker */}
            <div className="gsap-hero-kicker flex items-center gap-3 text-xs sm:text-sm font-black tracking-widest uppercase text-[#FFD700] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
              <span className="bg-[#00F0FF] text-[#0A1A24] px-2 py-0.5 font-black rounded-xs">C-36 LICENSED</span>
              <span>California Contractor</span>
              <span aria-hidden="true" className="text-white/60">/</span>
              <span className="text-[#00F0FF]">Lic. #1112334</span>
            </div>

            {/* Main Bold Editorial Headline (Pure White & Electric Yellow) */}
            <h1 className="gsap-hero-title text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.04] font-display text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              PLUMBING DONE RIGHT.<br />
              <span className="text-[#FFD700] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                BUILT TO LAST.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="gsap-hero-subtitle text-base sm:text-xl text-white font-bold max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Reliable residential and commercial plumbing solutions across North Hollywood, the San Fernando Valley and greater Los Angeles.
            </p>

            {/* CTAs (Bold, Stylish Typography, No Boxes) */}
            <div className="gsap-hero-ctas pt-3 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <button
                onClick={onRequestQuote}
                className="group inline-flex items-center gap-3 text-sm sm:text-base font-black uppercase tracking-wider text-white hover:text-[#12C7C5] transition-colors py-3 border-b-2 border-[#12C7C5] hover:border-white whitespace-nowrap self-start"
              >
                <span>REQUEST A FREE QUOTE</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#12C7C5]" />
              </button>

              <a
                href={`tel:${COMPANY.contact.phone}`}
                className="group inline-flex items-center gap-3 text-sm sm:text-base font-black uppercase tracking-wider text-white/95 hover:text-[#12C7C5] transition-colors py-3 border-b border-white/30 hover:border-[#12C7C5] whitespace-nowrap self-start"
              >
                <Phone className="w-4 h-4 text-[#12C7C5]" />
                <span>CALL (818) 476-9945</span>
              </a>
            </div>
          </div>

          {/* Bottom Trust Strip */}
          <div className="gsap-hero-stats mt-12 sm:mt-16 pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-xs sm:text-sm">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#12C7C5] block font-black mb-1">
                State License
              </span>
              <p className="font-extrabold text-white">C-36 #1112334</p>
              <p className="text-white/60 text-xs mt-0.5">California Certified</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#12C7C5] block font-black mb-1">
                Local Presence
              </span>
              <p className="font-extrabold text-white">North Hollywood, CA</p>
              <p className="text-white/60 text-xs mt-0.5">7242 Beck Ave</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#12C7C5] block font-black mb-1">
                Direct Dispatch
              </span>
              <p className="font-extrabold text-white">Same-Day Availability</p>
              <p className="text-white/60 text-xs mt-0.5">Rapid Valley Response</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#12C7C5] block font-black mb-1">
                Workmanship
              </span>
              <p className="font-extrabold text-white">Code-Compliant Guarantee</p>
              <p className="text-white/60 text-xs mt-0.5">Insured & Bonded</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRAND INTRODUCTION & CRAFTSMANSHIP MANIFESTO */}
      <section id="manifesto-section" className="py-24 sm:py-32 bg-[#F8F9F6] text-[#202B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="gsap-manifesto-text text-xs uppercase tracking-widest text-[#00A6B2] font-bold block">
                The Pipe Boyz Standard
              </span>
              <h2 className="gsap-manifesto-text text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight text-[#102C3A]">
                Plumbing Engineered for Decades, Not Just Until the Next Call.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#202B32]/85 text-base sm:text-lg leading-relaxed">
              <p className="gsap-manifesto-text">
                Founded and headquartered at <strong>7242 Beck Ave in North Hollywood</strong>, Pipe Boyz Plumbing Inc. operates under California C-36 Plumbing Contractor License #1112334. We provide uncompromising technical plumbing for homeowners, custom builders, property managers, and commercial operations across the San Fernando Valley and Los Angeles.
              </p>
              <p className="gsap-manifesto-text text-[#647681]">
                We do not take shortcuts. We use hard-drawn Type L copper, Schedule 40 ABS drainage, lead-free brass pressure regulators, and precision-soldered or press-fitted connections that pass municipal inspection on the first visit. Whether replacing a failed water heater in an emergency or plumbing an ADU from underground rough-in to final fixtures, our work is clean, code-compliant, and built to last.
              </p>

              <div className="gsap-manifesto-text pt-4 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-[#102C3A]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00A6B2]" />
                  <span>Licensed C-36 #1112334</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00A6B2]" />
                  <span>Fully Insured & Bonded</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00A6B2]" />
                  <span>Transparent Upfront Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00A6B2]" />
                  <span>Same-Day Emergency Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: RESIDENTIAL & COMMERCIAL OVERVIEW (Asymmetric Editorial Composition with Parallax) */}
      <section className="py-24 bg-[#EDF5F5] text-[#202B32] border-t border-b border-[#202B32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202B32]/15 pb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#00A6B2] font-bold block mb-2">
                Scope of Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#102C3A]">
                Residential & Commercial Expertise
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#647681] max-w-md">
              From historic San Fernando Valley bungalows to modern commercial multi-occupancy structures.
            </p>
          </div>

          {/* Split 1: Residential Master Craftsmanship */}
          <div className="gsap-split-block grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="gsap-split-text text-xs font-bold uppercase tracking-widest text-[#00A6B2] block">
                Residential Plumbing
              </span>
              <h3 className="gsap-split-text text-2xl sm:text-4xl font-bold font-display tracking-tight text-[#102C3A]">
                Protecting Homes Across North Hollywood & The Valley
              </h3>
              <p className="gsap-split-text text-base text-[#647681] leading-relaxed">
                Water damage is the single most expensive threat to Southern California homeowners. We install smart leak detection shutoff valves, replace corroded galvanized lines with pure Type L copper, stabilize municipal pressure surges with heavy-duty regulators, and install high-recovery tank and tankless water heaters.
              </p>
              <ul className="gsap-split-text space-y-3 text-sm text-[#202B32] font-medium border-t border-[#202B32]/10 pt-4">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00A6B2]" />
                  <span>Tankless and atmospheric gas water heater replacements</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00A6B2]" />
                  <span>Moen Flo smart shutoff valves with mobile leak alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00A6B2]" />
                  <span>High-pressure PRV valves calibrated to 55–65 PSI</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00A6B2]" />
                  <span>ADU, garage conversion, and bathroom remodel rough-ins</span>
                </li>
              </ul>
              <div className="gsap-split-text pt-2">
                <button
                  onClick={() => onNavigate('services', 'water-heaters')}
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102C3A] hover:text-[#00A6B2] transition-colors py-2 border-b border-current"
                >
                  <span>Explore Residential Services</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#00A6B2]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="/assets/images/services_water_heater_tankless_1794310653410.jpg"
                  alt="High efficiency tankless water heater installation"
                  loading="lazy"
                  decoding="async"
                  className="gsap-parallax-img w-full h-[400px] sm:h-[480px] object-cover object-center filter grayscale-[8%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Split 2: Commercial Plumbing Systems */}
          <div className="gsap-split-block grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-[#202B32]/10">
            <div className="lg:col-span-6 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="/assets/images/commercial_plumbing_system_1794310653934.jpg"
                  alt="Commercial plumbing mechanical room with large-diameter distribution"
                  loading="lazy"
                  decoding="async"
                  className="gsap-parallax-img w-full h-[400px] sm:h-[480px] object-cover object-center filter grayscale-[8%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="gsap-split-text text-xs font-bold uppercase tracking-widest text-[#00A6B2] block">
                Commercial Infrastructure
              </span>
              <h3 className="gsap-split-text text-2xl sm:text-4xl font-bold font-display tracking-tight text-[#102C3A]">
                Built for High-Volume Demands & Zero Unplanned Downtime
              </h3>
              <p className="gsap-split-text text-base text-[#647681] leading-relaxed">
                Restaurants, retail complexes, office suites, and multi-family buildings require heavy mechanical plumbing adhering to the California Uniform Plumbing Code. We engineer grease interceptors, roof drain assemblies, backflow preventers, and continuous recirculating hot water loops.
              </p>
              <ul className="gsap-split-text space-y-3 text-sm text-[#202B32] font-medium border-t border-[#202B32]/10 pt-4">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00A6B2]" />
                  <span>Commercial kitchen grease traps and interceptor maintenance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00A6B2]" />
                  <span>Roof storm drains, overflow scuppers & secondary drainage</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00A6B2]" />
                  <span>Backflow prevention device installation and repair</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00A6B2]" />
                  <span>Multi-occupancy ADA restroom drain and supply headers</span>
                </li>
              </ul>
              <div className="gsap-split-text pt-2">
                <button
                  onClick={() => onNavigate('services', 'commercial-plumbing')}
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102C3A] hover:text-[#00A6B2] transition-colors py-2 border-b border-current"
                >
                  <span>Explore Commercial Services</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#00A6B2]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PLUMBING SERVICES (Numbered Editorial Rows with Line-Art SVG Icons) */}
      <section className="py-24 sm:py-32 bg-[#102C3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#12C7C5] font-bold block mb-2">
                Professional Disciplines
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
                Our Master Plumbing Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold uppercase tracking-wider text-[#12C7C5] hover:text-white transition-colors inline-flex items-center gap-2 group self-start md:self-auto py-2"
            >
              <span>View Comprehensive Service Guide</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Service Rows with Minimal Line-Art SVG Icons */}
          <div className="divide-y divide-white/10">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="gsap-service-row py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-white/[0.02] transition-colors"
              >
                <div className="lg:col-span-3 flex items-center gap-4">
                  {/* Modern Line-Art SVG Icon Container */}
                  <div className="p-3 bg-[#12C7C5]/10 border border-[#12C7C5]/30 text-[#12C7C5] group-hover:bg-[#12C7C5] group-hover:text-[#102C3A] transition-all shrink-0">
                    <ServiceIcon name={srv.icon} className="w-7 h-7 stroke-[1.75]" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black font-display text-[#00A6B2] tracking-tighter block">
                      {srv.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 font-mono block">
                      DISCIPLINE
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-[#12C7C5] transition-colors">
                      {srv.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#00A6B2] pt-2">
                    {srv.keySpecs.map((spec, i) => (
                      <span key={i}>
                        <strong>{spec.label}:</strong> {spec.value}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end gap-6 h-full">
                  <button
                    onClick={() => onNavigate('services', srv.id)}
                    className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 hover:text-[#12C7C5] transition-colors py-2 border-b border-white/20 hover:border-[#12C7C5]"
                  >
                    <span>Technical Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LARGE-FORMAT RECENT PROJECT PHOTOGRAPHY (Authentic Real Projects, NO CARDS) */}
      <section className="py-24 sm:py-32 bg-[#F8F9F6] text-[#202B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202B32]/10 pb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#00A6B2] font-bold block mb-2">
                Verified Workmanship
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#102C3A]">
                Authentic Jobsite Installations
              </h2>
            </div>
            <button
              onClick={() => onNavigate('work')}
              className="text-xs font-bold uppercase tracking-wider text-[#102C3A] hover:text-[#00A6B2] transition-colors inline-flex items-center gap-2 group self-start md:self-auto py-2 border-b border-current"
            >
              <span>Explore All 9 Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Asymmetric Large Format Photography Showcase with Parallax */}
          <div className="space-y-28">
            {/* Project Highlight 1: Gas Water Heater & Expansion Tank */}
            <div className="gsap-project-block grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 overflow-hidden">
                <img
                  src={PROJECTS_DATA[0].image}
                  alt={PROJECTS_DATA[0].alt}
                  className="gsap-project-img w-full h-[450px] sm:h-[550px] object-cover object-center filter grayscale-[6%] hover:grayscale-0 transition-all duration-500 shadow-sm"
                />
              </div>
              <div className="lg:col-span-5 space-y-6">
                <div className="gsap-project-content flex items-center gap-3 text-xs text-[#00A6B2] font-semibold uppercase tracking-wider">
                  <span>{PROJECTS_DATA[0].location}</span>
                  <span>·</span>
                  <span>{PROJECTS_DATA[0].categoryLabel}</span>
                </div>
                <h3 className="gsap-project-content text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#102C3A]">
                  {PROJECTS_DATA[0].title}
                </h3>
                <p className="gsap-project-content text-base text-[#647681] leading-relaxed">
                  {PROJECTS_DATA[0].summary}
                </p>
                <div className="gsap-project-content space-y-2 border-t border-[#202B32]/10 pt-4 text-xs text-[#202B32]">
                  {PROJECTS_DATA[0].technicalDetails.slice(0, 3).map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#00A6B2] font-bold">―</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onNavigate('work')}
                  className="gsap-project-content group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102C3A] hover:text-[#00A6B2] transition-colors py-2 border-b border-current"
                >
                  <span>View Project Specs</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Project Highlight 2: Moen Smart Shutoff & Copper Tie-in */}
            <div className="gsap-project-block grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                <div className="gsap-project-content flex items-center gap-3 text-xs text-[#00A6B2] font-semibold uppercase tracking-wider">
                  <span>{PROJECTS_DATA[1].location}</span>
                  <span>·</span>
                  <span>{PROJECTS_DATA[1].categoryLabel}</span>
                </div>
                <h3 className="gsap-project-content text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#102C3A]">
                  {PROJECTS_DATA[1].title}
                </h3>
                <p className="gsap-project-content text-base text-[#647681] leading-relaxed">
                  {PROJECTS_DATA[1].summary}
                </p>
                <div className="gsap-project-content space-y-2 border-t border-[#202B32]/10 pt-4 text-xs text-[#202B32]">
                  {PROJECTS_DATA[1].technicalDetails.slice(0, 3).map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#00A6B2] font-bold">―</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onNavigate('work')}
                  className="gsap-project-content group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102C3A] hover:text-[#00A6B2] transition-colors py-2 border-b border-current"
                >
                  <span>View Project Specs</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden">
                <img
                  src={PROJECTS_DATA[1].image}
                  alt={PROJECTS_DATA[1].alt}
                  className="gsap-project-img w-full h-[450px] sm:h-[550px] object-cover object-center filter grayscale-[6%] hover:grayscale-0 transition-all duration-500 shadow-sm"
                />
              </div>
            </div>

            {/* Project Highlight 3: Pressure Regulator Manifold */}
            <div className="gsap-project-block grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 overflow-hidden">
                <img
                  src={PROJECTS_DATA[2].image}
                  alt={PROJECTS_DATA[2].alt}
                  className="gsap-project-img w-full h-[450px] sm:h-[550px] object-cover object-center filter grayscale-[6%] hover:grayscale-0 transition-all duration-500 shadow-sm"
                />
              </div>
              <div className="lg:col-span-5 space-y-6">
                <div className="gsap-project-content flex items-center gap-3 text-xs text-[#00A6B2] font-semibold uppercase tracking-wider">
                  <span>{PROJECTS_DATA[2].location}</span>
                  <span>·</span>
                  <span>{PROJECTS_DATA[2].categoryLabel}</span>
                </div>
                <h3 className="gsap-project-content text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#102C3A]">
                  {PROJECTS_DATA[2].title}
                </h3>
                <p className="gsap-project-content text-base text-[#647681] leading-relaxed">
                  {PROJECTS_DATA[2].summary}
                </p>
                <div className="gsap-project-content space-y-2 border-t border-[#202B32]/10 pt-4 text-xs text-[#202B32]">
                  {PROJECTS_DATA[2].technicalDetails.slice(0, 3).map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#00A6B2] font-bold">―</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onNavigate('work')}
                  className="gsap-project-content group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102C3A] hover:text-[#00A6B2] transition-colors py-2 border-b border-current"
                >
                  <span>View Project Specs</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CLIENTS CHOOSE PIPE BOYZ (Editorial Multi-Column, NO BOXES) */}
      <section id="standards-section" className="py-24 sm:py-32 bg-[#EDF5F5] text-[#202B32] border-t border-b border-[#202B32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#00A6B2] font-bold block">
              Operational Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#102C3A]">
              Why California Property Owners Choose Pipe Boyz
            </h2>
            <p className="text-base sm:text-lg text-[#647681] leading-relaxed">
              Plumbing is the physical circulatory system of your building. We treat it with engineering discipline, absolute honesty, and respectful jobsite care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8 border-t border-[#202B32]/10">
            <div className="gsap-standard-col space-y-3">
              <span className="text-xs font-bold text-[#00A6B2] uppercase tracking-wider block">
                01 · Direct Licensing
              </span>
              <h3 className="text-xl font-bold font-display text-[#102C3A]">
                Licensed C-36 Master Contractor
              </h3>
              <p className="text-sm text-[#647681] leading-relaxed">
                Work performed by real licensed plumbers under California License #1112334. We pull municipal permits, interface with city inspectors, and follow Title 24 energy and water codes.
              </p>
            </div>

            <div className="gsap-standard-col space-y-3">
              <span className="text-xs font-bold text-[#00A6B2] uppercase tracking-wider block">
                02 · Diagnostic Clarity
              </span>
              <h3 className="text-xl font-bold font-display text-[#102C3A]">
                Advanced Diagnostic Tech
              </h3>
              <p className="text-sm text-[#647681] leading-relaxed">
                We never guess behind drywall or beneath concrete slabs. We use RIDGID SeeSnake fiber-optic color cameras and underground sonde locators to pinpoint root intrusions and pipe breaks.
              </p>
            </div>

            <div className="gsap-standard-col space-y-3">
              <span className="text-xs font-bold text-[#00A6B2] uppercase tracking-wider block">
                03 · Straightforward Pricing
              </span>
              <h3 className="text-xl font-bold font-display text-[#102C3A]">
                Transparent Upfront Estimates
              </h3>
              <p className="text-sm text-[#647681] leading-relaxed">
                No high-pressure sales pitches, hidden surprise fees, or invented emergency charges. We clearly explain what is required to solve the issue permanently before turning a wrench.
              </p>
            </div>

            <div className="gsap-standard-col space-y-3">
              <span className="text-xs font-bold text-[#00A6B2] uppercase tracking-wider block">
                04 · Pristine Care
              </span>
              <h3 className="text-xl font-bold font-display text-[#102C3A]">
                Clean Jobsite Guarantee
              </h3>
              <p className="text-sm text-[#647681] leading-relaxed">
                We protect your flooring, wear shoe protection, wipe copper joints, neutralize flux residue, and leave every mechanical closet, bathroom, or kitchen cleaner than we found it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WORKMANSHIP & LICENSING CREDENTIALS */}
      <section id="license-section" className="py-20 bg-[#102C3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="gsap-license-reveal flex items-center gap-3 text-xs uppercase tracking-widest text-[#12C7C5] font-bold">
                <ShieldCheck className="w-5 h-5 text-[#12C7C5]" />
                <span>Verified California State License Board</span>
              </div>
              <h2 className="gsap-license-reveal text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                California C-36 Plumbing Contractor — License #1112334
              </h2>
              <p className="gsap-license-reveal text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
                Always demand verified license credentials when hiring a plumbing contractor in California. Unlicensed handymen void manufacturer warranties and can leave homeowners liable for structural water damage. Pipe Boyz Plumbing Inc. is fully bonded, worker-compensation insured, and registered with California municipal building departments.
              </p>
            </div>

            <div className="gsap-license-reveal lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
              <div className="text-left lg:text-right">
                <p className="text-xs uppercase tracking-wider text-white/50">Primary Business Address</p>
                <p className="text-sm font-semibold text-white">7242 Beck Ave, North Hollywood, CA 91605</p>
                <p className="text-xs text-[#00A6B2] mt-1">Phone: (818) 476-9945 · Email: pipeboyzinc@gmail.com</p>
              </div>
              <button
                onClick={() => onNavigate('about-contact')}
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12C7C5] hover:text-white transition-colors py-2 border-b border-[#12C7C5]"
              >
                <span>View Full License & Contact Details</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SERVICE AREA TERRITORY & INTERACTIVE CHECKER */}
      <section className="py-24 bg-[#DDF3F3] text-[#202B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#00A6B2] font-bold block">
              Local Service Coverage
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#102C3A]">
              Where We Work Across Los Angeles
            </h2>
            <p className="text-base sm:text-lg text-[#647681] leading-relaxed">
              We serve the whole San Fernando Valley and the greater Los Angeles area, including North Hollywood, Burbank, Sherman Oaks, Van Nuys, Arleta, Studio City, Montrose and nearby neighborhoods.
            </p>
          </div>

          {/* Interactive Territory Checker (Clean underline input, NO BOXES) */}
          <ServiceAreaChecker onRequestQuote={onRequestQuote} />

          {/* City List (Editorial Clean Typography, NO PILLS) */}
          <div className="pt-6 border-t border-[#202B32]/10">
            <p className="text-xs uppercase tracking-widest text-[#647681] font-bold mb-4">
              Daily Service Dispatch Hubs:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8 text-sm">
              {COMPANY.serviceAreas.map((area) => (
                <div key={area.city} className="border-b border-[#202B32]/10 pb-2">
                  <span className="font-semibold text-[#102C3A] block">{area.city}</span>
                  <span className="text-xs text-[#647681]">
                    Zip: {area.zipCodes.slice(0, 3).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: STRONG ESTIMATE REQUEST SECTION (Underline Form, NO BOXES) */}
      <section id="estimate-section" className="py-24 sm:py-32 bg-[#F8F9F6] text-[#202B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#00A6B2] font-bold block">
                Direct Dispatch Request
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#102C3A]">
                Request a Free Quote
              </h2>
              <p className="text-base text-[#647681] leading-relaxed">
                Tell us what you need and we will call you back promptly with clear answers and scheduling options.
              </p>
              <div className="p-6 bg-[#EDF5F5] border-l-2 border-[#00A6B2] space-y-2 text-sm text-[#202B32]">
                <p className="font-bold text-[#102C3A]">For the fastest immediate response:</p>
                <p className="text-xs text-[#647681]">
                  Water main breaks, sewer backups, and emergency leaks should be phoned in directly for immediate dispatch.
                </p>
                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00A6B2] hover:underline pt-1"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (818) 476-9945</span>
                </a>
              </div>
              <div className="text-xs text-[#647681] space-y-1">
                <p><strong>Pipe Boyz Plumbing Inc.</strong></p>
                <p>Licensed plumbing contractor, C-36, Lic.# 1112334</p>
                <p>7242 Beck Ave, North Hollywood, CA 91605</p>
                <p>
                  <a href={`tel:${COMPANY.contact.phone}`} className="hover:underline">{COMPANY.contact.phoneFormatted}</a> ·{' '}
                  <a href={`mailto:${COMPANY.contact.email}`} className="hover:underline">{COMPANY.contact.email}</a>
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
