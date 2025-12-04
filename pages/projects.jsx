// --- pages/projects.jsx ---
import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  // Fade-in Animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // --- Professional Projects ---
  const professionalProjects = [
    {
      title: "NTS/MS Archway Pipeline",
      description: "End-to-end ETL pipeline integrating 4 enterprise data sources (SmartPath API, Maximo, IPACT, LDAP) into unified Control Plan reporting. 3-tier architecture (Staging → Jarvis → Analysis) processing 150,000+ records in ~20 minutes with schema-versioned loads across DEV/QA/PROD environments.",
      tags: ['Python', 'SQL', 'SAS DI', 'Teradata', 'ETL', 'Data Warehousing'],
      icon: "🔮",
      company: "Bell Canada"
    },
    {
      title: "Duration Calculation Engine",
      description: "Stateful Python algorithm computing 3 distinct duration metrics (d1, d2, d3) measuring agent work cycles. Refactored flawed sequential method into robust two-pass group-by propagation model using pandas shift operations with bfill/ffill propagation. Achieved zero calculation defects in QA validation.",
      tags: ['Python', 'Pandas', 'Algorithm Design', 'Data Engineering'],
      icon: "⏱️",
      company: "Bell Canada"
    },
    {
      title: "Data Quality Recovery System",
      description: "Full-stack Root Cause Analysis (RCA) diagnosing systemic data integrity drift from misaligned filtration invariant. Executed three staged historical recasts correcting 78,000+ edge-case records, expanding analytical coverage from 1 to 9+ months (+800%) and raising ticket match accuracy to highest level since system inception.",
      tags: ['SQL', 'Data Quality', 'Root Cause Analysis', 'ETL'],
      icon: "🔍",
      company: "Bell Canada"
    },
    {
      title: "Query Optimization Framework",
      description: "Re-architected critical performance anti-pattern by replacing direct join to 23-million-row live table with pre-aggregated static reference design. Reduced query runtime from 12 minutes to 2 minutes (83% improvement) and stabilized nightly SLA compliance.",
      tags: ['SQL', 'Performance Tuning', 'Data Modeling', 'Optimization'],
      icon: "⚡",
      company: "Bell Canada"
    },
    {
      title: "Data Consolidation Layer",
      description: "Built transformation logic to consolidate and standardize values from four different source systems using COALESCE waterfall patterns. Fixed 80,000 product discrepancies through proper source table usage and created unified customer name, product, and ticket number fields.",
      tags: ['SQL', 'Data Integration', 'ETL', 'Business Logic'],
      icon: "🔗",
      company: "Bell Canada"
    },
    {
      title: "Bioinformatics Platform",
      description: "Open-source full-stack bioinformatics platform following SOLID principles and microservices architecture. Features interactive D3.js visualizations, R Shiny dashboards, and real-time WebSocket data streaming. Reduced genomic analysis load times by 83% and increased platform adoption across 100+ global researchers.",
      tags: ['React', 'D3.js', 'R Shiny', 'Python', 'Docker', 'Microservices'],
      icon: "🧬",
      links: { repo: 'https://github.com/itssabbir' },
      company: "Johns Hopkins"
    },
    {
      title: "Multi-Omics Data Pipeline",
      description: "Scalable data processing pipeline integrating 750+ TB of multi-omics Big Data from DISQOVER, ENCODE, PCAWG, PRIDE, and TCGA. Implemented ML models (SVM-RFE, Random Forests) on HPC infrastructure contributing to discovery of 8 novel biomarkers and accelerating validation timelines by 40%.",
      tags: ['Python', 'R', 'Spark', 'AWS', 'Machine Learning', 'HPC'],
      icon: "🔬",
      company: "Johns Hopkins"
    },
    {
      title: "Anomaly Detection System",
      description: "Automated data quality and anomaly detection pipelines integrating unsupervised ML (K-Means, DBSCAN) and rule-based heuristics. Integrated into ETL and CI/CD workflows to flag real-time anomalies, boosting data integrity by 30% across large datasets.",
      tags: ['Python', 'Scikit-learn', 'TensorFlow', 'CI/CD'],
      icon: "🎯",
      company: "Johns Hopkins"
    }
  ];

  // --- Personal / Open Source Projects ---
  const personalProjects = [
    {
      title: "Microbiome Explorer",
      description: "Interactive visualization platform for exploring microbial community data with taxonomic profiling, diversity analysis, and comparative metagenomics tools. Built with React frontend and Python backend for processing 16S rRNA sequencing data.",
      tags: ['React', 'D3.js', 'Python', 'Bioinformatics', 'Data Visualization'],
      icon: "🦠",
      links: { repo: 'https://github.com/itssabbir/microbiome-explorer' }
    },
    {
      title: "Portfolio Website",
      description: "This cyberpunk-inspired portfolio built with Next.js featuring animated canvas backgrounds with floating symbols, custom cursor with lerp interpolation, glassmorphism design system, and responsive layout. Showcases projects, skills, and experience.",
      tags: ['Next.js', 'React', 'CSS', 'Canvas API', 'Animation'],
      icon: "🚀",
      links: { 
        repo: 'https://github.com/itssabbir/itssabbir.github.io',
        demo: 'https://itssabbir.github.io'
      }
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web application for visualizing sorting algorithms, pathfinding algorithms, and data structures. Features step-by-step execution, speed controls, and custom input generation for educational purposes.",
      tags: ['React', 'TypeScript', 'Algorithms', 'Education', 'Canvas'],
      icon: "📊",
      links: { repo: 'https://github.com/itssabbir' }
    },
    {
      title: "SQL Query Optimizer Tool",
      description: "Command-line tool for analyzing SQL query execution plans and suggesting optimizations. Parses EXPLAIN output, identifies common anti-patterns, and recommends index strategies.",
      tags: ['Python', 'SQL', 'CLI', 'Performance'],
      icon: "🛠️",
      links: { repo: 'https://github.com/itssabbir' }
    }
  ];

  // Reusable ProjectCard with company tag
  const renderProjectCard = (project, idx) => (
    <ProjectCard 
      key={idx}
      title={
        project.company 
          ? <>
              {project.title}
              <span style={{ 
                display: 'block',
                fontSize: '0.9rem', 
                color: 'var(--accent-secondary, #D4AF37)',
                fontWeight: '500',
                marginTop: '0.25rem'
              }}>@ {project.company}</span>
            </>
          : project.title
      }
      description={project.description}
      tags={project.tags}
      icon={project.icon}
      links={project.links}
    />
  );

  return (
    <>
      <Head>
        <title>Projects | Sabbir Hossain</title>
        <meta
          name="description"
          content="Featured projects by Sabbir Hossain including data pipelines, ETL systems, bioinformatics platforms, and open-source tools."
        />
      </Head>
      
      {/* Page Header */}
      <div className="container page-heading-container" style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
          <span className="gradient-text">Projects</span>
        </h1>
        <p style={{ margin: '0 auto', maxWidth: '700px', color: 'var(--text-secondary)' }}>
          A collection of production systems, data pipelines, and open-source tools I&apos;ve built.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/#projects" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
        </div>
        <hr className="break-section" style={{ marginTop: '2rem' }} />
      </div>

      {/* Professional Projects Section */}
      <section className="section" id="professional-projects" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label"><i className="fas fa-briefcase"></i> Professional Work</div>
            <h2 className="section-title">Enterprise & Research Projects</h2>
            <p className="section-description">Production systems built at Bell Canada, Johns Hopkins, and other organizations</p>
          </div>

          <div className="projects-grid fade-in">
            {professionalProjects.map(renderProjectCard)}
          </div>
        </div>
      </section>

      <hr className="break-section" />

      {/* Personal / Open Source Projects Section */}
      <section className="section" id="personal-projects">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label"><i className="fab fa-github"></i> Open Source</div>
            <h2 className="section-title">Personal & Open Source Projects</h2>
            <p className="section-description">Side projects, tools, and contributions to the developer community</p>
          </div>

          <div className="projects-grid fade-in">
            {personalProjects.map(renderProjectCard)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="contact-cta fade-in">
            <h3>Want to Collaborate?</h3>
            <p>I&apos;m always interested in working on challenging data engineering and platform projects.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <a href="https://github.com/itssabbir" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View GitHub
              </a>
              <a href="mailto:hossain.sabbir17@gmail.com" className="btn btn-primary">
                <i className="fas fa-envelope"></i> Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;