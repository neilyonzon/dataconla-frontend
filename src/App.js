import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./navbar/navbar";
import Headline from "./components/Headliner";
import Stats from "./components/Stats";
import CTABox from "./components/CTABox";
import BannerHP from "./components/BannerHp";
import BannerMedia from "./components/BannerMedia";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <BannerHP
        data={{
          image: "/Los_Angeles.png",
          logo: {
            src:
              "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
            alt: "Data Con Logo"
          },
          text: "University of Southern California, Los Angeles • March 6, 2020"
        }}
      ></BannerHP>
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
                cta: "SUBMIT PROPOSAL",
                link: "#",
                button: "btn-secondary",
                color: "text-secondary"
              }}
              text={[
                "Interested in speaking at DataCon 2020?",
                <br />,
                "Send us your proposal before",
                <br />,
                "January 6, 2020."
              ]}
            ></CTABox>
          </div>
        </div>
      </div>
      <BannerMedia></BannerMedia>
      <div className="section">
        <div className="row">
          <div className="col-2">
            <CTABox
              data={{
                header: "SPONSOR INQUIRY",
                cta: "SUBMIT PROPOSAL",
                link: "#",
                button: "btn-primary",
                color: "text-primary"
              }}
              text={[
                "If you wish to sponsor Data Con 2020 click",
                <br />,
                "here to request a sponsor pack."
              ]}
            ></CTABox>
          </div>
          <div className="col-2">
            {" "}
            <p>Our 2020 session tracks will include</p>
            <ul className="sub-header list-no-style text-secondary">
              <li>Data</li>
              <li>AI/ ML/ Data Science</li>
              <li>Emerging Tech</li>
              <li>Visualizations/ UI/ Use Cases</li>
              <li>Infrastructure &amp; Security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
