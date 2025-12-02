import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import StatCard from '@/components/StatCard';
import ProjectCard from '@/components/ProjectCard';

/**
 * Home Page - Sabbir Hossain's Portfolio
 * 
 * Features:
 * - Hero section with animated gradient text
 * - Stats grid showcasing key achievements
 * - Featured projects with tech stack tags
 * - Scroll-triggered fade-in animations
 */

// Stats data
const STATS_DATA = [
  {
    icon: '💼',
    value: '2024',
    label: 'Joined Bell Canada',
  },
  {
    icon: '🎓',
    value: '3.96',
    label: 'Major GPA',
  },
  {
    icon: '📊',
    value: '750+ TB',
    label: 'Data Processed',
  },
  {
    icon: '🚀',
    value: '800%',
    label: 'Coverage Optimization',
  },
];

// Featured projects data
const PROJECTS_DATA = [
  {
    icon: '🔮',
    title: 'NTS Platform Pipeline',
    description: 'Mission-critical data integration pipeline at Bell Canada, processing network service tickets and enabling real-time analytics for operations teams. Resolved major data quality issues affecting thousands of records.',
    tags: ['Python', 'SAS DI', 'SQL', 'ETL', 'Data Pipelines'],
    links: {
      // repo: 'https://github.com/itssabbir/nts-pipeline',
    },
  },
  {
    icon: '🧬',
    title: 'Anomaly Detection System',
    description: 'Full-stack anomaly detection system built with React, Node.js, and PyTorch. Processes time-series data to identify outliers using deep learning. Completed independently in 2 weeks.',
    tags: ['React', 'Node.js', 'PyTorch', 'ML', 'REST API'],
    links: {
      repo: 'https://github.com/itssabbir/anomaly-detection',
      demo: 'https://anomaly-demo.vercel.app',
    },
  },
  {
    icon: '🚀',
    title: 'Genomics Data Pipeline',
    description: 'Distributed data processing pipeline for analyzing large-scale genomics datasets (750+ TB). Implemented efficient algorithms for sequence alignment and variant calling at scale.',
    tags: ['Python', 'Apache Spark', 'AWS', 'Bioinformatics'],
    links: {
      repo: 'https://github.com/itssabbir/genomics-pipeline',
    },
  },
];

// Social links data
const SOCIAL_LINKS = [
  {
    href: 'https://github.com/itssabbir',
    icon: 'fab fa-github',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/itssabbir',
    icon: 'fab fa-linkedin-in',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:hossain.sabbir17@gmail.com',
    icon: 'fas fa-envelope',
    label: 'Email',
  },
  {
    href: '/resume.pdf',
    icon: 'fas fa-file-alt',
    label: 'Resume',
  },
];

export default function HomePage() {
  // Set up IntersectionObserver for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <Layout
      title="Sabbir Hossain | Data Engineer & Platform Architect"
      description="Data Engineer at Bell Canada specializing in scalable data infrastructure, distributed systems, and platform engineering."
    >
      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            {/* Badges */}
            <div className="hero-badges">
              <div className="hero-badge availability">
                <div className="status-dot" />
                <span>Available for Hire</span>
              </div>
              <div className="hero-badge">
                <i className="fas fa-map-marker-alt" />
                <span>Toronto, Canada</span>
              </div>
              <div className="hero-badge">
                <i className="fas fa-plane" />
                <span>Open to Relocation (USA)</span>
              </div>
            </div>

            {/* Greeting */}
            <p className="hero-greeting">
              <i className="fas fa-hand-sparkles" /> Hi, I'm
            </p>

            {/* Title */}
            <h1 className="hero-title">
              <span className="gradient-text">Sabbir Hossain</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              <span className="highlight">Data Engineer</span> &{' '}
              <span className="highlight">Platform Architect</span> building
              scalable data infrastructure at Bell Canada. Passionate about
              distributed systems, platform engineering, and solving complex
              data challenges.
            </p>

            {/* CTA Buttons */}
            <div className="btn-group">
              <Link href="#contact" className="btn btn-primary">
                <i className="fas fa-paper-plane" />
                Get In Touch
              </Link>
              <Link href="#projects" className="btn btn-secondary">
                <i className="fas fa-code" />
                View My Work
              </Link>
            </div>

            {/* Social Links */}
            <div className="social-links">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-link"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  title={link.label}
                  aria-label={link.label}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="section" id="stats">
        <div className="container">
          <div className="stats-grid">
            {STATS_DATA.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS SECTION ===== */}
      <section className="section" id="projects">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-label">
              <i className="fas fa-laptop-code" />
              Featured Work
            </div>
            <h2 className="section-title">Projects</h2>
            <p className="section-description">
              Showcasing technical expertise through real-world applications
              and data engineering solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard
                key={index}
                icon={project.icon}
                title={project.title}
                description={project.description}
                tags={project.tags}
                links={project.links}
              />
            ))}
          </div>

          {/* View All Projects Link */}
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link href="/projects" className="btn btn-secondary">
              <i className="fas fa-arrow-right" />
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET SECTION ===== */}
      <section className="section" id="about-snippet">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <i className="fas fa-user-circle" />
              About Me
            </div>
            <h2 className="section-title">Who I Am</h2>
          </div>

          <div className="about-snippet-section">
            <div className="about-content fade-in">
              {/* TLDR Box */}
              <div className="tldr-box">
                <div className="tldr-header">
                  <i className="fas fa-bolt" />
                  <h4>TL;DR</h4>
                </div>
                <div className="tldr-content">
                  <ul>
                    <li>Data Engineer at Bell Canada (NTS Platform)</li>
                    <li>UofT Graduate (3.96 Major GPA) in Bioinformatics & CS</li>
                    <li>Expanded data coverage by 800%, optimized queries by 83%</li>
                    <li>Expert in Python, SQL, distributed systems, cloud platforms</li>
                    <li>Open to Staff/Principal-level platform engineering roles</li>
                  </ul>
                </div>
              </div>

              <p>
                I'm a <strong>Data Engineer</strong> at Bell Canada, where I architect
                and productionize mission-critical data pipelines on the Network
                Ticket Service (NTS) Platform. With a background in computational
                biology and bioinformatics from the University of Toronto, I bring
                a unique perspective to data engineering challenges.
              </p>

              <p>
                My journey spans from working with massive genomics datasets (750+ TB)
                in research to building enterprise-scale data infrastructure. I'm
                passionate about <strong>platform engineering</strong>,{' '}
                <strong>distributed systems</strong>, and creating elegant solutions
                to complex technical problems.
              </p>

              <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
                <Link href="/about" className="btn btn-secondary">
                  <i className="fas fa-user" />
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS HIGHLIGHT SECTION ===== */}
      <section className="section" id="skills-preview">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <i className="fas fa-tools" />
              Technical Arsenal
            </div>
            <h2 className="section-title">Core Skills</h2>
            <p className="section-description">
              Tools and technologies I work with to build robust solutions
            </p>
          </div>

          <div className="skills-grid">
            {/* Languages */}
            <div className="skill-category fade-in">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <i className="fas fa-code" />
                </div>
                <h3 className="skill-category-title">Languages</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item">
                  <i className="devicon-python-plain colored" /> Python
                </span>
                <span className="skill-item">
                  <i className="fas fa-database" /> SQL
                </span>
                <span className="skill-item">
                  <i className="devicon-javascript-plain colored" /> JavaScript
                </span>
                <span className="skill-item">
                  <i className="devicon-java-plain colored" /> Java
                </span>
                <span className="skill-item">
                  <i className="devicon-bash-plain" /> Bash
                </span>
              </div>
            </div>

            {/* Data Engineering */}
            <div className="skill-category fade-in">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <i className="fas fa-stream" />
                </div>
                <h3 className="skill-category-title">Data Engineering</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item">
                  <i className="devicon-apachespark-plain" /> Spark
                </span>
                <span className="skill-item">
                  <i className="devicon-apachekafka-plain" /> Kafka
                </span>
                <span className="skill-item">
                  <i className="fas fa-wind" /> Airflow
                </span>
                <span className="skill-item">
                  <i className="fas fa-exchange-alt" /> ETL/ELT
                </span>
                <span className="skill-item">
                  <i className="fas fa-database" /> SAS DI
                </span>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="skill-category fade-in">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <i className="fas fa-cloud" />
                </div>
                <h3 className="skill-category-title">Cloud & DevOps</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item">
                  <i className="devicon-amazonwebservices-plain-wordmark" /> AWS
                </span>
                <span className="skill-item">
                  <i className="devicon-docker-plain colored" /> Docker
                </span>
                <span className="skill-item">
                  <i className="devicon-kubernetes-plain" /> Kubernetes
                </span>
                <span className="skill-item">
                  <i className="devicon-terraform-plain" /> Terraform
                </span>
                <span className="skill-item">
                  <i className="fas fa-infinity" /> CI/CD
                </span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link href="/skills" className="btn btn-secondary">
              <i className="fas fa-cogs" />
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA / CONTACT SECTION ===== */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-cta fade-in">
            <h3>Let's Build Something Amazing</h3>
            <p>
              I'm actively seeking opportunities in platform engineering and data
              infrastructure. Whether you want to discuss system architecture,
              data pipelines, or potential collaborations—I'd love to hear from you.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <a
                href="mailto:hossain.sabbir17@gmail.com"
                className="btn btn-primary"
              >
                <i className="fas fa-envelope" />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/itssabbir"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
