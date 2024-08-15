import React from 'react';
import './skills.css';
import python from '../../../assets/python.jpg';
import django from '../../../assets/django.png';
import react from '../../../assets/react.png';

const Skills = () => {
  return (
   <div id='skills'>
        <span className='skillTitle'>What i do</span>
        <span className='skillDesc'>Skilled in developing scalable web applications, automating tasks, and working with data analysis and machine learning using Python. Proficient in frameworks like Django and Flask, with experience in writing clean, efficient code, integrating APIs, and collaborating with cross-functional teams. Strong problem-solving abilities and a commitment to continuous learning.</span>
        <div className='SkillBars'>
            <div className='skillBar'>
                <img src={python} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Python</h2>
                    <p>proficient in python</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={django} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Django</h2>
                    <p>by using django i can write the apis</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={react} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>React.js</h2>
                    <p>proficient in react.js</p>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Skills
