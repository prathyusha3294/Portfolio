import React from 'react';
import './navbar.css';
import message from '../../assets/contact image.jpg';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div>Portfolio.</div>
        <div className='desktopmenu'>
          <a href="#home" className='desktopMenuListItem'>Home</a>
          <a href="#about" className='desktopMenuListItem'>About</a>
          <a href="#skills" className='desktopMenuListItem'>Skills</a>
          <a href="#projects" className='desktopMenuListItem'>Projects</a>
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
