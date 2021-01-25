import React from "react";
import { useSelector } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TrelloList from "./TrelloList";
import TrelloBoards from "./TrelloBoards";
import Navbar from "./layout/Navbar";


export default function AppHome() {
  const board = useSelector(state => state.activeBoard)
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: board ? board.color : 'green'
          // backgroundImage: `url(${background})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover"
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={TrelloBoards} />
          <Route path="/:boardId" component={TrelloList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
