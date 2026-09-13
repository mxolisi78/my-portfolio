// src/components/Certifications.jsx

import React from "react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "SQL and Relational Databases 101",
      issuer: "IBM Skills Network",
      platform: "CognitiveClass.ai",
      date: "September 2026",
      credentialId: "DB0101EN",
      verifyUrl:
        "https://courses.cognitiveclass.ai/certificates/622aee5a27c84fa1bf57cf9149f5f227",
      skills: [
        "SQL",
        "Relational Databases",
        "Data Modeling",
        "Database Queries",
      ],
    },
    {
      id: 2,
      title: "Python 101 for Data Science",
      issuer: "IBM Skills Network",
      platform: "CognitiveClass.ai",
      date: "September 2026",
      credentialId: "PY0101EN",
      verifyUrl:
        "https://courses.cognitiveclass.ai/certificates/21bb8cfac2994b1784b34fac9392c169",
      skills: [
        "Python",
        "Data Science",
        "Data Analysis",
        "Programming",
      ],
    },
  ];

  return (
    <section
      id="certifications"
      className="section certifications-section"
      aria-labelledby="certifications-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">CERTIFICATIONS</p>

          <h2 id="certifications-title">Professional Certifications</h2>

          <p className="section-intro">
            A selection of professional learning achievements demonstrating
            practical skills in SQL, relational databases, Python, data
            analysis, and data science.
          </p>
        </div>

        {/* Certifications */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <article
              key={cert.id}
              className="certification-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Header */}
              <div className="certification-header">
                <div className="certification-icon" aria-hidden="true">
                  🎓
                </div>

                <div className="certification-provider">
                  <span className="certification-issuer">{cert.issuer}</span>
                  <span className="certification-platform">
                    {cert.platform}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3>{cert.title}</h3>

              {/* Meta */}
              <div className="certification-meta">
                <span className="cert-date">
                  <span aria-hidden="true">📅</span> {cert.date}
                </span>

                <span className="cert-id">
                  <strong>Course Code:</strong> {cert.credentialId}
                </span>
              </div>

              {/* Skills */}
              <div className="certification-skills">
                {cert.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verification */}
              <div className="certification-footer">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link"
                  aria-label={`Verify ${cert.title} certificate`}
                >
                  Verify Certificate
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;