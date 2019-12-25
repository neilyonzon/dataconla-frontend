import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./navbar/navbar";
import Headline from "./components/headliner";
import Stats from "./components/stats";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <div className="section">
        <div className="row">
          <div className="col-2">
            <Headline text="Data Con LA is the largest, of its kind, data conference in Southern California."></Headline>
          </div>
          <div className="col-2">
            <p>
              Spearheaded by Subash D’Souza and organized and supported by a
              community of volunteers, sponsors and speakers, Data Con LA
              features the most vibrant gathering of data and technology
              enthusiasts in Los Angeles.
            </p>
            <p>
              Data Con LA began as Big Data Day LA in 2013, with just over 250
              attendees. We have since grown to over 550 attendees in 2014, 950+
              attendees in 2015, 1200+ attendees in 2016, and 1550+ attendees in
              2017. In 2018, we re-branded ourselves from Big Data Day LA to
              Data Con LA. We also had over 1800+ attendees attend. This year we
              expect that tally to be over 2000.
            </p>
          </div>
        </div>
        <Stats></Stats>
      </div>
    </div>
  );
}

export default App;
