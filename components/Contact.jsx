// --- START OF UPDATED components/Contact.jsx ---
import React from 'react';
import Image from 'next/image'; // ** Import Next.js Image **

// Update items with Sabbir's correct links and alt text descriptions
const contactItems = [
  {
    title: 'Email Sabbir Hossain', // More descriptive title
    altText: 'Email Icon',        // Alt text for the image
    src: '/mail-icon.png',
    external_link: 'mailto:hossain.sabbir17@gmail.com'
  },
  {
    title: 'Sabbir Hossain on GitHub', // More descriptive title
    altText: 'GitHub Octocat Icon',
    src: '/github-icon.png',
    external_link: 'https://github.com/itsSabbir' // Correct GitHub link
  },
  {
    title: 'Sabbir Hossain on LinkedIn', // More descriptive title
    altText: 'LinkedIn Logo',
    src: '/linkedin-icon.png',
    external_link: 'https://linkedin.com/in/itssabbir' // Correct LinkedIn link
  }
];

function Contact() {
  // Removed the outer wrapper div (`contact-wrapper`) - let the parent (.navbar .container) handle positioning.
  // The CSS already targets .image-block-wrapper within .contact-wrapper,
  // so keeping .image-block-wrapper should maintain the styling.
  // If issues arise, we might need to rename .image-block-wrapper to .contact-wrapper
  // or adjust the CSS selector in app.css.

  return (
      // ** Changed: Removed outer `contact-wrapper` and the problematic `pre-text` div **
      // This `image-block-wrapper` should now directly be inside the Navbar's container flex layout
      <div className="image-block-wrapper">
        {contactItems.map(({ title, altText, src, external_link }, index) => (
          <a
            key={index}
            // Removed: `image-block-item` class (may not be needed if parent is flex)
            href={external_link}
            title={title} // Keep title attribute for tooltips
            target="_blank"
            rel="noopener noreferrer" // Correct attribute value
          >
            {/* ** Changed: Use next/image ** */}
            <Image
                src={src}
                alt={altText} // Use specific alt text
                width={20} // Specify base width (CSS might override)
                height={20} // Specify base height
                // Remove explicit filter from here if handled by CSS
            />
          </a>
        ))}
      </div>
  );
}

export default Contact;
// --- END OF UPDATED components/Contact.jsx ---