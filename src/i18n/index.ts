import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enResources from "./languages/en/index.json";

i18next.use(initReactI18next).init({
  resources: {
    en: enResources,
  },
  lng: "en",
});
