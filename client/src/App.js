import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { CssBaseline } from "@material-ui/core";
import AppHome from "./components/AppHome";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import { loadUser } from "./store/actions/authAction";
import { getBoards } from "./store/actions/boardsAction";

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getBoards());
  }, []);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppHome />
        </ThemeProvider>
      </Provider>
    </>
  );
}
