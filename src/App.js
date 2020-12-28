import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppContextProvider from "./context/appContext";
import AppHome from "./components/AppHome";

export default function App() {
  return (
    <>
      <AppContextProvider>
        <CssBaseline />
        <AppHome />
      </AppContextProvider>
    </>
  );
}
