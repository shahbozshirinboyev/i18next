import i18n from "i18next";
import { initReactI18next } from "react-i18next"; // React uchun
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // JSON fayllarni yuklash uchun
  .use(LanguageDetector) // Brauzer tilini aniqlash
  .use(initReactI18next) // React integratsiyasi
  .init({
    fallbackLng: "en", // Asosiy til
    debug: false, // Debug rejimi
    interpolation: {
      escapeValue: false, // XSS hujumlaridan himoya
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // JSON fayllar manzili
    },
  });

export default i18n;