import React from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import useIsArabic from "../../../../hook/useIsArabic";
import { useLanguageDirection } from "../../../../hook/useLanguageDirection";
import "./LanguageToggleClick.css";

const AdminLanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const isArabic = useIsArabic();
  useLanguageDirection(i18n);

  const handleToggleLanguage = (): void => {
    const nextLang: string = isArabic ? "en" : "ar";
    i18n.changeLanguage(nextLang);
  };

  return (
    <div
      className="admin-lang-toggle"
      onClick={handleToggleLanguage}
      title="Change Language"
    >
      <FaGlobe className="lang-icon" />
      <span className="lang-label">{isArabic ? "AR" : "EN"}</span>
    </div>
  );
};

export default AdminLanguageToggle;
