import React from "react";
import "./navBar.css";
import { navBarList } from "./navBarData.js";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

class NavBarComponent extends React.Component {
    state = {
        mobileNav: "hidden"
    }

  navRender = data => {
    let data2 = <a href="#">{data}</a>;
    return data2;
  };

   handleOver = e => {
    e.currentTarget.className = "subnav-display";
  };

   handleLeave = e => {
    e.currentTarget.className = "";
  };

   handleClick = e => {
    e.preventDefault();
    let sublist = e.currentTarget.getElementsByTagName("ul")[0];
    sublist.className == "sublist uncollapse"
      ? (sublist.className = "sublist")
      : (sublist.className = "sublist uncollapse");
  };

  handleMobileNav = e => {
    e.preventDefault();
    
    this.setState(
        {mobileNav: "unhidden"}
    )
  };


    render() {
        return (
    <nav>
      <div className="hamburger-menu" onClick={this.handleMobileNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img className="nav-logo" src="/logo2.jpg"></img>
      <div className={`nav-items ` + this.state.mobileNav}>
        <ul>
          <li
            onMouseEnter={this.handleOver}
            onMouseOut={this.handleLeave}
            onClick={this.handleClick}
          >
            <a href="#">
              <FontAwesome name="ticket" />
              Conference
            </a>
            <div className="mobile-line"></div>
            <ul className="sublist uncollapse">
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
          <li
            onMouseEnter={this.handleOver}
            onMouseOut={this.handleLeave}
            onClick={this.handleClick}
          >
            <a href="#">
              {" "}
              <FontAwesome name="ticket" />
              Agenda
            </a>
            <div className="mobile-line"></div>
            <ul className="sublist uncollapse">
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
}

export default NavBarComponent