import React, { useState } from "react";
import TopBar from "./TopBar";
import SideMenu from "./SideMenu";

export default function NavBar({ background }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TopBar setOpen={setOpen} open={open} />
      <SideMenu open={open} setOpen={setOpen} />
    </>
  );
}
