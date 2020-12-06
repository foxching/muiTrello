import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import CardList from "./components/CardList";
import AppContextProvider from "./context/appContext";

const useStyles = makeStyles({
  root: {
    backgroundColor: "green",
    minHeight: "100vh"
  }
});
export default function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppContextProvider>
        <CardList />
      </AppContextProvider>
    </Box>
  );
}
