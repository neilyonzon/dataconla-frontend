import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./navbar/navbar";
import Headline from "./components/Headliner";
import Stats from "./components/Stats";
import CTABox from "./components/CTABox";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <div className="section">
        <div className="row">
          <div className="col-2">
            <Headline
              color="text-primary"
              text="Data Con LA is the largest, of its kind, data conference in Southern California."
            ></Headline>
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
        <Stats
          color="text-tertiary"
          stats={[
            { text: "participants", number: 2000 },
            { text: "speakers", number: 43 }
          ]}
        ></Stats>
        <div className="row">
          <div className="col-2">
            <p>Our 2020 session tracks will include</p>
            <ul className="sub-header list-no-style text-secondary">
              <li>Data</li>
              <li>AI/ ML/ Data Science</li>
              <li>Emerging Tech</li>
              <li>Visualizations/ UI/ Use Cases</li>
              <li>Infrastructure &amp; Security</li>
            </ul>
          </div>
          <div className="col-2">
            <CTABox
              data={{
                header: "CALL FOR PROPOSALS",
                cta: "SUBMIT PROPOSALS",
                color: "text-secondary"
              }}
            ></CTABox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
