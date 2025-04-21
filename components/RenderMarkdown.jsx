// components/RenderMarkdown.jsx
import React from 'react';

// Basic function to replace **text** with <strong>text</strong>
// Note: This is very basic and only handles non-nested bold.
// For complex markdown, use a library like react-markdown.
function renderSimpleBold(text) {
  if (!text) return '';
  // Use dangerouslySetInnerHTML carefully - here it's okay as we control the replacement
  const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  return { __html: html };
}

function RenderMarkdown({ text, className = 'description' }) { // Add className prop
  if (!text) return null;

  // Use a 'p' tag by default, can be changed if needed
  return (
    <p
      className={className} // Apply passed className
      dangerouslySetInnerHTML={renderSimpleBold(text)}
    />
  );
}

export default RenderMarkdown;