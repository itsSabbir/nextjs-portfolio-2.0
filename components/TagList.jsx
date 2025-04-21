// --- components/TagList.jsx ---

import React from 'react';

/**
 * Renders a list of tags, optionally with a preceding caption.
 * Used for displaying skills, technologies associated with jobs/projects, etc.
 *
 * @param {{ tags: string[], caption?: string }} props - Component props.
 * @param {string[]} props.tags - An array of strings, where each string is a tag to display. Defaults to empty array.
 * @param {string} [props.caption] - An optional string to display as a label before the tags (e.g., "Skills:"). Defaults to null.
 */
function TagList({ tags = [], caption = null }) {
  // If the tags array is empty or not provided, don't render the component.
  if (!tags || tags.length === 0) {
    return null;
  }

  // Determine the wrapper className based on whether a caption is present.
  // The CSS uses '.tags-wrapper' and '.tags-wrapper.no-caption' for styling.
  const wrapperClassName = `tags-wrapper ${caption ? '' : 'no-caption'}`;

  return (
    // The main container div, styled by CSS based on wrapperClassName.
    <div className={wrapperClassName}>
      {/* Conditionally render the caption span only if a caption string is provided. */}
      {caption && <span className="caption">{caption}</span>}

      {/* The container specifically for the tag items. */}
      <div className="tags-container">
        {/* Map over the tags array to create a span for each tag. */}
        {tags.map((tag, index) => (
          // Use the tag string and its index to create a unique key.
          // The .tag-item class is used for styling individual tags in app.css.
          <span key={`${tag}-${index}`} className="tag-item">
            {tag} {/* Display the tag text */}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagList;
