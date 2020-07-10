import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {ScrollToTop} from "./routes/ScrollToTop";
import {UrlFactory} from "./routes/UrlFactory";
import {Routes} from "./routes/Routes";
import './App.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <Redirect to={UrlFactory.home()}/>
        </Route>
        <Route path="*">
          <Routes/>
        </Route>
      </Switch>
    </Router>
  );
}
