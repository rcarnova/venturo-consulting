export interface CaseData {
  id: string;
  company: string;
  result: string;
  description: string;
  logo?: string;
  logoScale?: number;
  invertLogo?: boolean;
  rating?: string;
  slug?: string;
  hasDetail: boolean;
  url: string;
}

export const allCases: CaseData[] = [
  {
    id: "ricehouse",
    company: "Ricehouse",
    result: "Da identità forte a candidature qualificate",
    description: "Ridefinizione completa dell'employer brand e della proposta di valore.",
    logo: "/logos/ricehouse_white.png",
    logoScale: 1,
    slug: "ricehouse",
    hasDetail: true,
    url: "/casi-studio/ricehouse",
  },
  {
    id: "randstad",
    company: "Randstad",
    result: "Cultura visibile, candidati allineati",
    description: "Campagna employer branding che traduce valori interni in messaggi concreti per il mercato del lavoro.",
    logo: "/logos/randstad_blue.svg",
    logoScale: 1,
    invertLogo: true,
    slug: "randstad",
    hasDetail: true,
    url: "/casi-studio/randstad",
  },
  {
    id: "lely",
    company: "Lely",
    result: "Tool per gestire persone senza esperienza HR",
    description: "Framework pratico per manager tecnici che devono guidare team.",
    logo: "/logos/lely_white.svg",
    logoScale: 1.3,
    slug: "lely",
    hasDetail: true,
    url: "/casi-studio/lely",
  },
  {
    id: "ufficio-pio",
    company: "Ufficio Pio",
    result: "Naming che fa cultura",
    description: "Progetto di naming strategico per dare linguaggio condiviso ai dipartimenti e rendere riconoscibile il percorso dei beneficiari.",
    logo: "/logos/ufficio_pio_white.png",
    logoScale: 1,
    slug: "ufficio-pio",
    hasDetail: true,
    url: "/casi-studio/ufficio-pio",
  },
  {
    id: "cve",
    company: "CVE",
    result: "La Prima Town Hall aziendale",
    rating: "4.3/5",
    description: "Progettazione e facilitazione di un momento storico per l'azienda.",
    logo: "/logos/cve_mono.png",
    logoScale: 0.8,
    slug: "cve",
    hasDetail: true,
    url: "/casi-studio/cve",
  },
  {
    id: "findomestic",
    company: "Findomestic",
    result: "Da linguaggio istituzionale a conversazione unificata",
    description: "Workshop intensivo per unificare il linguaggio tra assistenza clienti e team social.",
    logo: "/logos/findomestic_white.png",
    logoScale: 1.8,
    slug: "findomestic",
    hasDetail: true,
    url: "/casi-studio/findomestic",
  },
  {
    id: "smart-working",
    company: "Smart Working",
    result: "+35-50% satisfaction",
    description: "Metodo testato su decine di aziende per il lavoro ibrido efficace.",
    hasDetail: false,
    url: "/casi-studio",
  },
];
