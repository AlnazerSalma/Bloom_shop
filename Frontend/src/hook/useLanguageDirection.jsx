import { useEffect } from "react";

export function useLanguageDirection(i18n) {
  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
}
