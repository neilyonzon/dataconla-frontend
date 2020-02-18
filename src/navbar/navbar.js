import React from "react";
import "./navBar.css";
import { navBarList } from "./navBarData.js";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

function navBar(props) {
  const navRender = data => {
    let data2 = <a href="#">{data}</a>;
    return data2;
  };

  const handleOver = e => {
    e.currentTarget.className = "subnav-display";
  };

  const handleLeave = e => {
    e.currentTarget.className = "";
  };

  const handleClick = e => {
    e.preventDefault();
    let sublist = e.currentTarget.getElementsByTagName("ul")[0];

    sublist.className == "sublist collapse"
      ? (sublist.className = "sublist")
      : (sublist.className = "sublist collapse");
  };

  return (
    <nav>
      <div className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img className="nav-logo" src="/logo2.jpg"></img>
      <div className="nav-items display">
        <ul>
          <li
            onMouseEnter={handleOver}
            onMouseOut={handleLeave}
            onClick={handleClick}
          >
            <a href="#">
              <FontAwesome name="ticket" />
              Conference
            </a>
            <div className="mobile-line"></div>
            <ul className="sublist">
              <li>
                <a href="#">Venue</a>
              </li>
              <li>
                <a href="#">Travel and Lodging</a>
              </li>
              <li>
                <a href="#">Organizers</a>
              </li>
              <li>
                <a href="#">Past Events</a>
              </li>
            </ul>
          </li>
          <li onMouseEnter={handleOver} onMouseOut={handleLeave}>
            <a href="#">
              {" "}
              <FontAwesome name="ticket" />
              Agenda
            </a>
            <div className="mobile-line"></div>
            <ul className="sublist">
              <li>
                <a href="#">Venue</a>
              </li>
              <li>
                <a href="#">Travel and Lodging</a>
              </li>
              <li>
                <a href="#">Organizers</a>
              </li>
              <li>
                <a href="#">Past Events</a>
              </li>
            </ul>
          </li>
          <li>
            <span class="nav-title">
              <Link to="/speakers">
                {" "}
                <FontAwesome name="ticket" />
                Speakers
              </Link>
            </span>
            <div className="mobile-line"></div>
          </li>
          <li>
            <span class="nav-title">
              <Link to="/speakers">
                <FontAwesome name="fa handshake" />
                Sponsors
              </Link>
            </span>
            <div className="mobile-line"></div>
          </li>

          <li>
            <span class="nav-title">
              <FontAwesome name="ticket" />
              <Link to="startup-showcase">Startup Showcase</Link>
            </span>
            <div className="mobile-line"></div>
          </li>
          <li className="highlight">
            <span class="nav-title">
              <FontAwesome name="ticket" />
              <Link>Get Tickets</Link>
            </span>
            <div className="mobile-line"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navBar;
