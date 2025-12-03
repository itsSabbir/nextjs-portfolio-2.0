// --- pages/index.jsx ---
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import Layout from '../components/Layout'; // REMOVED to prevent double header/footer
import ProjectCard from '../components/ProjectCard';
import StatCard from '../components/StatCard';

export default function Home() {
  const [experience, setExperience] = useState({ research: "0.0", industry: "0.0" });
  
  // Advanced Experience Calculation
  useEffect(() => {
    const calculateDuration = (startDate, isOngoing = true) => {
      const start = new Date(startDate);
      const end = new Date(); // Always now for ongoing
      
      const diffTime = Math.abs(end - start);
      const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); 
      return diffYears.toFixed(1); // Returns "5.5", "0.5", etc.
    };

    // 1. Research/Part-time (Sept 2019 - Present)
    // You mentioned JHU is still ongoing part-time
    const researchYears = calculateDuration('2019-09-01');

    // 2. Industry/Full-time (June 2025 - Present)
    // Note: Since June 2025 is in the future relative to "now" (2024), 
    // this logic handles pre-start dates gracefully by showing 0.0 or small decimals.
    // Assuming you want to show it as "Starting soon" or the calculated time if date passed.
    const industryStart = new Date('2025-06-01');
    const now = new Date();
    let industryDisplay = "0.0";
    
    if (now >= industryStart) {
      industryDisplay = calculateDuration('2025-06-01');
    } else {
      // If start date is in future, maybe show "Incoming" or 0
      industryDisplay = "0.0"; 
    }
    
    setExperience({ 
      research: researchYears, 
      industry: industryDisplay 
    });
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

  // Custom Theme for GitHub Stats to match website transparently
  // bg_color=00000000 (Transparent)
  // title_color=ae0001 (Gryffindor Red)
  // text_color=a8b2d1 (Muted Blue/Grey)
  // icon_color=d4af37 (Gold)
  // border_color=172a45 (Light Navy border)
  const ghThemeParams = "&bg_color=00000000&title_color=ae0001&text_color=a8b2d1&icon_color=d4af37&border_color=172a45&hide_border=false";

  return (
    <>
      <Head>
        <title>Sabbir Hossain | Data Engineer & Platform Architect</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of Sabbir Hossain, Data Engineer & Platform Architect at Bell Canada." />
      </Head>

      {/* ========================================= */}
      {/* 1. INTRO (Hero)                           */}
      {/* ========================================= */}
      <section className="hero" id="home" style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="container">
          <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Profile Picture */}
            <div className="hero-image-wrapper fade-in" style={{ marginBottom: '2rem' }}>
              <img 
                src="/profile_pic.jpeg" 
                alt="Sabbir Hossain" 
                className="profile-img"
                style={{ 
                  width: '220px', 
                  height: '220px', 
                  borderRadius: '50%', 
                  border: '4px solid var(--accent-secondary)',
                  boxShadow: '0 10px 40px var(--glow-gold)'
                }} 
              />
            </div>

            {/* Greeting */}
            <div className="hero-greeting fade-in" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <i className="fas fa-hand-sparkles" style={{ color: 'var(--accent-secondary)' }}></i> Hi, I&apos;m
            </div>

            <h1 className="hero-title fade-in" style={{ 
              marginBottom: '1rem', 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              lineHeight: '1.1'
            }}>
              <span className="gradient-text">Sabbir Hossain</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle fade-in" style={{ maxWidth: '800px', margin: '0 auto 2rem auto', fontSize: '1.2rem' }}>
              <span className="highlight">Data Engineer</span> & <span className="highlight">Platform Architect</span> building scalable data infrastructure at Bell Canada. 
              <br className="mobile-only" /> Passionate about distributed systems, platform engineering, and solving complex data challenges.
            </p>

            {/* Badges */}
            <div className="hero-badges fade-in" style={{ justifyContent: 'center', marginBottom: '2.5rem' }}>
              <div className="hero-badge availability">
                <div className="status-dot"></div>
                <span>Available for Hire</span>
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
                View Full Experience
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
      {/* 2. WHO I AM (About + TLDR)                */}
      {/* ========================================= */}
      <section className="section" id="about" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Who I Am</h2>
          </div>

          <div className="about-content fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Bio Text */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Building the Future of Data Infrastructure</h3>
              <p style={{ margin: '0 auto 1.5rem auto', maxWidth: '800px', textAlign: 'left' }}>
                I&apos;m a Data Engineer at Bell Canada, where I architect and productionize mission-critical data pipelines 
                on the Network Ticket Service (NTS) Platform. With a background in computational biology and bioinformatics 
                from the University of Toronto, I bring a unique perspective to data engineering challenges.
              </p>
              <p style={{ margin: '0 auto 1.5rem auto', maxWidth: '800px', textAlign: 'left' }}>
                My journey spans from working with massive genomics datasets (750+ TB) in research to building 
                enterprise-scale data infrastructure. I&apos;m passionate about platform engineering, distributed systems, 
                and creating elegant solutions to complex technical problems.
              </p>
            </div>

            {/* TLDR Box */}
            <div className="tldr-box" style={{ marginBottom: '2rem' }}>
              <div className="tldr-header" style={{ justifyContent: 'center' }}>
                <i className="fas fa-bolt"></i>
                <h4>TL;DR</h4>
              </div>
              <div className="tldr-content">
                <ul style={{ display: 'inline-block', textAlign: 'left' }}>
                  <li>Data Engineer at Bell Canada (NTS Platform)</li>
                  <li>UofT Graduate (3.96 Major GPA) in Bioinformatics & CS</li>
                  <li>Expanded data coverage by 800%, optimized queries by 83%</li>
                  <li>Expert in Python, SQL, distributed systems, cloud platforms</li>
                  <li>Open to Data, Software and Platform Engineering roles</li>
                </ul>
              </div>
            </div>

            {/* Work Authorization Cards */}
            <div className="work-auth-container fade-in" style={{ marginBottom: '3rem' }}>
              <div className="work-auth-card">
                <div className="work-auth-header">
                  <span className="flag-emoji">🇨🇦</span>
                  <div className="work-auth-info">
                    <h3>Canada</h3>
                    <div className="work-auth-subtitle">Current Location</div>
                  </div>
                </div>
                <div className="work-auth-details">
                  <div className="work-auth-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Authorized to work (No sponsorship needed)</span>
                  </div>
                  <div className="work-auth-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Based in Toronto, ON</span>
                  </div>
                </div>
              </div>

              <div className="work-auth-card">
                <div className="work-auth-header">
                  <span className="flag-emoji">🇺🇸</span>
                  <div className="work-auth-info">
                    <h3>United States</h3>
                    <div className="work-auth-subtitle">Open to Relocation</div>
                  </div>
                </div>
                <div className="work-auth-details">
                  <div className="work-auth-item">
                    <i className="fas fa-check-circle"></i>
                    <span>TN Visa eligible (No sponsorship required)</span>
                  </div>
                  <div className="work-auth-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Open to H-1B / Green Card sponsorship</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests Grid - Centered & Aligned */}
            <div className="interests-section fade-in" style={{ marginTop: '4rem', textAlign: 'center' }}>
              <h3><i className="fas fa-heart"></i> What I Love</h3>
              <div className="interests-grid" style={{ 
                maxWidth: '900px', 
                margin: '0 auto', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                gap: '1rem',
                justifyItems: 'center' // Force tiles to center in their columns
              }}>
                {[
                  { icon: "🧠", label: "Learning" },
                  { icon: "∞", label: "Mathematics" },
                  { icon: "💻", label: "Coding" },
                  { icon: "🚀", label: "Space" },
                  { icon: "🧬", label: "Bioinformatics" }, // Long word will now center
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
                    padding: '1.5rem 0.5rem', // Reduced side padding for long words
                    width: '100%', // Ensure full width usage
                    height: '100%'
                  }}>
                    <span className="interest-icon">{item.icon}</span>
                    <div className="interest-label" style={{ 
                      marginTop: '0.5rem',
                      wordBreak: 'break-word', // Handle extremely long words
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
      {/* 3. IMPACT & ACTIVITY (Stats)              */}
      {/* ========================================= */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Impact & Activity</h2>
          </div>

          <div className="stats-grid fade-in" style={{ marginBottom: '3rem' }}>
            {/* Stat 1: Research Experience */}
            <StatCard 
              icon="🔬" 
              value={`${experience.research} Yrs`} 
              label="Research & Dev" 
            />
            {/* Stat 2: High Volume Data */}
            <StatCard 
              icon="💾" 
              value="750+ TB" 
              label="Data Processed" 
            />
            {/* Stat 3: Performance Optimization */}
            <StatCard 
              icon="⚡" 
              value="83%" 
              label="Faster Queries" 
            />
            {/* Stat 4: Academic Excellence */}
            <StatCard 
              icon="🎓" 
              value="3.96" 
              label="Major GPA" 
            />
          </div>

          {/* GitHub Activity Visuals - Themed to match website */}
          <div className="fade-in" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '1.5rem', 
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            {/* Streak Stats */}
            <img 
              src={`https://github-readme-streak-stats-eight-dun.vercel.app/?user=itsSabbir&count_private=true${ghThemeParams}`} 
              alt="Sabbir's GitHub Streak" 
              style={{ height: '180px', borderRadius: '4px', maxWidth: '100%', objectFit: 'contain' }}
            />
            
            {/* General Stats */}
            <img 
              src={`https://sabbir-gh-stats.vercel.app/api?username=itsSabbir&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&locale=en${ghThemeParams}`} 
              alt="Sabbir's GitHub Stats"
              style={{ height: '180px', borderRadius: '4px', maxWidth: '100%', objectFit: 'contain' }} 
            />
            
            {/* Top Languages */}
            <img 
              src={`https://sabbir-gh-stats.vercel.app/api/top-langs?username=itsSabbir&locale=en&hide_title=false&layout=compact&langs_count=8&count_private=true${ghThemeParams}`} 
              alt="Top Languages"
              style={{ height: '180px', borderRadius: '4px', maxWidth: '100%', objectFit: 'contain' }} 
            />
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. EXPERIENCE HIGHLIGHTS                  */}
      {/* ========================================= */}
      <section className="section" id="experience_preview">
        <div className="container">
          <div className="section-header">
            <div className="section-label"><i className="fas fa-briefcase"></i> Career Highlights</div>
            <h2 className="section-title">Experience</h2>
            <p className="section-description">A snapshot of my professional journey. <Link href="/experiences" className="text-link">View Full Details →</Link></p>
          </div>

          <div className="timeline" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Bell Canada Highlight */}
            <div className="timeline-item fade-in">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Data Engineer</h3>
                  <div className="timeline-company">Bell Canada</div>
                </div>
                <div className="timeline-period"><i className="fas fa-calendar-alt"></i> Jun 2025 - Present</div>
              </div>
              <div className="timeline-description">
                <p>Architecting mission-critical data pipelines for the Network Ticket Service (NTS) Platform.</p>
                <ul>
                  <li>Expanded data coverage by 800% (1 to 9+ months) via root cause analysis.</li>
                  <li>Optimized critical query runtime from 12 mins to 2 mins (83% reduction).</li>
                </ul>
                <Link href="/experiences#bell-canada" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem' }}>
                  Read Full Details <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* JHU Highlight */}
            <div className="timeline-item fade-in">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Bioinformatics Software Development Research Assistant</h3>
                  <div className="timeline-company">Johns Hopkins University</div>
                </div>
                <div className="timeline-period"><i className="fas fa-calendar-alt"></i> Sept 2022 - Present</div>
              </div>
              <div className="timeline-description">
                <p>Spearheading large-scale oncology research integrating 750+ TB of multi-omics data.</p>
                <Link href="/experiences#johns-hopkins" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem' }}>
                  Read Full Details <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* UofT Highlight */}
            <div className="timeline-item fade-in">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Software Development Research Assistant</h3>
                  <div className="timeline-company">University of Toronto</div>
                </div>
                <div className="timeline-period"><i className="fas fa-calendar-alt"></i> Sept 2019 – Apr 2024</div>
              </div>
              <div className="timeline-description">
                <p>Engineered full-stack bioinformatics applications automating workflows to save 30+ hours weekly.</p>
                <Link href="/experiences#u-of-t-research" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem' }}>
                  Read Full Details <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. PROJECTS SECTION                       */}
      {/* ========================================= */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <div className="section-label"><i className="fas fa-laptop-code"></i> Featured Work</div>
            <h2 className="section-title">Projects</h2>
          </div>

          <div className="projects-grid">
            <ProjectCard 
              title="NTS Platform Pipeline"
              description="Mission-critical data integration pipeline at Bell Canada using Python, SAS DI, and SQL. Expanded data coverage by 800%."
              tags={['Python', 'SAS DI', 'SQL', 'ETL']}
              icon="🔮"
            />
            <ProjectCard 
              title="Anomaly Detection System"
              description="Full-stack anomaly detection system built with React, Node.js, and PyTorch for time-series data analysis."
              tags={['React', 'Node.js', 'PyTorch', 'ML']}
              icon="🧬"
              links={{ repo: 'https://github.com/itssabbir/anomaly-detection' }}
            />
            <ProjectCard 
              title="Genomics Data Pipeline"
              description="Distributed data processing pipeline for analyzing 750+ TB of genomics data using Spark and AWS."
              tags={['Python', 'Spark', 'AWS', 'Bioinformatics']}
              icon="🚀"
              links={{ repo: 'https://github.com/itssabbir/genomics-pipeline' }}
            />
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 6. CONTACT SECTION                        */}
      {/* ========================================= */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-cta fade-in">
            <h3>Let&apos;s Build Something Amazing</h3>
            <p>I&apos;m actively seeking opportunities in platform engineering and data infrastructure.</p>
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
    </>
  );
}