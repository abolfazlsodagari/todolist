import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./mui/theme";
import "./i18n";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
