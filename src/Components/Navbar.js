  import { Link } from "react-router-dom";
  import React from "react";
  import PropTypes from "prop-types";



  function Navbar(props) {
    return (
      <div className={`Topbar`}>
        <Link to="/">
          <h1 className="logo">{props.logo}</h1>
        </Link>
        <nav className="Navbar">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/business">
              Business
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/health">
              Health
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/science">
              Science
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/sports">
              Sports
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/technology">
              Technology
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </nav>
        <button className="subcribe-btn">Subscribe</button>
      </div>
    );
  }

  Navbar.propTypes = {
    logo: PropTypes.string,
  };

  export default Navbar;
