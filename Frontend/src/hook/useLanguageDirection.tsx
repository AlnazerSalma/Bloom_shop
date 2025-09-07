import { useEffect } from "react";
import type { i18n as I18nType } from "i18next";

export function useLanguageDirection(i18n: I18nType): void {
  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
}
