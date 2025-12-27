// --- components/Layout.jsx ---
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import AnimatedBackground from './AnimatedBackground';

function Layout({ children, title, description }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>{title || "Sabbir Hossain | Data Engineer & Platform Architect"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sabbir Hossain" />
        <meta name="description" content={description || "Portfolio of Sabbir Hossain, Data Engineer & Platform Architect."} />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* NOTE: Ensure you have the FontAwesome link here or in _document.js 
           otherwise your icons won't show.
        */}
      </Head>

      {/* Global Background & Cursor */}
      <CustomCursor />
      <AnimatedBackground />

      <Navbar />

      <main className="root-content-container">
        {children}
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* PDF Floating Button - FIXED BELOW */}
      <a 
        href="/1SabbirHossain.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="get-pdf"
        title="Grab my resume"
      >
        <i className="fas fa-file-pdf"></i>
      </a>
    </>
  );
}

export default Layout;