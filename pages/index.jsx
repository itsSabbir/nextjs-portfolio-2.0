// --- pages/index.jsx ---
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import Layout from '../components/Layout'; // REMOVED to prevent double header/footer
import ProjectCard from '../components/ProjectCard';
import StatCard from '../components/StatCard';

export default function Home() {
  const [experience, setExperience] = useState({ research: "0.0", industry: "0.0" });
  const [streak, setStreak] = useState(0);
  
  // Experience & Streak Calculations
  useEffect(() => {
    const calculateDuration = (startDate, endDate = new Date()) => {
      const start = new Date(startDate);
      const end = endDate;
      if (start > end) return 0;
      
      const diffTime = Math.abs(end - start);
      const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); 
      return diffYears;
    };

    const now = new Date();

    // 1. Research/Part-time
    const researchStart = '2019-09-01';
    const partTimeCap = new Date('2025-05-31');
    const researchEndDate = now < partTimeCap ? now : partTimeCap;
    const researchYears = calculateDuration(researchStart, researchEndDate);

    // 2. Industry/Full-time
    const industryStartStr = '2025-06-01';
    const industryStart = new Date(industryStartStr);
    
    let industryYears = 0;
    if (now >= industryStart) {
      industryYears = calculateDuration(industryStartStr, now);
    }

    setExperience({ 
      research: researchYears.toFixed(1), 
      industry: industryYears.toFixed(1) 
    });
    
    // 3. Streak Calculation
    const streakStart = new Date('2024-05-16');
    streakStart.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    const diffTime = now - streakStart;
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
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
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
    }
  ];

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
          <div className="hero-content" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            width: '100%', 
            margin: '0 auto' 
          }}>
            
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
            <div className="hero-greeting fade-in" style={{ 
              fontSize: '1.5rem', 
              marginBottom: '0.5rem',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '10px'
            }}>
              <i className="fas fa-hand-sparkles" style={{ color: 'var(--accent-secondary)' }}></i> 
              <span>Hi, I&apos;m</span>
              <i className="fas fa-hand-sparkles" style={{ color: 'var(--accent-secondary)' }}></i> 
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
                  <li>Data Engineer at Bell Canada (NTS Platform)</li>
                  <li>UofT Graduate (3.96 Major GPA) in Bioinformatics & CS</li>
                  <li>Expanded data coverage by 800%, optimized queries by 83%</li>
                  <li>Expert in Python, SQL, distributed systems, cloud platforms</li>
                  <li>Open to Data, Software and Platform Engineering roles</li>
                </ul>
              </div>
            </div>

            {/* Work Auth */}
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
      {/* 3. SKILLS SECTION (Moved Here)            */}
      {/* ========================================= */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label"><i className="fas fa-cogs"></i> Technical Proficiency</div>
            <h2 className="section-title">Skills & Tools</h2>
          </div>

          <div className="skills-grid fade-in" style={{ 
            maxWidth: '1000px', 
            margin: '0 auto',
            justifyContent: 'center'
          }}>
            {skillsCategories.map((category, idx) => (
              <div key={idx} className="skill-category" style={{ textAlign: 'center' }}>
                <div className="skill-category-header" style={{ justifyContent: 'center' }}>
                  <div className="skill-category-icon">
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>
                <div className="skill-list" style={{ justifyContent: 'center' }}>
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
      {/* 6. IMPACT & ACTIVITY (Stats) - Moved Down */}
      {/* ========================================= */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Impact & Activity</h2>
          </div>

          <div className="stats-grid fade-in" style={{ marginBottom: '3rem' }}>
            <StatCard icon="🔬" value={`${experience.research} Yrs`} label="Research & Dev" />
            <StatCard icon="💾" value="750+ TB" label="Data Processed" />
            <StatCard icon="⚡" value="83%" label="Faster Queries" />
            <StatCard icon="🎓" value="3.96" label="Major GPA" />
          </div>

          <div className="fade-in" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '2rem' 
          }}>
            <div style={{ maxWidth: '300px', width: '100%' }}>
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
        </div>
      </section>

      {/* ========================================= */}
      {/* 7. CONTACT SECTION                        */}
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