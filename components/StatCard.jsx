// --- components/StatCard.jsx ---
import React from 'react';
import PropTypes from 'prop-types';

/**
 * StatCard Component
 * Updated to match the Glassmorphism theme (Navy/Red/Gold)
 */
const StatCard = ({ icon, value, label, className = '' }) => {
  return (
    <div 
      className={`stat-card fade-in ${className}`.trim()}
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'var(--glass-blur)',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      // Add hover effect via JS or rely on CSS class if it exists. 
      // The .stat-card class in app.css handles basic layout, 
      // but these inline styles ensure the "Glass" look matches the new cards.
    >
      <div className="stat-icon" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        {icon}
      </div>
      <div className="stat-value" style={{ 
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '2.5rem',
        fontWeight: '700',
        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '0.25rem'
      }}>
        {value}
      </div>
      <div className="stat-label" style={{
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontWeight: '600'
      }}>
        {label}
      </div>
    </div>
  );
};

StatCard.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default StatCard;