import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Trello from "./components/Trello";
import AppContextProvider from "./context/appContext";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Trello />
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}
