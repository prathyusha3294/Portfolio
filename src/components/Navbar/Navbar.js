import React from 'react';
import './navbar.css';
import message from '../../assets/contact image.jpg';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div>Portfolio.</div>
        <div className='desktopmenu'>
        <a href="#home" className='desktopMenuListItem' style={{ color: 'white' }}>Home</a>
          <a href="#about" className='desktopMenuListItem' style={{ color: 'white' }}>About</a>
          <a href="#experience" className='desktopMenuListItem' style={{ color: 'white' }}>Experience</a>
          <a href="#skills" className='desktopMenuListItem' style={{ color: 'white' }}>Skills</a>
          <a href="#projects" className='desktopMenuListItem' style={{ color: 'white' }}>Projects</a>
        </div>
        <a href="#contact" className='desktopMenubotton'>
          <img src={message} alt="Contact" className='desktopMenuImg' />
          Contact Me
        </a>
      </nav>
    </div>  
  );
};

export default Navbar;
