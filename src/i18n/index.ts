import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import faResources from "./languages/fa/index.json";

i18next.use(initReactI18next).init({
  resources: {
    fa: faResources,
  },
  lng: "fa",
});
