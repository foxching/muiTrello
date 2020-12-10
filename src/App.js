import React from "react";
import AppContextProvider from "./context/appContext";
import Trello from "./components/Trello";

export default function App() {
  return (
    <>
      <AppContextProvider>
        <Trello />
      </AppContextProvider>
    </>
  );
}
