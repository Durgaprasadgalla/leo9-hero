import React from "react";
import "./SectionOne.css";

export default function SectionOne() {
  return (
    <section id="work" className="section-one">
      <h2 className="section-title">Our approach</h2>
      <div className="section-grid">
        <div className="card">
          <h4>Research</h4>
          <p>User-first product research and prototypes.</p>
        </div>
        <div className="card">
          <h4>Design</h4>
          <p>Pixel-perfect UI, accessibility and motion design.</p>
        </div>
        <div className="card">
          <h4>Build</h4>
          <p>Production-ready frontend and performance tuning.</p>
        </div>
      </div>
    </section>
  );
}
