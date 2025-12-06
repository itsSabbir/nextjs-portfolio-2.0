/* eslint-disable max-len */
// --- pages/experiences.jsx ---
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

// Tech icon mapping - matches the hero page skills
const TECH_ICONS = {
  // Languages
  'python': 'devicon-python-plain colored',
  'javascript': 'devicon-javascript-plain colored',
  'typescript': 'devicon-typescript-plain colored',
  'java': 'devicon-java-plain colored',
  'c': 'devicon-c-plain colored',
  'c++': 'devicon-cplusplus-plain colored',
  'c/c++': 'devicon-cplusplus-plain colored',
  'r': 'devicon-r-plain colored',
  'bash': 'devicon-bash-plain',
  'sql': 'fas fa-database',
  'advanced sql': 'fas fa-database',
  
  // Data & ML
  'pandas': 'devicon-pandas-original colored',
  'pytorch': 'devicon-pytorch-plain colored',
  'tensorflow': 'devicon-tensorflow-original colored',
  'scikit-learn': 'devicon-python-plain',
  'apache spark': 'devicon-apachespark-plain colored',
  'kafka': 'devicon-apachekafka-plain',
  'apache kafka': 'devicon-apachekafka-plain',
  'airflow': 'fas fa-wind',
  'apache airflow': 'fas fa-wind',
  'machine learning': 'fas fa-brain',
  'ml': 'fas fa-brain',
  
  // Cloud & DevOps
  'aws': 'devicon-amazonwebservices-plain-wordmark colored',
  'gcp': 'devicon-googlecloud-plain colored',
  'docker': 'devicon-docker-plain colored',
  'kubernetes': 'devicon-kubernetes-plain colored',
  'terraform': 'devicon-terraform-plain colored',
  'jenkins': 'devicon-jenkins-plain colored',
  'git': 'devicon-git-plain colored',
  'linux': 'devicon-linux-plain',
  'ci/cd': 'fas fa-infinity',
  
  // Web & Databases
  'react': 'devicon-react-original colored',
  'next.js': 'devicon-nextjs-original',
  'nextjs': 'devicon-nextjs-original',
  'node.js': 'devicon-nodejs-plain colored',
  'nodejs': 'devicon-nodejs-plain colored',
  'postgresql': 'devicon-postgresql-plain colored',
  'postgres': 'devicon-postgresql-plain colored',
  'mysql': 'devicon-mysql-plain colored',
  'mongodb': 'devicon-mongodb-plain colored',
  'redis': 'devicon-redis-plain colored',
  'graphql': 'devicon-graphql-plain colored',
  'rest api': 'fas fa-plug',
  
  // Analytics & Visualization
  'd3.js': 'devicon-d3js-plain colored',
  'd3': 'devicon-d3js-plain colored',
  'jupyter': 'devicon-jupyter-plain colored',
  
  // Tools & Methodologies
  'jira': 'devicon-jira-plain colored',
  'confluence': 'devicon-confluence-plain colored',
  'confluence/jira': 'devicon-confluence-plain colored',
  'agile': 'fas fa-sync-alt',
  
  // Data Engineering specific
  'teradata': 'fas fa-database',
  'sas di': 'fas fa-cogs',
  'etl/elt': 'fas fa-exchange-alt',
  'etl': 'fas fa-exchange-alt',
  'data warehousing': 'fas fa-warehouse',
  'root cause analysis': 'fas fa-search',
  'performance tuning': 'fas fa-tachometer-alt',
  'algorithm design': 'fas fa-project-diagram',
  'data modeling': 'fas fa-sitemap',
  'hpc': 'fas fa-server',
  'microservices': 'fas fa-cubes',
  'bioinformatics': 'fas fa-dna',
  'genomics': 'fas fa-dna',
};

// Get icon class for a tech tag
const getTechIcon = (tag) => {
  const normalizedTag = tag.toLowerCase().trim();
  return TECH_ICONS[normalizedTag] || null;
};

// Skill Tag Component with Icon
const SkillTag = ({ tag }) => {
  const iconClass = getTechIcon(tag);
  
  return (
    <span className="skill-item" style={{ 
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '9999px',
      color: 'var(--text-secondary)',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      margin: '0.25rem'
    }}>
      {iconClass && <i className={iconClass} style={{ fontSize: '1.125rem' }} aria-hidden="true" />}
      {tag}
    </span>
  );
};

// Skills List Component with Icons
const SkillsList = ({ caption, tags }) => {
  if (!tags || tags.length === 0) return null;
  
  return (
    <div style={{ marginTop: '2rem' }}>
      {caption && (
        <span style={{ 
          fontWeight: '700', 
          fontSize: '0.9rem', 
          color: 'var(--accent-secondary)',
          display: 'block',
          marginBottom: '1rem'
        }}>
          {caption}
        </span>
      )}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '0.5rem',
        justifyContent: 'flex-start'
      }}>
        {tags.map((tag, index) => (
          <SkillTag key={`${tag}-${index}`} tag={tag} />
        ))}
      </div>
    </div>
  );
};

function Experiences() {
  // This page compiles Sabbir's detailed professional background,
  // showcasing work experience, notable awards, and educational foundation.
  return (
    <>
      <Head>
        <title>Experience & Achievements | Sabbir Hossain</title>
        <meta
          name="description"
          content="Detailed professional journey of Sabbir Hossain, including roles in software engineering, data science, bioinformatics research, key achievements, awards, and education from the University of Toronto."
        />
      </Head>
      
      {/* Page Header */}
      <div className="container page-heading-container" style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
          <span className="gradient-text">My Journey</span>
        </h1>
        <p style={{ margin: '0 auto', maxWidth: '700px', color: 'var(--text-secondary)' }}>
          A timeline of my professional roles, research contributions, and key achievements.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
        </div>
        <hr className="break-section" style={{ marginTop: '2rem' }} />
      </div>

      <section aria-labelledby="work-experience-heading">
        <h2 id="work-experience-heading" className="sr-only">Work Experience</h2>

        {/* ========================== */}
        {/* === Bell Canada (Full) === */}
        {/* ========================== */}
        <section className="hero job-details" id="bell-canada">
          <div className="container">
            <div className="text-wrapper w-full">
              <h3 className="title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ display: 'block', fontSize: '1.8rem', color: 'var(--accent-primary)' }}>Data Engineer</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Bell Canada (Data Engineering & Artificial Intelligence Team)</span>
                <span style={{ display: 'block', fontSize: '1rem', marginTop: '0.5rem', color: 'var(--accent-secondary)' }}>
                  <i className="fas fa-calendar-alt" style={{ marginRight: '8px' }}></i>June 2025 – Present
                </span>
                <span style={{ display: 'block', fontSize: '0.9rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i>Toronto, Ontario, Canada (Remote)
                </span>
              </h3>

              {/* Impact Summary Box */}
              <div style={{ 
                maxWidth: '850px', 
                margin: '0 auto 2rem auto',
                background: 'linear-gradient(135deg, rgba(174, 0, 1, 0.06), rgba(212, 175, 55, 0.06))',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  marginBottom: '1rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <i className="fas fa-bolt" style={{ color: 'var(--accent-secondary)', fontSize: '1rem' }}></i>
                  <span style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    color: 'var(--accent-secondary)'
                  }}>Impact at a Glance</span>
                </div>
                
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  margin: '0 0 1rem 0'
                }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Primary owner of the Network Ticket Service (NTS) data pipeline</strong> — a mission-critical ETL system integrating 4 enterprise data sources (SmartPath API, Maximo, IPACT, LDAP) into unified analytical reporting for Bell Business Markets.
                </p>

                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.75rem'
                }}>
                  {[
                    { metric: '78,000+', label: 'Records Recovered', icon: '📊' },
                    { metric: '+800%', label: 'Coverage Expansion', icon: '📈' },
                    { metric: '83%', label: 'Query Optimization', icon: '⚡' },
                    { metric: '3 mo', label: 'To Technical Gatekeeper', icon: '🎯' }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                      padding: '0.75rem',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{item.icon}</div>
                      <div style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '700',
                        color: 'var(--accent-primary)',
                        lineHeight: '1.2'
                      }}>{item.metric}</div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>{item.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ 
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem'
                  }}>Key Contributions</div>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem' 
                  }}>
                    {[
                      'Full-stack RCA & data recovery',
                      'Query performance re-architecture',
                      'Stateful sessionization algorithm',
                      'Data warehouse design standards',
                      'Proof-based documentation methodology'
                    ].map((item, idx) => (
                      <span key={idx} style={{
                        padding: '0.35rem 0.75rem',
                        background: 'rgba(174, 0, 1, 0.1)',
                        border: '1px solid rgba(174, 0, 1, 0.3)',
                        borderRadius: '9999px',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)'
                      }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div style={{ maxWidth: '850px', margin: '0 auto' }}>
                <p className="sub-point">
                  <b>Architected and productionized the mission-critical Network Ticket Service (NTS) data pipeline</b> using Python, SAS DI, and advanced SQL. Integrated disparate operational systems (Maximo, SmartPath API event streams) into a Teradata analytical warehouse through multi-stage ETL workflows, schema-versioned loads, and enforceable data contracts across DEV/QA/PROD environments.
                </p>
                <p className="sub-point">
                  <b>Diagnosed and resolved systemic data integrity drift</b> in the NTS pipeline by conducting a full-stack Root Cause Analysis (RCA) to correct a misaligned filtration invariant. Established an ongoing historical data recovery program and executed three staged recasts correcting over 78,000 high-complexity edge-case records, expanding analytical coverage from 1 to 9+ months (+800%) and raising ticket match accuracy to the highest level since system inception.
                </p>
                <p className="sub-point">
                  <b>Re-architected a critical performance anti-pattern</b> by replacing a direct join to a 23-million-row live table with a pre-aggregated static reference design. This optimization reduced query runtime from 12 minutes to 2 minutes (83% improvement) and stabilized nightly SLA compliance.
                </p>
                <p className="sub-point">
                  <b>Engineered a stateful Python algorithm for duration capture and sessionization</b>, refactoring a flawed sequential method into a robust two-pass group-by propagation model. Correctly propagated <code>request_id</code> across event sequences, achieving zero calculation defects in QA validation.
                </p>
                <p className="sub-point">
                  <b>Instituted rigorous data-warehouse design standards</b> by implementing composite UPSERT keys (request_id, ticket_number, CI_number), applying COALESCE/UPPER/TRIM hygiene for joins, and enforcing pre-aggregation patterns for idempotent loads—eliminating data inflation and preserving model granularity.
                </p>
                <p className="sub-point">
                  <b>Standardized KPI logic</b> by isolating all CASE-based derivations in a dedicated calculations extraction layer. Improved maintainability, ensured business-ready metrics, and accelerated peer reviews through clear separation of transformation vs. analytics code.
                </p>
                <p className="sub-point">
                  <b>Promoted to Technical Gatekeeper for the NTS data domain</b> within 3 months. Lead stakeholder meetings, peer code reviews, and architectural audits (defensive coding, modularization) to ensure high-quality production deployments.
                </p>
                <p className="sub-point">
                  <b>Established a rigorous proof-based problem-solving methodology</b>, authoring end-to-end validation and architecture documentation (ERD, DFD, count-by-stage proofs) in Confluence and Jira. This approach de-risked complex implementations, ensured reproducible data flows, and became the team standard for knowledge transfer.
                </p>
                <p className="sub-point">
                  <b>Initiated structured cross-training in Apache Airflow and GCP</b> orchestration concepts to support future pipeline automation and cloud migration initiatives.
                </p>
              </div>

              <div style={{ maxWidth: '850px', margin: '2rem auto 0 auto' }}>
                <SkillsList
                  caption="Key Technologies & Concepts:"
                  tags={[
                    'Python', 
                    'SAS DI', 
                    'Advanced SQL', 
                    'Teradata', 
                    'ETL/ELT', 
                    'Data Warehousing', 
                    'Root Cause Analysis', 
                    'Performance Tuning', 
                    'Algorithm Design', 
                    'Data Modeling', 
                    'Confluence/Jira', 
                    'Apache Airflow', 
                    'GCP'
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="break-section" />

        {/* =================================== */}
        {/* === Johns Hopkins University === */}
        {/* =================================== */}
        <section className="hero job-details" id="johns-hopkins">
          <div className="container">
            <div className="text-wrapper w-full">
              <h3 className="title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ display: 'block', fontSize: '1.8rem', color: 'var(--accent-primary)' }}>Bioinformatics Software Development Research Assistant</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Johns Hopkins University</span>
                <span style={{ display: 'block', fontSize: '1rem', marginTop: '0.5rem', color: 'var(--accent-secondary)' }}>
                  <i className="fas fa-calendar-alt" style={{ marginRight: '8px' }}></i>September 2022 – Present
                </span>
                <span style={{ display: 'block', fontSize: '0.9rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i>Baltimore, Maryland, United States (Remote)
                </span>
              </h3>

              {/* Impact Summary Box */}
              <div style={{ 
                maxWidth: '850px', 
                margin: '0 auto 2rem auto',
                background: 'linear-gradient(135deg, rgba(174, 0, 1, 0.06), rgba(212, 175, 55, 0.06))',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  marginBottom: '1rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <i className="fas fa-bolt" style={{ color: 'var(--accent-secondary)', fontSize: '1rem' }}></i>
                  <span style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    color: 'var(--accent-secondary)'
                  }}>Impact at a Glance</span>
                </div>
                
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  margin: '0 0 1rem 0'
                }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Cross-institutional oncology research</strong> integrating 750+ TB of multi-omics data across 3 cancer types. Built and maintain an open-source bioinformatics platform used by 100+ global researchers. This role grew from my foundational work at University of Toronto.
                </p>

                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.75rem'
                }}>
                  {[
                    { metric: '750+ TB', label: 'Data Integrated', icon: '💾' },
                    { metric: '8', label: 'Novel Biomarkers', icon: '🧬' },
                    { metric: '83%', label: 'Load Time Reduction', icon: '⚡' },
                    { metric: '100+', label: 'Global Researchers', icon: '🌍' }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                      padding: '0.75rem',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{item.icon}</div>
                      <div style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '700',
                        color: 'var(--accent-primary)',
                        lineHeight: '1.2'
                      }}>{item.metric}</div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recognition Banner */}
                <div style={{ 
                  marginTop: '1rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--accent-secondary)' }}>🎤 Harvard NCRC Plenary Speaker</strong> (1 of 12 from 5,000+)
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--accent-secondary)' }}>🏆 ABRCMS Best Oral 2023</strong>
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--accent-secondary)' }}>🏆 ABRCMS Best Poster 2024</strong>
                  </span>
                </div>

                <div style={{ 
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem'
                  }}>Key Contributions</div>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem' 
                  }}>
                    {[
                      'Full-stack bioinformatics platform',
                      'ML pipelines (SVM-RFE, Random Forests)',
                      'HPC infrastructure integration',
                      'Real-time data visualization',
                      'Microservices architecture',
                      '35+ page research manuscript'
                    ].map((item, idx) => (
                      <span key={idx} style={{
                        padding: '0.35rem 0.75rem',
                        background: 'rgba(174, 0, 1, 0.1)',
                        border: '1px solid rgba(174, 0, 1, 0.3)',
                        borderRadius: '9999px',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)'
                      }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div style={{ maxWidth: '850px', margin: '0 auto' }}>
                <p className="sub-point">
                  <b>Spearhead large-scale oncology research projects</b> by integrating 750+ TB of multi-omics Big Data from sources such as DISQOVER, ENCODE, PCAWG, PRIDE, and TCGA. Develop data-driven pipelines in Python, R, and C, contributing to the discovery of 8 novel biomarkers, accelerating validation timelines by 40%, and advancing oncology insights.
                </p>
                <p className="sub-point">
                  <b>Architect and maintain an open-source full stack bioinformatics platform</b> following SOLID principles and microservices architecture, utilizing Python, R, JavaScript, and C with containerization (Docker, Kubernetes). Designed optimized caching strategies, reducing genomic and proteomic analysis load times by 83% and increasing platform adoption across 100+ global researchers.
                </p>
                <p className="sub-point">
                  <b>Engineer scalable data processing pipelines</b> using advanced data structures and algorithms, integrating SQL-based ETL workflows with machine learning models (SVM-RFE, Random Forests) on HPC infrastructure (Rockfish). Leverage scientific computing libraries (MaxQuant, Bioconductor, NumPy, SciPy) to cut genomic analysis time by 40% and boost prediction accuracy by 20%.
                </p>
                <p className="sub-point">
                  <b>Devise automated data quality and anomaly detection pipelines</b> by integrating unsupervised ML (K-Means, DBSCAN) and rule-based heuristics using Python, scikit-learn and TensorFlow. Integrated these into ETL and CI/CD workflows to flag real-time anomalies, boosting data integrity by 30% across large datasets.
                </p>
                <p className="sub-point">
                  <b>Develop interactive data visualization portals</b> using React, Next.js, TypeScript, D3.js, and R Shiny, improving data accessibility and user engagement by 56% through optimized rendering, virtual DOM updates, and real-time WebSockets-based data streaming.
                </p>
                <p className="sub-point">
                  <b>Implement frontend performance optimizations</b> using Next.js SSR, code splitting, and lazy loading, improving page load speeds by 40% and enhancing large-scale data visualization rendering.
                </p>
                <p className="sub-point">
                  <b>Enhance API performance</b> by implementing GraphQL and RESTful API optimizations, introducing API Gateway, query batching, caching, and load balancing, reducing backend request latency by 35%.
                </p>
                <p className="sub-point">
                  <b>Develop and deploy fault-tolerant microservices-based infrastructures</b> integrating Python, C, and Java, unifying HPC workloads with AWS (S3, EC2, Lambda, DynamoDB) for high-throughput sequencing.
                </p>
                <p className="sub-point">
                  <b>Integrate OAuth/Auth0 authentication</b> for secure role-based access control (RBAC) across multi-institutional collaborations, ensuring strict data security compliance.
                </p>
                <p className="sub-point">
                  <b>Apply Test-Driven Development (TDD) principles,</b> maintaining 95%+ test coverage and automating CI/CD pipelines (Git, Jenkins, Docker), increasing deployment reliability and reducing release cycles.
                </p>
                <p className="sub-point">
                  <b>Author a 35+ page research manuscript</b> featuring interactive R Shiny and D3.js data visualizations, published on GitHub and Zenodo to underscore reproducibility and transparency in data science projects.
                </p>
              </div>

              <div style={{ maxWidth: '850px', margin: '2rem auto 0 auto' }}>
                <SkillsList
                  caption="Key Technologies & Concepts:"
                  tags={[
                    'Python', 'R', 'JavaScript', 'TypeScript', 'C', 'React', 'Next.js', 'D3.js', 'Microservices', 'Docker', 'Kubernetes', 'Redis', 'SQL', 'HPC', 'CI/CD', 'Machine Learning', 'TensorFlow', 'Scikit-learn', 'Pandas', 'REST API', 'GraphQL', 'AWS'
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="break-section" />

        {/* =================================== */}
        {/* === University of Toronto === */}
        {/* =================================== */}
        <section className="hero job-details" id="u-of-t-research">
          <div className="container">
            <div className="text-wrapper w-full">
              <h3 className="title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ display: 'block', fontSize: '1.8rem', color: 'var(--accent-primary)' }}>Software Development Research Assistant</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>University of Toronto</span>
                <span style={{ display: 'block', fontSize: '1rem', marginTop: '0.5rem', color: 'var(--accent-secondary)' }}>
                  <i className="fas fa-calendar-alt" style={{ marginRight: '8px' }}></i>September 2019 – April 2024
                </span>
                <span style={{ display: 'block', fontSize: '0.9rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i>Toronto, Ontario, Canada (Hybrid)
                </span>
              </h3>

              {/* Impact Summary Box */}
              <div style={{ 
                maxWidth: '850px', 
                margin: '0 auto 2rem auto',
                background: 'linear-gradient(135deg, rgba(174, 0, 1, 0.06), rgba(212, 175, 55, 0.06))',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  marginBottom: '1rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <i className="fas fa-bolt" style={{ color: 'var(--accent-secondary)', fontSize: '1rem' }}></i>
                  <span style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    color: 'var(--accent-secondary)'
                  }}>Impact at a Glance</span>
                </div>
                
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  margin: '0 0 1rem 0'
                }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Where my research career began.</strong> Built full-stack bioinformatics applications automating workflows across 7 wet lab research teams. This foundational work led to the cross-institutional collaboration with Johns Hopkins University.
                </p>

                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.75rem'
                }}>
                  {[
                    { metric: '30+', label: 'Hours Saved Weekly', icon: '⏱️' },
                    { metric: '7', label: 'Research Teams', icon: '👥' },
                    { metric: '50%', label: 'Setup Time Reduction', icon: '🚀' },
                    { metric: '45%', label: 'UI Render Improvement', icon: '⚡' }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                      padding: '0.75rem',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{item.icon}</div>
                      <div style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '700',
                        color: 'var(--accent-primary)',
                        lineHeight: '1.2'
                      }}>{item.metric}</div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>{item.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ 
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem'
                  }}>Key Contributions</div>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem' 
                  }}>
                    {[
                      'Multi-language development (Python, R, C++, Java)',
                      'Microservices & GraphQL APIs',
                      'Docker/Kubernetes DevOps',
                      'Molecular modeling & 3D analysis',
                      'Agile methodology adoption'
                    ].map((item, idx) => (
                      <span key={idx} style={{
                        padding: '0.35rem 0.75rem',
                        background: 'rgba(174, 0, 1, 0.1)',
                        border: '1px solid rgba(174, 0, 1, 0.3)',
                        borderRadius: '9999px',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)'
                      }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div style={{ maxWidth: '850px', margin: '0 auto' }}>
                <p className="sub-point">
                  <b>Engineered multiple full-stack bioinformatics applications</b> using Python, R, C, C++, and Java, automating workflows that saved 30+ hours weekly and enhancing lab efficiency across 7 research teams. Applied object-oriented programming (OOP) methodologies to improve oncology, genomics, and protein structure-function analysis.
                </p>
                <p className="sub-point">
                  <b>Designed and integrated a microservices architecture</b> with GraphQL and RESTful APIs, adhering to SOLID design principles, and incorporating SQL (PostgreSQL, MySQL) databases to manage structured bioinformatics data from public repositories (EBI, NCBI). Optimized query performance through batch processing workflows, reducing API response times by 20% and improving data retrieval efficiency by 25%.
                </p>
                <p className="sub-point">
                  <b>Established and maintained DevOps infrastructure</b> using Docker for containerization and Kubernetes for orchestration, reducing environment setup time by 50% and enabling seamless deployment across high-performance computing (HPC) clusters for resource-intensive computations.
                </p>
                <p className="sub-point">
                  <b>Developed frontend optimization strategies</b> using Next.js, Tailwind CSS, and WebAssembly, reducing UI render times by 45% and improving real-time data visualization responsiveness.
                </p>
                <p className="sub-point">
                  <b>Specialized in molecular modeling and 3D structural analysis</b> using UCSF ChimeraX, Python, C++, and Shell scripting to automate biomolecular structure processing. Implemented parallelized computations, improving protein structure analysis accuracy by 20%.
                </p>
                <p className="sub-point">
                  <b>Applied Agile methodologies (Scrum/Kanban)</b> to enhance team collaboration, ensuring scalable system architecture, reliable deployments, and continuous integration/delivery (CI/CD) practices.
                </p>
                <p className="sub-point">
                  <b>Conducted advanced bioinformatics analyses,</b> including gene set enrichment analysis, mutation impact studies, and predictive modeling using Python and R, contributing to cutting-edge oncology research.
                </p>
              </div>

              <div style={{ maxWidth: '850px', margin: '2rem auto 0 auto' }}>
                <SkillsList
                  caption="Key Technologies & Concepts:"
                  tags={[
                    'Python', 'R', 'C/C++', 'Java', 'Next.js', 'PostgreSQL', 'MySQL', 'GraphQL', 'Docker', 'Kubernetes', 'HPC', 'Bioinformatics', 'Genomics', 'Agile'
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <hr className="break-section double" />

      {/* ========================== */}
      {/* Awards Section             */}
      {/* ========================== */}
      <section className="hero awards-section" id="awards">
        <div className="container">
          <h2 className="title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="gradient-text">Awards & Achievements</span>
          </h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Award Item Component */}
            {/* Plenary Speaker - Harvard */}
            <div className="award-item" style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'var(--glass-blur)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>🎤</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: 'var(--accent-secondary)', 
                    fontSize: '1.25rem', 
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    marginTop: 0
                  }}>
                    Plenary Speaker
                  </h3>
                  <p style={{ 
                    color: 'var(--accent-primary)', 
                    fontSize: '1rem', 
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    National Collegiate Research Conference (NCRC) — Harvard University
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    flexWrap: 'wrap',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <span><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>2024</span>
                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i>Cambridge, Massachusetts, United States</span>
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    Selected as 1 of only 12 plenary speakers from over 5,000 national applicants. Delivered keynote presentation on applying machine learning techniques to integrate transcriptomics and proteomics data for glioblastoma research.
                  </p>
                </div>
              </div>
            </div>

            {/* Best Oral Presentation - ABRCMS 2023 */}
            <div className="award-item" style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'var(--glass-blur)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>🏆</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: 'var(--accent-secondary)', 
                    fontSize: '1.25rem', 
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    marginTop: 0
                  }}>
                    Best Detailed Oral Presentation Award
                  </h3>
                  <p style={{ 
                    color: 'var(--accent-primary)', 
                    fontSize: '1rem', 
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    Annual Biomedical Research Conference for Minoritized Scientists (ABRCMS) — Computational and Systems Biology Division
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    flexWrap: 'wrap',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <span><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>2023</span>
                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i>Phoenix, Arizona, United States</span>
                    <span><i className="fas fa-award" style={{ marginRight: '6px' }}></i>$2,500 Travel Award</span>
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    Awarded top presenter in the Computational and Systems Biology division, selected from 80 oral presenters at a conference with over 3,500 attendees. Recognized with a $2,500 award for travel and accommodation.
                  </p>
                </div>
              </div>
            </div>

            {/* Best Poster Presentation - ABRCMS 2024 */}
            <div className="award-item" style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'var(--glass-blur)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>🏆</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: 'var(--accent-secondary)', 
                    fontSize: '1.25rem', 
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    marginTop: 0
                  }}>
                    Best Poster Presentation Award
                  </h3>
                  <p style={{ 
                    color: 'var(--accent-primary)', 
                    fontSize: '1rem', 
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    Annual Biomedical Research Conference for Minoritized Scientists (ABRCMS) — Graduate Division
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    flexWrap: 'wrap',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <span><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>2024</span>
                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i>Pittsburgh, Pennsylvania, United States</span>
                    <span><i className="fas fa-award" style={{ marginRight: '6px' }}></i>$2,500 Travel Award</span>
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    Received top honors for graduate-level poster presentation, competing among 150+ graduate presenters. Presented research on advancing open-source bioinformatics platforms. Recognized with a $2,500 award for travel and accommodation.
                  </p>
                </div>
              </div>
            </div>

            {/* Poster Presentation - Harvard NCRC */}
            <div className="award-item" style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'var(--glass-blur)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>📜</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: 'var(--accent-secondary)', 
                    fontSize: '1.25rem', 
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    marginTop: 0
                  }}>
                    Poster Presentation
                  </h3>
                  <p style={{ 
                    color: 'var(--accent-primary)', 
                    fontSize: '1rem', 
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    National Collegiate Research Conference (NCRC) — Harvard University
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    flexWrap: 'wrap',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <span><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>2024</span>
                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i>Cambridge, Massachusetts, United States</span>
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    Presented research poster detailing computational approaches for cancer biomarker identification using integrated multi-omics analysis and machine learning methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Friends of Arts and Science Award 2024 */}
            <div className="award-item" style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'var(--glass-blur)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>🎓</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: 'var(--accent-secondary)', 
                    fontSize: '1.25rem', 
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    marginTop: 0
                  }}>
                    Friends of Arts and Science Award
                  </h3>
                  <p style={{ 
                    color: 'var(--accent-primary)', 
                    fontSize: '1rem', 
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    University of Toronto — Faculty of Arts & Science
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    flexWrap: 'wrap',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <span><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>2024</span>
                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i>Toronto, Ontario, Canada</span>
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    Awarded for academic excellence in Computer Sciences and Physical & Life Sciences disciplines during the 2023-2024 academic year.
                  </p>
                </div>
              </div>
            </div>

            {/* Friends of Arts and Science Award 2023 */}
            <div className="award-item" style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'var(--glass-blur)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>🎓</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: 'var(--accent-secondary)', 
                    fontSize: '1.25rem', 
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    marginTop: 0
                  }}>
                    Friends of Arts and Science Award
                  </h3>
                  <p style={{ 
                    color: 'var(--accent-primary)', 
                    fontSize: '1rem', 
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    University of Toronto — Faculty of Arts & Science
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    flexWrap: 'wrap',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <span><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>2023</span>
                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i>Toronto, Ontario, Canada</span>
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    Awarded for academic excellence in Computer Sciences and Physical & Life Sciences disciplines during the 2022-2023 academic year.
                  </p>
                </div>
              </div>
            </div>

            {/* Friends of Arts and Science Award 2022 */}
            <div className="award-item" style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'var(--glass-blur)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>🎓</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: 'var(--accent-secondary)', 
                    fontSize: '1.25rem', 
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    marginTop: 0
                  }}>
                    Friends of Arts and Science Award
                  </h3>
                  <p style={{ 
                    color: 'var(--accent-primary)', 
                    fontSize: '1rem', 
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    University of Toronto — Faculty of Arts & Science
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    flexWrap: 'wrap',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <span><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>2022</span>
                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i>Toronto, Ontario, Canada</span>
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    Awarded for academic excellence in Computer Sciences and Physical & Life Sciences disciplines during the 2021-2022 academic year.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="break-section" />

      {/* ========================== */}
      {/* Education Section          */}
      {/* ========================== */}
      <section className="hero education-section" id="education">
        <div className="container">
          <h2 className="title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="gradient-text">Education</span>
          </h2>
          
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--glass-blur)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '2.5rem'
          }}>
            {/* University Header */}
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <h3 style={{ 
                fontSize: '1.8rem', 
                color: 'var(--accent-primary)',
                marginBottom: '0.25rem',
                marginTop: 0,
                textAlign: 'center'
              }}>
                University of Toronto
              </h3>
              <p style={{ 
                fontStyle: 'italic', 
                color: 'var(--text-muted)', 
                marginTop: '0', 
                marginBottom: '0',
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                St. George Campus
              </p>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: 'var(--text-muted)', 
                marginTop: '0.5rem',
                fontSize: '0.9rem'
              }}>
                <i className="fas fa-map-marker-alt"></i>
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>

            {/* Degree Info */}
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--glass-border)'
            }}>
              <p style={{ 
                margin: '0.5rem 0',
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                textAlign: 'center'
              }}>
                Bachelor of Science (Honours)
              </p>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                margin: '0.5rem 0', 
                fontSize: '0.95rem', 
                color: 'var(--text-muted)'
              }}>
                <i className="fas fa-graduation-cap"></i>
                <span>Graduated June 2024</span>
              </div>
            </div>

            {/* Program Details */}
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--glass-border)'
            }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                margin: '0.75rem 0',
                fontSize: '1.1rem',
                color: 'var(--accent-secondary)',
                fontWeight: '600'
              }}>
                <i className="fas fa-star"></i>
                <span>Specialist: Computer Science, Bioinformatics & Computational Biology</span>
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                margin: '0.75rem 0',
                fontSize: '1rem',
                color: 'var(--text-secondary)'
              }}>
                <i className="fas fa-bookmark"></i>
                <span>Minor: Immunology</span>
              </div>
              <p style={{ 
                margin: '1.5rem 0 0 0',
                fontSize: '1.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textAlign: 'center'
              }}>
                Major GPA: 3.96 / 4.0
              </p>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 style={{ 
                color: 'var(--accent-secondary)', 
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}>
                <i className="fas fa-book"></i>
                <span>Relevant Coursework</span>
              </h4>
              
              {/* Computer Science */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ 
                  color: 'var(--accent-primary)', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  marginTop: 0
                }}>
                  Computer Science
                </h5>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '0.5rem'
                }}>
                  {[
                    { code: 'CSC108H1', name: 'Introduction to Computer Programming' },
                    { code: 'CSC148H1', name: 'Introduction to Computer Science' },
                    { code: 'CSC165H1', name: 'Mathematical Expression and Reasoning for Computer Science' },
                    { code: 'CSC207H1', name: 'Software Design' },
                    { code: 'CSC209H1', name: 'Software Tools and Systems Programming' },
                    { code: 'CSC236H1', name: 'Introduction to the Theory of Computation' },
                    { code: 'CSC263H1', name: 'Data Structures and Analysis' },
                    { code: 'CSC373H1', name: 'Algorithm Design and Analysis' },
                    { code: 'CSC384H1', name: 'Introduction to Artificial Intelligence' }
                  ].map((course, idx) => (
                    <li key={idx} style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fas fa-chevron-right" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', flexShrink: 0 }}></i>
                      <span><strong style={{ color: 'var(--accent-secondary)' }}>{course.code}</strong> — {course.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bioinformatics & Computational Biology */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ 
                  color: 'var(--accent-primary)', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  marginTop: 0
                }}>
                  Bioinformatics & Computational Biology
                </h5>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '0.5rem'
                }}>
                  {[
                    { code: 'BCH441H1', name: 'Bioinformatics' },
                    { code: 'BCB410H1', name: 'Applied Bioinformatics' },
                    { code: 'BCB420H1', name: 'Computational Systems Biology' },
                    { code: 'BCB330Y1', name: 'Bioinformatics Research Project' },
                    { code: 'BCB430Y1', name: 'Advanced Bioinformatics Research Project' },
                    { code: 'CSB352H1', name: 'Bioinformatic Methods' }
                  ].map((course, idx) => (
                    <li key={idx} style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fas fa-chevron-right" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', flexShrink: 0 }}></i>
                      <span><strong style={{ color: 'var(--accent-secondary)' }}>{course.code}</strong> — {course.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statistics & Probability */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ 
                  color: 'var(--accent-primary)', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  marginTop: 0
                }}>
                  Statistics & Probability
                </h5>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '0.5rem'
                }}>
                  {[
                    { code: 'STA247H1', name: 'Probability with Computer Applications' },
                    { code: 'STA237H1', name: 'Probability, Statistics and Data Analysis I' }
                  ].map((course, idx) => (
                    <li key={idx} style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fas fa-chevron-right" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', flexShrink: 0 }}></i>
                      <span><strong style={{ color: 'var(--accent-secondary)' }}>{course.code}</strong> — {course.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mathematics */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ 
                  color: 'var(--accent-primary)', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  marginTop: 0
                }}>
                  Mathematics
                </h5>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '0.5rem'
                }}>
                  {[
                    { code: 'MAT135H1', name: 'Calculus I (A)' },
                    { code: 'MAT136H1', name: 'Calculus I (B)' }
                  ].map((course, idx) => (
                    <li key={idx} style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fas fa-chevron-right" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', flexShrink: 0 }}></i>
                      <span><strong style={{ color: 'var(--accent-secondary)' }}>{course.code}</strong> — {course.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Biochemistry */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ 
                  color: 'var(--accent-primary)', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  marginTop: 0
                }}>
                  Biochemistry
                </h5>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '0.5rem'
                }}>
                  {[
                    { code: 'BCH210H1', name: 'Biochemistry I: Proteins, Lipids and Metabolism' },
                    { code: 'BCH311H1', name: 'Biochemistry II: Nucleic Acids and Biological Information Flow' }
                  ].map((course, idx) => (
                    <li key={idx} style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fas fa-chevron-right" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', flexShrink: 0 }}></i>
                      <span><strong style={{ color: 'var(--accent-secondary)' }}>{course.code}</strong> — {course.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Immunology (Minor) */}
              <div>
                <h5 style={{ 
                  color: 'var(--accent-primary)', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  marginTop: 0
                }}>
                  Immunology (Minor)
                </h5>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '0.5rem'
                }}>
                  {[
                    { code: 'IMM250H1', name: 'The Immune System and Infectious Disease' },
                    { code: 'IMM340H1', name: 'Fundamental Immunology' },
                    { code: 'IMM350H1', name: 'The Immune System in Action' }
                  ].map((course, idx) => (
                    <li key={idx} style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fas fa-chevron-right" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', flexShrink: 0 }}></i>
                      <span><strong style={{ color: 'var(--accent-secondary)' }}>{course.code}</strong> — {course.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        <div className="container">
          <div className="contact-cta fade-in">
            <h3>Interested in Working Together?</h3>
            <p>I'm actively seeking opportunities in data engineering, platform engineering, and software development.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/" className="btn btn-secondary">
                <i className="fas fa-home"></i> Back to Home
              </Link>
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

export default Experiences;