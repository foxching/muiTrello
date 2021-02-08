import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "../../pages/SignIn";
import Signup from "../../pages/Signup";
import Home from "../../pages/Home";
import TrelloBoards from "../../pages/TrelloBoards";
import TrelloList from "../../pages/TrelloList";
import Navbar from "../layout/Navbar";
import Wrapper from "../layout/Wrapper";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/signin" component={SignIn} />
          <PublicRoute path="/signup" component={Signup} />
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
        <PrivateRoute path="/boards" component={TrelloBoards} />
        <PrivateRoute path="/board/:boardId" component={TrelloList} />
      </Switch>
    </Wrapper>
  );
};
