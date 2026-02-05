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
  'bigquery': 'devicon-googlecloud-plain colored',
  'cloud composer': 'devicon-googlecloud-plain colored',
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
  'microstrategy': 'fas fa-chart-bar',
  
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
  'dimensional modeling': 'fas fa-sitemap',
  'snowflake schema': 'fas fa-snowflake',
  'hpc': 'fas fa-server',
  'microservices': 'fas fa-cubes',
  'bioinformatics': 'fas fa-dna',
  'genomics': 'fas fa-dna',
  'orchestration': 'fas fa-wind',
  'dag': 'fas fa-project-diagram',
  'data quality': 'fas fa-check-double',
  'observability': 'fas fa-eye',
  'stakeholder management': 'fas fa-users',
  'documentation': 'fas fa-file-alt',
  'production ownership': 'fas fa-shield-alt',
  'ldap': 'fas fa-address-book',
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
          content="Detailed professional journey of Sabbir Hossain, including roles in data platform engineering, data engineering, bioinformatics research, key achievements, awards, and education from the University of Toronto."
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

        {/* ======================================== */}
        {/* === Bell Canada - Data Platform Engineer === */}
        {/* ======================================== */}
        <section className="hero job-details" id="bell-platform-engineer">
          <div className="container">
            <div className="text-wrapper w-full">
              <h3 className="title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ display: 'block', fontSize: '1.8rem', color: 'var(--accent-primary)' }}>Data Platform Engineer</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Bell Canada (Data Engineering & Artificial Intelligence Team)</span>
                <span style={{ display: 'block', fontSize: '1rem', marginTop: '0.5rem', color: 'var(--accent-secondary)' }}>
                  <i className="fas fa-calendar-alt" style={{ marginRight: '8px' }}></i>December 2025 – Present
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
                  <strong style={{ color: 'var(--text-primary)' }}>Promoted after 6 months to lead enterprise analytics platform delivery.</strong> Now owning the full 78-attribute MicroStrategy analytics platform integrating four operational systems, making architectural decisions, and serving as the canonical source of institutional knowledge across three domains during leadership transition.
                </p>

                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.75rem'
                }}>
                  {[
                    { metric: '78', label: 'Attributes Delivered', icon: '📊' },
                    { metric: '4', label: 'Systems Integrated', icon: '🔗' },
                    { metric: '12', label: 'Pipelines Maintained', icon: '🔧' },
                    { metric: '3', label: 'Domains Owned', icon: '🎯' }
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
                      'Enterprise analytics platform delivery',
                      'Architectural decision-making',
                      'Production system ownership',
                      'Cross-domain technical investigation',
                      'Engineering workflow governance',
                      'Cloud migration preparation'
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
                  <b>Shipped a 78-attribute analytics platform in MicroStrategy (business intelligence platform)</b> integrating four operational systems: operations API (SmartPath), asset management (Maximo), billing (IPACT), and directory services (LDAP). Built derived metrics, conditional formatting, and cross-filter interactivity; deployed to production with director sign-off via a structured Dev to Pre-Prod to Prod migration pipeline.
                </p>
                <p className="sub-point">
                  <b>Reduced build cost and risk through strategic architectural decision-making</b> by choosing a SQL view over a physical fact table for joining event and request data with calculated duration metrics. Blocked out-of-scope integration requests and expanded the design from 13 columns to 78 attributes to eliminate recurring ad hoc request cycles.
                </p>
                <p className="sub-point">
                  <b>Maintained 12 dependent data pipelines as backup owner</b> for the production operations API (SmartPath) during a company-wide code embargo. Diagnosed and resolved critical ETL failures in error staging tables and business intelligence metric misconfigurations under time pressure without senior engineer availability.
                </p>
                <p className="sub-point">
                  <b>Ramped from zero domain knowledge to full system comprehension within 2 weeks</b> for a five-system data pipeline spanning Salesforce to billing to operations (CS Attack pipeline). Built a repeatable metadata discovery method using the Teradata system catalog (DBC.Columns) to locate target fields, validate source table population rates, and confirm join feasibility with evidence.
                </p>
                <p className="sub-point">
                  <b>Co-authored the team engineering workflow standard</b>, formalizing separation of Investigation (feasibility analysis, validation) and Implementation (code, test, deploy) phases. Established tracking protocols, stakeholder scope boundaries, and a mandatory front door ticket process for budget accountability.
                </p>
                <p className="sub-point">
                  <b>Became the canonical source of institutional knowledge across three domains</b> (NTS, SmartPath, CS Attack) during a leadership transition. Refactored team documentation into an Executive Summary plus Technical Appendix format and established a Visual-First methodology for director-level reporting.
                </p>
                <p className="sub-point">
                  <b>Supporting Q1 2026 migration to Google Cloud Platform (GCP) and BigQuery</b>, contributing to the architectural pivot from legacy Teradata wide tables to a snowflake schema design pattern. Preparing a pipeline refactoring roadmap from SAS Data Integration Studio (legacy ETL tool) to cloud-native orchestration using directed acyclic graphs (DAGs) on Cloud Composer.
                </p>
              </div>

              <div style={{ maxWidth: '850px', margin: '2rem auto 0 auto' }}>
                <SkillsList
                  caption="Key Technologies & Concepts:"
                  tags={[
                    'MicroStrategy',
                    'Python', 
                    'SQL', 
                    'SAS DI', 
                    'Teradata',
                    'Data Warehousing',
                    'Teradata',
                    'Data Modeling',
                    'Dimensional Modeling',
                    'Snowflake Schema',
                    'ETL',
                    'Orchestration',
                    'DAG',
                    'Cloud Composer',
                    'BigQuery',
                    'GCP',
                    'Data Quality',
                    'Observability',
                    'Stakeholder Management',
                    'Documentation',
                    'Production Ownership'
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="break-section" />

        {/* ======================================== */}
        {/* === Bell Canada - Data Engineer ======== */}
        {/* ======================================== */}
        <section className="hero job-details" id="bell-data-engineer">
          <div className="container">
            <div className="text-wrapper w-full">
              <h3 className="title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ display: 'block', fontSize: '1.8rem', color: 'var(--accent-primary)' }}>Data Engineer</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Bell Canada (Data Engineering & Artificial Intelligence Team)</span>
                <span style={{ display: 'block', fontSize: '1rem', marginTop: '0.5rem', color: 'var(--accent-secondary)' }}>
                  <i className="fas fa-calendar-alt" style={{ marginRight: '8px' }}></i>June 2025 – November 2025
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
                  <strong style={{ color: 'var(--text-primary)' }}>Primary owner of the Network Ticket Service (NTS) data pipeline</strong> — a mission-critical ETL system integrating 4 enterprise data sources (SmartPath API, Maximo, IPACT, LDAP) into unified analytical reporting for Bell Business Markets. Promoted to Data Platform Engineer after 6 months.
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

                {/* Promotion Banner */}
                <div style={{ 
                  marginTop: '1rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: '#22c55e' }}>🚀 Promoted to Data Platform Engineer</strong> after 6 months
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
                  <b>Built and productionized the mission-critical Network Ticket Service (NTS) data pipeline</b> on Teradata using a three-tier ETL and ELT architecture: staging, warehouse, and analysis layers. Integrated four operational systems including REST API event streams, legacy enterprise resource planning (ERP), billing, and directory services (LDAP) using Python and SAS Data Integration, enforcing data contracts and Kimball-style dimensional modeling patterns transferable to Snowflake, BigQuery, and Amazon Redshift.
                </p>
                <p className="sub-point">
                  <b>Built a stateful sessionization algorithm in Python</b> to fix event sequencing defects, refactoring a flawed sequential method into a robust two-pass group-by propagation model. Achieved deterministic mapping across distributed agent sessions by identifying anchor events and backfilling request identifiers to preceding and succeeding events.
                </p>
                <p className="sub-point">
                  <b>Reduced query latency by 83% (12 minutes to 2 minutes)</b> on a join over 23 million rows by replacing dynamic runtime computation with a materialized pre-aggregation layer. Eliminated production timeouts and stabilized nightly SLA compliance through query optimization and static reference architecture.
                </p>
                <p className="sub-point">
                  <b>Expanded analytical coverage by 800% (1 month to 9+ months)</b> by running a full root cause analysis (RCA) on a hardcoded 30-day lookback filter causing systemic data drift. Executed a historical recovery program recasting 28,000+ and 50,000+ records, raising ticket match accuracy to the highest level since system inception.
                </p>
                <p className="sub-point">
                  <b>Fixed historical attribution defects</b> by implementing slowly changing dimension Type 2 (SCD Type 2) temporal joins on creation date to resolve employee hierarchy changes against directory services data. Replaced volatile login identifiers with a stable natural key (agent email) to preserve data lineage integrity for historical reporting.
                </p>
                <p className="sub-point">
                  <b>Prevented duplicate data during retries</b> by enforcing idempotency and atomic writes via composite upsert keys (request, ticket, and configuration item identifiers). Applied COALESCE, UPPER, and TRIM sanitization for all join conditions and enforced pre-aggregation patterns, preserving model granularity across development, quality assurance, and production environments.
                </p>
                <p className="sub-point">
                  <b>Refactored monolithic SQL into modular clean and calculate transformation stages</b>, a pattern analogous to dbt staging and marts. Created a unified view abstraction layer merging legacy and modern structures, enabling zero-downtime migration for downstream business intelligence consumers and accelerating peer reviews through clear separation of transformation and analytics code.
                </p>
                <p className="sub-point">
                  <b>Built a Python and Apache Airflow observability module</b> with configuration-driven validation checks orchestrated via DAG modules across 12+ pipelines. Reduced debugging time by 60% and prevented 15+ monthly data quality incidents through automated schema validation, anomaly detection, and threshold alerting for critical SLAs.
                </p>
                <p className="sub-point">
                  <b>Promoted to Technical Gatekeeper within 3 months</b> to govern the domain by enforcing defensive coding standards. Authored end-to-end validation documents including entity relationship diagrams (ERDs), data flow diagrams, and count-by-stage proofs, establishing the team standard for peer review and knowledge transfer.
                </p>
                <p className="sub-point">
                  <b>Led requirements gathering and technical feasibility assessments</b> for new data pipeline initiatives. Translated business needs into technical architectures and implementation roadmaps by facilitating cross-functional alignment sessions with stakeholders to define scope, deliverables, and success metrics.
                </p>
                <p className="sub-point">
                  <b>Built visualizations and presented pipeline performance and data quality metrics</b> to directors, team leads, and business intelligence analysts. Drove buy-in for platform modernization initiatives through data-driven executive reporting.
                </p>
              </div>

              <div style={{ maxWidth: '850px', margin: '2rem auto 0 auto' }}>
                <SkillsList
                  caption="Key Technologies & Concepts:"
                  tags={[
                    'Python', 
                    'SQL', 
                    'SAS DI', 
                    'Teradata', 
                    'ETL/ELT', 
                    'Data Warehousing', 
                    'Dimensional Modeling',
                    'SCD Type 2',
                    'Root Cause Analysis', 
                    'Performance Tuning', 
                    'Algorithm Design', 
                    'Data Modeling',
                    'Apache Airflow',
                    'DAG',
                    'Data Quality',
                    'Observability',
                    'Confluence/Jira'
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
                  <b>Reduced analysis load times by 83%</b> through optimized caching on a full-stack bioinformatics platform supporting more than 100 global researchers. Built the platform using Python, R, JavaScript, and C with microservices architecture, SOLID principles, and Docker containerization.
                </p>
                <p className="sub-point">
                  <b>Engineered scalable ETL pipelines processing over 750 terabytes of multi-omics data</b> on high-performance computing (HPC) clusters. Accelerated biomarker discovery by 40% and reduced analysis time by 40% using Python, R, SQL, and machine learning models including Support Vector Machine Recursive Feature Elimination (SVM-RFE) and Random Forest.
                </p>
                <p className="sub-point">
                  <b>Improved data integrity by 30%</b> by implementing automated data quality checks and anomaly detection using unsupervised machine learning (K-Means, DBSCAN) with TensorFlow within continuous integration and continuous deployment (CI/CD) pipelines. Validated biomarker analysis software using TensorFlow, Keras, and Scikit-learn.
                </p>
                <p className="sub-point">
                  <b>Built interactive data visualization dashboards</b> for molecular modeling and educational use using Shiny, React, and D3.js. Improved usability and accessibility for researchers working with complex genomic datasets.
                </p>
                <p className="sub-point">
                  <b>Developed and optimized REST and GraphQL APIs</b> to support real-time data access and model simulations across research modules. Enabled seamless integration between data processing pipelines and frontend applications.
                </p>
                <p className="sub-point">
                  <b>Configured AWS environments</b> including Amazon Elastic Compute Cloud (EC2) and Amazon Simple Storage Service (S3) and automated testing and deployment workflows with GitHub Actions. Improved reliability and collaboration across development teams through CI/CD automation.
                </p>
                <p className="sub-point">
                  <b>Applied secure data management and governance practices</b> to ensure compliance with institutional privacy and research ethics standards. Maintained data lineage documentation for audit trails.
                </p>
                <p className="sub-point">
                  <b>Collaborated with cross-functional experts</b> including oncologists and statisticians to align computational workflows with research goals. Mentored peers on high-performance computing, reproducible software practices, and batch processing patterns.
                </p>
                <p className="sub-point">
                  <b>Authored a 35+ page research manuscript</b> featuring interactive R Shiny and D3.js data visualizations, published on GitHub and Zenodo to underscore reproducibility and transparency in data science projects.
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
                  <b>Reduced analysis effort by more than 30 hours per week across 7 research teams</b> by engineering full-stack bioinformatics platforms. Built automation using Python, R, C, and Java with object-oriented programming patterns to streamline lab workflows.
                </p>
                <p className="sub-point">
                  <b>Owned the full software development life cycle (SDLC)</b> including requirements, architecture, implementation, testing, deployment, and maintenance. Translated multidisciplinary research requirements into production-grade software solutions.
                </p>
                <p className="sub-point">
                  <b>Cut setup and configuration time by 50%</b> by implementing Docker-based DevOps workflows to eliminate environment drift. Enabled reproducible and scalable computation across research environments.
                </p>
                <p className="sub-point">
                  <b>Improved user interface render times by 45%</b> for large genomic datasets by optimizing data visualization performance in Next.js and Tailwind CSS. Enhanced research usability through frontend performance tuning.
                </p>
                <p className="sub-point">
                  <b>Led Agile Scrum adoption and mentored a team of 5 junior developers.</b> Increased throughput and strengthened cross-team collaboration through structured sprint planning and retrospectives.
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
            <p>I'm actively seeking opportunities in data platform engineering, data engineering, and software development.</p>
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