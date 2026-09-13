// src/components/About.jsx

import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-header" data-aos="fade-up">
          <p className="section-label">ABOUT ME</p>
          <h2>Building Solutions Through Technology</h2>
        </div>

        <div className="about-content">
          {/* About Text */}
          <div className="about-text" data-aos="fade-right">
            <p>
              I am an ICT Applications Development student at
              <strong> Sol Plaatje University</strong> with a strong
              interest in software development, web applications,
              databases, and data analysis.
            </p>
            <p>
              I enjoy turning real-world problems into practical
              software solutions. Through academic work and personal
              projects, I have gained hands-on experience developing
              applications using Java, Python, Django, React, C#,
              ASP.NET Core, and SQL.
            </p>
            <p>
              I am particularly interested in full-stack development,
              database-driven applications, automation, and building
              systems that are useful, reliable, and easy to use.
            </p>

            <div className="about-buttons">
              <a href="#projects" className="btn primary-btn">
                Explore My Projects
              </a>
              <a href="mailto:ismailmxolisi78@gmail.com" className="btn secondary-btn">
                Get In Touch
              </a>
            </div>
          </div>

          {/* About Highlights */}
          <div className="about-highlights" data-aos="fade-left">
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="100">
              <div className="highlight-icon">💻</div>
              <div>
                <h3>Software Development</h3>
                <p>Building practical desktop and web applications using modern programming technologies.</p>
              </div>
            </div>

            <div className="highlight-card" data-aos="fade-up" data-aos-delay="200">
              <div className="highlight-icon">🌐</div>
              <div>
                <h3>Full-Stack Development</h3>
                <p>Developing frontend interfaces, backend APIs, authentication systems, and database solutions.</p>
              </div>
            </div>

            <div className="highlight-card" data-aos="fade-up" data-aos-delay="300">
              <div className="highlight-icon">📊</div>
              <div>
                <h3>Data &amp; Analytics</h3>
                <p>Working with Python, Pandas, NumPy, and visualization tools to analyse and understand data.</p>
              </div>
            </div>

            <div className="highlight-card" data-aos="fade-up" data-aos-delay="400">
              <div className="highlight-icon">🗄️</div>
              <div>
                <h3>Database Systems</h3>
                <p>Designing and working with relational databases including MySQL and SQL Server.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;