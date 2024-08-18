import React from 'react';
import './skills.css';
import python from '../../../assets/python.jpg';
import django from '../../../assets/django.png';
import react from '../../../assets/react.png';
import javascript from '../../../assets/javascript.png';
import SQL from '../../../assets/sql.png';
import aws from '../../../assets/aws.png';

const Skills = () => {
  return (
   <div id='skills'>
        <h1 style={{ textAlign: 'center', width: '100%' }}>Skills</h1>
        <div className='SkillBars'>
            <div className='skillRow'>
                <div className='skillBar'>
                    <img src={python} alt='Python' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Python</h2>
                        <p>Proficient in Python</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={django} alt='Django' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Django</h2>
                        <p>Experience in writing APIs using Django</p>
                    </div>
                </div>
                
                <div className='skillBar'>
                    <img src={react} alt='React.js' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>React.js</h2>
                        <p>Proficient in React.js</p>
                    </div>
                </div>
            </div>

            <div className='skillRow'>
                <div className='skillBar'>
                    <img src={javascript} alt='JavaScript' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>JavaScript</h2>
                        <p>Experienced with JavaScript</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={SQL} alt='SQL' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>SQL</h2>
                        <p>Proficient in SQL</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={aws} alt='AWS' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>AWS</h2>
                        <p>Experience with AWS</p>
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Skills;
