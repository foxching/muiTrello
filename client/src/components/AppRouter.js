import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TrelloList from "./TrelloList";
import TrelloBoards from "./TrelloBoards";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home"


export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/boards" component={TrelloBoards} />
          <Route path="/board/:boardId" component={TrelloList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
