// --- components/Navbar.jsx ---
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navs = [
    { text: 'About', href: '/#about', icon: 'fas fa-user', tooltip: 'The person behind the code' },
    { text: 'Experience', href: '/experiences', icon: 'fas fa-briefcase', tooltip: 'Where I\'ve been, what I\'ve built' },
    { text: 'Projects', href: '/#projects', icon: 'fas fa-code', tooltip: 'Ideas made real' },
    { text: 'Skills', href: '/#skills', icon: 'fas fa-cogs', tooltip: 'Tools of the trade' },
    { text: 'Contact', href: '/#contact', icon: 'fas fa-envelope', tooltip: 'Let\'s start something' },
  ];

  const Tooltip = ({ text, isVisible }) => {
    if (!isVisible) return null;
    
    return (
      <div style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        marginTop: '12px',
        padding: '10px 16px',
        background: 'rgba(23, 42, 69, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        borderRadius: '8px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(212, 175, 55, 0.1)',
        whiteSpace: 'nowrap',
        zIndex: 1000,
        animation: 'fadeIn 0.2s ease'
      }}>
        {/* Arrow */}
        <div style={{
          position: 'absolute',
          top: '-6px',
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
          width: '12px',
          height: '12px',
          background: 'rgba(23, 42, 69, 0.95)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRight: 'none',
          borderBottom: 'none'
        }} />
        
        <span style={{
          color: '#f5f5f5',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          {text}
        </span>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link 
          href="/" 
          className="logo" 
          onClick={closeMobileMenu}
          onMouseEnter={() => setActiveTooltip('logo')}
          onMouseLeave={() => setActiveTooltip(null)}
          style={{ position: 'relative' }}
        >
          <div className="logo-icon" style={{
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid var(--accent-secondary)',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            <span style={{
              color: 'var(--accent-secondary)',
              fontWeight: '700',
              fontSize: '1.4rem'
            }}>
              Σ
            </span>
          </div>
          <span className="logo-text">Sabbir Hossain</span>
          
          <Tooltip text="Back to the beginning" isVisible={activeTooltip === 'logo'} />
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
            <li key={nav.text} style={{ position: 'relative' }}>
              <Link 
                href={nav.href} 
                className="nav-item" 
                onClick={closeMobileMenu}
                onMouseEnter={() => setActiveTooltip(nav.text)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <i className={nav.icon} style={{ marginRight: '8px' }}></i>
                {nav.text}
              </Link>
              
              <Tooltip text={nav.tooltip} isVisible={activeTooltip === nav.text} />
            </li>
          ))}
        </ul>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-5px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;