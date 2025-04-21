// --- START OF UPDATED pages/experiences.jsx (Version 4 - All Details Combined - Most Compiled Version)  ---
import Head from 'next/head';

// Component Imports - Ensure these are correctly implemented in your /components folder
import ExternalLink from '../components/ExternalLink';
import TagList from '../components/TagList';

function Experiences() {
  // This page compiles Sabbir's detailed professional background,
  // showcasing work experience, notable awards, and educational foundation.
  // Uses titles from 1-page CV, detailed descriptions from 3-page CV.
  return (
    <>
      <Head>
        <title>Experience & Achievements | Sabbir Hossain</title> {/* Updated Title */}
        <meta
          name="description"
          content="Detailed professional journey of Sabbir Hossain, including roles in software engineering, data science, bioinformatics research, key achievements, awards, and education from the University of Toronto."
        />
      </Head>

      {/* Page Header */}
      <div className="container page-heading-container">
         <h1>My Journey & Experience</h1>
         <p>A timeline of my professional roles, research contributions, key achievements, and education.</p>
         <hr/>
      </div>

      {/* ========================== */}
      {/* Work Experience Section    */}
      {/* ========================== */}
      <section aria-labelledby="work-experience-heading">
         <h2 id="work-experience-heading" className="sr-only">Work Experience</h2> {/* Added for accessibility */}

        {/* === Johns Hopkins University === */}
        {/* JHU Role Details */}
        <section className="hero job-details" id="johns-hopkins">
          <div className="container">
            <div className="text-wrapper w-full">
              <h3 className="title"> {/* Use h3 now since h2 is the section heading (logically) */}
                <span>Junior Full Stack Software Engineer @ Johns Hopkins University</span>
                <span>(Sept 2022 – Present | Remote)</span>
              </h3>
              {/* Using detailed bullet points from the 3-page CV */}
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
                 <b>Build and validate GBM biomarker analysis software</b> using TensorFlow, Keras, Scikit-learn, and Pandas, applying unit testing and model evaluation metrics to support precision medicine strategies, epidemiological studies, and drug discovery workflows.
               </p>
               <p className="sub-point">
                 <b>Apply Test-Driven Development (TDD) principles,</b> maintaining 95%+ test coverage and automating CI/CD pipelines (Git, Jenkins, Docker), increasing deployment reliability and reducing release cycles.
               </p>
               <p className="sub-point">
                 <b>Established robust version control practices</b> using Git and GitHub, enforcing branch protection and automated code reviews. Integrated these workflows with CI/CD pipelines to reduce merge conflicts by 25% and streamline collaborative development across multi-institutional projects.
               </p>
               <p className="sub-point">
                 <b>Author a 35+ page research manuscript</b> featuring interactive R Shiny and D3.js data visualizations, published on GitHub and Zenodo to underscore reproducibility and transparency in data science projects.
               </p>
                <p className="sub-point">
                  <b>Ensure compliance with IRB and data privacy protocols</b> when handling sensitive patient data, establishing rigorous data governance and secure data-access policies for multi-lab collaborations.
                </p>
               <p className="sub-point">
                 <b>Collaborate with cross-functional domain experts</b> (oncologists, statisticians, and data scientists) to prioritize research goals and shape pipeline development, ensuring alignment with clinical needs.
               </p>
               <p className="sub-point">
                 <b>Mentor 15+ undergraduate and junior researchers</b> across multiple research groups through hands-on workshops on HPC workflows, containerization, integrations, API development, and bioinformatics software engineering, fostering continuous learning and collaboration.
               </p>
               <p className="sub-point">
                 <b>Present research findings at prestigious conferences</b>, including ABRCMS and the National Collegiate Research Conference (NCRC) at Harvard University, earning multiple awards such as Graduate Oral Presenter, Plenary Speaker, and Travel Award.
               </p>
            </div>
            {/* Comprehensive TagList for JHU */}
            <TagList
              caption="Key Tech/Concepts:"
              tags={[
                'Python', 'R', 'JavaScript', 'TypeScript', 'C', 'React', 'Next.js', 'D3.js', 'R Shiny',
                'Microservices', 'SOLID', 'Docker', 'Kubernetes', 'Caching (Redis)', 'ETL', 'SQL', 'HPC', 'Git', 'GitHub', 'Jenkins', 'CI/CD',
                'Machine Learning', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'SciPy', 'Bioconductor', 'MaxQuant',
                'TDD (95%)', 'GraphQL', 'REST API', 'API Gateway', 'WebSockets', 'Data Visualization',
                'AWS (S3, EC2, Lambda, DynamoDB)', 'Terraform (IaC)', 'OAuth', 'Auth0', 'RBAC', 'IRB Compliance', 'Data Governance',
                'Performance Optimization', 'Mentorship', 'Scientific Publication', 'Cross-functional Collaboration'
              ]}
            />
          </div>
        </section>
        {/* --- End JHU Section --- */}

        <hr className="break-section" />

        {/* === Outlier Internship === */}
        {/* Outlier Role Details */}
        <section className="hero job-details" id="outlier">
          <div className="container">
            <div className="text-wrapper w-full">
              <h3 className="title">
                <span>Backend Software Developer Intern @ Outlier</span>
                <span>(Mar 2024 – Nov 2024 | Remote)</span>
              </h3>
               {/* Using detailed bullet points from the 3-page CV */}
              <p className="sub-point">
                 <b>Developed and optimized AI-generated code</b> using Python, Java, and C, enhancing model efficiency by 5% and reducing code errors by 10% through advanced data structures and algorithmic optimizations.
              </p>
              <p className="sub-point">
                 {/* Merged two related points from 3-pager about Serverless/cost reduction */}
                <b>Designed and deployed serverless computing functions</b> using AWS Lambda and API Gateway, contributing to infrastructure cost reductions of 30% and optimized execution time for on-demand tasks.
              </p>
              <p className="sub-point">
                <b>Built and refactored GraphQL and RESTful APIs</b> with Python (FastAPI, Flask), Java (Spring Boot), and Node.js, implementing query batching, caching, and API Gateway integration. Refactored monolithic apps into microservices to enhance performance, scalability, and maintainability.
              </p>
              <p className="sub-point">
                 {/* Merged two related points from 3-pager about GenAI collaboration/testing */}
                <b>Collaborated on training generative AI models</b> in software engineering, data analysis, and machine learning; implemented unit and integration tests to ensure model reliability and validity.
              </p>
               <p className="sub-point">
                 <b>Assisted in debugging and optimizing production code</b> under senior engineers' guidance, identifying bottlenecks and improving performance by 20%.
              </p>
              <p className="sub-point">
                 {/* Point added from the detailed CV about rigorous evaluations, refining description slightly */}
                <b>Conducted rigorous evaluations and enhancements of AI-generated code</b>, increasing AI model performance by 3% while ensuring strict adherence to industry standards and best practices, significantly reducing code inefficiencies.
              </p>
               <p className="sub-point">
                <b>Utilized Agile (Scrum) methodologies</b> to streamline development processes, ensuring iterative delivery, and fostering cross-team collaboration for enhanced productivity and timely project completion.
               </p>
            </div>
             {/* Comprehensive TagList for Outlier */}
            <TagList
              caption="Key Tech/Concepts:"
              tags={[
                'Python', 'Java', 'C', 'FastAPI', 'Flask', 'Spring Boot', 'Node.js', 'GraphQL', 'REST API',
                'Serverless', 'AWS Lambda', 'API Gateway', 'Microservices', 'Generative AI', 'AI Model Optimization', 'Data Structures', 'Algorithms',
                'Performance Optimization', 'Unit Testing', 'Integration Testing', 'Debugging', 'Code Refactoring', 'Agile', 'Scrum'
              ]}
            />
          </div>
        </section>
         {/* --- End Outlier Section --- */}

        <hr className="break-section" />

        {/* === University of Toronto Research Assistant Role === */}
        {/* UofT Role Details */}
        <section className="hero job-details" id="u-of-t-research">
          <div className="container">
            <div className="text-wrapper w-full">
              <h3 className="title">
                <span>Software Development Research Assistant @ University of Toronto</span>
                <span>(Sept 2019 - Apr 2024 | Hybrid)</span>
              </h3>
               {/* Using detailed bullet points from the 3-page CV */}
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
               <p className="sub-point">
                 {/* Added mentoring detail from 3-pager's JHU section but relevant here too conceptually */}
                <b>Mentored undergraduate students and junior researchers</b>, providing guidance on bioinformatics tools, scalable software architecture, HPC, and DevOps best practices, fostering a culture of continuous learning.
               </p>
            </div>
             {/* Comprehensive TagList for UofT */}
             <TagList
              caption="Key Tech/Concepts:"
              tags={[
                'Python', 'R', 'C/C++', 'Java', 'JavaScript', 'Next.js', 'Tailwind CSS', 'WebAssembly', 'SQL', 'PostgreSQL', 'MySQL', 'Shell Scripting',
                'OOP', 'Microservices', 'REST APIs', 'GraphQL', 'SOLID', 'DevOps', 'Docker', 'Kubernetes', 'CI/CD', 'GitLab CI', 'HPC',
                'Bioinformatics', 'Genomics', 'UCSF ChimeraX', 'GSEA', 'Data Visualization', 'Performance Optimization', 'Agile (Scrum/Kanban)', 'Mentorship'
              ]}
            />
          </div>
        </section>
        {/* --- End UofT Section --- */}

      </section> {/* End Work Experience Section */}

      <hr className="break-section double" />

      {/* ========================== */}
      {/* Awards Section             */}
      {/* ========================== */}
      {/* Consolidating all awards */}
      <section className="hero awards-section" id="awards">
        <div className="container">
          <h2 className="title">Awards & Achievements</h2>
           <ul className="awards-list">
              <li>
                 {/* Combining Plenary info */}
                 <b>Plenary Speaker, National Collegiate Research Conference (NCRC) - Harvard University (2024):</b> Selected as 1 of only 12 plenary speakers from over 5,000 national applicants. Delivered keynote on applying machine learning to integrate transcriptomics and proteomics for glioblastoma research, focusing on immune cell composition, biomarker discovery, and personalized treatment strategies.
              </li>
              <li>
                {/* Combining ABRCMS 2023 info + Funding */}
                <b>Best Detailed Oral Presentation - ABRCMS Conference (2023):</b> Awarded top presenter in the Computational and Systems Biology division (selected from 80 oral presenters; 3,500+ attendees). Showcased computational models for cancer biomarker identification using high-throughput sequencing data. Recognized with $2,500 for travel and accommodation.
              </li>
              <li>
                 {/* Combining ABRCMS 2024 info + Funding */}
                <b>Best Poster Presentation - ABRCMS Conference (2024):</b> Received top honors for graduate-level poster presentation (competed among 150+ graduate presenters). Presented research on advancing open-source bioinformatics platforms and computational approaches for scalable genomic data analysis. Recognized with $2,500 for travel and accommodation.
              </li>
              <li>
                 {/* NCRC 2024 Poster */}
                 <b>Poster Presentation - National Collegiate Research Conference (NCRC) - Harvard University (2024):</b> Presented research poster detailing computational approaches for cancer biomarker identification, focusing on integrating omics data and ML techniques for predictive oncology.
              </li>
              <li>
                {/* Combining Friends of Arts & Science Awards */}
                <b>Friends of Arts And Science Awards - University of Toronto (2022, 2023, 2024):</b> Received multiple awards recognizing academic excellence in both Computer Sciences and Physical & Life Sciences disciplines throughout undergraduate studies.
              </li>
           </ul>
        </div>
      </section>
      {/* --- End Awards Section --- */}

       <hr className="break-section" />

            {/* ========================== */}
      {/* Education Section (Revised Structure) */}
      {/* ========================== */}
      <section className="hero education-section" id="education">
        <div className="container"> {/* Ensures max-width and centering */}
          <h2 className="title">Education</h2>

          {/* This div will now control the max-width and centering of the text block below */}
          {/* We remove the inline text-align: center here */}
          <div className="education-details" style={{ maxWidth: '750px', margin: '0 auto' }}>

            {/* University Name */}
            {/* Maybe slightly larger font or more top margin */}
            <h3 style={{ marginBottom: '0.2em', textAlign: 'left' }}> {/* Align heading left */}
                University of Toronto
            </h3>
            {/* Campus Name - Smaller, italic, below Uni name */}
            <p style={{ fontStyle: 'italic', color: 'var(--muted-off-white)', marginTop: '0', marginBottom: '1.5em', fontSize: '0.95rem', textAlign: 'left' }}> {/* Align left */}
                St. George Campus
            </p>

            {/* Core Degree Info - Grouped, left-aligned text */}
            <div className="degree-info" style={{ textAlign: 'left', marginBottom: '1em' }}> {/* Align text left */}
              <p style={{ margin: '0.1em 0' }}>
                <b>Bachelor of Science (Honours)</b>
              </p>
              <p style={{ margin: '0.1em 0', fontSize: '0.9em', color: 'var(--muted-off-white)' }}>
                Graduated June 2024
              </p>
            </div>

            {/* Program Details - Left-aligned */}
            <div className="program-details" style={{ textAlign: 'left', marginBottom: '1em' }}> {/* Align text left */}
                <p style={{ margin: '0.3em 0' }}>
                    <i>Specialist: Computer Science, Bioinformatics & Computational Biology</i>
                </p>
                <p style={{ margin: '0.3em 0' }}>
                    <i>Minor: Immunology</i>
                </p>
            </div>

            {/* GPA - Left-aligned */}
            <p style={{ textAlign: 'left', marginBottom: '2em' }}> {/* Align left */}
              Major GPA: 3.96 / 4.0
            </p>

            {/* Coursework Paragraph - Remains largely the same (left-aligned text within the already centered block) */}
             <p className="coursework" style={{ textAlign: 'left', margin: '0' }}> {/* Remove extra margins if controlled elsewhere */}
                <b>Relevant Coursework:</b> Data Structures & Analysis (CSC263), Software Design (CSC207), Systems Programming (CSC209), Algorithm Design & Analysis (CSC373), Computability & Complexity (Theory), Operating Systems, Database Systems, Machine Learning Principles, Distributed Systems Design, Cloud Computing Concepts, Computer Networks, Mathematical Reasoning for CS (CSC165), Applied Bioinformatics (BCB410), Systems Biology (BCB420), Core Bioinformatics (BCH441/BCB410), Calculus, Statistics & Probability, Advanced Project Courses (BCB330Y1/BCB430Y1 - Omics Integration & ML for Protein Interaction).
             </p>
          </div>
        </div>
      </section>
      {/* --- End Education Section --- */}

    </>
  );
}

export default Experiences;
// --- END OF UPDATED pages/experiences.jsx (Version 4) ---