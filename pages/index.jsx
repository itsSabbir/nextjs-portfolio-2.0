// --- pages/index.jsx ---
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import StatCard from '../components/StatCard';

export default function Home() {
  const [totalExperience, setTotalExperience] = useState({ years: 0, months: 0 });
  const [streak, setStreak] = useState(0);
  
  // Experience & Streak Calculations
  useEffect(() => {
    const now = new Date();

    // Combined Experience Calculation
    // Research: Sept 2019 - May 2025 (capped)
    // Industry: June 2025 - Present
    const researchStart = new Date('2019-09-01');
    const industryStart = new Date('2025-06-01');
    
    // Calculate research duration (capped at May 2025)
    const researchEnd = new Date('2025-05-31');
    const researchMs = researchEnd - researchStart;
    
    // Calculate industry duration (from June 2025 to now)
    let industryMs = 0;
    if (now >= industryStart) {
      industryMs = now - industryStart;
    }
    
    // Total experience in months
    const totalMs = researchMs + industryMs;
    const totalMonths = Math.floor(totalMs / (1000 * 60 * 60 * 24 * 30.44));
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    setTotalExperience({ years, months });
    
    // Streak Calculation
    const streakStart = new Date('2024-05-16');
    streakStart.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = today - streakStart;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setStreak(Math.max(0, diffDays));
  }, []);

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

  // --- Skills Data Configuration ---
  const skillsCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      skills: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "R", icon: "devicon-r-plain colored" },
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "Bash", icon: "devicon-bash-plain" }
      ]
    },
    {
      title: "Data & ML",
      icon: "fas fa-brain",
      skills: [
        { name: "Pandas", icon: "devicon-pandas-original colored" },
        { name: "PyTorch", icon: "devicon-pytorch-plain colored" },
        { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
        { name: "Scikit-learn", icon: "devicon-python-plain" },
        { name: "Apache Spark", icon: "devicon-apachespark-plain colored" },
        { name: "Kafka", icon: "devicon-apachekafka-plain" },
        { name: "Airflow", icon: "fas fa-wind" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      skills: [
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
        { name: "Terraform", icon: "devicon-terraform-plain colored" },
        { name: "Jenkins", icon: "devicon-jenkins-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "Linux", icon: "devicon-linux-plain" }
      ]
    },
    {
      title: "Web & Databases",
      icon: "fas fa-layer-group",
      skills: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-original" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "Redis", icon: "devicon-redis-plain colored" },
        { name: "GraphQL", icon: "devicon-graphql-plain colored" }
      ]
    },
    {
      title: "Analytics & Visualization",
      icon: "fas fa-chart-bar",
      skills: [
        { name: "D3.js", icon: "devicon-d3js-plain colored" },
        { name: "Tableau", icon: "fas fa-chart-pie" },
        { name: "Power BI", icon: "fas fa-chart-line" },
        { name: "Jupyter", icon: "devicon-jupyter-plain colored" },
        { name: "Excel", icon: "fas fa-file-excel" },
        { name: "Confluence", icon: "devicon-confluence-plain colored" }
      ]
    },
    {
      title: "Methodology & Tools",
      icon: "fas fa-tasks",
      skills: [
        { name: "Jira", icon: "devicon-jira-plain colored" },
        { name: "Agile", icon: "fas fa-sync-alt" },
        { name: "Scrum", icon: "fas fa-users" },
        { name: "Kanban", icon: "fas fa-columns" },
        { name: "CI/CD", icon: "fas fa-infinity" },
        { name: "TDD", icon: "fas fa-vial" }
      ]
    }
  ];

  // --- Industry Experience Data ---
  const industryExperiences = [
    {
      title: "Data Engineer",
      company: "Bell Canada",
      period: "Jun 2025 - Present",
      description: "Building and owning the NTS/MS Archway data pipeline for Bell's Network Ticket Service platform, under the Bell Business Markets umbrella serving enterprise and small business customers.",
      highlights: [
        "Expanded analytical coverage from 1 to 9+ months through systematic root cause analysis",
        "Recovered 28,000+ missing records by diagnosing upstream data integrity drift",
        "Consolidated 4 enterprise data sources into a unified reporting layer"
      ],
      link: "/experiences#bell-canada"
    }
  ];

  // --- Research Experience Data ---
  const researchExperiences = [
    {
      title: "Bioinformatics Research Assistant",
      company: "Johns Hopkins University",
      period: "Sept 2022 - Present",
      description: "Cross-institutional oncology research integrating 750+ TB of multi-omics data across 3 cancer types. This role grew out of my work at UofT.",
      highlights: [
        "Selected as 1 of 12 plenary speakers from 5,000+ applicants at Harvard NCRC",
        "Won Best Oral Presentation at ABRCMS 2023 and Best Poster at ABRCMS 2024",
        "Contributed to identification of 8 novel biomarker candidates"
      ],
      link: "/experiences#johns-hopkins"
    },
    {
      title: "Software Development Research Assistant",
      company: "University of Toronto",
      period: "Sept 2019 – Apr 2024",
      description: "Where my research career began. Built full-stack bioinformatics platforms automating workflows across 7 wet lab teams, which led to the Johns Hopkins collaboration.",
      highlights: [
        "Eliminated 30+ hours of manual work weekly for researchers",
        "Created containerized environments that cut onboarding from days to hours"
      ],
      link: "/experiences#u-of-t-research"
    }
  ];

  // --- Projects Data ---
  const projects = [
    {
      title: "NTS/MS Archway Pipeline",
      description: "End-to-end ETL pipeline integrating 4 enterprise data sources into unified Control Plan reporting. 3-tier architecture processing 150,000+ records in ~20 minutes.",
      tags: ['Python', 'SQL', 'SAS DI', 'Teradata', 'ETL'],
      icon: "🔮",
      company: "Bell Canada"
    },
    {
      title: "Duration Calculation Engine",
      description: "Stateful Python algorithm computing 3 distinct duration metrics measuring agent work cycles. Two-pass group-by propagation model with zero calculation defects.",
      tags: ['Python', 'Pandas', 'Algorithm Design'],
      icon: "⏱️",
      company: "Bell Canada"
    },
    {
      title: "Data Quality Recovery System",
      description: "Full-stack RCA diagnosing systemic data integrity drift. Staged recasts correcting 78,000+ records, expanding analytical coverage by 800%.",
      tags: ['SQL', 'Data Quality', 'Root Cause Analysis'],
      icon: "🔍",
      company: "Bell Canada"
    },
    {
      title: "Microbiome Explorer",
      description: "Interactive visualization platform for exploring microbial community data with taxonomic profiling, diversity analysis, and comparative metagenomics tools.",
      tags: ['React', 'D3.js', 'Python', 'Bioinformatics'],
      icon: "🦠",
      links: { repo: 'https://github.com/itsSabbir/MicrobiomeExplorer' }
    },
    {
      title: "Bioinformatics Platform",
      description: "Open-source full-stack bioinformatics platform with interactive D3.js visualizations, R Shiny dashboards, and real-time WebSocket data streaming. Private deployment at Johns Hopkins.",
      tags: ['React', 'D3.js', 'R Shiny', 'Python', 'Docker'],
      icon: "🧬",
      links: { repo: 'https://github.com/itsSabbir' },
      company: "Johns Hopkins"
    },
    {
      title: "Portfolio Website",
      description: "This cyberpunk-inspired portfolio built with Next.js featuring animated backgrounds, custom cursor, and glassmorphism design.",
      tags: ['Next.js', 'React', 'CSS', 'Canvas API'],
      icon: "🚀",
      links: { 
        repo: 'https://github.com/itsSabbir/nextjs-portfolio-2.0',
        demo: 'https://sabbir.ca'
      }
    }
  ];

  // Reusable component for work auth checkmark items
  const CheckItem = ({ children }) => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'flex-start',
      gap: '10px',
      lineHeight: '1.4',
      textAlign: 'left'
    }}>
      <i 
        className="fas fa-check-circle" 
        style={{ 
          color: 'var(--accent-secondary, #D4AF37)',
          flexShrink: 0,
          marginTop: '3px'
        }}
      ></i>
      <span>{children}</span>
    </div>
  );

  return (
    <>
      <Head>
        <title>Sabbir Hossain | Data Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of Sabbir Hossain, Data Engineer at Bell Canada with research background from Johns Hopkins and University of Toronto." />
      </Head>

      {/* ========================================= */}
      {/* 1. INTRO (Hero)                           */}
      {/* ========================================= */}
      <section className="hero" id="home" style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="container">
          <div className="hero-content" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            width: '100%', 
            margin: '0 auto' 
          }}>
            
            {/* Profile Picture with Shooting Stars */}
            <div className="hero-image-wrapper fade-in" style={{ marginBottom: '2rem' }}>
              
              {/* The Image */}
              <img 
                src="/profile_pic.jpeg" 
                alt="Sabbir Hossain" 
                className="profile-img"
                style={{ 
                  width: '220px', 
                  height: '220px', 
                  borderRadius: '50%', 
                  border: '4px solid var(--accent-secondary)',
                  boxShadow: '0 10px 40px var(--glow-gold)',
                  position: 'relative', 
                  zIndex: 2,
                  background: '#000' // Prevents seeing stars through transparent parts of image if any
                }} 
              />

              {/* The Stars Loop */}
              {/* Generates 12 stars, rotates them 30 degrees apart (360 / 12) */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="star-particle"
                  style={{ '--angle': `${i * 30}deg` }}
                >
                  ✦
                </div>
              ))}
              
            </div>

            {/* Greeting */}
            <div className="hero-greeting fade-in" style={{ 
              fontSize: '1.5rem', 
              marginBottom: '0.5rem',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '10px'
            }}>
              <span>👋 Hi, I&apos;m</span>
            </div>

            <h1 className="hero-title fade-in" style={{ 
              marginBottom: '1rem', 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              lineHeight: '1.1'
            }}>
              <span className="gradient-text">Sabbir Hossain</span>
            </h1>

            <p className="hero-subtitle fade-in" style={{ maxWidth: '800px', margin: '0 auto 2rem auto', fontSize: '1.2rem' }}>
              <span className="gradient-text">Data Engineer</span> at <span className="gradient-text">Bell Canada</span> building scalable data infrastructure. 
              <br className="mobile-only" /> Former bioinformatics researcher at <span className="gradient-text">Johns Hopkins</span> and <span className="gradient-text">University of Toronto</span>. Harvard NCRC Plenary Speaker, back-to-back ASM ABRCMS award winner.
            </p>

            {/* Badges */}
            <div className="hero-badges fade-in" style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '10px', 
              marginBottom: '2.5rem',
              width: '100%' 
            }}>
              <div className="hero-badge availability">
                <div className="status-dot"></div>
                <span>Available for Hire</span>
              </div>
              <div className="hero-badge">
                <span>🇨🇦 Citizen</span>
              </div>
              <div className="hero-badge">
                <i className="fas fa-map-marker-alt"></i>
                <span>Toronto, Canada</span>
              </div>
              <div className="hero-badge">
                <i className="fas fa-plane"></i>
                <span>Open to Relocation (USA)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="btn-group fade-in" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                Get In Touch
              </a>
              <Link href="/experiences" className="btn btn-secondary">
                <i className="fas fa-file-alt"></i>
                Full Experience
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                <i className="fas fa-laptop-code"></i>
                My Projects
              </Link>
            </div>

            {/* Social Links */}
            <div className="social-links fade-in" style={{ justifyContent: 'center' }}>
              <a href="https://github.com/itssabbir" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/itssabbir" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:hossain.sabbir17@gmail.com" className="social-link" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="/1SabbirHossain.pdf" className="social-link" title="Resume" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-pdf"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. WHO I AM (About + TLDR + Exec Summary) */}
      {/* ========================================= */}
      <section className="section" id="about" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Who I Am</h2>
          </div>

          <div className="about-content fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Intro Paragraph */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Data Engineer with a Research Background</h3>

              {/* ========================================= */}
              {/* EXECUTIVE SUMMARY SECTION                 */}
              {/* ========================================= */}
              <div className="executive-summary fade-in" style={{
                maxWidth: '950px',
                margin: '0 auto 3rem auto',
                background: 'linear-gradient(135deg, rgba(174, 0, 1, 0.08), rgba(212, 175, 55, 0.08))',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '16px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center'
              }}>
                {/* Decorative corner accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, transparent 50%, rgba(212, 175, 55, 0.1) 50%)',
                  pointerEvents: 'none'
                }}></div>

                {/* Section Header */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '10px',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <i className="fas fa-chart-line" style={{ color: 'var(--accent-secondary)', fontSize: '1.25rem' }}></i>
                  <span style={{ 
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.15em',
                    color: 'var(--accent-secondary)'
                  }}>Executive Summary</span>
                </div>

                {/* Three Column Info Grid */}
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  {/* Current Role */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    borderLeft: '3px solid var(--accent-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.5rem'
                    }}>Current Role</div>
                    <div style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>Data Engineer @ Bell Canada</div>
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4'
                    }}>BBM Division • DE/AI Team • NTS Platform Owner</div>
                  </div>

                  {/* Research Background */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    borderLeft: '3px solid var(--accent-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.5rem'
                    }}>Research Background</div>
                    <div style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>5+ Years Across 3 Institutions</div>
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4'
                    }}>Johns Hopkins • UofT • 750+ TB Multi-Omics Data</div>
                  </div>

                  {/* Education */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    borderLeft: '3px solid var(--accent-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.5rem'
                    }}>Education</div>
                    <div style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>UofT Honours BSc • 3.96 GPA</div>
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4'
                    }}>CS + Bioinformatics Specialist • Immunology Minor</div>
                  </div>
                </div>

                {/* Notable Achievements */}
                <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem'
                  }}>Notable Achievements</div>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem',
                    justifyContent: 'center'
                  }}>
                    {[
                      { label: 'Harvard Plenary Speaker', detail: '1 of 12 / 5,000+', icon: '🎤' },
                      { label: 'ABRCMS Best Oral', detail: '2023', icon: '🏆' },
                      { label: 'ABRCMS Best Poster', detail: '2024', icon: '🏆' },
                      { label: '78K+ Records Recovered', detail: 'Bell Canada', icon: '📊' },
                      { label: '83% Query Optimization', detail: 'Performance', icon: '⚡' },
                      { label: '8 Novel Biomarkers', detail: 'Research', icon: '🧬' }
                    ].map((item, idx) => (
                      <span key={idx} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '0.5rem 0.85rem',
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '9999px',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        whiteSpace: 'nowrap'
                      }}>
                        <span>{item.icon}</span>
                        <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{item.label}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Competencies */}
                <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem'
                  }}>Core Competencies</div>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.4rem',
                    justifyContent: 'center'
                  }}>
                    {[
                      'Data Engineering', 'ETL/ELT Pipelines', 'Data Warehousing', 
                      'SQL Optimization', 'Python', 'Distributed Systems',
                      'Cloud (AWS/GCP)', 'CI/CD', 'Machine Learning', 'Research & Documentation'
                    ].map((skill, idx) => (
                      <span key={idx} style={{
                        padding: '0.35rem 0.7rem',
                        background: 'rgba(174, 0, 1, 0.1)',
                        border: '1px solid rgba(174, 0, 1, 0.25)',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)'
                      }}>{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Job Search Status */}
                <div style={{
                  background: 'rgba(212, 175, 55, 0.08)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '10px',
                  padding: '1rem 1.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#22c55e',
                      boxShadow: '0 0 8px #22c55e',
                      animation: 'pulse 2s infinite'
                    }}></div>
                    <span style={{ 
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: 'var(--accent-secondary)'
                    }}>Actively Seeking Opportunities</span>
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                  }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Target Roles:</strong> Data Engineering • Platform Engineering • Software Engineering
                  </div>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--text-muted)',
                    marginTop: '0.5rem'
                  }}>
                    🇨🇦 Canadian Citizen • 🇺🇸 TN Visa Eligible (No Sponsorship Required) • Open to Relocation
                  </div>
                </div>
              </div>
              {/* END EXECUTIVE SUMMARY */}

              {/* TL;DR BOX */}
              <div className="tldr-box" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <div className="tldr-header" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '12px',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-bolt" style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem' }}></i>
                  <h4 style={{ margin: 0 }}>TL;DR</h4>
                  <i className="fas fa-bolt" style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem' }}></i>
                </div>
                <div className="tldr-content">
                  <ul style={{ display: 'inline-block', textAlign: 'left' }}>
                    <li>Data Engineer at Bell Canada (BBM — DE/AI), owning production ETLs and analytical systems on NTS — a multi-team, cross-functional platform</li>
                    <li>Build and maintain data infrastructure, dashboards, visualization layers, and business-critical insights used by multiple internal teams</li>
                    <li>University of Toronto Honours BSc (3.96 Major GPA) — CS + Bioinformatics Specialist</li>
                    <li>Harvard plenary speaker (1 of 12 from 5,000+ applicants)</li>
                    <li> ABRCMS Best Detailed Oral & Best Poster Award Winner (top researcher in division)</li>
                    <li>5+ years research across University of Toronto and Johns Hopkins</li>
                    <li>Looking for Data, Platform, or Software Engineering roles</li>
                  </ul>
                </div>
              </div>

              <p style={{ margin: '0 auto 1.5rem auto', maxWidth: '800px', textAlign: 'left' }}>
                I&apos;m a <span className="gradient-text">Data Engineer</span> at <span className="gradient-text">Bell Canada</span> under the <span className="gradient-text">Bell Business Markets (BBM) </span> division, within the <span className="gradient-text">Data Engineering and Artificial Intelligence Team (DE/AI) </span>
                where I architect and productionize mission-critical data pipelines on the Network Ticket Service (NTS) Platform. Before going full-time in industry, 
                I spent 5+ years in computational biology research. I graduated from the <span className="gradient-text">University of Toronto</span> (St. George Campus) 
                with a 3.96 major GPA in <span className="gradient-text">Bioinformatics</span> and <span className="gradient-text">Computer Science</span>.
              </p>
              <p style={{ margin: '0 auto 1.5rem auto', maxWidth: '800px', textAlign: 'left' }}>
                My research at <span className="gradient-text">UofT</span> led me to cross-institutional work with <span className="gradient-text">Johns Hopkins</span>, 
                and eventually to present at <span className="gradient-text">Harvard</span> — where I was selected as 1 of 12 plenary speakers from 5,000+ applicants. 
                I won best presentation awards at ABRCMS in back-to-back years. Along the way, I processed 750+ TB of multi-omics data and realized that 
                <span className="gradient-text"> data engineering</span> is where I belong — building the infrastructure that makes insights possible.
              </p>
              <p style={{ margin: '0 auto 1.5rem auto', maxWidth: '800px', textAlign: 'left' }}>
                Data engineering sits at the intersection of software engineering and data science, and I love that. I care about distributed systems, 
                platform engineering, data infrastructure, and creating elegant solutions to complex technical problems. Now I apply that same rigor 
                from research to building enterprise-scale systems.
              </p>
            </div>

            {/* Work Auth - CENTERED CONTENT */}
            <div className="work-auth-container fade-in" style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              flexWrap: 'wrap',
              marginBottom: '3rem' 
            }}>
              {/* Canada Card */}
              <div className="work-auth-card" style={{
                background: 'var(--glass-bg, rgba(15, 23, 42, 0.8))',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border, rgba(212, 175, 55, 0.2))',
                borderRadius: '16px',
                padding: '2rem',
                minWidth: '320px',
                maxWidth: '400px',
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                {/* Flag + Country Name Row */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '12px',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>🇨🇦</span>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: '1.8rem', 
                    color: 'var(--accent-secondary, #D4AF37)',
                    fontWeight: '700'
                  }}>Canada</h3>
                </div>
                
                {/* Subtitle */}
                <div style={{ 
                  textAlign: 'center', 
                  color: 'var(--text-secondary, #94a3b8)',
                  fontSize: '0.95rem',
                  marginBottom: '1.5rem'
                }}>
                  Current Location
                </div>
                
                {/* Details - Centered container with left-aligned text */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.75rem',
                  width: 'fit-content'
                }}>
                  <CheckItem>🇨🇦 Citizen</CheckItem>
                  <CheckItem>Based in Toronto, ON</CheckItem>
                  <CheckItem>NEXUS Card Holder</CheckItem>
                </div>
              </div>

              {/* United States Card */}
              <div className="work-auth-card" style={{
                background: 'var(--glass-bg, rgba(15, 23, 42, 0.8))',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border, rgba(212, 175, 55, 0.2))',
                borderRadius: '16px',
                padding: '2rem',
                minWidth: '320px',
                maxWidth: '400px',
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                {/* Flag + Country Name Row */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '12px',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>🇺🇸</span>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: '1.8rem', 
                    color: 'var(--accent-secondary, #D4AF37)',
                    fontWeight: '700'
                  }}>United States</h3>
                </div>
                
                {/* Subtitle */}
                <div style={{ 
                  textAlign: 'center', 
                  color: 'var(--text-secondary, #94a3b8)',
                  fontSize: '0.95rem',
                  marginBottom: '1.5rem'
                }}>
                  Open to Relocation
                </div>
                
                {/* Details - Centered container with left-aligned text */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.75rem',
                  width: 'fit-content'
                }}>
                  <CheckItem>TN Visa eligible (No sponsorship or $$$ required)</CheckItem>
                  <CheckItem>Open to H-1B / Green Card sponsorship</CheckItem>
                </div>
              </div>
            </div>

            {/* Interests Grid */}
            <div className="interests-section fade-in" style={{ marginTop: '4rem', textAlign: 'center' }}>
              <h3><i className="fas fa-heart"></i> What I Love</h3>
              <div className="interests-grid" style={{ 
                maxWidth: '900px', 
                margin: '0 auto', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                gap: '1rem',
                justifyItems: 'center'
              }}>
                {[
                  { icon: "🧠", label: "Learning" },
                  { icon: "∞", label: "Mathematics" },
                  { icon: "💻", label: "Coding" },
                  { icon: "🚀", label: "Space" },
                  { icon: "🧬", label: "Bioinformatics" },
                  { icon: "🤝", label: "Mentoring" },
                  { icon: "🍳", label: "Cooking" },
                  { icon: "📚", label: "Reading" },
                  { icon: "🎮", label: "Gaming" },
                  { icon: "🏃", label: "Fitness" }
                ].map((item, index) => (
                  <div key={index} className="interest-tile" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem 0.5rem',
                    width: '100%',
                    height: '100%'
                  }}>
                    <span className="interest-icon">{item.icon}</span>
                    <div className="interest-label" style={{ 
                      marginTop: '0.5rem',
                      wordBreak: 'break-word',
                      hyphens: 'auto'
                    }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. SKILLS SECTION                         */}
      {/* ========================================= */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label"><i className="fas fa-cogs"></i> Technical Proficiency</div>
            <h2 className="section-title">Skills & Tools</h2>
          </div>

          <div className="skills-grid fade-in" style={{ 
            maxWidth: '1100px', 
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            justifyContent: 'center'
          }}>
            {skillsCategories.map((category, idx) => (
              <div key={idx} className="skill-category" style={{ 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                {/* Header - properly centered */}
                <div className="skill-category-header" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  marginBottom: '1rem',
                  width: '100%'
                }}>
                  <div className="skill-category-icon" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="skill-category-title" style={{ margin: 0 }}>{category.title}</h3>
                </div>
                
                {/* Skills list - centered */}
                <div className="skill-list" style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%'
                }}>
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <i className={skill.icon}></i>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. EXPERIENCE HIGHLIGHTS - SPLIT          */}
      {/* ========================================= */}
      <section className="section" id="experience_preview">
        <div className="container">
          <div className="section-header">
            <div className="section-label"><i className="fas fa-briefcase"></i> Career Highlights</div>
            <h2 className="section-title">Experience</h2>
            <p className="section-description">Industry and research roles that shaped how I think about data.</p>
            {/* View All Experiences Link */}
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/experiences" className="btn btn-secondary">
                <i className="fas fa-th-large"></i> View All Experiences
              </Link>
            </div>
          </div>

          {/* Industry Experience */}
          <div style={{ maxWidth: '900px', margin: '0 auto 3rem auto' }}>
            <h3 className="fade-in" style={{ 
              color: 'var(--accent-primary)', 
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '1.4rem'
            }}>
              <i className="fas fa-building"></i> Industry
            </h3>
            <div className="timeline">
              {industryExperiences.map((exp, idx) => (
                <div key={idx} className="timeline-item fade-in">
                  <div className="timeline-header" style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '0.25rem',
                    marginBottom: '1rem'
                  }}>
                    <h3 className="timeline-title" style={{ 
                      margin: 0,
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      color: 'var(--text-primary, #f8fafc)'
                    }}>
                      {exp.title}
                    </h3>
                    <div className="timeline-company" style={{ 
                      fontSize: '1.35rem',
                      color: 'var(--accent-secondary, #D4AF37)',
                      fontWeight: '600'
                    }}>
                      {exp.company}
                    </div>
                    <div className="timeline-period" style={{ 
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary, #94a3b8)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <i className="fas fa-calendar-alt"></i> {exp.period}
                    </div>
                  </div>

                  <div className="timeline-description">
                    <p style={{ marginBottom: '0.75rem' }}>{exp.description}</p>
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul style={{ marginBottom: '1rem' }}>
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    <Link href={exp.link} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                      Read Full Details <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Experience */}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 className="fade-in" style={{ 
              color: 'var(--accent-primary)', 
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '1.4rem'
            }}>
              <i className="fas fa-flask"></i> Research
            </h3>
            <div className="timeline">
              {researchExperiences.map((exp, idx) => (
                <div key={idx} className="timeline-item fade-in">
                  <div className="timeline-header" style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '0.25rem',
                    marginBottom: '1rem'
                  }}>
                    <h3 className="timeline-title" style={{ 
                      margin: 0,
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      color: 'var(--text-primary, #f8fafc)'
                    }}>
                      {exp.title}
                    </h3>
                    <div className="timeline-company" style={{ 
                      fontSize: '1.35rem',
                      color: 'var(--accent-secondary, #D4AF37)',
                      fontWeight: '600'
                    }}>
                      {exp.company}
                    </div>
                    <div className="timeline-period" style={{ 
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary, #94a3b8)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <i className="fas fa-calendar-alt"></i> {exp.period}
                    </div>
                  </div>

                  <div className="timeline-description">
                    <p style={{ marginBottom: '0.75rem' }}>{exp.description}</p>
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul style={{ marginBottom: '1rem' }}>
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    <Link href={exp.link} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                      Read Full Details <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. IMPACT & ACTIVITY (Stats)              */}
      {/* ========================================= */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Impact & Activity</h2>
          </div>

          {/* Unified Container: Using Flexbox to center the odd-numbered card automatically */}
          <div className="stats-grid fade-in" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1.5rem',
            marginBottom: '3rem' 
          }}>
            
            {/* Combined Experience Tile */}
            <StatCard 
              icon="📊" 
              value={`${totalExperience.years} yrs ${totalExperience.months} mo`} 
              label="Research + Industry" 
            />
            <StatCard icon="💾" value="750+ TB" label="Data Processed" />
            <StatCard icon="🎤" value="4" label="Conference Presentations" />
            <StatCard icon="🏆" value="3" label="Presentation Awards" />
            <StatCard icon="🎓" value="3.96" label="Major GPA" />
            <StatCard icon="🏛️" value="3" label="Institutions" />

            {/* GitHub Card */}
            <StatCard 
              icon={<i className="fas fa-fire" style={{ color: '#e25822' }}></i>}
              value={`${streak}`} 
              label={
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <i className="fab fa-github" style={{ fontSize: '1.1em' }}></i> GitHub Streak
                </span>
              } 
            />
            
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 6. PROJECTS SECTION                       */}
      {/* ========================================= */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <div className="section-label"><i className="fas fa-laptop-code"></i> Featured Work</div>
            <h2 className="section-title">Projects</h2>
            <p className="section-description">Production systems and open-source tools I&apos;ve built</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, idx) => (
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
            ))}
          </div>

          {/* View All Projects Link */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/projects" className="btn btn-secondary">
              <i className="fas fa-th-large"></i> View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 7. CONTACT SECTION                        */}
      {/* ========================================= */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-cta fade-in">
            <h3>Let&apos;s Build Something Together</h3>
            <p>Looking for my next opportunity in data engineering or platform engineering.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <a href="mailto:hossain.sabbir17@gmail.com" className="btn btn-primary">
                <i className="fas fa-envelope"></i> Send Email
              </a>
              <a href="https://linkedin.com/in/itssabbir" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    {/* ========================================= */}
      {/* 8. STYLES (Add this at the bottom)        */}
      {/* ========================================= */}
      <style jsx>{`
        .hero-image-wrapper {
          position: relative; /* Anchors the stars */
          display: inline-block;
          z-index: 1;
        }

        .star-particle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          font-size: 24px;
          color: var(--accent-secondary, #D4AF37);
          opacity: 0;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy effect */
          z-index: -1; /* Puts stars behind the image */
          transform: translate(-50%, -50%) scale(0);
        }

        /* The Animation Trigger */
        .hero-image-wrapper:hover .star-particle {
          opacity: 1;
          /* 1. Center the star
             2. Rotate it to its assigned angle
             3. Push it outward (160px)
             4. Scale it up
          */
          transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-160px) scale(1);
        }
      `}</style>
    </>
  );
}