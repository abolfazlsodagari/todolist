import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./common/theme";
import "./common/i18n";

import App from "./App";
import TodoListProvider from "./common/contexts/TodoList/provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <TodoListProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </TodoListProvider>
  </React.StrictMode>
);
