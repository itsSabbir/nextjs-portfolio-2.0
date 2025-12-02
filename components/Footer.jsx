// --- components/Footer.jsx ---
import React from 'react';

function Footer() {
  const current_year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Brand Column */}
          <div className="footer-brand">
            <h3>Sabbir Hossain</h3>
            <p>
              Data Engineer & Platform Architect passionate about building scalable systems 
              and solving complex infrastructure challenges.
            </p>
            <div className="footer-social">
              <a href="https://github.com/itssabbir" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/itssabbir" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:hossain.sabbir17@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home"><i className="fas fa-chevron-right"></i> Home</a></li>
              <li><a href="#about"><i className="fas fa-chevron-right"></i> About</a></li>
              <li><a href="#experience"><i className="fas fa-chevron-right"></i> Experience</a></li>
              <li><a href="#projects"><i className="fas fa-chevron-right"></i> Projects</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="/1SabbirHossain.pdf" target="_blank"><i className="fas fa-file-pdf"></i> Resume</a></li>
              <li><a href="#skills"><i className="fas fa-cogs"></i> Skills</a></li>
              <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
              <li><a href="https://github.com/itssabbir"><i className="fab fa-github"></i> GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {current_year} Sabbir Hossain. All rights reserved.
          </div>
          <div className="footer-tagline">
            <i className="fas fa-code"></i> Engineered with precision // Designed with passion
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;