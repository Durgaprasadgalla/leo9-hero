import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Leo9<span className="dot">.</span>
        </a>

        {/* Desktop Links */}
        <nav className="navbar-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Dark Mode Toggle */}
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Button */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <span className="menu-icon close">✕</span> : <span className="menu-icon">☰</span>}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}
