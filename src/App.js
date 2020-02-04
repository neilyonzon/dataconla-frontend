import React from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import Speakers from "./pages/Speakers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/speakers">
            <Speakers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
