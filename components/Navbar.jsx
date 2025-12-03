// --- components/Navbar.jsx ---
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navs = [
    { text: 'Home', href: '/', icon: 'fas fa-home' },
    { text: 'About', href: '/#about', icon: 'fas fa-user' },
    // Updated to point to the detailed experiences page
    { text: 'Experience', href: '/experiences', icon: 'fas fa-briefcase' },
    { text: 'Projects', href: '/#projects', icon: 'fas fa-code' },
    { text: 'Skills', href: '/#skills', icon: 'fas fa-cogs' },
    { text: 'Contact', href: '/#contact', icon: 'fas fa-envelope' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-icon">Σ</div>
          <span className="logo-text">Sabbir Hossain</span>
        </Link>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navs.map((nav) => (
            <li key={nav.text}>
              <Link href={nav.href} className="nav-item" onClick={closeMobileMenu}>
                <i className={nav.icon} style={{ marginRight: '8px' }}></i>
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;