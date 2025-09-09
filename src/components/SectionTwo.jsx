import React from "react";
import "./SectionTwo.css";

export default function SectionTwo() {
  return (
    <section id="services" className="section-two">
      <div className="container">
        <h3 className="section-heading">Selected works</h3>
        <div className="projects-grid">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <article key={i} className="project-card">
              <div className="project-thumb">Project {i}</div>
              <div className="project-info">
                <h4>Project title {i}</h4>
                <p>Short description that shows the type of work done.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
