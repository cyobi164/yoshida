import React, { useState } from "react";
import logo from "../assets/photo/yc-logo.jpg";
import "./Top.css";

function Top() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="top-container">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} />
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Bar */}
      <ul className={`nav ${menuOpen ? "active" : ""}`}>
        <li className="nav-item">
          <a className="nav-link active" href="#about">
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
