import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { CssBaseline } from "@material-ui/core";
import AppRouter from "./components/Routes/AppRouter";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import { loadUser } from "./store/actions/authAction";
import "./styles.css";

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </Provider>
    </>
  );
}
