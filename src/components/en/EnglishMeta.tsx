import { useEffect } from "react";

const EnglishMeta = () => {
  useEffect(() => {
    document.title = "Venturo | Employer Branding & Organizational Culture Consulting";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Employer branding and organizational culture consulting. We help companies close the gap between declared and lived culture. Communication, rituals and leadership.");

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Venturo | Employer Branding & Organizational Culture Consulting");

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Employer branding and organizational culture consulting. We help companies close the gap between declared and lived culture. Communication, rituals and leadership.");

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", "Venturo | Employer Branding & Organizational Culture Consulting");

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", "Employer branding and organizational culture consulting. We help companies close the gap between declared and lived culture. Communication, rituals and leadership.");

    return () => {
      document.title = "Venturo | Comunicazione Rituali Leadership";
      if (metaDesc) metaDesc.setAttribute("content", "Comunicazione Rituali Leadership. La cultura non è quello che dite di essere. È quello che fate quando nessuno vi guarda. Consulenza culturale per aziende.");
      if (ogTitle) ogTitle.setAttribute("content", "Venturo | Comunicazione Rituali Leadership");
      if (ogDesc) ogDesc.setAttribute("content", "Comunicazione Rituali Leadership. La cultura non è quello che dite di essere. È quello che fate quando nessuno vi guarda. Consulenza culturale per aziende.");
      if (twTitle) twTitle.setAttribute("content", "Venturo | Comunicazione Rituali Leadership");
      if (twDesc) twDesc.setAttribute("content", "Comunicazione Rituali Leadership. La cultura non è quello che dite di essere. È quello che fate quando nessuno vi guarda. Consulenza culturale per aziende.");
    };
  }, []);

  return null;
};

export default EnglishMeta;
