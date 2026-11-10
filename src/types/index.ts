export type PageTab = 'home' | 'services' | 'work' | 'about-contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  scopeItems: string[];
  keySpecs: { label: string; value: string }[];
  image: string;
  imageAlt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'water-heaters' | 'valves' | 'rough-in' | 'commercial';
  categoryLabel: string;
  location: string;
  image: string;
  alt: string;
  summary: string;
  technicalDetails: string[];
  specs: { label: string; value: string }[];
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceCategory: string;
  propertyType: 'residential' | 'commercial' | 'adu-new-construction';
  addressOrCity: string;
  urgency: 'emergency-today' | 'within-48-hours' | 'planning-project';
  projectDescription: string;
}
