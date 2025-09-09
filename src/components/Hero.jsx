import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="blob blob-purple"></div>
      <div className="blob blob-cyan"></div>

      <div className="hero-container">
        <div>
          <p className="top-text">Creative studio</p>
          <h1>
            We build beautiful <span>digital experiences</span>
          </h1>
          <p className="description">
            Design-driven development for brand, web and product teams. We focus
            on craft, clarity and results — delivering high-quality web
            experiences.
          </p>

          <div className="buttons">
            <a href="#contact" className="btn-primary">Get started</a>
            <a href="#work" className="btn-secondary">See our work</a>
          </div>
        </div>

        <div className="image-card">
          <div className="mock">
            <svg width="180" height="120" xmlns="http://www.w3.org/2000/svg">
              <rect width="180" height="120" rx="16" fill="#fff" />
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fill="#7c3aed">
                Mock visual
              </text>
            </svg>
          </div>
          <h3>Design + Frontend</h3>
          <p>End-to-end product delivery — UI, animations, and production-ready code.</p>
        </div>
      </div>
    </section>
  );
}
