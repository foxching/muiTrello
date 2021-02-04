import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import Signup from "./SignUp";
import Home from "./Home";
import TrelloBoards from "./TrelloBoards";
import TrelloList from "./TrelloList";
import Navbar from "../components/layout/Navbar";
import Wrapper from "./layout/Wrapper";
import { PublicRoute } from "../components/Routes/PublicRoute";
import { PrivateRoute } from "../components/Routes/PrivateRoute";

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
