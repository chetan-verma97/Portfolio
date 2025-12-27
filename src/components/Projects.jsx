import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Spring Boot backend and React frontend. Features include user authentication, product management, shopping cart, and secure payment integration.',
      technologies: ['Spring Boot', 'React', 'MySQL', 'REST API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates. Built using microservices architecture with Spring Boot and React for seamless team collaboration.',
      technologies: ['Spring Boot', 'React', 'MongoDB', 'Microservices'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Vite. Features smooth animations, neon purple theme, and fully responsive design showcasing projects and skills.',
      technologies: ['React', 'Vite', 'CSS3', 'Responsive Design'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Blog API',
      description: 'RESTful API for a blogging platform with user authentication, CRUD operations, and content management. Built with Spring Boot and secured with JWT authentication.',
      technologies: ['Spring Boot', 'PostgreSQL', 'JWT', 'Hibernate'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard application that fetches data from weather APIs. Built with React and features location-based weather information with interactive UI.',
      technologies: ['React', 'REST API', 'JavaScript', 'CSS3'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Inventory Management',
      description: 'Enterprise inventory management system with user roles, product tracking, and analytics. Developed using Spring Boot backend with React frontend.',
      technologies: ['Spring Boot', 'React', 'MySQL', 'Material-UI'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">
          Featured <span className="highlight">Projects</span>
        </h2>
        <p className="section-subtitle">
          A showcase of my recent work and contributions
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
                <a href={project.demo} className="project-link primary" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
