import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import TrelloList from "./TrelloList";
import TrelloBoards from "./TrelloBoards";
import Navbar from "./layout/Navbar";
import { AppContext } from "../context/appContext";

export default function AppHome() {
  const { background } = useContext(AppContext);
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: `${background}`,
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
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
