import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  lang?: 'it' | 'en';
  alternateUrls?: {
    it: string;
    en: string;
  };
}

export const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage = 'https://venturo-consulting.lovable.app/og-image.png',
  lang = 'it',
  alternateUrls
}: SEOProps) => {
  const fullTitle = `${title} | Venturo`;
  
  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* hreflang */}
      {alternateUrls && (
        <>
          <link rel="alternate" hrefLang="it" href={alternateUrls.it} />
          <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
          <link rel="alternate" hrefLang="x-default" href={alternateUrls.it} />
        </>
      )}
    </Helmet>
  );
};
