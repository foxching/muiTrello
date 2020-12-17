import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import AppContextProvider from "./context/appContext";
import Trello from "./components/Trello";

export default function App() {
  return (
    <>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <Trello />
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}
