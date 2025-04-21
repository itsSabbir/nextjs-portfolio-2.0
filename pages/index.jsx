// --- START OF REVISED pages/index.jsx (Comprehensive Homepage) ---
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// Assume these components exist and work, we'll use them more
import TagList from '../components/TagList';
import ExternalLink from '../components/ExternalLink'; // Maybe useful for project links

// You might create simple placeholder components for project cards later
// import ProjectCard from '../components/ProjectCard';

const Home = () => {

  // Placeholder data for featured projects - Replace with your actual selected projects later
  const featuredProjects = [
    {
      title: "Bioinformatics Full-Stack Platform (JHU)",
      description: "Architected an open-source platform processing 750TB+ multi-omics data using microservices.",
      tags: ['Python', 'React', 'Docker', 'Kubernetes', 'AWS', 'ETL'],
      imageUrl: "/placeholder-project1.png", // Replace with actual image path in /public
      // liveUrl: "#", // Link to live demo if available
      repoUrl: "https://github.com/itsSabbir/..." // Replace with actual repo link
    },
    {
      title: "AI Code Optimization & Backend (Outlier)",
      description: "Improved AI model efficiency and refactored APIs within a monolith-to-microservices migration.",
      tags: ['Python', 'Java', 'FastAPI', 'Spring Boot', 'AWS Lambda', 'AI/ML'],
      imageUrl: "/placeholder-project2.png",
      // liveUrl: null,
      repoUrl: null // Or link to a relevant public detail if no repo
    },
    {
      title: "Programming Language Learning Hub",
      description: "Created and maintain an open-source educational platform reaching 1000+ developers globally.",
      tags: ['React', 'Node.js', 'JavaScript', 'Community Mgt.', 'Open Source'],
      imageUrl: "/placeholder-project3.png",
      // liveUrl: "#",
      repoUrl: "https://github.com/itsSabbir/programming-language-learning-hub"
    }
  ];

  return (
    <>
      <Head>
        {/* Keep the specific, optimized title */}
        <title>Sabbir Hossain | Software Engineer & Data Scientist | Bioinformatics</title>
        <meta
          name="description"
          content="Sabbir Hossain's portfolio: A Software Engineer and Data Scientist specializing in bioinformatics, cloud (AWS), DevOps/SRE, AI/ML, and full-stack development. Explore projects, experience, and skills."
        />
        <meta name="keywords" content="Sabbir Hossain, Portfolio, Software Engineer, Data Scientist, Bioinformatics, DevOps, SRE, Cloud, AWS, Kubernetes, Docker, Python, React, Next.js, Machine Learning, Data Engineering" />
      </Head>

      {/* === Section 1: Hero Introduction === */}
      <section className="hero home-hero">
        <div className="container home-hero-container"> {/* Use existing layout */}
          <div className="text-wrapper w-full">
            {/* Revised Headline - Focus on Action/Value */}
            <h1 className="title">
              <span>Sabbir Hossain</span>
              {/* Revised Subtitle - Emphasize Breadth & Integration */}
              <span className="highlight-subtitle">Engineering Solutions Across Software, Data & Biology</span>
            </h1>
            {/* Revised Description - More Narrative & Keyword Integration */}
            <p className="description">
              I'm a Software Engineer driven by the challenge of building robust, scalable systems where code meets complex data, particularly in the **bioinformatics** domain. With deep interests spanning **Data Science**, **Cloud Architecture (AWS)**, **DevOps/SRE practices**, and **AI/ML**, I thrive on architecting full-stack applications, optimizing data pipelines, and automating workflows to deliver impactful results. I'm a lifelong learner committed to mastering new technologies and contributing to innovative projects.
            </p>
            <div className="cta-wrapper">
              <Link href="/experiences" className="cta">
                Explore Full Experience
              </Link>
               {/* Link to projects section on this page for now */}
              <Link href="/#featured-projects" className="cta cta-secondary">
                View Featured Projects
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
             {/* Keep the profile picture */}
            <Image
              src="/profile_pic.jpeg" // Ensure this path is correct
              alt="Sabbir Hossain - Professional Headshot"
              width={250} height={250} priority
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
             <p>My journey began with a deep dive into the intricacies of Bioinformatics and Computer Science at the University of Toronto. This foundation sparked a passion for using software engineering not just to solve technical puzzles, but to build tools that empower research and discovery. I bridge the gap between scientific requirements and scalable, maintainable code, constantly exploring areas like efficient algorithms, cloud-native patterns, and reliable deployment strategies.</p>
             <p>I believe in **continuous learning** and actively engage with new frameworks, best practices (like TDD and SOLID), and the broader tech community (e.g., through open-source contributions).</p>
             {/* Link to a potential future dedicated About page */}
             {/* <Link href="/about" className="text-link">Learn More About My Journey →</Link> */}
          </div>
        </div>
      </section>

       <hr className="break-section subtle"/> {/* Add a subtle divider */}

      {/* === Section 3: Skills Highlights === */}
      <section className="skills-highlight-section" id="skills">
          <div className="container">
              <h2>Core Skills & Technologies</h2>
              <div className="skills-grid">
                  {/* Column 1 */}
                  <div className="skill-category">
                      <h3 className="skill-category-title">Languages & Data</h3>
                      <TagList tags={['Python', 'Java', 'R', 'JavaScript/TS', 'C/C++', 'SQL', 'Bash', 'HTML/CSS']} />
                  </div>
                  {/* Column 2 */}
                  <div className="skill-category">
                      <h3 className="skill-category-title">Cloud, DevOps & SRE</h3>
                      <TagList tags={['AWS (EC2, S3, Lambda, etc)', 'Docker', 'Kubernetes', 'Terraform (IaC)', 'CI/CD (Jenkins, GitActions)', 'Linux', 'Serverless', 'Monitoring Basics']} />
                  </div>
                  {/* Column 3 */}
                  <div className="skill-category">
                      <h3 className="skill-category-title">Frameworks & Databases</h3>
                      <TagList tags={['React', 'Next.js', 'Node.js', 'FastAPI/Flask', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'GraphQL']} />
                  </div>
                  {/* Column 4 */}
                   <div className="skill-category">
                      <h3 className="skill-category-title">Concepts & Methodologies</h3>
                       <TagList tags={['Data Structures', 'Algorithms', 'OOP/SOLID', 'TDD', 'Microservices', 'ETL Pipelines', 'Agile/Scrum', 'System Design', 'Bioinformatics Analysis', 'AI/ML Fundamentals']} />
                  </div>
              </div>
               {/* Link to a potential future dedicated Skills page */}
               {/* <div style={{ textAlign: 'center', marginTop: '30px' }}>
                 <Link href="/skills" className="text-link">See Full Technical Inventory →</Link>
               </div> */}
          </div>
      </section>

       <hr className="break-section subtle"/>

       {/* === Section 4: Experience Highlights === */}
       <section className="experience-highlight-section">
         <div className="container">
           <h2>Recent Experience</h2>
           <div className="experience-highlights-grid">
             {/* Highlight 1: JHU */}
             <div className="experience-highlight-item">
                <h3 className="experience-highlight-title">Full Stack SWE @ Johns Hopkins</h3>
                <p>Architecting open-source bioinformatics platforms & engineering large-scale (750TB+) multi-omics data pipelines on HPC/Cloud.</p>
             </div>
              {/* Highlight 2: Outlier */}
             <div className="experience-highlight-item">
                <h3 className="experience-highlight-title">Backend SWE Intern @ Outlier</h3>
                <p>Optimizing AI-generated code, refactoring APIs for microservices, and contributing to serverless function deployment.</p>
             </div>
           </div>
           <div style={{ textAlign: 'center', marginTop: '30px' }}>
               <Link href="/experiences" className="text-link">View Detailed Experience Timeline →</Link>
            </div>
         </div>
       </section>

        <hr className="break-section subtle"/>

       {/* === Section 5: Featured Projects === */}
       <section className="featured-projects-section" id="featured-projects">
         <div className="container">
           <h2>Featured Projects</h2>
           <div className="projects-grid">
              {/* Map over placeholder data */}
              {featuredProjects.map((project, index) => (
                // Use an Article tag for semantic project representation
                <article key={index} className="project-card">
                  {/* Project Image Placeholder */}
                   <div className="project-image-placeholder">
                     {/* Replace with Next/Image when images are ready */}
                     <img src={project.imageUrl || "/placeholder-project-default.png"} alt={`${project.title} screenshot`} />
                   </div>
                   <div className="project-card-content">
                     <h3 className="project-title">{project.title}</h3>
                     <p className="project-description">{project.description}</p>
                     <TagList caption="Key Tech:" tags={project.tags} />
                     <div className="project-links">
                        {project.repoUrl && (
                           <ExternalLink href={project.repoUrl} text="View Code" />
                           // You might use a specific icon for GitHub links
                        )}
                        {/* Add spacing if both links exist */}
                        {project.repoUrl && project.liveUrl && <span style={{ margin: '0 5px' }}>|</span>}
                        {project.liveUrl && (
                            <ExternalLink href={project.liveUrl} text="Live Demo" />
                        )}
                     </div>
                   </div>
                </article>
              ))}
           </div>
           {/* Link to a potential future full Projects page */}
           {/* <div style={{ textAlign: 'center', marginTop: '30px' }}>
               <Link href="/projects" className="text-link">Explore All Projects →</Link>
            </div> */}
         </div>
       </section>

       <hr className="break-section subtle"/>

       {/* === Section 6: Call to Action / Seeking === */}
       <section className="seeking-section" id="connect">
          <div className="container">
              <h2>Let's Build Something Impactful</h2>
              <p>Leveraging my expertise across the SDLC and DevOps/SRE principles, I'm actively seeking opportunities in **Software Engineering, Data Engineering, DevOps/SRE, or Data Science** roles where I can contribute to challenging projects, particularly those involving cloud technologies, distributed systems, AI/ML applications, or bioinformatics.</p>
              <p>I'm adept at cross-functional collaboration, thrive in remote environments, and I'm ready to bring my skills and continuous learning mindset to your team.</p>
               {/* Re-iterate contact options */}
              <div className="cta-wrapper" style={{ justifyContent: 'center', marginTop: '30px' }}>
                  <a href="mailto:hossain.sabbir17@gmail.com" className="cta">Contact via Email</a>
                  <a href={process.env.NEXT_PUBLIC_RESUME_PDF_PATH || "/Sabbir_Hossain_CV.pdf"} /* Use env var if set, else fallback */
                     target="_blank" rel="noopener noreferrer"
                     className="cta cta-secondary"
                  >
                     View Resume (PDF)
                  </a>
                  <a href="https://linkedin.com/in/itssabbir" target="_blank" rel="noopener noreferrer" className="cta cta-secondary">
                     Connect on LinkedIn
                   </a>
               </div>
          </div>
       </section>

       {/* --- NOTE: Removed the separate "contact-section" from previous step, integrated into "seeking-section" --- */}
    </>
  );
};

export default Home;

// --- END OF REVISED pages/index.jsx ---