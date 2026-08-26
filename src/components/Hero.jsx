// src/components/Hero.jsx

import React from 'react';
import profileImage from '../assets/images/profile.png';
import cvFile from '../assets/documents/Mxolisi_Maseko_CV.pdf';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-right">
          <p className="hero-greeting">Hello, I'm</p>
          <h1>Mxolisi <span>Maseko</span></h1>
          <h2>ICT Applications Developer</h2>
          <p className="hero-description">
            I build practical software solutions that solve real-world
            problems. My experience spans full-stack web development,
            desktop applications, database systems, and data analysis.
          </p>

          {/* Technologies */}
          <div className="hero-tech">
            <span>Java</span>
            <span>Python</span>
            <span>React</span>
            <span>Django</span>
            <span>C#</span>
            <span>SQL</span>
          </div>

          {/* Hero Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary-btn"
            >
              View My CV
            </a>
            <a href="#contact" className="btn outline-btn">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://github.com/mxolisi78"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image-container" data-aos="fade-left">
          <div className="hero-image-border">
            <img
              src={profileImage}
              alt="Portrait of Mxolisi Maseko"
              className="profile-image"
            />
          </div>
          <div className="hero-badge">
            <span className="status-dot"></span>
            Available for opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;