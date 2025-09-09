import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="about-text">
          We are a design-driven creative studio focused on building beautiful
          and performant digital products. Our team combines expertise in
          research, design, and engineering to deliver experiences that truly
          connect with users.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>10+</h3>
            <p>Years of experience</p>
          </div>
          <div className="about-card">
            <h3>100+</h3>
            <p>Projects delivered</p>
          </div>
          <div className="about-card">
            <h3>50+</h3>
            <p>Satisfied clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
