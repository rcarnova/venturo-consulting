import { useEffect } from "react";

const EnglishMeta = () => {
  useEffect(() => {
    document.title = "Venturo | Communication Rituals Leadership";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Communication Rituals Leadership. Culture isn't what you say you are. It's what you do when no one is watching. Cultural consulting for organizations.");

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Venturo | Communication Rituals Leadership");

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Communication Rituals Leadership. Culture isn't what you say you are. It's what you do when no one is watching. Cultural consulting for organizations.");

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", "Venturo | Communication Rituals Leadership");

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", "Communication Rituals Leadership. Culture isn't what you say you are. It's what you do when no one is watching. Cultural consulting for organizations.");

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
