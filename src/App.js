import React from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import Speakers from "./pages/Speakers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./navbar/NavBarComponent";


function App() {
  return (
    <Router>
      <div>
            <header>
        <NavBar></NavBar>
      </header>
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
