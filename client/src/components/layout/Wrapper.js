import React from "react";
import { useSelector } from "react-redux";

const Wrapper = ({ children }) => {
  const board = useSelector(state => state.activeBoard);
  return (
    <div style={{ backgroundColor: board ? board.color : "" }}>{children}</div>
  );
};

export default Wrapper;
