import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppContextProvider from "./context/appContext";
import AppHome from "./components/AppHome";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppHome />
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}
