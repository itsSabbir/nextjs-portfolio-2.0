// --- pages/index.jsx ---
import React, { useEffect } from 'react';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import StatCard from '../components/StatCard';

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
    <>
      <Head>
        <title>Sabbir Hossain | Data Engineer & Platform Architect</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of Sabbir Hossain, Data Engineer & Platform Architect at Bell Canada." />
      </Head>

      {/* ===== HERO SECTION (ID: home) ===== */}
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

            <div className="hero-greeting">
              <i className="fas fa-hand-sparkles"></i> Hi, I'm
            </div>

            <h1 className="hero-title">
              <span className="gradient-text">Sabbir Hossain</span>
            </h1>

            <p className="hero-subtitle">
              <span className="highlight">Data Engineer</span> & <span className="highlight">Platform Architect</span> building scalable data infrastructure at Bell Canada. 
              Passionate about distributed systems, platform engineering, and solving complex data challenges.
            </p>

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
              <a href="/1SabbirHossain.pdf" className="social-link" title="Resume" target="_blank" rel="noopener noreferrer">
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
            <StatCard icon="💼" value="2025" label="Joined Bell Canada" />
            <StatCard icon="🎓" value="2024" label="UofT Graduate" />
            <StatCard icon="⭐" value="3.96" label="Major GPA" />
            <StatCard icon="📈" value="800%" label="Data Coverage ↑" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION (ID: about) ===== */}
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
            <div className="about-image fade-in">
              {/* Ensure profile_pic.jpeg exists in /public */}
              <img src="/profile_pic.jpeg" alt="Sabbir Hossain" className="profile-img" />
            </div>

            <div className="about-content fade-in">
              <div className="tldr-box">
                <div className="tldr-header">
                  <i className="fas fa-bolt"></i>
                  <h4>TL;DR</h4>
                </div>
                <div className="tldr-content">
                  <ul>
                    <li>Data Engineer at Bell Canada (Data Engineering & Artificial Intelligence Team)</li>
                    <li>UofT Graduate (3.96 Major GPA) in Bioinformatics & CS</li>
                    <li>Expanded data coverage by 800%, optimized queries by 83%</li>
                    <li>Expert in Python, SQL, distributed systems, cloud platforms</li>
                    <li>Open to all Data, Software and Platform Engineering roles</li>
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
              <div className="interest-tile"><span className="interest-icon">🎮</span><div className="interest-label">Gaming</div></div>
              <div className="interest-tile"><span className="interest-icon">🏃</span><div className="interest-label">Fitness</div></div>
              <div className="interest-tile"><span className="interest-icon">🎵</span><div className="interest-label">Music</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION (ID: experience) ===== */}
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

            {/* JHU */}
            <div className="timeline-item fade-in">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Junior Full Stack Software Engineer</h3>
                  <div className="timeline-company">Johns Hopkins University (Remote)</div>
                </div>
                <div className="timeline-period"><i className="fas fa-calendar-alt"></i> Sept 2022 - Present</div>
              </div>
              <div className="timeline-description">
                <p>Developing scalable bioinformatics platforms and analyzing multi-omics Big Data.</p>
                <ul>
                  <li>Spearheaded large-scale oncology research integrating 750+ TB of multi-omics Big Data.</li>
                  <li>Architected open-source full-stack platform using Python, R, JS, Docker, and Kubernetes.</li>
                  <li>Engineered ETL pipelines on HPC (Rockfish) using Python, SQL, and ML, cutting analysis time by 40%.</li>
                  <li>Implemented automated data quality pipelines with TensorFlow and Scikit-learn.</li>
                </ul>
              </div>
            </div>

            {/* Outlier */}
            <div className="timeline-item fade-in">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Backend Software Developer Intern</h3>
                  <div className="timeline-company">Outlier (Remote)</div>
                </div>
                <div className="timeline-period"><i className="fas fa-calendar-alt"></i> Mar 2024 - Nov 2024</div>
              </div>
              <div className="timeline-description">
                <p>Optimized AI-generated code and refactored APIs for microservices architecture.</p>
                <ul>
                  <li>Designed and deployed serverless functions (AWS Lambda) reducing infrastructure costs by 30%.</li>
                  <li>Refactored GraphQL and RESTful APIs using Python (FastAPI) and Java (Spring Boot).</li>
                  <li>Conducted rigorous evaluations of AI-generated code, improving model efficiency by 5%.</li>
                </ul>
              </div>
            </div>

            {/* UofT Research */}
            <div className="timeline-item fade-in">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Software Dev Research Assistant</h3>
                  <div className="timeline-company">University of Toronto</div>
                </div>
                <div className="timeline-period"><i className="fas fa-calendar-alt"></i> Sept 2019 - Apr 2024</div>
              </div>
              <div className="timeline-description">
                <ul>
                  <li>Engineered full-stack bioinformatics applications, automating workflows saving 30+ hours weekly.</li>
                  <li>Designed microservices architecture with GraphQL and RESTful APIs over SQL databases.</li>
                  <li>Established DevOps infrastructure using Docker and Kubernetes for HPC deployments.</li>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION (ID: projects) ===== */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <div className="section-label"><i className="fas fa-laptop-code"></i> Featured Work</div>
            <h2 className="section-title">Projects</h2>
            <p className="section-description">Showcasing technical expertise through real-world applications</p>
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
              links={{ repo: 'https://github.com/itssabbir/anomaly-detection', demo: '#' }}
            />
            <ProjectCard 
              title="Genomics Data Pipeline"
              description="Distributed data processing pipeline for analyzing 750+ TB of genomics data using Spark and AWS."
              tags={['Python', 'Spark', 'AWS', 'Bioinformatics']}
              icon="🚀"
              links={{ repo: 'https://github.com/itssabbir/genomics-pipeline' }}
            />
            <ProjectCard 
              title="Real-time Analytics Dashboard"
              description="Interactive dashboard for visualizing network performance metrics using React, D3.js, and WebSockets."
              tags={['React', 'D3.js', 'WebSocket']}
              icon="⚡"
            />
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION (ID: skills) ===== */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-header">
            <div className="section-label"><i className="fas fa-tools"></i> Technical Arsenal</div>
            <h2 className="section-title">Core Skills</h2>
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
                <span className="skill-item"><i className="devicon-c-plain colored"></i> C</span>
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
                <span className="skill-item"><i className="fas fa-exchange-alt"></i> ETL</span>
              </div>
            </div>

            <div className="skill-category fade-in">
              <div className="skill-category-header">
                <div className="skill-category-icon"><i className="fas fa-cloud"></i></div>
                <h3 className="skill-category-title">Cloud & DevOps</h3>
              </div>
              <div className="skill-list">
                <span className="skill-item"><i className="devicon-amazonwebservices-plain-wordmark colored"></i> AWS</span>
                <span className="skill-item"><i className="devicon-docker-plain colored"></i> Docker</span>
                <span className="skill-item"><i className="devicon-kubernetes-plain colored"></i> Kubernetes</span>
                <span className="skill-item"><i className="devicon-terraform-plain colored"></i> Terraform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION (ID: contact) ===== */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-cta fade-in">
            <h3>Let's Build Something Amazing</h3>
            <p>I'm actively seeking opportunities in platform engineering and data infrastructure.</p>
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