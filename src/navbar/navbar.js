import React from "react";
import "./navBar.css";

function navBar(props) {
  return (
    <nav>
      <img
        className="nav-logo"
        src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
      ></img>
      <div className="nav-items">
        <ul>
          <li>Conference</li>
          <li>Agenda</li>
          <li>Speakers</li>
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
