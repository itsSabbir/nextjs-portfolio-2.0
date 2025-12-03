// --- components/AnimatedBackground.jsx ---
import React, { useEffect, useRef, useCallback } from 'react';

/**
 * AnimatedBackground Component
 * * A dynamic background featuring:
 * - Starfield effect (CSS animated)
 * - Floating gradient orbs (CSS animated)
 * - Canvas-based floating symbols with mouse repulsion
 * * Updates:
 * - Added Runes, Alchemical, and Music symbols
 * - Increased particle count significantly (especially for mobile)
 * - Reduced symbol size ("little white dots" look)
 * - Added fading/twinkling effect (opacity oscillation)
 * - Shifted palette to white/off-white
 */

// Symbol sets organized by theme - EXPANDED
const SYMBOL_SETS = {
  math: ['∫', '∑', '∂', '∞', 'π', 'λ', 'θ', 'α', 'β', 'γ', 'Δ', 'Σ', 'Ω', '√', '≈', '≠', '∈', '∀', '∃', '⊂', '∇', '⋅'],
  code: ['</', '/>', '{ }', '[ ]', '( )', '=>', '&&', '||', '++', '--', '##', '**', '${}', '!=', '==='],
  harryPotter: ['⚡', '✨', '🦉', '🪄', '📜', '🏰', '⭐', '🌙', '🔮', '⚗️', '🗝️', '🕯️'],
  avatar: ['🌊', '🔥', '🌪️', '🌍', '☯️', '🍃', '💨', '⛰️', '🌀', '❄️', '☄️'],
  space: ['🚀', '🌟', '🪐', '☄️', '🛸', '🌌', '⭐', '✦', '✧', '◇', '🔭', '🛰️', '•', '°'],
  tech: ['💻', '🧬', '⚛️', '🔬', '📊', '🤖', '💡', '⚙️', '🔗', '📡', '💾', '🔋'],
  runes: ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ'],
  alchemical: ['🜂', '🜃', '🜁', '🜄', '☉', '☽', '☿', '♀', '♂', '♃', '♄', '🜔', '🜕'],
  music: ['♩', '♪', '♫', '♬', '♭', '♮', '♯', '𝄞', '𝄢']
};

// Flatten all symbols into one array
const ALL_SYMBOLS = Object.values(SYMBOL_SETS).flat();

// Color palette - Shifted towards White/Bright for "White Dots" look
// Retained very subtle hints of Gold/Red for theme consistency
const SYMBOL_COLORS = [
  'rgba(255, 255, 255, 0.4)',   // Pure White
  'rgba(255, 255, 255, 0.3)',   // Pure White
  'rgba(255, 255, 255, 0.2)',   // Pure White
  'rgba(245, 245, 245, 0.35)',  // Off-white
  'rgba(212, 175, 55, 0.25)',   // Gold - very subtle
  'rgba(174, 0, 1, 0.15)',      // Red - very subtle
  'rgba(168, 178, 209, 0.3)',   // Muted Blue-Gray
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
    this.vx = (Math.random() - 0.5) * 0.4; // Slightly slower for "floating dust" feel
    this.vy = (Math.random() - 0.5) * 0.4;
    
    // Base velocity for reset after repulsion
    this.baseVx = this.vx;
    this.baseVy = this.vy;
    
    // Visual properties
    this.symbol = ALL_SYMBOLS[Math.floor(Math.random() * ALL_SYMBOLS.length)];
    this.color = SYMBOL_COLORS[Math.floor(Math.random() * SYMBOL_COLORS.length)];
    
    // Size: Smaller, like "little white dots"
    this.size = 8 + Math.random() * 12; // Range: 8px to 20px
    
    // Opacity / Fading properties
    // We store a "base" opacity and oscillate around it
    this.baseOpacity = 0.1 + Math.random() * 0.4; 
    this.opacity = this.baseOpacity;
    this.fadeSpeed = 0.02 + Math.random() * 0.03; // Speed of the fade
    this.fadeOffset = Math.random() * Math.PI * 2; // Random start point in sine wave
    
    // Rotation
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    
    // Floating animation (sine wave)
    this.floatOffset = Math.random() * Math.PI * 2;
    this.floatSpeed = 0.5 + Math.random() * 0.5;
    this.floatAmplitude = 0.3 + Math.random() * 0.4;
  }

  update(canvasWidth, canvasHeight, mouseX, mouseY, deltaTime) {
    const dt = deltaTime / 16.67; // Normalize to ~60fps
    const time = Date.now() * 0.001;

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
    const floatX = Math.sin(time * this.floatSpeed + this.floatOffset) * this.floatAmplitude;
    const floatY = Math.cos(time * this.floatSpeed + this.floatOffset) * this.floatAmplitude;
    
    this.x += (this.vx + floatX) * dt;
    this.y += (this.vy + floatY) * dt;
    
    // Rotation
    this.rotation += this.rotationSpeed * dt;
    
    // Fading effect (Twinkle)
    // Oscillate opacity using a sine wave based on time
    // We map the sine wave [-1, 1] to a factor that modifies the base opacity
    // This creates the "show up more and less" effect
    const fadeFactor = (Math.sin(time * 2 + this.fadeOffset) + 1) / 2; // 0 to 1
    // Opacity bounces between near-zero and the base opacity + a bit extra
    this.opacity = 0.05 + (this.baseOpacity * fadeFactor); 

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
    ctx.globalAlpha = this.opacity; // Use the dynamic, fading opacity
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
    // Increased density: reduced divisor from 40000 to 5000 (reverted back to original)
    // This creates significantly MORE particles per pixel area
    const densityDivisor = 40000; 
    const calculatedCount = Math.floor((width * height) / densityDivisor);
    
    // Increased max cap to 50 (was 35) to allow for the "more" request
    const symbolCount = Math.min(50, calculatedCount); 
    
    symbolsRef.current = [];
    
    // Increased minimum particles to 30 (was 20)
    // This ensures even small mobile screens have a lot of particles
    const minParticles = 30;
    
    for (let i = 0; i < Math.max(minParticles, symbolCount); i++) {
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
    // (Always re-init on resize to ensure consistent density)
    initSymbols(rect.width, rect.height);
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