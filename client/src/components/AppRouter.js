import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import TrelloBoards from "./TrelloBoards";
import TrelloList from "./TrelloList";
import Navbar from "../components/layout/Navbar";
import Wrapper from "./layout/Wrapper";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={authenticatedRoutes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export const authenticatedRoutes = () => {
  return (
    <Wrapper>
      <Navbar />
      <Switch>
        <Route path="/boards" component={TrelloBoards} />
        <Route path="/board/:boardId" component={TrelloList} />
      </Switch>
    </Wrapper>
  );
};
