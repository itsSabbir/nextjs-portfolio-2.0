// --- START OF UPDATED components/Layout.jsx ---
import React from 'react';
import Head from 'next/head'; // ** Added: Import Head for meta tags **
import Image from 'next/image'; // ** Added: Import Image for PDF icon **

// Import core layout components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({ children }) {
  // Update this with the EXACT filename of your CV PDF in the /public folder
  const resumePdfPath = "/Sabbir_Hossain_CV.pdf";

  return (
    <>
      {/* ** Added: Default Head component for global metadata ** */}
      <Head>
        {/* --- Fallback Title --- */}
        {/* (Individual pages should override this with more specific titles) */}
        <title>Sabbir Hossain | Software Engineer & Data Scientist</title>

        {/* --- Favicon Links --- */}
        {/* (Assuming standard favicon placement in /public) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Add other sizes if you have them e.g., apple-touch-icon, icon.svg */}
        {/* <link rel="icon" href="/icon.svg" type="image/svg+xml" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        {/* <link rel="manifest" href="/manifest.webmanifest" /> */}

        {/* --- Basic Meta Tags --- */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sabbir Hossain" />
        {/* --- Add Default Description (pages should override) --- */}
        <meta name="description" content="Personal portfolio website for Sabbir Hossain, showcasing skills and experience in Software Engineering, Data Science, and Bioinformatics." />
         {/* --- Optional: Theme Color --- */}
        {/* <meta name="theme-color" content="#0A192F" /> */}
      </Head>

      {/* Render Navbar component */}
      <Navbar />

      {/* Main content area where page components get rendered */}
      {/* root-content-container adds padding defined in CSS */}
      <main className="root-content-container"> {/* Changed div to semantic main tag */}
        {children}
      </main>

      {/* Floating PDF Download Button */}
      <div className="get-pdf">
        {/* ** Changed: Updated href to use the variable ** */}
        <a
          className="pdf-link" // Keep class if styled specifically
          href={resumePdfPath}
          target="_blank"
          rel="noopener noreferrer" // Corrected attribute value
          title="Download Sabbir Hossain's Resume (PDF)" // Updated title
        >
           {/* ** Changed: Use next/image for PDF icon ** */}
           <Image
              src="/pdf-icon.svg" // Assuming this path is correct in /public
              alt="Download Resume PDF" // More descriptive alt text
              width={30} // Use size defined in CSS, provide base here
              height={30}
              // Filters are applied via CSS, no need for inline style/filter prop
           />
        </a>
      </div>

      {/* Render Footer component */}
      <Footer />
    </>
  );
}

export default Layout;
// --- END OF UPDATED components/Layout.jsx ---