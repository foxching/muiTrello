import React from "react";

import { useSelector } from "react-redux"
import NavBar from "./Navbar";


export default function Layout({ children }) {
    const board = useSelector(state => state.activeBoard)
    return (
        <div
            style={{
                backgroundColor: board !== null ? board.color : 'green'
            }}
        >
            <NavBar />
            {children}
        </div>
    );
}
