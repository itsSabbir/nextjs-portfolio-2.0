// --- pages/index.jsx ---
import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  
  // Fade-in Animation Logic
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

  return (
    <Layout>
      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            {/* Badges */}
            <div className="hero-badges">
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

            {/* Work Authorization Cards */}
            <div className="work-auth-container">
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

            {/* Greeting */}
            <div className="hero-greeting">
              <i className="fas fa-hand-sparkles"></i> Hi, I'm
            </div>

            {/* Title */}
            <h1 className="hero-title">
              <span className="gradient-text">Sabbir Hossain</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              <span className="highlight">Data Engineer</span> & <span className="highlight">Platform Architect</span> building scalable data infrastructure at Bell Canada. 
              Passionate about distributed systems, platform engineering, and solving complex data challenges.
            </p>

            {/* CTA Buttons */}
            <div className="btn-group">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                <i className="fas fa-code"></i>
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/itssabbir" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/itssabbir" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:hossain.sabbir17@gmail.com" className="social-link" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="/1SabbirHossain.pdf" className="social-link" title="Resume" target="_blank">
                <i className="fas fa-file-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card fade-in">
              <div className="stat-icon">💼</div>
              <div className="stat-value">2024</div>
              <div className="stat-label">Joined Bell Canada</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-icon">🎓</div>
              <div className="stat-value">2024</div>
              <div className="stat-label">UofT Graduate</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-icon">⭐</div>
              <div className="stat-value">3.96</div>
              <div className="stat-label">Major GPA</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-icon">📈</div>
              <div className="stat-value">800%</div>
              <div className="stat-label">Data Coverage ↑</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <i className="fas fa-user-circle"></i> About Me
            </div>
            <h2 className="section-title">Who I Am</h2>
            <p className="section-description">
              A passionate engineer combining bioinformatics expertise with modern data engineering.
            </p>
          </div>

          <div className="about-grid">
            {/* Image Side */}
            <div className="about-image fade-in">
              {/* Ensure profile_pic.jpeg exists in /public */}
              <img src="/profile_pic.jpeg" alt="Sabbir Hossain" className="profile-img" />
            </div>

            {/* Content Side */}
            <div className="about-content fade-in">
              {/* TLDR Box */}
              <div className="tldr-box">
                <div className="tldr-header">
                  <i className="fas fa-bolt"></i>
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

              <h3>Building the Future of Data Infrastructure</h3>
              <p>
                I'm a Data Engineer at Bell Canada, where I architect and productionize mission-critical data pipelines 
                on the Network Ticket Service (NTS) Platform. With a background in computational biology and bioinformatics 
                from the University of Toronto, I bring a unique perspective to data engineering challenges.
              </p>
              <p>
                My journey spans from working with massive genomics datasets (750+ TB) in research to building 
                enterprise-scale data infrastructure. I'm passionate about platform engineering, distributed systems, 
                and creating elegant solutions to complex technical problems.
              </p>
              <p>
                When I'm not architecting data pipelines, you'll find me exploring the intersections of mathematics, 
                computer science, and the universe's mysteries—from philosophical depth to the elegance 
                of algorithms and the wonder of space exploration.
              </p>
            </div>
          </div>

          {/* Interests Grid */}
          <div className="interests-section fade-in">
            <h3><i className="fas fa-heart"></i> What I Love</h3>
            <div className="interests-grid">
              <div className="interest-tile"><span className="interest-icon">∞</span><div className="interest-label">Mathematics</div></div>
              <div className="interest-tile"><span className="interest-icon">💻</span><div className="interest-label">Coding</div></div>
              <div className="interest-tile"><span className="interest-icon">🚀</span><div className="interest-label">Space</div></div>
              <div className="interest-tile"><span className="interest-icon">🧬</span><div className="interest-label">Bioinformatics</div></div>
              <div className="interest-tile"><span className="interest-icon">🍳</span><div className="interest-label">Cooking</div></div>
              <div className="interest-tile"><span className="interest-icon">🛹</span><div className="interest-label">Longboarding</div></div>
              <div className="interest-tile"><span className="interest-icon">📚</span><div className="interest-label">Reading</div></div>
              <div className="interest-tile"><span className="interest-icon">🎬</span><div className="interest-label">Movies/Anime</div></div>
              <div className="interest-tile"><span className="interest-icon">⚔️</span><div className="interest-label">Fantasy</div></div>
              <div className="interest-tile"><span className="interest-icon">🎮</span><div className="interest-label">Gaming</div></div>
              <div className="interest-tile"><span className="interest-icon">🏃</span><div className="interest-label">Fitness</div></div>
              <div className="interest-tile"><span className="interest-icon">🎵</span><div className="interest-label">Music</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section className="section" id="experience">
        <div className="container">
          <div className="section-header">
            <div className="section-label"><i className="fas fa-briefcase"></i> Career Journey</div>
            <h2 className="section-title">Experience</h2>
            <p className="section-description">My professional journey in data engineering and research</p>
          </div>

          <div className="timeline">
            {/* Bell Canada */}
            <div className="timeline-item fade-in">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Data Engineer</h3>
                  <div className="timeline-company">Bell Canada</div>
                </div>
                <div className="timeline-period"><i className="fas fa-calendar-alt"></i> Jun 2024 - Present</div>
              </div>
              <div className="timeline-description">
                <p>Working on the Network Ticket Service (NTS) Platform, architecting and productionizing mission-critical data pipelines that power Bell's network operations.</p>
                <ul>
                  <li>Architected NTS data integration pipeline using Python, SAS DI, and SQL, serving as technical gatekeeper</li>
                  <li>Resolved systemic data integrity issues, expanding valid record coverage from 8% to 75% (+800%)</li>
                  <li>Optimized critical query performance: reduced runtime from 12 minutes to 2 minutes (83% improvement)</li>
                  <li>Promoted to technical gatekeeper role within 3 months, reviewing all code changes for data quality</li>
                  <li>Led MS Archway integration project, connecting enterprise data sources to NTS platform</li>
                </ul>
              </div>
            </div>

            {/* JHU & UofT */}
            <div className="timeline-item fade-in">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Research Assistant</h3>
                  <div className="timeline-company">Johns Hopkins University & UofT</div>
                </div>
                <div className="timeline-period"><i className="fas fa-calendar-alt"></i> 2020 - 2024</div>
              </div>
              <div className="timeline-description">
                <p>Conducted cutting-edge research in bioinformatics, working with large-scale genomics datasets and developing ML pipelines for computational biology.</p>
                <ul>
                  <li>Developed machine learning pipelines for analyzing 750+ TB genomics datasets</li>
                  <li>Built distributed data processing systems for biological sequence analysis</li>
                  <li>Collaborated on research projects bridging computational methods and biological insights</li>
                  <li>Published findings and presented at academic conferences</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="timeline-item fade-in">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Education</h3>
                  <div className="timeline-company">University of Toronto</div>
                </div>
                <div className="timeline-period"><i className="fas fa-graduation-cap"></i> Graduated 2024</div>
              </div>
              <div className="timeline-description">
                <p>B.Sc. (Honours) Computer Science, Bioinformatics & Computational Biology Specialist</p>
                <ul>
                  <li>Major GPA: 3.96/4.0 - Dean's List Scholar</li>
                  <li>Focus: Data Structures, Algorithms, Distributed Systems, Cloud Computing, Machine Learning</li>
                  <li>Built foundation in large-scale data systems and computational methods</li>
                  <li>Completed advanced coursework in platform engineering and system design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <div className="section-label"><i className="fas fa-laptop-code"></i> Featured Work</div>
            <h2 className="section-title">Projects</h2>
            <p className="section-description">Showcasing technical expertise through real-world applications</p>
          </div>

          <div className="projects-grid">
            <div className="project-card fade-in">
              <div className="project-icon">🔮</div>
              <h3 className="project-title">NTS Platform Pipeline</h3>
              <p className="project-description">Mission-critical data integration pipeline at Bell Canada, processing network service tickets and enabling real-time analytics. Resolved major data quality issues affecting thousands of records.</p>
              <div className="project-tech">
                <span className="tech-tag"><i className="devicon-python-plain colored"></i> Python</span>
                <span className="tech-tag"><i className="fas fa-database"></i> SAS DI</span>
                <span className="tech-tag"><i className="fas fa-database"></i> SQL</span>
                <span className="tech-tag"><i className="fas fa-exchange-alt"></i> ETL</span>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-icon">🧬</div>
              <h3 className="project-title">Anomaly Detection System</h3>
              <p className="project-description">Full-stack anomaly detection system built with React, Node.js, and PyTorch. Processes time-series data to identify outliers using deep learning.</p>
              <div className="project-tech">
                <span className="tech-tag"><i className="devicon-react-original colored"></i> React</span>
                <span className="tech-tag"><i className="devicon-nodejs-plain colored"></i> Node.js</span>
                <span className="tech-tag"><i className="devicon-pytorch-plain colored"></i> PyTorch</span>
                <span className="tech-tag"><i className="fas fa-brain"></i> ML</span>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-icon">🚀</div>
              <h3 className="project-title">Genomics Pipeline</h3>
              <p className="project-description">Distributed data processing pipeline for analyzing large-scale genomics datasets (750+ TB). Implemented efficient algorithms for sequence alignment and variant calling.</p>
              <div className="project-tech">
                <span className="tech-tag"><i className="devicon-python-plain colored"></i> Python</span>
                <span className="tech-tag"><i className="devicon-apache-plain"></i> Spark</span>
                <span className="tech-tag"><i className="devicon-amazonwebservices-plain-wordmark colored"></i> AWS</span>
                <span className="tech-tag"><i className="fas fa-dna"></i> Bioinformatics</span>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-icon">⚡</div>
              <h3 className="project-title">Real-time Analytics Dashboard</h3>
              <p className="project-description">Interactive dashboard for visualizing network performance metrics. Built with modern web technologies and real-time data streaming capabilities.</p>
              <div className="project-tech">
                <span className="tech-tag"><i className="devicon-react-original colored"></i> React</span>
                <span className="tech-tag"><i className="devicon-d3js-plain colored"></i> D3.js</span>
                <span className="tech-tag"><i className="fas fa-plug"></i> WebSocket</span>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-icon">💎</div>
              <h3 className="project-title">ML Model Training Pipeline</h3>
              <p className="project-description">End-to-end machine learning pipeline for model training, evaluation, and deployment. Includes experiment tracking, hyperparameter optimization, and automated versioning.</p>
              <div className="project-tech">
                <span className="tech-tag"><i className="devicon-pytorch-plain colored"></i> PyTorch</span>
                <span className="tech-tag"><i className="fas fa-chart-line"></i> MLflow</span>
                <span className="tech-tag"><i className="devicon-docker-plain colored"></i> Docker</span>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-icon">🌟</div>
              <h3 className="project-title">Cloud Infrastructure Automation</h3>
              <p className="project-description">Infrastructure-as-code solution for deploying and managing cloud resources. Automated provisioning, scaling, and monitoring of data engineering workloads.</p>
              <div className="project-tech">
                <span className="tech-tag"><i className="devicon-terraform-plain colored"></i> Terraform</span>
                <span className="tech-tag"><i className="devicon-amazonwebservices-plain-wordmark colored"></i> AWS</span>
                <span className="tech-tag"><i className="devicon-kubernetes-plain colored"></i> Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-header">
            <div className="section-label"><i className="fas fa-tools"></i> Technical Arsenal</div>
            <h2 className="section-title">Core Skills</h2>
            <p className="section-description">Tools and technologies I work with to build robust solutions</p>
          </div>

          <div className="skills-grid">
            <div className="skill-category fade-in">
              <div className="skill-category-header">
                <div className="skill-category-icon"><i className="fas fa-code"></i></div>
                <h3 className="skill-category-title">Languages</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item"><i className="devicon-python-plain colored"></i> Python</span>
                <span className="skill-item"><i className="fas fa-database"></i> SQL</span>
                <span className="skill-item"><i className="devicon-javascript-plain colored"></i> JavaScript</span>
                <span className="skill-item"><i className="devicon-java-plain colored"></i> Java</span>
                <span className="skill-item"><i className="devicon-r-plain colored"></i> R</span>
                <span className="skill-item"><i className="devicon-c-plain colored"></i> C</span>
                <span className="skill-item"><i className="devicon-bash-plain"></i> Bash</span>
              </div>
            </div>

            <div className="skill-category fade-in">
              <div className="skill-category-header">
                <div className="skill-category-icon"><i className="fas fa-stream"></i></div>
                <h3 className="skill-category-title">Data Engineering</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item"><i className="devicon-apache-plain"></i> Spark</span>
                <span className="skill-item"><i className="devicon-apachekafka-plain colored"></i> Kafka</span>
                <span className="skill-item"><i className="fas fa-wind"></i> Airflow</span>
                <span className="skill-item"><i className="fas fa-exchange-alt"></i> ETL/ELT</span>
                <span className="skill-item"><i className="fas fa-project-diagram"></i> Data Pipelines</span>
                <span className="skill-item"><i className="fas fa-database"></i> SAS DI</span>
                <span className="skill-item"><i className="fas fa-warehouse"></i> Data Warehousing</span>
              </div>
            </div>

            <div className="skill-category fade-in">
              <div className="skill-category-header">
                <div className="skill-category-icon"><i className="fas fa-cloud"></i></div>
                <h3 className="skill-category-title">Cloud & DevOps</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item"><i className="devicon-amazonwebservices-plain-wordmark colored"></i> AWS</span>
                <span className="skill-item"><i className="devicon-azure-plain colored"></i> Azure</span>
                <span className="skill-item"><i className="devicon-docker-plain colored"></i> Docker</span>
                <span className="skill-item"><i className="devicon-kubernetes-plain colored"></i> Kubernetes</span>
                <span className="skill-item"><i className="devicon-terraform-plain colored"></i> Terraform</span>
                <span className="skill-item"><i className="fas fa-infinity"></i> CI/CD</span>
                <span className="skill-item"><i className="devicon-git-plain colored"></i> Git</span>
              </div>
            </div>

            <div className="skill-category fade-in">
              <div className="skill-category-header">
                <div className="skill-category-icon"><i className="fas fa-database"></i></div>
                <h3 className="skill-category-title">Databases</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item"><i className="devicon-postgresql-plain colored"></i> PostgreSQL</span>
                <span className="skill-item"><i className="devicon-mysql-plain colored"></i> MySQL</span>
                <span className="skill-item"><i className="devicon-mongodb-plain colored"></i> MongoDB</span>
                <span className="skill-item"><i className="devicon-redis-plain colored"></i> Redis</span>
                <span className="skill-item"><i className="fas fa-database"></i> Cassandra</span>
                <span className="skill-item"><i className="fas fa-snowflake"></i> Snowflake</span>
              </div>
            </div>

            <div className="skill-category fade-in">
              <div className="skill-category-header">
                <div className="skill-category-icon"><i className="fas fa-brain"></i></div>
                <h3 className="skill-category-title">Machine Learning</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item"><i className="devicon-pytorch-plain colored"></i> PyTorch</span>
                <span className="skill-item"><i className="devicon-tensorflow-original colored"></i> TensorFlow</span>
                <span className="skill-item"><i className="fas fa-chart-line"></i> Scikit-learn</span>
                <span className="skill-item"><i className="fas fa-flask"></i> MLflow</span>
                <span className="skill-item"><i className="fas fa-network-wired"></i> Deep Learning</span>
                <span className="skill-item"><i className="fas fa-language"></i> NLP</span>
              </div>
            </div>

            <div className="skill-category fade-in">
              <div className="skill-category-header">
                <div className="skill-category-icon"><i className="fas fa-globe"></i></div>
                <h3 className="skill-category-title">Web Technologies</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item"><i className="devicon-react-original colored"></i> React</span>
                <span className="skill-item"><i className="devicon-nodejs-plain colored"></i> Node.js</span>
                <span className="skill-item"><i className="devicon-express-original"></i> Express</span>
                <span className="skill-item"><i className="fas fa-plug"></i> REST APIs</span>
                <span className="skill-item"><i className="devicon-graphql-plain colored"></i> GraphQL</span>
                <span className="skill-item"><i className="fas fa-plug"></i> WebSocket</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header">
            <div className="section-label"><i className="fas fa-paper-plane"></i> Get In Touch</div>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-description">I'm always open to discussing new opportunities, collaborations, or just chatting about tech</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item fade-in">
                <div className="contact-item-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-item-content">
                  <h4>Email</h4>
                  <p><a href="mailto:hossain.sabbir17@gmail.com">hossain.sabbir17@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-item fade-in">
                <div className="contact-item-icon"><i className="fab fa-linkedin-in"></i></div>
                <div className="contact-item-content">
                  <h4>LinkedIn</h4>
                  <p><a href="https://linkedin.com/in/itssabbir" target="_blank" rel="noopener noreferrer">linkedin.com/in/itssabbir</a></p>
                </div>
              </div>

              <div className="contact-item fade-in">
                <div className="contact-item-icon"><i className="fab fa-github"></i></div>
                <div className="contact-item-content">
                  <h4>GitHub</h4>
                  <p><a href="https://github.com/itssabbir" target="_blank" rel="noopener noreferrer">github.com/itssabbir</a></p>
                </div>
              </div>

              <div className="contact-item fade-in">
                <div className="contact-item-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-item-content">
                  <h4>Location</h4>
                  <p>Toronto, Ontario, Canada 🇨🇦</p>
                  <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Open to relocation (USA 🇺🇸)</p>
                </div>
              </div>
            </div>

            <div className="contact-cta fade-in">
              <h3>Let's Build Something Amazing</h3>
              <p>I'm actively seeking opportunities in platform engineering and data infrastructure. Whether you want to discuss system architecture, data pipelines, or potential collaborations—I'd love to hear from you.</p>
              <div className="btn-group">
                <a href="mailto:hossain.sabbir17@gmail.com" className="btn btn-primary">
                  <i className="fas fa-envelope"></i> Send Email
                </a>
                <a href="https://linkedin.com/in/itssabbir" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}