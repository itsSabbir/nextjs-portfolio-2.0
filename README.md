# Sabbir Hossain - Personal Portfolio Website (v2.0)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository holds the source code for my personal portfolio website, sabbir.ca. It showcases my skills, professional experience, and projects across Software Engineering, Data Science, Bioinformatics, and DevOps/SRE. The site is built using Next.js and React, featuring a clean, custom dark theme.

**[➡️ View Live Site: sabbir.ca](https://sabbir.ca/)**

---

## Table of Contents

*   [Introduction](#introduction)
*   [Key Features](#key-features)
*   [Technologies Used](#technologies-used)
*   [Project Structure](#project-structure)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Running Locally](#running-locally)
    *   [Building for Production](#building-for-production)
*   [Deployment](#deployment)
*   [License](#license)
*   [Contact](#contact)

## Introduction

This portfolio serves as my digital presence, offering a dynamic platform to detail my professional journey and technical background. It's intended for recruiters, collaborators, and anyone interested in my work at the intersection of software, data, and biology.

The website highlights:
*   My diverse experience in Full-Stack Development, Data Engineering, Bioinformatics, Cloud Infrastructure (AWS), and DevOps principles.
*   A detailed overview of my contributions and roles at Johns Hopkins University, Outlier, and the University of Toronto.
*   Key projects with descriptions and relevant links.
*   A custom dark theme designed for a professional look using a Navy Blue, Red, and Gold palette.

## Key Features

*   **Homepage:** Includes a hero section, about snippet, skills grid, experience highlights, featured projects, and contact call-to-action.
*   **Experiences Page:** Presents a chronological timeline of work experience, awards, achievements, and detailed education history.
*   **Projects Page:** Lists significant personal and professional projects.
*   **Reusable Components:** Utilizes modular React components (`Navbar`, `Footer`, `ProjectCard`, etc.) for better code organization.
*   **Responsive Design:** Adapts to different screen sizes using modern CSS layout techniques.
*   **Dark Theme:** Custom theme applied globally using CSS variables.
*   **PDF Resume Access:** A floating button allows quick access to download my resume.
*   **Contact Links:** Easy access to my Email, GitHub, and LinkedIn profiles via the navigation bar.
*   **SEO:** Basic SEO optimization using page-specific titles and meta descriptions via `next/head`.

## Technologies Used

*   **Framework:** Next.js (v14+)
*   **Library:** React (v18+)
*   **Language:** JavaScript (ES6+)
*   **Styling:** Plain CSS, CSS Variables, Flexbox, Grid, Media Queries
*   **Code Quality:** ESLint, Prettier
*   **Deployment:** Vercel

## Project Structure
```
├── components/ # Reusable React components
├── contexts/ # Original React Context setup (currently unused)
├── data/ # Project data source (projectsData.js)
├── pages/ # Next.js page routes
│ ├── _app.jsx # Global App component, layout, styles
│ └── ...
├── public/ # Static assets (images, resume PDF, icons)
├── styles/ # CSS styles (app.css)
│ └── app.css
├── .eslintrc.js # ESLint configuration
├── .gitignore # Git ignore rules
├── next.config.mjs # Next.js configuration
├── package.json # Dependencies and scripts
├── README.md # This file
└── LICENSE # Project License
```

## Getting Started

To run this project locally:

### Prerequisites

*   Node.js (v18.x or later)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/itsSabbir/nextjs-portfolio-2.0.git
    cd nextjs-portfolio-2.0
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running Locally

1.  Start the development server:
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
2.  Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1.  Run the build command:
    ```bash
    npm run build
    ```
    This performs linting and creates an optimized build in the `.next` folder.

## Deployment

This site is deployed using Vercel. Pushes to the `main` branch automatically trigger production deployments.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

Sabbir Hossain

*   **GitHub:** [@itsSabbir](https://github.com/itsSabbir)
*   **LinkedIn:** [in/itssabbir](https://linkedin.com/in/itssabbir)
*   **Email:** [hossain.sabbir17@gmail.com](mailto:hossain.sabbir17@gmail.com)
