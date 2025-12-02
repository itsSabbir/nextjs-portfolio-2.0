import React from 'react';
import PropTypes from 'prop-types';

/**
 * StatCard Component
 * 
 * A reusable card for displaying statistics with an icon, value, and label.
 * Includes fade-in animation class for scroll-triggered animations.
 * 
 * @param {string|React.ReactNode} icon - Emoji string or React element (e.g., FontAwesome)
 * @param {string} value - The statistic value to display (e.g., "800%", "3.96")
 * @param {string} label - Description label for the stat (e.g., "Data Coverage")
 * @param {string} className - Additional CSS classes (optional)
 */

const StatCard = ({ icon, value, label, className = '' }) => {
  return (
    <div className={`stat-card fade-in ${className}`.trim()}>
      <div className="stat-icon">
        {icon}
      </div>
      <div className="stat-value">
        {value}
      </div>
      <div className="stat-label">
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

StatCard.defaultProps = {
  className: '',
};

export default StatCard;
