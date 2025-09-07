import React, { useMemo } from "react";
import type { i18n as I18nType } from "i18next";
import useIsArabic from "../../../../hook/useIsArabic";
import { useLanguageDirection } from "../../../../hook/useLanguageDirection";
import "./LanguageToggleSwitch.css";

interface LanguageToggleSwitchProps {
  i18n: I18nType;
}

const LanguageToggleSwitch: React.FC<LanguageToggleSwitchProps> = ({ i18n }) => {
  const isArabic = useIsArabic();
  useLanguageDirection(i18n);

  const switchId = useMemo(
    () => `languageSwitch-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  const handleChange = (): void => {
    const nextLang: string = isArabic ? "en" : "ar";
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
};

export default LanguageToggleSwitch;
