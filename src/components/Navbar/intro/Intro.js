import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../../assets/prathyusha image.jpg';
import btnImg from '../../../assets/hire.png'

const Intro = () => {
  return (
      <div id="about">
        <div className='introcontent'>
          <span className='hello'>Hello</span>
          <span className='introText'>I'm <span className='introName'>Prathyusha</span><br/>Python Full Stack Developer</span>
          <p className="intropara">I am a skilled developer with expertise in building dynamic web applications.</p>
          <Link>
            <button className='btn'><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button>
          </Link>
        </div>
        <img src={bg} alt="Profile" className='bg'></img>
      </div>
  )
}

export default Intro;
