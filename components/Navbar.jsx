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
    { text: 'Experience', href: '/experiences', icon: 'fas fa-briefcase' },
    { text: 'Projects', href: '/#projects', icon: 'fas fa-code' },
    { text: 'Skills', href: '/#skills', icon: 'fas fa-cogs' },
    { text: 'Contact', href: '/#contact', icon: 'fas fa-envelope' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          {/* Fancy Sigma Logo with gradient background and glow */}
          <div className="logo-icon" style={{
            background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--accent-primary) 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 3s ease infinite',
            boxShadow: '0 0 20px var(--glow-gold), 0 0 40px var(--glow-red), inset 0 0 20px rgba(255,255,255,0.1)',
            border: '2px solid var(--accent-secondary)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Inner glow effect */}
            <span style={{
              position: 'relative',
              zIndex: 2,
              textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px var(--accent-secondary)',
              fontWeight: '800',
              fontSize: '1.4rem'
            }}>
              Σ
            </span>
            {/* Shimmer overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              animation: 'shimmer 2s infinite'
            }} />
          </div>
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
      
      {/* Add the shimmer animation keyframe via style tag */}
      <style jsx>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;