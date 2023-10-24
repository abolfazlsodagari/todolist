import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#64CCC5",
      dark: "#176B87",
      light: "#64CCC5",
    },
    secondary: {
      main: "#00000040"
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
  },
});

export default theme;
