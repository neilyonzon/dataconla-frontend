import React from "react";
import "./navBar.css";
import { navBarList } from "./navBarData.js";

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
      <img
        className="nav-logo"
        src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
      ></img>
      <div className="nav-items">
        <ul>
          <li onMouseEnter={handleOver} onMouseOut={handleLeave}>
            <a href="#">Conference</a>
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
            <a href="#">Speakers</a>
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
