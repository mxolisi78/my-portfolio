// src/components/Contact.jsx

import React from 'react';
import cvFile from '../assets/documents/Mxolisi_Maseko_CV.pdf';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div data-aos="fade-up">
          <p className="section-label">GET IN TOUCH</p>
          <h2>Let's Work Together</h2>
        </div>

        <p className="section-text" data-aos="fade-up" data-aos-delay="100">
          I'm interested in software development opportunities,
          internships, graduate positions, and technology projects.
        </p>

        <div className="contact-buttons" data-aos="fade-up" data-aos-delay="200">
          <a href="mailto:ismailmxolisi78@gmail.com" className="btn primary-btn">
            Email Me
          </a>
          <a href={cvFile} target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
            View CV
          </a>
          <a href="https://github.com/mxolisi78" target="_blank" rel="noopener noreferrer" className="btn outline-btn">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;