import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import ListContainer from "../components/List/ListContainer";
import Navbar from "../components/layout/Navbar";
import { AppContext } from "../context/appContext";

export default function Trello() {
  const { background } = useContext(AppContext);

  return (
    <Box
      style={{
        backgroundColor: `${background}`,
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh"
      }}
    >
      <CssBaseline />
      <Navbar />
      <ListContainer />
    </Box>
  );
}
