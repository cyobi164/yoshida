import React from "react";
import logo from "../assets/photo/yc-logo.jpg";
import "./Top.css";

function Top() {
  return (
    <div className="top-container">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo}/>
      </div>

      {/* Navigation Bar */}
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">
            About me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#plan">
            Plans
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Top;
