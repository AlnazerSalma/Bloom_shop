import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./router/AppRoutes";

const AppContent: React.FC<{ load: boolean }> = ({ load }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`App ${isAdminRoute ? "admin-page" : ""} ${scrolled ? "scrolled" : ""}`}
      id={load ? "no-scroll" : "scroll"}
    >
      {!isAdminRoute && <Navbar />}
      <ScrollToTop />
      <AppRoutes />
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default AppContent;
