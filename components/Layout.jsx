// --- components/Layout.jsx ---
import Head from 'next/head';
import Image from 'next/image';
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
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
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* PDF Floating Button */}
      <div className="get-pdf">
        <a
          href="/1SabbirHossain.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Resume (PDF)"
        >
          <Image src="/pdf-icon.svg" alt="PDF" width={25} height={25} />
        </a>
      </div>
    </>
  );
}

export default Layout;