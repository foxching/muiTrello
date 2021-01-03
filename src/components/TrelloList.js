import React from "react";
import ListContainer from "../components/List/ListContainer";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

export default function Trello() {
  return (
    <>
      <SimpleBar
        style={{
          overflowY: "auto",
          overflowX: "auto",
          minHeight: "93vh",
          maxHeight: 300
        }}
      >
        <ListContainer />
      </SimpleBar>
    </>
  );
}
