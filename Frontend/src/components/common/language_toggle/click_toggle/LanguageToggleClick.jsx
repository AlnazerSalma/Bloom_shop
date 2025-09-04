import React from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import useIsArabic from "../../../../hook/useIsArabic";
import { useLanguageDirection } from "../../../../hook/useLanguageDirection";
import "./LanguageToggleClick.css";

const AdminLanguageToggle = () => {
  const { i18n } = useTranslation();
  const isArabic = useIsArabic();
  useLanguageDirection(i18n);

  const handleToggleLanguage = () => {
    const nextLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="admin-lang-toggle" onClick={handleToggleLanguage} title="Change Language">
      <FaGlobe className="lang-icon" />
      <span className="lang-label">{isArabic ? "AR" : "EN"}</span>
    </div>
  );
};

export default AdminLanguageToggle;
