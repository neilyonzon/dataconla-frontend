import React from "react";
import "./navBar.css";
import { navBarList } from "./navBarData.js";
import { Link } from "react-router-dom";

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
          <li onMouseEnter={handleOver} onMouseOut={handleLeave}>
            <a href="#">
              <em class="fas fa-ticket-alt"></em>Conference
            </a>
            <div className="mobile-line"></div>
            <ul class="sublist">
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
            <a href="#">Agenda</a>
            <div className="mobile-line"></div>
            <ul class="sublist">
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
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>Sponsors</li>

          <li>Panels</li>
          <li>Startup Showcase</li>
          <li className="highlight">Get Tickets</li>
        </ul>
      </div>
    </nav>
  );
}

export default navBar;
