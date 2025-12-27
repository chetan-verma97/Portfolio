import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">
            Chetan <span className="hero-name-highlight">Verma</span>
          </h1>
          <h2 className="hero-title">Java Fullstack Developer</h2>
          <p className="hero-description">
            Passionate developer specializing in building scalable web applications 
            with Java, Spring Boot, React, and modern web technologies. 
            I create efficient, user-friendly solutions that solve real-world problems.
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="hero-button primary"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="hero-button secondary"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-circle"></div>
          <div className="hero-circle-outline"></div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
