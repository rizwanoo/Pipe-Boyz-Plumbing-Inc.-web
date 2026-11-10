import React, { useState } from 'react';
import { ArrowUpRight, Check, MapPin, Wrench } from 'lucide-react';
import { PageTab } from '../types';
import { PROJECTS_DATA, COMPANY } from '../data/companyData';

interface WorkPageProps {
  onNavigate: (tab: PageTab, serviceId?: string) => void;
  onRequestQuote: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, onRequestQuote }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects =
    filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <div className="w-full bg-[#F8F9F6] text-[#202B32]">
      {/* Header Banner (Cinematic Dark Header) */}
      <section className="bg-[#102C3A] text-white pt-28 sm:pt-36 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#12C7C5] font-black font-display">
              <span>Verified Field Projects</span>
              <span>·</span>
              <span>San Fernando Valley & Greater Los Angeles</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight text-white">
              Our Completed Projects
            </h1>
            <p className="text-base sm:text-xl text-white/80 leading-relaxed font-medium">
              Every photograph below represents actual plumbing work completed by Pipe Boyz Plumbing Inc. under California License #1112334. From seismic gas water heater retrofits to multi-port shower rough-ins and Moen smart shutoff integrations.
            </p>
          </div>

          {/* Clean Filter Navigation (Text Tabs with Underline, ZERO PILLS) */}
          <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-black uppercase tracking-wider font-display">
            <span className="text-white/60">Filter by Project Type:</span>
            {[
              { id: 'all', label: 'All Projects (9)' },
              { id: 'water-heaters', label: 'Water Heaters' },
              { id: 'valves', label: 'Smart Valves & Pressure' },
              { id: 'rough-in', label: 'ADU & Rough-In' },
              { id: 'commercial', label: 'Commercial' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`py-1 transition-colors relative focus:outline-none ${
                  filter === cat.id
                    ? 'text-[#12C7C5] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#12C7C5]'
                    : 'text-white/80 hover:text-[#12C7C5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DOCUMENTATION (Large-Format Editorial Asymmetric Layout, NO CARDS) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {filteredProjects.map((project, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-24 border-b border-[#202B32]/10 last:border-b-0"
            >
              {/* Image side */}
              <div
                className={`lg:col-span-7 ${
                  isReversed ? 'order-1 lg:order-2' : 'order-1'
                }`}
              >
                <div className="space-y-3">
                  <div className="overflow-hidden bg-[#EDF5F5]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-[420px] sm:h-[540px] object-cover object-center filter grayscale-[6%] hover:grayscale-0 transition-all duration-500 shadow-sm"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#647681]">
                    <span>{project.alt}</span>
                    <span className="font-mono text-[#00A6B2]">FIG. {index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Editorial Prose & Technical Specs side */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isReversed ? 'order-2 lg:order-1' : 'order-2'
                }`}
              >
                <div className="flex items-center gap-3 text-xs text-[#00A6B2] font-semibold uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <span>·</span>
                  <span>{project.categoryLabel}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#102C3A]">
                  {project.title}
                </h2>

                <p className="text-base text-[#202B32]/85 leading-relaxed">
                  {project.summary}
                </p>

                {/* Technical Procedures Completed */}
                <div className="space-y-2.5 border-t border-[#202B32]/10 pt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00A6B2] block">
                    Technical Specifications:
                  </span>
                  <ul className="space-y-2 text-xs text-[#202B32]">
                    {project.technicalDetails.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#00A6B2] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spec Indicators (Tabular Numbers, NO PILLS) */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#202B32]/10 text-xs">
                  {project.specs.map((spec, i) => (
                    <div key={i}>
                      <span className="block text-[#647681] uppercase tracking-wider font-semibold">
                        {spec.label}
                      </span>
                      <span className="block font-bold text-[#102C3A] mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={onRequestQuote}
                    className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102C3A] hover:text-[#00A6B2] transition-colors py-2 border-b border-current"
                  >
                    <span>Inquire About Similar Installation</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Inquiry Strip */}
      <section className="py-20 bg-[#102C3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Have a Similar Plumbing Challenge?
            </h3>
            <p className="text-sm text-white/75">
              We handle complex municipal water pressure spikes, smart shutoffs, and emergency water heater replacements daily across the San Fernando Valley.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white hover:text-[#12C7C5] transition-colors py-3 border-b-2 border-[#12C7C5] hover:border-white whitespace-nowrap self-start md:self-auto"
          >
            <span>DISCUSS YOUR PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
};
