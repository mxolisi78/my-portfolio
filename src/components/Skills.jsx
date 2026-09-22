// src/components/Skills.jsx

import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="skills-header" data-aos="fade-up">
          <p className="section-label">MY SKILLS</p>
          <h2>Technologies &amp; Tools</h2>
          <p className="section-intro">
            Technologies and tools I use to build applications,
            work with data, manage databases, and develop
            full-stack software solutions.
          </p>
        </div>

        <div className="skills-categories">
          {/* Programming */}
          <div className="skills-category" data-aos="fade-up" data-aos-delay="100">
            <div className="skills-category-header">
              <div className="skills-icon">&lt;/&gt;</div>
              <div>
                <h3>Programming</h3>
                <p>Languages used for application development</p>
              </div>
            </div>
            <div className="skills-list">
              <span className="skill-item">Java</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">C#</span>
              <span className="skill-item">JavaScript</span>
            </div>
          </div>

          {/* Web Development */}
          <div className="skills-category" data-aos="fade-up" data-aos-delay="200">
            <div className="skills-category-header">
              <div className="skills-icon">🌐</div>
              <div>
                <h3>Web Development</h3>
                <p>Frontend and backend technologies</p>
              </div>
            </div>
            <div className="skills-list">
              <span className="skill-item">React</span>
              <span className="skill-item">Django</span>
              <span className="skill-item">ASP.NET Core</span>
              <span className="skill-item">Django REST Framework</span>
              <span className="skill-item">HTML</span>
              <span className="skill-item">CSS</span>
            </div>
          </div>

          {/* Databases */}
          <div className="skills-category" data-aos="fade-up" data-aos-delay="300">
            <div className="skills-category-header">
              <div className="skills-icon">🗄️</div>
              <div>
                <h3>Databases</h3>
                <p>Database technologies and data management</p>
              </div>
            </div>
            <div className="skills-list">
              <span className="skill-item">MySQL</span>
              <span className="skill-item">PostgreSQL</span>
              <span className="skill-item">SQL Server</span>
              <span className="skill-item">SQLite</span>
              <span className="skill-item">Redis</span>
              <span className="skill-item">JDBC</span>
            </div>
          </div>

          {/* Data & Analytics */}
          <div className="skills-category" data-aos="fade-up" data-aos-delay="400">
            <div className="skills-category-header">
              <div className="skills-icon">📊</div>
              <div>
                <h3>Data &amp; Analytics</h3>
                <p>Data processing and visualization</p>
              </div>
            </div>
            <div className="skills-list">
              <span className="skill-item">Pandas</span>
              <span className="skill-item">NumPy</span>
              <span className="skill-item">Matplotlib</span>
              <span className="skill-item">Excel</span>
              <span className="skill-item">Data Visualization</span>
            </div>
          </div>

          {/* Real-Time & Deployment */}
          <div className="skills-category" data-aos="fade-up" data-aos-delay="500">
            <div className="skills-category-header">
              <div className="skills-icon">⚡</div>
              <div>
                <h3>Real-Time &amp; Deployment</h3>
                <p>Real-time systems and production deployment</p>
              </div>
            </div>
            <div className="skills-list">
              <span className="skill-item">Django Channels</span>
              <span className="skill-item">WebSockets</span>
              <span className="skill-item">ASGI</span>
              <span className="skill-item">Docker</span>
              <span className="skill-item">GitHub Actions</span>
              <span className="skill-item">Render</span>
            </div>
          </div>

          {/* Development Tools */}
          <div className="skills-category" data-aos="fade-up" data-aos-delay="600">
            <div className="skills-category-header">
              <div className="skills-icon">🛠️</div>
              <div>
                <h3>Development Tools</h3>
                <p>Tools used throughout development</p>
              </div>
            </div>
            <div className="skills-list">
              <span className="skill-item">Git</span>
              <span className="skill-item">GitHub</span>
              <span className="skill-item">NetBeans</span>
              <span className="skill-item">Visual Studio</span>
              <span className="skill-item">VS Code</span>
              <span className="skill-item">Postman</span>
            </div>
          </div>

          {/* Computer Vision */}
          <div className="skills-category" data-aos="fade-up" data-aos-delay="700">
            <div className="skills-category-header">
              <div className="skills-icon">👁️</div>
              <div>
                <h3>Computer Vision</h3>
                <p>Technologies used for image processing</p>
              </div>
            </div>
            <div className="skills-list">
              <span className="skill-item">OpenCV</span>
              <span className="skill-item">Face Detection</span>
              <span className="skill-item">Image Processing</span>
            </div>
          </div>
          {/* Machine Learning */}
<div className="skills-category" data-aos="fade-up" data-aos-delay="800">
  <div className="skills-category-header">
    <div className="skills-icon">🤖</div>
    <div>
      <h3>Machine Learning</h3>
      <p>ML model training and evaluation</p>
    </div>
  </div>
  <div className="skills-list">
    <span className="skill-item">scikit-learn</span>
    <span className="skill-item">IsolationForest</span>
    <span className="skill-item">RandomForest</span>
    <span className="skill-item">SMOTE</span>
    <span className="skill-item">Feature Engineering</span>
    <span className="skill-item">Model Evaluation</span>
    <span className="skill-item">Classification</span>
    <span className="skill-item">Anomaly Detection</span>
  </div>
</div>

{/* AI & LLM */}
<div className="skills-category" data-aos="fade-up" data-aos-delay="900">
  <div className="skills-category-header">
    <div className="skills-icon">🧠</div>
    <div>
      <h3>AI &amp; LLM</h3>
      <p>Retrieval-augmented generation and LLM apps</p>
    </div>
  </div>
  <div className="skills-list">
    <span className="skill-item">RAG</span>
    <span className="skill-item">ChromaDB</span>
    <span className="skill-item">Sentence-Transformers</span>
    <span className="skill-item">Embeddings</span>
    <span className="skill-item">Vector Databases</span>
    <span className="skill-item">Groq</span>
    <span className="skill-item">Ollama</span>
    <span className="skill-item">LLM APIs</span>
  </div>
</div>

{/* Agentic Systems */}
<div className="skills-category" data-aos="fade-up" data-aos-delay="1000">
  <div className="skills-category-header">
    <div className="skills-icon">⚡</div>
    <div>
      <h3>Agentic Systems</h3>
      <p>Multi-agent workflows and orchestration</p>
    </div>
  </div>
  <div className="skills-list">
    <span className="skill-item">LangGraph</span>
    <span className="skill-item">LangChain</span>
    <span className="skill-item">Multi-Agent</span>
    <span className="skill-item">Human-in-the-Loop</span>
    <span className="skill-item">StateGraph</span>
    <span className="skill-item">Checkpointing</span>
  </div>
</div>

{/* Testing & DevOps */}
<div className="skills-category" data-aos="fade-up" data-aos-delay="1100">
  <div className="skills-category-header">
    <div className="skills-icon">🧪</div>
    <div>
      <h3>Testing &amp; DevOps</h3>
      <p>Quality assurance and deployment pipelines</p>
    </div>
  </div>
  <div className="skills-list">
    <span className="skill-item">pytest</span>
    <span className="skill-item">Docker</span>
    <span className="skill-item">docker-compose</span>
    <span className="skill-item">GitHub Actions</span>
    <span className="skill-item">CI/CD</span>
    <span className="skill-item">Render</span>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;