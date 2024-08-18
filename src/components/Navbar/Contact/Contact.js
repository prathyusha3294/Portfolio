import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 style={{ color: 'white', textAlign: 'center', width: '100%' }}>Contact Me</h2>
      <p>You can reach me via the following methods:</p>
      <ul className="contact-info">
        <li><strong>Email:</strong> kummariprathyusha@gmail.com</li>
        <li><strong>Phone:</strong> +91 9390879343</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/prathyusha-k-49872a280/" target="_blank" rel="noopener noreferrer">My LinkedIn</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/prathyusha3294" target="_blank" rel="noopener noreferrer">My GitHub</a></li>
      </ul>
    </div>
  );
};

export default Contact;
