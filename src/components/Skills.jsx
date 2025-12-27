import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'REST APIs', level: 88 },
        { name: 'Microservices', level: 80 },
        { name: 'Hibernate/JPA', level: 85 }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 88 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Vite', level: 82 },
        { name: 'Responsive Design', level: 87 }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 88 }
      ]
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Maven', level: 85 },
        { name: 'Jenkins', level: 70 },
        { name: 'Postman', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">
          Skills & <span className="highlight">Technologies</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with to build scalable applications
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
