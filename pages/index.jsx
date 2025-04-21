/* eslint-disable max-len */
// --- pages/index.jsx ---

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import ExternalLink from '../components/ExternalLink';
import RenderMarkdown from '../components/RenderMarkdown'; // Import the markdown renderer
// Import reusable components
import TagList from '../components/TagList';

const Home = () => {
  // Placeholder data for featured projects - Replace with your actual selected projects later
  const featuredProjects = [
    {
      title: 'Bioinformatics Full-Stack Platform (JHU)',
      // Updated description using markdown-safe format (no ** here)
      description: 'Architected an open-source platform processing 750TB+ multi-omics data using microservices.',
      tags: ['Python', 'React', 'Docker', 'Kubernetes', 'AWS', 'ETL'],
      imageUrl: '/placeholder-project1.png', // NEED to add this image to /public
      repoUrl: null // Add real link later
    },
    {
      title: 'AI Code Optimization & Backend (Outlier)',
      description: 'Improved AI model efficiency and refactored APIs within a monolith-to-microservices migration.',
      tags: ['Python', 'Java', 'FastAPI', 'Spring Boot', 'AWS Lambda', 'AI/ML'],
      imageUrl: '/placeholder-project2.png', // NEED to add this image to /public
      repoUrl: null
    },
    {
      title: 'Programming Language Learning Hub',
      description: 'Created and maintain an open-source educational platform reaching 1000+ developers globally.',
      tags: ['React', 'Node.js', 'JavaScript', 'Community Mgt.', 'Open Source'],
      imageUrl: '/placeholder-project3.png', // NEED to add this image to /public
      repoUrl: 'https://github.com/itsSabbir/programming-language-learning-hub' // Add real link later
    }
  ];

  // Text content potentially using **bold** markdown
  const heroDescription =
    "I'm a Software Engineer driven by the challenge of building robust, scalable systems where code meets complex data, particularly in the **bioinformatics** domain. With deep interests spanning **Data Science**, **Cloud Architecture (AWS)**, **DevOps/SRE practices**, and **AI/ML**, I thrive on architecting full-stack applications, optimizing data pipelines, and automating workflows to deliver impactful results. I'm a lifelong learner committed to mastering new technologies and contributing to innovative projects.";
  const aboutPara1 =
    'My journey began with a deep dive into the intricacies of Bioinformatics and Computer Science at the University of Toronto. This foundation sparked a passion for using software engineering not just to solve technical puzzles, but to build tools that empower research and discovery. I bridge the gap between scientific requirements and scalable, maintainable code, constantly exploring areas like efficient algorithms, cloud-native patterns, and reliable deployment strategies.';
  const aboutPara2 =
    'I believe in **continuous learning** and actively engage with new frameworks, best practices (like TDD and SOLID), and the broader tech community (e.g., through open-source contributions).';
  const seekingPara1 =
    "Leveraging my expertise across the SDLC and DevOps/SRE principles, I'm actively seeking opportunities in **Software Engineering, Data Engineering, DevOps/SRE, or Data Science** roles where I can contribute to challenging projects, particularly those involving cloud technologies, distributed systems, AI/ML applications, or bioinformatics.";
  const seekingPara2 =
    "I'm adept at cross-functional collaboration, thrive in remote environments, and I'm ready to bring my skills and continuous learning mindset to your team.";

  return (
    // Using React Fragment, ensures this component doesn't add an unnecessary wrapper div
    <>
      <Head>
        <title>Sabbir Hossain | Software Engineer & Data Scientist | Bioinformatics</title>
        <meta
          name="description"
          content="Sabbir Hossain's portfolio: A Software Engineer and Data Scientist specializing in bioinformatics, cloud (AWS), DevOps/SRE, AI/ML, and full-stack development."
        />
        <meta
          name="keywords"
          content="Sabbir Hossain, Portfolio, Software Engineer, Data Scientist, Bioinformatics, DevOps, SRE, Cloud, AWS, Kubernetes, Docker, Python, React, Next.js, Machine Learning, Data Engineering"
        />
      </Head>

      {/* === Section 1: Hero Introduction === */}
      <section className="hero home-hero">
        <div className="container home-hero-container">
          <div className="text-wrapper w-full">
            <h1 className="title">
              <span>Sabbir Hossain</span>
              <span className="highlight-subtitle">Engineering Solutions Across Software, Data & Biology</span>
            </h1>
            {/* Use RenderMarkdown for the description */}
            <RenderMarkdown className="description" text={heroDescription} />
            <div className="cta-wrapper">
              <Link href="/experiences" className="cta">
                Explore Full Experience
              </Link>
              <Link href="/#featured-projects" className="cta cta-secondary">
                View Featured Projects
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            {/* Corrected Image Path: Remove /public */}
            <Image
              src="/profile_pic.jpeg" // CORRECT path relative to public folder
              alt="Sabbir Hossain - Professional Headshot"
              width={250}
              height={250}
              priority
              className="profile-picture-hero"
            />
          </div>
        </div>
      </section>

      {/* === Section 2: About Me Snippet === */}
      <section className="about-snippet-section" id="about-me">
        <div className="container">
          <h2>A Bit More About Me</h2>
          <div className="about-content">
            {/* Use RenderMarkdown for paragraphs */}
            <RenderMarkdown className="" text={aboutPara1} />
            <RenderMarkdown className="" text={aboutPara2} />
            {/* <Link href="/about" className="text-link">Learn More About My Journey →</Link> */}
          </div>
        </div>
      </section>

      <hr className="break-section subtle" />

      {/* === Section 3: Skills Highlights === */}
      <section className="skills-highlight-section" id="skills">
        <div className="container">
          <h2>Core Skills & Technologies</h2>
          {/* The skills grid structure looks fine */}
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Languages & Data</h3>
              <TagList tags={['Python', 'Java', 'R', 'JavaScript/TS', 'C/C++', 'SQL', 'Bash', 'HTML/CSS']} />
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Cloud, DevOps & SRE</h3>
              <TagList
                tags={[
                  'AWS (EC2, S3, Lambda, etc)',
                  'Docker',
                  'Kubernetes',
                  'Terraform (IaC)',
                  'CI/CD (Jenkins, GitActions)',
                  'Linux',
                  'Serverless',
                  'Monitoring Basics'
                ]}
              />
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Frameworks & Databases</h3>
              <TagList
                tags={[
                  'React',
                  'Next.js',
                  'Node.js',
                  'FastAPI/Flask',
                  'Spring Boot',
                  'PostgreSQL',
                  'MongoDB',
                  'Redis',
                  'REST APIs',
                  'GraphQL'
                ]}
              />
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Concepts & Methodologies</h3>
              <TagList
                tags={[
                  'Data Structures',
                  'Algorithms',
                  'OOP/SOLID',
                  'TDD',
                  'Microservices',
                  'ETL Pipelines',
                  'Agile/Scrum',
                  'System Design',
                  'Bioinformatics Analysis',
                  'AI/ML Fundamentals'
                ]}
              />
            </div>
          </div>
          {/* <div style={{ textAlign: 'center', marginTop: '30px' }}>
                 <Link href="/skills" className="text-link">See Full Technical Inventory →</Link>
               </div> */}
        </div>
      </section>

      <hr className="break-section subtle" />

      {/* === Section 4: Experience Highlights === */}
      <section className="experience-highlight-section">
        {/* This section seems fine, just renders text */}
        <div className="container">
          <h2>Recent Experience</h2>
          <div className="experience-highlights-grid">
            <div className="experience-highlight-item">
              <h3 className="experience-highlight-title">Full Stack SWE @ Johns Hopkins</h3>
              <p>
                Architecting open-source bioinformatics platforms & engineering large-scale (750TB+) multi-omics data
                pipelines on HPC/Cloud.
              </p>
            </div>
            <div className="experience-highlight-item">
              <h3 className="experience-highlight-title">Backend SWE Intern @ Outlier</h3>
              <p>
                Optimizing AI-generated code, refactoring APIs for microservices, and contributing to serverless
                function deployment.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link href="/experiences" className="text-link">
              View Detailed Experience Timeline →
            </Link>
          </div>
        </div>
      </section>

      <hr className="break-section subtle" />

      {/* === Section 5: Featured Projects === */}
      <section className="featured-projects-section" id="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              // The structure inside this map looks correct
              <article key={index} className="project-card">
                <div className="project-image-placeholder">
                  {/* Use Next/Image for consistency/optimization if desired, but standard img is fine here */}
                  <img
                    src={project.imageUrl || '/placeholder-project-default.png'}
                    alt={`${project.title} screenshot`}
                  />
                </div>
                <div className="project-card-content">
                  <h3 className="project-title">{project.title}</h3>
                  {/* Use RenderMarkdown if project descriptions might use bold syntax */}
                  <RenderMarkdown className="project-description" text={project.description} />
                  <TagList caption="Key Tech:" tags={project.tags} />
                  <div className="project-links">
                    {project.repoUrl && <ExternalLink href={project.repoUrl} text="View Code" />}
                    {project.repoUrl && project.liveUrl && <span style={{ margin: '0 5px' }}>|</span>}
                    {project.liveUrl && <ExternalLink href={project.liveUrl} text="Live Demo" />}
                  </div>
                </div>
              </article>
            ))}
          </div>
          {/* <div style={{ textAlign: 'center', marginTop: '30px' }}>
               <Link href="/projects" className="text-link">Explore All Projects →</Link>
            </div> */}
        </div>
      </section>

      <hr className="break-section subtle" />

      {/* === Section 6: Call to Action / Seeking === */}
      <section className="seeking-section" id="connect">
        <div className="container">
          <h2>Let&apos;s Build Something Impactful!</h2>
          {/* Use RenderMarkdown for paragraphs */}
          <RenderMarkdown className="" text={seekingPara1} />
          <RenderMarkdown className="" text={seekingPara2} />
          <div className="cta-wrapper" style={{ justifyContent: 'center', marginTop: '30px' }}>
            <a href="mailto:hossain.sabbir17@gmail.com" className="cta">
              Contact via Email
            </a>
            {/* Ensure this PDF name EXACTLY matches the file in /public */}
            <a href={'/1SabbirHossain.pdf'} target="_blank" rel="noopener noreferrer" className="cta cta-secondary">
              View Resume (PDF)
            </a>
            <a
              href="https://linkedin.com/in/itssabbir"
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-secondary">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
