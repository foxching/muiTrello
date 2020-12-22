import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import ListContainer from "../components/List/ListContainer";
import Navbar from "../components/layout/Navbar";
import { AppContext } from "../context/appContext";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

export default function Trello() {
  const { background } = useContext(AppContext);
  const { data } = useContext(AppContext);

  return (
    <>
      <Box
        style={{
          backgroundColor: `${background}`,
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <Navbar />
        {/* <Box
          style={{
            overflowY: "auto",
            minHeight: "94vh"
          }}
        > */}
        <SimpleBar
          style={{
            overflowY: "auto",
            overflowX: "auto",
            minHeight: "94vh",
            maxHeight: 300
          }}
        >
          <ListContainer />
        </SimpleBar>
        {/* </Box> */}
      </Box>
    </>
  );
}
