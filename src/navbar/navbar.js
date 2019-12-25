import React from "react";
import "./navBar.css";
import { navBarList } from "./navBarData.js";

function navBar(props) {
  const navRender = data => {
    let data2 = <a href="#">{data}</a>;
    return data2;
  };

  const handleOver = e => {
    e.target.className = "green";
  };

  const handleLeave = e => {
    e.target.className = "";
  };

  return (
    <nav>
      <img
        className="nav-logo"
        src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
      ></img>
      <div className="nav-items">
        <ul>
          <li>
            {navRender(navBarList[1])}
            <ul>
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
            <ul>
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
