// --- components/Contact.jsx ---

import React from 'react';
import Image from 'next/image'; // Use Next.js Image component

// Updated contact details for Sabbir Hossain
const contactItems = [
  {
    title: 'Email Sabbir Hossain',         // Tooltip text
    altText: 'Email Icon',               // Alt text for accessibility
    src: '/mail-icon.png',               // Path relative to the /public folder
    external_link: 'mailto:hossain.sabbir17@gmail.com' // Your email address
  },
  {
    title: 'Sabbir Hossain on GitHub',
    altText: 'GitHub Octocat Icon',
    src: '/github-icon.png',
    external_link: 'https://github.com/itsSabbir' // Your GitHub profile URL
  },
  {
    title: 'Sabbir Hossain on LinkedIn',
    altText: 'LinkedIn Logo',
    src: '/linkedin-icon.png',
    external_link: 'https://linkedin.com/in/itssabbir' // Your LinkedIn profile URL
  }
];

/**
 * Renders the contact icons (Email, GitHub, LinkedIn).
 * Intended to be used within the Navbar.
 * This component itself does NOT cause layout duplication.
 */
function Contact() {
  // The outer container (.contact-wrapper in CSS) is handled by the Navbar's CSS
  // We just need the flex container for the icons themselves.
  // .image-block-wrapper is used by the existing CSS rules.
  return (
      <div className="image-block-wrapper"> {/* This className is styled in app.css */}
        {contactItems.map(({ title, altText, src, external_link }, index) => (
          <a
            key={index}
            href={external_link}
            title={title}       // Provides tooltip on hover
            target="_blank"     // Opens link in a new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            // No specific className needed here if styling targets the wrapper or img
          >
            {/* Use next/image for optimized images */}
            <Image
              src={src}
              alt={altText}
              width={20}        // Base width (CSS might override via .contact-wrapper img)
              height={20}       // Base height
              // Filtering (like grayscale) is handled by the CSS in app.css
            />
          </a>
        ))}
      </div>
  );
}

export default Contact;