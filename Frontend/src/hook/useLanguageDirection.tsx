import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function useLanguageDirection() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
}

