// src/components/Education.jsx

import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div data-aos="fade-up">
          <p className="section-label">EDUCATION</p>
          <h2>My Education</h2>
        </div>

        <div className="education-card" data-aos="fade-up" data-aos-delay="100">
          <h3>Diploma in ICT Applications Development</h3>
          <p>Sol Plaatje University</p>
          <p>
            Focus areas include software development, databases,
            data analysis, web development, information systems,
            and application development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;