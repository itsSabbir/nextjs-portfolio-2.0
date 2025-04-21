// --- START OF UPDATED components/Footer.jsx ---
import React from 'react';

function Footer() {
  // Get the current year dynamically
  const current_year = new Date().getFullYear();

  return (
    <footer className="footer"> {/* Changed div to semantic footer tag */}
      <div className="container"> {/* Added container for consistency */}
        <p>
           {/* Changed: Updated name and slightly rephrased */}
          Copyright © <span>{current_year}</span> Sabbir Hossain. All rights reserved.
           {/* Optional: Add links here too if desired, e.g., back to GitHub/LinkedIn */}
           {/* <p className="footer-links">
             <a href="https://github.com/itsSabbir" target="_blank" rel="noopener noreferrer">GitHub</a> |
             <a href="https://linkedin.com/in/itssabbir" target="_blank" rel="noopener noreferrer">LinkedIn</a>
           </p> */}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
// --- END OF UPDATED components/Footer.jsx ---