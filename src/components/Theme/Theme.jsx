import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c1fba4",
    },
    secondary: {
      main: "#ffef9f",
    },
    background: {
      default: "#282828",
      paper: "#282828",
    },
  },
  typography: {
    fontFamily: "Hind",
  },
});
