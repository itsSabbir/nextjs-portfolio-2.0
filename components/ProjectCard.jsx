import React from 'react';
import PropTypes from 'prop-types';

/**
 * ProjectCard Component
 * 
 * A card for displaying project information with:
 * - Icon and title header
 * - Description body
 * - Tech stack tags with automatic icon mapping
 * - Links footer (demo/repo)
 * 
 * @param {string} title - Project title
 * @param {string} description - Project description
 * @param {string[]} tags - Array of technology names
 * @param {string|React.ReactNode} icon - Emoji or React element for project icon
 * @param {Object} links - Object with demo and/or repo URLs
 * @param {string} className - Additional CSS classes (optional)
 */

// Tech tag icon mapping - maps technology names to icons
// Uses Devicon classes or emojis as fallbacks
const TECH_ICONS = {
  // Languages
  'python': 'devicon-python-plain colored',
  'javascript': 'devicon-javascript-plain colored',
  'typescript': 'devicon-typescript-plain colored',
  'java': 'devicon-java-plain colored',
  'c': 'devicon-c-plain colored',
  'c++': 'devicon-cplusplus-plain colored',
  'c#': 'devicon-csharp-plain colored',
  'go': 'devicon-go-plain colored',
  'rust': 'devicon-rust-plain',
  'ruby': 'devicon-ruby-plain colored',
  'php': 'devicon-php-plain colored',
  'swift': 'devicon-swift-plain colored',
  'kotlin': 'devicon-kotlin-plain colored',
  'r': 'devicon-r-plain colored',
  'scala': 'devicon-scala-plain colored',
  'bash': 'devicon-bash-plain',
  'sql': 'fas fa-database',
  
  // Frontend
  'react': 'devicon-react-original colored',
  'vue': 'devicon-vuejs-plain colored',
  'angular': 'devicon-angularjs-plain colored',
  'svelte': 'devicon-svelte-plain colored',
  'next.js': 'devicon-nextjs-original',
  'nextjs': 'devicon-nextjs-original',
  'html': 'devicon-html5-plain colored',
  'css': 'devicon-css3-plain colored',
  'sass': 'devicon-sass-original colored',
  'tailwind': 'devicon-tailwindcss-plain colored',
  'bootstrap': 'devicon-bootstrap-plain colored',
  'd3.js': 'devicon-d3js-plain colored',
  'd3': 'devicon-d3js-plain colored',
  
  // Backend
  'node.js': 'devicon-nodejs-plain colored',
  'nodejs': 'devicon-nodejs-plain colored',
  'express': 'devicon-express-original',
  'django': 'devicon-django-plain',
  'flask': 'devicon-flask-original',
  'fastapi': 'devicon-fastapi-plain colored',
  'spring': 'devicon-spring-plain colored',
  'rails': 'devicon-rails-plain colored',
  'graphql': 'devicon-graphql-plain colored',
  
  // Databases
  'postgresql': 'devicon-postgresql-plain colored',
  'postgres': 'devicon-postgresql-plain colored',
  'mysql': 'devicon-mysql-plain colored',
  'mongodb': 'devicon-mongodb-plain colored',
  'redis': 'devicon-redis-plain colored',
  'sqlite': 'devicon-sqlite-plain colored',
  'cassandra': 'fas fa-database',
  'snowflake': 'fas fa-snowflake',
  
  // Cloud & DevOps
  'aws': 'devicon-amazonwebservices-plain-wordmark colored',
  'azure': 'devicon-azure-plain colored',
  'gcp': 'devicon-googlecloud-plain colored',
  'docker': 'devicon-docker-plain colored',
  'kubernetes': 'devicon-kubernetes-plain colored',
  'k8s': 'devicon-kubernetes-plain colored',
  'terraform': 'devicon-terraform-plain colored',
  'jenkins': 'devicon-jenkins-plain colored',
  'github actions': 'devicon-github-original',
  'ci/cd': 'fas fa-infinity',
  'git': 'devicon-git-plain colored',
  
  // Data & ML
  'pytorch': 'devicon-pytorch-plain colored',
  'tensorflow': 'devicon-tensorflow-original colored',
  'pandas': 'devicon-pandas-original colored',
  'numpy': 'devicon-numpy-original colored',
  'scikit-learn': 'fas fa-chart-line',
  'sklearn': 'fas fa-chart-line',
  'spark': 'devicon-apachespark-plain colored',
  'apache spark': 'devicon-apachespark-plain colored',
  'kafka': 'devicon-apachekafka-plain',
  'apache kafka': 'devicon-apachekafka-plain',
  'airflow': 'fas fa-wind',
  'ml': 'fas fa-brain',
  'machine learning': 'fas fa-brain',
  'deep learning': 'fas fa-network-wired',
  'nlp': 'fas fa-language',
  'etl': 'fas fa-exchange-alt',
  'data pipelines': 'fas fa-project-diagram',
  
  // Tools & Other
  'jupyter': 'devicon-jupyter-plain colored',
  'vscode': 'devicon-vscode-plain colored',
  'linux': 'devicon-linux-plain',
  'nginx': 'devicon-nginx-original colored',
  'api': 'fas fa-plug',
  'rest': 'fas fa-plug',
  'rest api': 'fas fa-plug',
  'websocket': 'fas fa-plug',
  'sas': 'fas fa-database',
  'sas di': 'fas fa-database',
  'bioinformatics': 'fas fa-dna',
  'mlflow': 'fas fa-flask',
  'iac': 'fas fa-code',
};

// Get icon class for a tech tag
const getTechIcon = (tag) => {
  const normalizedTag = tag.toLowerCase().trim();
  return TECH_ICONS[normalizedTag] || null;
};

// Render tech tag with optional icon
const TechTag = ({ tag }) => {
  const iconClass = getTechIcon(tag);
  
  return (
    <span className="tech-tag">
      {iconClass && <i className={iconClass} aria-hidden="true" />}
      {tag}
    </span>
  );
};

TechTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

const ProjectCard = ({ 
  title, 
  description, 
  tags = [], 
  icon, 
  links = {},
  className = '' 
}) => {
  const { demo, repo } = links;
  const hasLinks = demo || repo;

  return (
    <div className={`project-card fade-in ${className}`.trim()}>
      {/* Header: Icon and Title */}
      <div className="project-icon">
        {icon}
      </div>
      <h3 className="project-title">
        {title}
      </h3>

      {/* Body: Description */}
      <p className="project-description">
        {description}
      </p>

      {/* Tech Stack */}
      {tags.length > 0 && (
        <div className="project-tech">
          {tags.map((tag, index) => (
            <TechTag key={`${tag}-${index}`} tag={tag} />
          ))}
        </div>
      )}

      {/* Footer: Links */}
      {hasLinks && (
        <div className="project-links">
          {repo && (
            <a 
              href={repo} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
            >
              <i className="fab fa-github" aria-hidden="true" /> Code
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
            >
              <i className="fas fa-external-link-alt" aria-hidden="true" /> Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  links: PropTypes.shape({
    demo: PropTypes.string,
    repo: PropTypes.string,
  }),
  className: PropTypes.string,
};

ProjectCard.defaultProps = {
  tags: [],
  links: {},
  className: '',
};

export default ProjectCard;
