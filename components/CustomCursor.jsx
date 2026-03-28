'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor Component
 *
 * A minimal custom cursor with:
 * - Thin outer ring
 * - Small inner dot
 * - Subtle hover feedback for clickable elements
 * - Touch device detection (doesn't render on touch devices)
 *
 * Relies on CSS classes defined in app.css:
 * - .custom-cursor (outer ring)
 * - .cursor-dot (inner dot)
 * - .custom-cursor.hovering / .cursor-dot.hovering (subtle hover state)
 */

// Clickable element selectors
const CLICKABLE_SELECTORS = [
  'a',
  'button',
  'input[type="button"]',
  'input[type="submit"]',
  'input[type="reset"]',
  '[role="button"]',
  '.clickable',
  '.btn',
  '.cta',
  '.social-link',
  '.nav-item',
  '.project-card',
  '.skill-item',
  '.interest-tile',
  '.contact-item',
].join(', ');

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default true to prevent flash

  // Check if device is touch-based
  useEffect(() => {
    const checkTouchDevice = () => {
      const isTouchCapable = 
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore - msMaxTouchPoints is IE-specific
        navigator.msMaxTouchPoints > 0;
      
      // Also check if it's a small screen (likely mobile)
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      
      // Consider it a touch device if touch capable AND small screen
      // This allows laptops with touchscreens to still use the custom cursor
      setIsTouchDevice(isTouchCapable && isSmallScreen);
    };

    checkTouchDevice();
    
    // Re-check on resize
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Main cursor logic
  useEffect(() => {
    if (isTouchDevice) return;

    const updateCursorPosition = (x, y) => {
      const transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

      if (cursorRef.current) {
        cursorRef.current.style.transform = transform;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = transform;
      }
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      updateCursorPosition(e.clientX, e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    // Mouse enter viewport
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Mouse leave viewport
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Hover detection using event delegation
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest && target.closest(CLICKABLE_SELECTORS)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      
      // Check if we're actually leaving a clickable element
      if (target && target.closest && target.closest(CLICKABLE_SELECTORS)) {
        // Make sure we're not just moving to a child element
        if (!relatedTarget || !relatedTarget.closest || !relatedTarget.closest(CLICKABLE_SELECTORS)) {
          setIsHovering(false);
        }
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isTouchDevice, isVisible]);

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          opacity: isVisible ? 1 : 0,
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 10000,
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      
      {/* Inner dot */}
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{
          opacity: isVisible ? 1 : 0,
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 10001,
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
