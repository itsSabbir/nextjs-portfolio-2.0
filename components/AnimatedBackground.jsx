import React, { useEffect, useRef, useCallback } from 'react';

/**
 * AnimatedBackground Component
 * 
 * A dynamic background featuring:
 * - Starfield effect (CSS animated)
 * - Floating gradient orbs (CSS animated)
 * - Canvas-based floating symbols with mouse repulsion
 * 
 * Theme: Avatar/Space/Magic with Navy/Red/Gold colors
 */

// Symbol sets organized by theme
const SYMBOL_SETS = {
  math: ['∫', '∑', '∂', '∞', 'π', 'λ', 'θ', 'α', 'β', 'γ', 'Δ', 'Σ', 'Ω', '√', '≈', '≠', '∈', '∀', '∃', '⊂'],
  code: ['</', '/>', '{ }', '[ ]', '( )', '=>', '&&', '||', '++', '--', '##', '**'],
  harryPotter: ['⚡', '✨', '🦉', '🪄', '📜', '🏰', '⭐', '🌙', '🔮', '⚗️'],
  avatar: ['🌊', '🔥', '🌪️', '🌍', '☯️', '🍃', '💨', '⛰️', '🌀', '❄️'],
  space: ['🚀', '🌟', '🪐', '☄️', '🛸', '🌌', '⭐', '✦', '✧', '◇'],
  tech: ['💻', '🧬', '⚛️', '🔬', '📊', '🤖', '💡', '⚙️', '🔗', '📡'],
};

// Flatten all symbols into one array
const ALL_SYMBOLS = Object.values(SYMBOL_SETS).flat();

// Color palette (Gold and Red with varying opacity)
const SYMBOL_COLORS = [
  'rgba(212, 175, 55, 0.25)',  // Gold - light
  'rgba(212, 175, 55, 0.35)',  // Gold - medium
  'rgba(212, 175, 55, 0.45)',  // Gold - strong
  'rgba(174, 0, 1, 0.25)',     // Red - light
  'rgba(174, 0, 1, 0.35)',     // Red - medium
  'rgba(174, 0, 1, 0.45)',     // Red - strong
  'rgba(245, 245, 245, 0.15)', // Off-white - subtle
];

/**
 * FloatingSymbol class - represents a single animated symbol
 */
class FloatingSymbol {
  constructor(canvasWidth, canvasHeight) {
    this.reset(canvasWidth, canvasHeight, true);
  }

  reset(canvasWidth, canvasHeight, randomPosition = false) {
    // Position
    this.x = randomPosition ? Math.random() * canvasWidth : Math.random() * canvasWidth;
    this.y = randomPosition ? Math.random() * canvasHeight : Math.random() * canvasHeight;
    
    // Velocity (slow drift)
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    
    // Base velocity for reset after repulsion
    this.baseVx = this.vx;
    this.baseVy = this.vy;
    
    // Visual properties
    this.symbol = ALL_SYMBOLS[Math.floor(Math.random() * ALL_SYMBOLS.length)];
    this.color = SYMBOL_COLORS[Math.floor(Math.random() * SYMBOL_COLORS.length)];
    this.size = 16 + Math.random() * 28; // 16px to 44px
    this.opacity = 0.15 + Math.random() * 0.35;
    
    // Rotation
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.015;
    
    // Floating animation (sine wave)
    this.floatOffset = Math.random() * Math.PI * 2;
    this.floatSpeed = 0.5 + Math.random() * 0.5;
    this.floatAmplitude = 0.3 + Math.random() * 0.4;
  }

  update(canvasWidth, canvasHeight, mouseX, mouseY, deltaTime) {
    const dt = deltaTime / 16.67; // Normalize to ~60fps
    
    // Mouse repulsion effect
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const repulsionRadius = 150;
    
    if (distance < repulsionRadius && distance > 0) {
      const force = (repulsionRadius - distance) / repulsionRadius;
      const repulsionStrength = 0.8;
      this.vx += (dx / distance) * force * repulsionStrength * dt;
      this.vy += (dy / distance) * force * repulsionStrength * dt;
    }
    
    // Apply velocity with floating effect
    const time = Date.now() * 0.001;
    const floatX = Math.sin(time * this.floatSpeed + this.floatOffset) * this.floatAmplitude;
    const floatY = Math.cos(time * this.floatSpeed + this.floatOffset) * this.floatAmplitude;
    
    this.x += (this.vx + floatX) * dt;
    this.y += (this.vy + floatY) * dt;
    
    // Rotation
    this.rotation += this.rotationSpeed * dt;
    
    // Velocity damping (slowly return to base velocity)
    this.vx += (this.baseVx - this.vx) * 0.02 * dt;
    this.vy += (this.baseVy - this.vy) * 0.02 * dt;
    
    // Boundary wrapping with padding
    const padding = this.size;
    if (this.x < -padding) this.x = canvasWidth + padding;
    if (this.x > canvasWidth + padding) this.x = -padding;
    if (this.y < -padding) this.y = canvasHeight + padding;
    if (this.y > canvasHeight + padding) this.y = -padding;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.font = `${this.size}px "JetBrains Mono", "Fira Code", monospace`;
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.symbol, 0, 0);
    ctx.restore();
  }
}

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const symbolsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  // Initialize symbols
  const initSymbols = useCallback((width, height) => {
    const symbolCount = Math.min(35, Math.floor((width * height) / 40000)); // Responsive count
    symbolsRef.current = [];
    
    for (let i = 0; i < Math.max(20, symbolCount); i++) {
      symbolsRef.current.push(new FloatingSymbol(width, height));
    }
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const now = Date.now();
    const deltaTime = now - lastTimeRef.current;
    lastTimeRef.current = now;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw symbols
    symbolsRef.current.forEach(symbol => {
      symbol.update(
        canvas.width,
        canvas.height,
        mouseRef.current.x,
        mouseRef.current.y,
        deltaTime
      );
      symbol.draw(ctx);
    });

    // Continue animation loop
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  // Handle canvas resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    // Reinitialize symbols if count needs adjustment
    if (symbolsRef.current.length === 0) {
      initSymbols(rect.width, rect.height);
    }
  }, [initSymbols]);

  // Handle mouse movement
  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 };
  }, []);

  // Setup effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initial setup
    handleResize();
    initSymbols(canvas.width, canvas.height);

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animate, handleResize, handleMouseMove, handleMouseLeave, initSymbols]);

  return (
    <div className="animated-bg">
      {/* Starfield - CSS animated */}
      <div className="stars" />
      
      {/* Floating gradient orbs - CSS animated */}
      <div className="bg-gradient bg-gradient-1" />
      <div className="bg-gradient bg-gradient-2" />
      <div className="bg-gradient bg-gradient-3" />
      
      {/* Canvas for floating symbols */}
      <canvas
        ref={canvasRef}
        id="background-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
