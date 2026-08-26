// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-up">
      <p>&copy; {currentYear} Mxolisi Maseko. All rights reserved.</p>
    </footer>
  );
};

export default Footer;