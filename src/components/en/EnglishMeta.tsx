import { useEffect } from "react";

const EnglishMeta = () => {
  useEffect(() => {
    document.title = "Venturo — Organizational Culture & Employer Branding Consulting";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "We make your organization's culture visible. Venturo works on employer branding, internal communication and cultural transformation for companies that want to attract and retain the right talent.");

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Venturo — Organizational Culture & Employer Branding Consulting");

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "We make your organization's culture visible. Venturo works on employer branding, internal communication and cultural transformation for companies that want to attract and retain the right talent.");

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", "Venturo — Organizational Culture & Employer Branding Consulting");

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", "We make your organization's culture visible. Venturo works on employer branding, internal communication and cultural transformation for companies that want to attract and retain the right talent.");

    return () => {
      document.title = "Venturo — Consulenza Cultura Organizzativa ed Employer Branding";
      if (metaDesc) metaDesc.setAttribute("content", "Rendiamo visibile la cultura della tua organizzazione. Venturo lavora su employer branding, comunicazione interna e trasformazione culturale per aziende che vogliono attrarre e trattenere i talenti giusti.");
      if (ogTitle) ogTitle.setAttribute("content", "Venturo — Consulenza Cultura Organizzativa ed Employer Branding");
      if (ogDesc) ogDesc.setAttribute("content", "Rendiamo visibile la cultura della tua organizzazione. Venturo lavora su employer branding, comunicazione interna e trasformazione culturale per aziende che vogliono attrarre e trattenere i talenti giusti.");
      if (twTitle) twTitle.setAttribute("content", "Venturo — Consulenza Cultura Organizzativa ed Employer Branding");
      if (twDesc) twDesc.setAttribute("content", "Rendiamo visibile la cultura della tua organizzazione. Venturo lavora su employer branding, comunicazione interna e trasformazione culturale per aziende che vogliono attrarre e trattenere i talenti giusti.");
    };
  }, []);

  return null;
};

export default EnglishMeta;
