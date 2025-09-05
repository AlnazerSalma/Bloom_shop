import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Detect if this is a page reload
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page restored from bfcache (back/forward)
        const savedPos = sessionStorage.getItem(`scroll-${path}`);
        if (savedPos) {
          window.scrollTo(0, parseInt(savedPos, 10));
        }
      } else {
        //scroll to top
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    
    const savedPos = sessionStorage.getItem(`scroll-${path}`);
    if (savedPos) {
      window.scrollTo(0, parseInt(savedPos, 10));
    } else {
      window.scrollTo(0, 0);
    }

    // Save scroll position
    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${path}`, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [location.pathname]);
};

export default useScrollRestoration;
