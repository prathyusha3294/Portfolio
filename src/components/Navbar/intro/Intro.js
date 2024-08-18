import React from 'react';
import './intro.css';
import btnImg from '../../../assets/hire.png';
import download from '../../../assets/download.avif';
import resume from '../../../assets/PrathyushaKummari_Resume_PythonFull-Stack_developer (1) (1).pdf';

const Intro = () => {
  return (
    <div id="about">
      <div className='introcontent'>
        <span className='hello'>Hello</span>
        <span className='introText'>I'm <span className='introName'>Prathyusha</span><br/>Python Full Stack Developer</span>
        <p className="intropara">
        I have worked on a variety of projects that demonstrate my skills in full-stack development. 
        From building robust backend APIs with Django Rest Framework to creating dynamic, responsive 
        frontends with React.js, my portfolio showcases my ability to handle diverse and challenging 
        development tasks. Below are some of the key projects I've worked on.
        </p>
        {/* Hire Me Button */}
        {/* Buttons Container */}
        <div className="btn-container">
          <a href="mailto:kummariprathyusha@gmail.com">
            <button className='btn'>
              <img src={btnImg} alt="Hire" className='btnImg'/>Hire Me
            </button>
          </a>
              &nbsp;&nbsp;
          <a href={resume} download="Prathyusha_Resume.pdf">
            <button className='btn'>
              <img src={download} alt="Download" className='btnImg'/>Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;