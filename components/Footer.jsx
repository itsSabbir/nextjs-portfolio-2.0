// --- components/Footer.jsx ---

import React from 'react';

/**
 * Renders the website footer.
 * Contains copyright information with the current year and owner's name.
 */
function Footer() {
  // Get the current year dynamically so it updates automatically
  const current_year = new Date().getFullYear();

  return (
    // Use the semantic <footer> element for the main footer container
    <footer className="footer">
      {' '}
      {/* Styled by .footer in app.css */}
      {/* Use the .container class for consistent centering and max-width */}
      <div className="container">
        <p>
          {/* Copyright symbol */}
          Copyright © {/* Display the dynamically calculated year */}
          <span>{current_year}</span> {/* Updated name */}
          Sabbir Hossain. All rights reserved.
          {/*
           Optional: You can add links here if desired, uncomment and style if needed.
           <span className="footer-links" style={{ marginLeft: '20px', display: 'inline-block' }}>
             <a href="https://github.com/itsSabbir" target="_blank" rel="noopener noreferrer">GitHub</a> |
             <a href="https://linkedin.com/in/itssabbir" target="_blank" rel="noopener noreferrer">LinkedIn</a>
           </span>
          */}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
