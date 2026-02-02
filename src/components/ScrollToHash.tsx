import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (pathname === "/") {
      // Scroll to top when navigating to homepage without hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
