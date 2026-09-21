// src/components/ProjectCard.jsx

import React from 'react';

const ProjectCard = ({ project, index }) => {
  const { title, status, description, technologies, github, liveDemo } = project;

  const number = String(index + 1).padStart(2, '0');

  return (
    <article className="project-card">
      <div className="project-header">
        <span className="project-number">{number}</span>
        <span className="project-status">{status}</span>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tech">
          {technologies && technologies.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-actions">
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live-link"
          >
            Live Demo →
          </a>
        )}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          GitHub →
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;