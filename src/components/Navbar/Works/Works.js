import React from 'react';
import './works.css';

const projects = [
  {
    title: 'Helpdesk',
    description: 'Developed a robust solution to streamline issue resolution in IT companies. Created APIs using Django Rest Framework for seamless communication between users and support staff. The platform allows employees to efficiently report and track technical problems, enhancing productivity and workflow.'
  },
  {
    title: 'Timesheets',
    description: 'Implemented a timesheet management system for tracking employee hours and project time allocation. Enabled efficient time tracking, reporting, and management to improve project planning and resource allocation.'
  },
  {
    title: 'Feedback',
    description: 'Developed a comprehensive survey creation and feedback system that enables admins to design custom surveys, add questions, select locations, and publish them. The system generates unique links and QR codes for each survey, allowing users to easily access and provide feedback. User responses are then collected and managed within the platform. Worked on both the frontend and backend using JavaScript, React.js, and Django.'
  },
  {
    title: 'JobPortal',
    description: 'Simplified job searching and hiring for all experience levels. Collaborated with a team to develop the backend using Python and Django REST Framework, creating the engine that powers the website.'
  },
  {
    title: 'SeeSomethingSaySomething',
    description: 'Enabled incident reporting across communities. Users can capture and upload snapshots during incidents, with integrated community notification.'
  }
];

const Works = () => {
  return (
    <div id='projects'>
      <h1 style={{ textAlign: 'center', width: '100%' }}>My Projects</h1>
      <div className='projectss'>
        {projects.map((project, index) => (
          <div key={index} className='project'>
            <h2 className='project-title'>{project.title}</h2>
            <p className='project-description'>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
