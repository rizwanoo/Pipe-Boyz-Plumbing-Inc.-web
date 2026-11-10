import React, { useState } from 'react';
import { Search, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../data/companyData';

interface ServiceAreaCheckerProps {
  onRequestQuote: () => void;
}

export const ServiceAreaChecker: React.FC<ServiceAreaCheckerProps> = ({ onRequestQuote }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<{
    matched: boolean;
    city?: string;
    message?: string;
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return;

    // Check by city name or zip code
    const foundArea = COMPANY.serviceAreas.find(
      (area) =>
        area.city.toLowerCase().includes(cleanQuery) ||
        area.zipCodes.some((zip) => zip.includes(cleanQuery))
    );

    if (foundArea) {
      setResult({
        matched: true,
        city: foundArea.city,
        message: `Priority coverage active for ${foundArea.city}. Same-day dispatch and code-certified plumbing services available.`,
      });
    } else if (
      cleanQuery.includes('los angeles') ||
      cleanQuery.includes('valley') ||
      cleanQuery.includes('hollywood') ||
      cleanQuery.includes('91') ||
      cleanQuery.includes('90')
    ) {
      setResult({
        matched: true,
        city: 'Greater Los Angeles & San Fernando Valley',
        message: `Covered! We serve this territory across the San Fernando Valley and surrounding areas.`,
      });
    } else {
      setResult({
        matched: false,
        message: `Not sure if we cover your area? Call (818) 476-9945 to verify immediate technician dispatch.`,
      });
    }
  };

  return (
    <div className="py-12 border-t border-b border-[#202B32]/10 my-8">
      <div className="max-w-4xl">
        <span className="text-xs uppercase tracking-widest text-[#00A6B2] font-bold block mb-2">
          Territory Verification
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#202B32] mb-3">
          Check Your Service Area
        </h3>
        <p className="text-sm text-[#647681] max-w-2xl mb-8 leading-relaxed">
          We provide rapid dispatch across North Hollywood, Burbank, Sherman Oaks, Van Nuys,
          Studio City, and the greater Los Angeles metropolitan area.
        </p>

        {/* Clean underline input form, NO BOXES */}
        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-6 items-baseline max-w-xl">
          <div className="flex-1 w-full relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your Zip Code or City (e.g. 91605, Burbank)"
              className="editorial-input w-full text-base placeholder:text-[#647681]/60 text-[#202B32]"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102C3A] hover:text-[#00A6B2] transition-colors py-2 border-b-2 border-[#102C3A] hover:border-[#00A6B2] whitespace-nowrap"
          >
            <Search className="w-4 h-4" />
            <span>Verify Dispatch</span>
          </button>
        </form>

        {/* Unboxed result feedback */}
        {result && (
          <div className="mt-8 pt-6 border-t border-[#202B32]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              {result.matched ? (
                <CheckCircle2 className="w-5 h-5 text-[#00A6B2] shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-[#E99A55] shrink-0 mt-0.5" />
              )}
              <div>
                <p className="text-sm font-semibold text-[#202B32]">
                  {result.city ? `${result.city} Coverage Confirmed` : 'Territory Notice'}
                </p>
                <p className="text-xs text-[#647681] mt-0.5">{result.message}</p>
              </div>
            </div>

            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A6B2] hover:text-[#102C3A] transition-colors shrink-0 group self-start sm:self-auto"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
