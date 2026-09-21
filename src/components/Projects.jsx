// src/components/Projects.jsx

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  // Filter projects
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header" data-aos="fade-up">
          <p className="section-label">MY WORK</p>
          <h2>Featured Projects</h2>
          <p className="section-intro">
            A selection of software development, full-stack,
            database, and data analysis projects that demonstrate
            my practical technical skills.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;