'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * CustomCursor Component
 * 
 * A custom cursor with:
 * - Outer ring that follows with smooth interpolation (lerp)
 * - Inner dot that follows instantly
 * - Hover state detection for clickable elements
 * - Touch device detection (doesn't render on touch devices)
 * 
 * Relies on CSS classes defined in app.css:
 * - .custom-cursor (outer ring)
 * - .cursor-dot (inner dot)
 * - .custom-cursor.hovering (expanded state)
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
  
  // Mouse position refs (using refs to avoid re-renders)
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  // Linear interpolation function
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  // Animation loop for smooth cursor movement
  const animate = useCallback(() => {
    // Lerp factor - lower = smoother/slower, higher = snappier
    const lerpFactor = 0.15;

    // Interpolate cursor ring position
    cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, lerpFactor);
    cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, lerpFactor);

    // Apply positions
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%)`;
    }

    if (dotRef.current) {
      // Dot follows instantly
      dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`;
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

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

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (!isVisible) {
        setIsVisible(true);
        // Initialize cursor position on first move
        cursorPos.current = { x: e.clientX, y: e.clientY };
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

    // Mouse down/up for click feedback (optional enhancement)
    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform += ' scale(0.8)';
      }
    };

    const handleMouseUp = () => {
      // Scale is handled by the animation loop, this is just a quick visual feedback
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isTouchDevice, isVisible, animate]);

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Outer ring - follows with lerp delay */}
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
      
      {/* Inner dot - follows instantly */}
      <div
        ref={dotRef}
        className="cursor-dot"
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
