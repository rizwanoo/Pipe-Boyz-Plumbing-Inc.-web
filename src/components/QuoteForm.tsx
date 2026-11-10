import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail } from 'lucide-react';
import { COMPANY, SERVICES_DATA } from '../data/companyData';
import { QuoteFormData } from '../types';

interface QuoteFormProps {
  initialServiceId?: string;
  theme?: 'light' | 'dark';
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialServiceId = '',
  theme = 'light',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceCategory: initialServiceId || 'water-heaters',
    propertyType: 'residential',
    addressOrCity: '',
    urgency: 'within-48-hours',
    projectDescription: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const isDark = theme === 'dark';
  const inputClass = isDark ? 'editorial-input-dark' : 'editorial-input';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Please provide a valid contact phone number.');
      return;
    }

    const urgencyLabels: Record<string, string> = {
      'emergency-today': 'URGENT: Same-Day Emergency',
      'within-48-hours': 'Standard (Within 24–48 Hours)',
      'planning-project': 'Future Planning / Construction Bid',
    };

    const propertyLabels: Record<string, string> = {
      residential: 'Single-Family / Residential',
      commercial: 'Commercial / Business Facility',
      'adu-new-construction': 'ADU / New Construction',
    };

    const subject = encodeURIComponent(
      `[Quote Request] ${formData.fullName} - ${formData.serviceCategory} (${formData.addressOrCity || 'San Fernando Valley'})`
    );

    const bodyText =
      `Customer Name: ${formData.fullName}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email Address: ${formData.email || 'Not provided'}\n` +
      `Property Type: ${propertyLabels[formData.propertyType] || formData.propertyType}\n` +
      `Service Requested: ${formData.serviceCategory}\n` +
      `Location / Address: ${formData.addressOrCity || 'Not specified'}\n` +
      `Urgency Level: ${urgencyLabels[formData.urgency] || formData.urgency}\n\n` +
      `Project Scope Details:\n${formData.projectDescription || 'No additional notes provided'}\n\n` +
      `Submitted via Pipe Boyz Plumbing Inc. Website dispatch portal.`;

    const mailtoUrl = `mailto:${COMPANY.contact.email}?subject=${subject}&body=${encodeURIComponent(
      bodyText
    )}`;

    // Trigger authentic email client dispatch
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`py-12 border-t ${isDark ? 'border-white/10 text-white' : 'border-[#202B32]/10 text-[#202B32]'}`}>
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-8 h-8 text-[#12C7C5] shrink-0 mt-1" />
          <div className="space-y-3">
            <h4 className="text-2xl font-bold font-display">Quote Request Dispatched</h4>
            <p className={`text-sm ${isDark ? 'text-white/80' : 'text-[#647681]'} max-w-xl leading-relaxed`}>
              Your estimate details have been prepared for <strong>{COMPANY.contact.email}</strong>. If your email application did not launch automatically, you can call us directly for immediate dispatch at{' '}
              <a href={`tel:${COMPANY.contact.phone}`} className="text-[#00A6B2] font-semibold underline">
                {COMPANY.contact.phoneFormatted}
              </a>.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className={`text-xs font-bold uppercase tracking-wider underline ${isDark ? 'text-[#12C7C5]' : 'text-[#00A6B2]'}`}
              >
                Submit another request
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {errorMsg && (
        <div className="text-xs text-rose-500 font-medium py-1 border-b border-rose-500/30">
          {errorMsg}
        </div>
      )}

      {/* Row 1: Name and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="fullName"
            className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${
              isDark ? 'text-white/70' : 'text-[#647681]'
            }`}
          >
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Robert Vance"
            className={`${inputClass} w-full text-base`}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${
              isDark ? 'text-white/70' : 'text-[#647681]'
            }`}
          >
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. (818) 555-0192"
            className={`${inputClass} w-full text-base`}
          />
        </div>
      </div>

      {/* Row 2: Email and Property Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="email"
            className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${
              isDark ? 'text-white/70' : 'text-[#647681]'
            }`}
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. robert@example.com"
            className={`${inputClass} w-full text-base`}
          />
        </div>

        <div>
          <label
            htmlFor="addressOrCity"
            className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${
              isDark ? 'text-white/70' : 'text-[#647681]'
            }`}
          >
            Service City or Address
          </label>
          <input
            id="addressOrCity"
            name="addressOrCity"
            type="text"
            value={formData.addressOrCity}
            onChange={handleChange}
            placeholder="e.g. North Hollywood, CA or 91605"
            className={`${inputClass} w-full text-base`}
          />
        </div>
      </div>

      {/* Row 3: Service Category & Property Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="serviceCategory"
            className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${
              isDark ? 'text-white/70' : 'text-[#647681]'
            }`}
          >
            Service Needed
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            className={`${inputClass} w-full text-base ${isDark ? 'bg-[#102C3A]' : 'bg-transparent'}`}
          >
            {SERVICES_DATA.map((srv) => (
              <option key={srv.id} value={srv.title} className={isDark ? 'bg-[#102C3A] text-white' : 'bg-white text-[#202B32]'}>
                {srv.title} ({srv.subtitle.split(',')[0]})
              </option>
            ))}
            <option value="Emergency Main Line Leak" className={isDark ? 'bg-[#102C3A] text-white' : 'bg-white text-[#202B32]'}>
              Emergency Leak / Broken Pipe
            </option>
            <option value="General Plumbing Inquiry" className={isDark ? 'bg-[#102C3A] text-white' : 'bg-white text-[#202B32]'}>
              General Plumbing Diagnostic
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="propertyType"
            className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${
              isDark ? 'text-white/70' : 'text-[#647681]'
            }`}
          >
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className={`${inputClass} w-full text-base ${isDark ? 'bg-[#102C3A]' : 'bg-transparent'}`}
          >
            <option value="residential" className={isDark ? 'bg-[#102C3A] text-white' : 'bg-white text-[#202B32]'}>
              Residential (Single Family / Condo)
            </option>
            <option value="commercial" className={isDark ? 'bg-[#102C3A] text-white' : 'bg-white text-[#202B32]'}>
              Commercial (Restaurant / Retail / Office)
            </option>
            <option value="adu-new-construction" className={isDark ? 'bg-[#102C3A] text-white' : 'bg-white text-[#202B32]'}>
              ADU / Addition / New Construction
            </option>
          </select>
        </div>
      </div>

      {/* Row 4: Urgency Level */}
      <div>
        <label
          htmlFor="urgency"
          className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${
            isDark ? 'text-white/70' : 'text-[#647681]'
          }`}
        >
          Timeline & Urgency
        </label>
        <div className="flex flex-wrap gap-8 pt-2">
          {[
            { id: 'emergency-today', label: 'Same-Day Emergency' },
            { id: 'within-48-hours', label: 'Within 24–48 Hours' },
            { id: 'planning-project', label: 'Upcoming Project / Bid' },
          ].map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 text-sm cursor-pointer select-none"
            >
              <input
                type="radio"
                name="urgency"
                value={item.id}
                checked={formData.urgency === item.id}
                onChange={handleChange}
                className="w-4 h-4 accent-[#00A6B2]"
              />
              <span className={isDark ? 'text-white/80' : 'text-[#202B32]'}>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Row 5: Project Description */}
      <div>
        <label
          htmlFor="projectDescription"
          className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${
            isDark ? 'text-white/70' : 'text-[#647681]'
          }`}
        >
          Describe Your Plumbing Issue or Project Requirements
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={3}
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Provide details (e.g. 50-gallon gas water heater leaking from base, need replacement and seismic straps in North Hollywood)..."
          className={`${inputClass} w-full text-base resize-none`}
        />
      </div>

      {/* Submit Button & Direct Call Fallback */}
      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-inherit">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[#102C3A] hover:text-[#00A6B2] dark:text-white dark:hover:text-[#12C7C5] transition-colors py-2 border-b-2 border-current whitespace-nowrap self-start"
        >
          <span>SEND ESTIMATE REQUEST</span>
          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="flex items-center gap-6 text-xs text-[#647681] dark:text-white/60">
          <span>Immediate emergency response?</span>
          <a
            href={`tel:${COMPANY.contact.phone}`}
            className="flex items-center gap-1.5 text-[#00A6B2] dark:text-[#12C7C5] font-bold hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call (818) 476-9945</span>
          </a>
        </div>
      </div>
    </form>
  );
};
