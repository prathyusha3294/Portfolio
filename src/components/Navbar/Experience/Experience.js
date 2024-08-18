import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <div id="experience" className="experience-container">
      <h1 style={{ textAlign: 'center', width: '100%' }}>Experience</h1>
      
      <div className="experience-item">
        <h3>Software Developer</h3>
        <p><strong>Company:</strong> FalconAvl</p>
        <p><strong>Duration:</strong> June 22, 2023 - July 31, 2024</p>
        <ul>
          <li>Specialized in Python and Django Rest Framework.</li>
          <li>Developed RESTful APIs, designed data models, and ensured data security.</li>
          <li>Collaborated with the team on backend maintenance and code reviews.</li>
          <li>Deployed projects on ubuntu servers for testing and production.</li>
          <li>Worked with JavaScript and React.js.</li>
          <li>Integrated frontend with backend for seamless user experiences.</li>
          <li>Addressed technical challenges and optimized database queries.</li>
          <li>Gained valuable experience in software development and project management.</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Experience;

