import "./App.css";
import profileImage from "./assets/images/profile.png";

function App() {
  return (
    <div className="portfolio">

      {/* ==================== NAVIGATION ==================== */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Mxolisi Maseko</h2>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>

            <a
              href="https://github.com/mxolisi78"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section id="home" className="hero">
        <div className="hero-container">

          {/* Hero Text */}
          <div className="hero-content">

            <p className="hero-greeting">
              Hello, I'm
            </p>

            <h1>
              Mxolisi <span>Maseko</span>
            </h1>

            <h2>
              ICT Applications Developer
            </h2>

            <p className="hero-description">
              I design and develop practical software solutions that solve
              real-world problems. I work across web development, desktop
              applications, databases, data analysis, and full-stack systems.
            </p>

            {/* Hero Buttons */}
            <div className="hero-buttons">

              <a
                href="#projects"
                className="btn primary-btn"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="btn secondary-btn"
              >
                Contact Me
              </a>

              <a
                href="/Mxolisi-Maseko-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn cv-btn"
              >
                View CV
              </a>

            </div>

            {/* Social Links */}
            <div className="social-links">

              <a
                href="https://github.com/mxolisi78"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="#contact"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* Profile Image */}
          <div className="hero-image-container">

            <div className="hero-image-border">

              <img
                src={profileImage}
                alt="Portrait of Mxolisi Maseko"
                className="profile-image"
              />

            </div>

          </div>

        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="section">
        <div className="container">

          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Who I Am
          </h2>

          <p className="section-text">
            I am an ICT Applications Development student passionate about
            software development, database systems, web applications, and
            solving real-world problems through technology.
          </p>

          <p className="section-text">
            I enjoy developing full-stack applications and continuously
            improving my skills through practical projects.
          </p>

        </div>
      </section>

      {/* ==================== SKILLS ==================== */}
      <section id="skills" className="section skills-section">
        <div className="container">

          <p className="section-label">
            MY SKILLS
          </p>

          <h2>
            Technologies I Work With
          </h2>

          <div className="skills-grid">

            <div className="skill-card">Java</div>
            <div className="skill-card">Python</div>
            <div className="skill-card">Django</div>
            <div className="skill-card">React</div>
            <div className="skill-card">C#</div>
            <div className="skill-card">ASP.NET Core</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">SQL</div>
            <div className="skill-card">MySQL</div>
            <div className="skill-card">Git &amp; GitHub</div>
            <div className="skill-card">Pandas</div>
            <div className="skill-card">Data Visualization</div>

          </div>

        </div>
      </section>

     {/* ==================== PROJECTS ==================== */}
<section id="projects" className="section projects-section">
  <div className="container">

    <p className="section-label">
      MY WORK
    </p>

    <h2>
      Featured Projects
    </h2>

    <p className="section-intro">
      A selection of software development, web development,
      database, and data analysis projects I have worked on.
    </p>

    <div className="projects-grid">

      {/* ==================== FACE ATTENDANCE ==================== */}
      <div className="project-card">

        <div className="project-header">
          <span className="project-number">
            01
          </span>

          <span className="project-status">
            In Development
          </span>
        </div>

        <h3>
          Smart Face Attendance System
        </h3>

        <p>
          A Django-based employee attendance management system
          designed to automate attendance using face detection
          technology and employee management functionality.
        </p>

        <div className="project-tech">
          <span>Django</span>
          <span>Python</span>
          <span>OpenCV</span>
          <span>SQLite</span>
        </div>

        <div className="project-actions">

          <a
            href="https://github.com/mxolisi78/smart-face-attendance-system"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub →
          </a>

        </div>

      </div>


      {/* ==================== PAYROLL ==================== */}
      <div className="project-card">

        <div className="project-header">
          <span className="project-number">
            02
          </span>

          <span className="project-status">
            Completed
          </span>
        </div>

        <h3>
          Payroll Management System
        </h3>

        <p>
          A web-based payroll management system for managing
          employees, departments, attendance, leave and payroll
          processes through a centralized platform.
        </p>

        <div className="project-tech">
          <span>Django</span>
          <span>Python</span>
          <span>SQLite</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>

        <div className="project-actions">

          <span className="project-private">
            Portfolio Project
          </span>

        </div>

      </div>


      {/* ==================== SHOPSPHERE ==================== */}
      <div className="project-card">

        <div className="project-header">
          <span className="project-number">
            03
          </span>

          <span className="project-status">
            Full Stack
          </span>
        </div>

        <h3>
          ShopSphere
        </h3>

        <p>
          A full-stack e-commerce application featuring a REST
          API, authentication, product management and a modern
          React frontend.
        </p>

        <div className="project-tech">
          <span>ASP.NET Core</span>
          <span>C#</span>
          <span>React</span>
          <span>SQL Server</span>
          <span>JWT</span>
        </div>

        <div className="project-actions">

          <span className="project-private">
            Full-Stack Project
          </span>

        </div>

      </div>


      {/* ==================== CCAMS ==================== */}
      <div className="project-card">

        <div className="project-header">
          <span className="project-number">
            04
          </span>

          <span className="project-status">
            Java Application
          </span>
        </div>

        <h3>
          CCAMS
        </h3>

        <p>
          A Java-based campus management application developed
          using NetBeans with database integration for managing
          campus-related information.
        </p>

        <div className="project-tech">
          <span>Java</span>
          <span>NetBeans</span>
          <span>MySQL</span>
          <span>JDBC</span>
        </div>

        <div className="project-actions">

          <span className="project-private">
            Desktop Application
          </span>

        </div>

      </div>


      {/* ==================== BANKING ==================== */}
      <div className="project-card">

        <div className="project-header">
          <span className="project-number">
            05
          </span>

          <span className="project-status">
            Completed
          </span>
        </div>

        <h3>
          Banking Management System
        </h3>

        <p>
          A Java desktop banking application designed to manage
          customer accounts, transactions and banking operations
          using a MySQL database.
        </p>

        <div className="project-tech">
          <span>Java</span>
          <span>MySQL</span>
          <span>JDBC</span>
          <span>NetBeans</span>
        </div>

        <div className="project-actions">

          <span className="project-private">
            Desktop Application
          </span>

        </div>

      </div>


      {/* ==================== DATA ANALYSIS ==================== */}
      <div className="project-card">

        <div className="project-header">
          <span className="project-number">
            06
          </span>

          <span className="project-status">
            Data Analysis
          </span>
        </div>

        <h3>
          South Africa Employment Analysis
        </h3>

        <p>
          A Python data analysis project investigating the
          relationship between tertiary education enrolment
          and unemployment in South Africa.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Matplotlib</span>
          <span>Excel</span>
        </div>

        <div className="project-actions">

          <span className="project-private">
            Data Analysis Project
          </span>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* ==================== EDUCATION ==================== */}
      <section
        id="education"
        className="section education-section"
      >
        <div className="container">

          <p className="section-label">
            EDUCATION
          </p>

          <h2>
            My Education
          </h2>

          <div className="education-card">

            <h3>
              Diploma in ICT Applications Development
            </h3>

            <p>
              Sol Plaatje University
            </p>

            <p>
              Focus areas include software development, databases,
              data analysis, web development, and information systems.
            </p>

          </div>

        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section
        id="contact"
        className="section contact-section"
      >
        <div className="container">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's Work Together
          </h2>

          <p className="section-text">
            I'm interested in software development opportunities,
            internships, graduate positions, and technology projects.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:ismailmxolisi78@gmail.com"
              className="btn primary-btn"
            >
              Email Me
            </a>

            <a
              href="https://github.com/mxolisi78"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary-btn"
            >
              GitHub
            </a>

          </div>

        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">

        <p>
          © 2026 Mxolisi Maseko. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;