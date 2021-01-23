import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TrelloList from "./TrelloList";
import TrelloBoards from "./TrelloBoards";
import Navbar from "./layout/Navbar";


export default function AppHome() {

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "greeen"
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
