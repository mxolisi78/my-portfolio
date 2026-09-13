// src/components/Education.jsx

import React from 'react';

const Education = () => {
  const certifications = [
    {
      id: 1,
      title: "SQL and Relational Databases 101",
      issuer: "IBM Skills Network",
      credentialId: "DB0101EN",
      verifyUrl: "https://courses.cognitiveclass.ai/certificates/622aeea527c84fa1bf57cf19149f5227",
      skills: ["SQL", "Relational Databases", "Data Modeling"]
    },
    {
      id: 2,
      title: "Python 101 for Data Science",
      issuer: "IBM Skills Network",
      credentialId: "PY0101EN",
      verifyUrl: "https://courses.cognitiveclass.ai/certificates/21b0b8cac2394b1784b34fac392c169",
      skills: ["Python", "Data Science", "Data Analysis"]
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div data-aos="fade-up">
          <p className="section-label">EDUCATION & CERTIFICATIONS</p>
          <h2>My Education</h2>
        </div>

        {/* University Education */}
        <div className="education-card" data-aos="fade-up" data-aos-delay="100">
          <h3>Diploma in ICT Applications Development</h3>
          <p className="institution">Sol Plaatje University</p>
          <p>
            Focus areas include software development, databases,
            data analysis, web development, information systems,
            and application development.
          </p>
        </div>

        {/* Certifications */}
        <div className="certifications-wrapper" data-aos="fade-up" data-aos-delay="200">
          <h3 className="certifications-title">Professional Certifications</h3>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="certification-card"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="certification-header">
                  <span className="certification-icon">🎓</span>
                  <span className="certification-issuer">{cert.issuer}</span>
                </div>

                <h4>{cert.title}</h4>

                <div className="certification-meta">
                  <span className="cert-id">ID: {cert.credentialId}</span>
                </div>

                <div className="certification-skills">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="cert-skill-tag">{skill}</span>
                  ))}
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link"
                >
                  Verify Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;