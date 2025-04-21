// --- components/ExternalLink.jsx ---

import React from 'react';

/**
 * Renders an anchor tag (<a>) specifically designed for external links.
 * It automatically adds target="_blank", rel="noreferrer", includes an
 * external link icon, and uses provided text and title.
 *
 * @param {{ href: string, title?: string, text: string }} props - Component props.
 * @param {string} props.href - The URL the link should point to. Defaults to ''.
 * @param {string} [props.title] - Optional explicit title attribute (tooltip). If omitted, uses text. Defaults to ''.
 * @param {string} props.text - The visible text content of the link. Defaults to ''.
 */
function ExternalLink({ href = '', title = '', text = '' }) {
  // Ensure required props are provided or handle gracefully
  if (!href || !text) {
    // Optionally return null or some fallback UI if critical props are missing
    console.warn('ExternalLink component is missing required props: href or text.');
    // For now, let it render potentially broken, but logging is good
  }

  return (
    <a
      className="external-link" // Styled by .external-link in app.css
      href={href}               // The target URL
      title={title || text}     // Use explicit title, or fall back to link text for tooltip
      target="_blank"           // Open link in a new browser tab/window
      rel="noopener noreferrer" // Security enhancement for target="_blank" (use this instead of just 'noreferrer')
    >
      {/* Visible text part of the link */}
      <span>{text}</span>
      {/* External link icon image */}
      {/* Note: This uses a standard <img> tag. Consider changing to next/image
          if you want Next.js image optimization benefits for this icon,
          though it might be minor for a small SVG. Ensure /public/external-link.svg exists. */}
      <img src="/external-link.svg" alt="Opens in a new tab" /> {/* More descriptive default alt */}
    </a>
  );
}

export default ExternalLink;