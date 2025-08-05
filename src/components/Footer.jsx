import React from 'react';
import '../styles/Footer.css'; 
<styles />;

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Dashboard App. All rights reserved.</p>
      <p className="footer-links">
        <a href="https://github.com/piyushku0331" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer;
