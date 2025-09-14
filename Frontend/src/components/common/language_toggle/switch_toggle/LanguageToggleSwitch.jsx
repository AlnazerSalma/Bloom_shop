import React from "react";
import { useTranslation } from "react-i18next";
import useIsArabic from "../../../../hook/useIsArabic";
import { useLanguageDirection } from "../../../../hook/useLanguageDirection";
import "./LanguageToggleSwitch.css";

function LanguageToggleSwitch(){
  const { i18n } = useTranslation();
  const isArabic = useIsArabic();
  useLanguageDirection(i18n);

 const switchId = React.useMemo(
    () => `languageSwitch-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  const handleChange = () => {
    const nextLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="language-switch-wrapper">
      <input
        type="checkbox"
        id={switchId}
        className="language-switch-checkbox"
        checked={isArabic}
        onChange={handleChange}
      />
      <label className="language-switch-label" htmlFor={switchId}>
        <span className="language-switch-label-left">AR</span>
        <span className="language-switch-label-right">EN</span>
        <span className="language-switch-switch"></span>
      </label>
    </div>
  );
}

export default LanguageToggleSwitch;
