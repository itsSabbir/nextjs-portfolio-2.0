/* eslint-disable max-len */
// --- pages/experiences.jsx ---
import Head from 'next/head';
// import Layout from '../components/Layout'; // REMOVED to prevent double header/footer
import TagList from '../components/TagList';

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
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>My Journey</h1>
        <p style={{ margin: '0 auto', maxWidth: '700px' }}>
          A timeline of my professional roles, research contributions, and key achievements.
        </p>
        <hr className="break-section" />
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
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Bell Canada (Data Engineering & AI Team)</span>
                <span style={{ display: 'block', fontSize: '1rem', marginTop: '0.5rem', color: 'var(--accent-secondary)' }}>Jun 2025 – Present | Remote</span>
              </h3>
              
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
                <TagList
                  caption="Key Tech & Concepts:"
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
                <span style={{ display: 'block', fontSize: '1rem', marginTop: '0.5rem', color: 'var(--accent-secondary)' }}>Sept 2022 – Present | Remote</span>
              </h3>
              
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
                <TagList
                  caption="Key Tech & Concepts:"
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
        {/* === Outlier (Commented Out) === */}
        {/* =================================== */}
        {/* <section className="hero job-details" id="outlier">
          <div className="container">
            <div className="text-wrapper w-full">
              <h3 className="title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ display: 'block', fontSize: '1.8rem', color: 'var(--accent-primary)' }}>Backend Software Developer Intern</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Outlier</span>
                <span style={{ display: 'block', fontSize: '1rem', marginTop: '0.5rem', color: 'var(--accent-secondary)' }}>Mar 2024 – Nov 2024 | Remote</span>
              </h3>
              
              <div style={{ maxWidth: '850px', margin: '0 auto' }}>
                <p className="sub-point">
                  <b>Developed and optimized AI-generated code</b> using Python, Java, and C, enhancing model efficiency by 5% and reducing code errors by 10% through advanced data structures and algorithmic optimizations.
                </p>
                <p className="sub-point">
                  <b>Designed and deployed serverless computing functions</b> using AWS Lambda and API Gateway, contributing to infrastructure cost reductions of 30% and optimized execution time for on-demand tasks.
                </p>
                <p className="sub-point">
                  <b>Built and refactored GraphQL and RESTful APIs</b> with Python (FastAPI, Flask), Java (Spring Boot), and Node.js, implementing query batching, caching, and API Gateway integration. Refactored monolithic apps into microservices to enhance performance, scalability, and maintainability.
                </p>
                <p className="sub-point">
                  <b>Collaborated on training generative AI models</b> in software engineering, data analysis, and machine learning; implemented unit and integration tests to ensure model reliability and validity.
                </p>
                <p className="sub-point">
                  <b>Assisted in debugging and optimizing production code</b> under senior engineers' guidance, identifying bottlenecks and improving performance by 20%.
                </p>
                <p className="sub-point">
                  <b>Conducted rigorous evaluations and enhancements of AI-generated code</b>, increasing AI model performance by 3% while ensuring strict adherence to industry standards and best practices.
                </p>
              </div>

              <div style={{ maxWidth: '850px', margin: '2rem auto 0 auto' }}>
                <TagList
                  caption="Key Tech & Concepts:"
                  tags={[
                    'Python', 'Java', 'C', 'FastAPI', 'Flask', 'Spring Boot', 'Node.js', 'GraphQL', 'REST API', 'AWS Lambda', 'Microservices', 'Generative AI', 'Agile'
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
        <hr className="break-section" />
        */}

        {/* =================================== */}
        {/* === University of Toronto === */}
        {/* =================================== */}
        <section className="hero job-details" id="u-of-t-research">
          <div className="container">
            <div className="text-wrapper w-full">
              <h3 className="title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ display: 'block', fontSize: '1.8rem', color: 'var(--accent-primary)' }}>Software Development Research Assistant</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>University of Toronto</span>
                <span style={{ display: 'block', fontSize: '1rem', marginTop: '0.5rem', color: 'var(--accent-secondary)' }}>Sept 2019 - Apr 2024 | Hybrid</span>
              </h3>
              
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
                <TagList
                  caption="Key Tech & Concepts:"
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
          <h2 className="title" style={{ textAlign: 'center' }}>Awards & Achievements</h2>
          <ul className="awards-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <li>
              <b>Plenary Speaker, National Collegiate Research Conference (NCRC) - Harvard University (2024):</b> Selected as 1 of only 12 plenary speakers from over 5,000 national applicants. Delivered keynote on applying machine learning to integrate transcriptomics and proteomics for glioblastoma research.
            </li>
            <li>
              <b>Best Detailed Oral Presentation - ABRCMS Conference (2023):</b> Awarded top presenter in the Computational and Systems Biology division (selected from 80 oral presenters; 3,500+ attendees). Recognized with $2,500 for travel and accommodation.
            </li>
            <li>
              <b>Best Poster Presentation - ABRCMS Conference (2024):</b> Received top honors for graduate-level poster presentation (competed among 150+ graduate presenters). Presented research on advancing open-source bioinformatics platforms. Recognized with $2,500 for travel and accommodation.
            </li>
            <li>
              <b>Poster Presentation - National Collegiate Research Conference (NCRC) - Harvard University (2024):</b> Presented research poster detailing computational approaches for cancer biomarker identification.
            </li>
            <li>
              <b>Friends of Arts And Science Awards - University of Toronto (2022, 2023, 2024):</b> Received multiple awards recognizing academic excellence in both Computer Sciences and Physical & Life Sciences disciplines.
            </li>
          </ul>
        </div>
      </section>

      <hr className="break-section" />

      {/* ========================== */}
      {/* Education Section          */}
      {/* ========================== */}
      <section className="hero education-section" id="education">
        <div className="container">
          <h2 className="title" style={{ textAlign: 'center' }}>Education</h2>
          <div className="education-details" style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h3 style={{ marginBottom: '0.2em', textAlign: 'left' }}>University of Toronto</h3>
            <p style={{ fontStyle: 'italic', color: 'var(--muted-off-white)', marginTop: '0', marginBottom: '1.5em', fontSize: '0.95rem', textAlign: 'left' }}>
              St. George Campus
            </p>

            <div className="degree-info" style={{ textAlign: 'left', marginBottom: '1em' }}>
              <p style={{ margin: '0.1em 0' }}><b>Bachelor of Science (Honours)</b></p>
              <p style={{ margin: '0.1em 0', fontSize: '0.9em', color: 'var(--muted-off-white)' }}>Graduated June 2024</p>
            </div>

            <div className="program-details" style={{ textAlign: 'left', marginBottom: '1em' }}>
              <p style={{ margin: '0.3em 0' }}><i>Specialist: Computer Science, Bioinformatics & Computational Biology</i></p>
              <p style={{ margin: '0.3em 0' }}><i>Minor: Immunology</i></p>
            </div>

            <p style={{ textAlign: 'left', marginBottom: '2em' }}>Major GPA: 3.96 / 4.0</p>

            <p className="coursework" style={{ textAlign: 'left', margin: '0' }}>
              <b>Relevant Coursework:</b> Data Structures & Analysis (CSC263), Software Design (CSC207), Systems Programming (CSC209), Algorithm Design & Analysis (CSC373), Computability & Complexity (Theory), Operating Systems, Database Systems, Machine Learning Principles, Distributed Systems Design, Cloud Computing Concepts, Computer Networks, Mathematical Reasoning for CS (CSC165), Applied Bioinformatics (BCB410), Systems Biology (BCB420), Core Bioinformatics (BCH441/BCB410), Calculus, Statistics & Probability, Advanced Project Courses (BCB330Y1/BCB430Y1 - Omics Integration & ML for Protein Interaction).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experiences;