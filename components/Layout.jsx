// --- components/Layout.jsx ---

import React from 'react';
import Head from 'next/head'; // For setting meta tags, title, links in the document head
import Image from 'next/image'; // For optimized images (like the PDF icon)

// Import the reusable Navbar and Footer components
import Footer from './Footer'; // Corrected path assuming Footer.jsx is in the same folder
import Navbar from './Navbar'; // Corrected path assuming Navbar.jsx is in the same folder

/**
 * Provides the main structural layout for all pages.
 * Includes the Navbar, Footer, default Head tags, and the floating PDF button.
 * Wraps the specific content of each page ({children}).
 */
function Layout({ children }) {
  // 'children' prop represents the content of the specific page being rendered

  // Define the path to your resume PDF file located in the /public folder.
  // Ensure the actual filename in /public matches this EXACTLY.
  const resumePdfPath = '/Sabbir_Hossain_CV.pdf';

  return (
    // Use a React Fragment (<>) to group elements without adding an extra div to the DOM
    <>
      {/* Default Head component: Sets base metadata and links for all pages.
          Individual pages can override title and description using their own <Head> tags. */}
      <Head>
        {/* --- Fallback Title (appears if a page doesn't set its own) --- */}
        <title>Sabbir Hossain | Software Engineer & Data Scientist</title>

        {/* --- Favicon Links --- */}
        {/* Update these hrefs if your favicon files are named differently or located elsewhere */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Optional: Add links for other icon types if you have them */}
        {/* <link rel="icon" href="/icon.svg" type="image/svg+xml" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        {/* <link rel="manifest" href="/manifest.webmanifest" /> */}

        {/* --- Basic Meta Tags --- */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sabbir Hossain" />
        {/* --- Default Description (pages should override with specific content) --- */}
        <meta
          name="description"
          content="Personal portfolio website for Sabbir Hossain, showcasing skills and experience in Software Engineering, Data Science, and Bioinformatics."
        />
        {/* --- Optional: Theme Color (sets browser UI color on mobile) --- */}
        {/* <meta name="theme-color" content="#0A192F" /> */}
        {/* Matches --navy-blue */}
      </Head>

      {/* === Render the Navbar Component === */}
      {/* This ensures the Navbar appears consistently at the top of every page */}
      <Navbar />

      {/* === Main Content Area === */}
      {/* The <main> element is semantic for the primary content of the document. */}
      {/* The 'root-content-container' class typically applies site-wide padding (defined in app.css). */}
      {/* The {children} prop renders the actual component for the current page (e.g., Home, Experiences). */}
      <main className="root-content-container">{children}</main>

      {/* === Floating PDF Download Button === */}
      {/* This div remains fixed on the screen (styling in app.css: position: fixed). */}
      <div className="get-pdf">
        <a
          className="pdf-link" // Class for specific styling if needed beyond .get-pdf
          href={resumePdfPath} // Use the variable defined above for the correct PDF path
          target="_blank" // Open in new tab
          rel="noopener noreferrer" // Security best practice
          title="Download Sabbir Hossain's Resume (PDF)" // Tooltip text
        >
          {/* Use next/image for the icon */}
          <Image
            src="/pdf-icon.svg" // Ensure pdf-icon.svg is in the /public folder
            alt="Download Resume PDF" // Descriptive alt text
            width={30} // Base width, CSS might adjust based on .get-pdf img rule
            height={30} // Base height
            // Filters (like brightness/grayscale) should be applied via CSS in app.css
          />
        </a>
      </div>

      {/* === Render the Footer Component === */}
      {/* This ensures the Footer appears consistently at the bottom of every page */}
      <Footer />
    </>
  );
}

export default Layout;
