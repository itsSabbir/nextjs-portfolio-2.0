// --- contexts/globalContext.jsx ---

import { createContext, useContext } from 'react';

// Define the default value for the context.
// This data structure appears to hold detailed experience timelines for various technologies.
// It likely originates from the template this project was based on.
const EXPERIENCE_OVERVIEW = {
  // Renamed constant to follow JS convention (uppercase for constants)
  range: [['2017-10-24', '2024-04-11']], // Overall date range?
  breakdown: {
    // Example technology entries
    angular: {
      title: 'AngularJS',
      link: 'https://angularjs.org/',
      experience_dates: [['2017-10', '2019-02']]
    },
    js: {
      title: 'VanillaJS',
      link: 'http://vanilla-js.com/',
      experience_dates: [['2017-10', '2024-04']]
    },
    // ... include ALL other technology entries provided in your snippet ...
    // (dfp, firebase, jquery, boot, next, node, nosql, mysql, react, pbd,
    //  typescript, express, aws, css, html, d3, plot, shell, linux, vscode,
    //  docker, jira, conf)
    dfp: {
      title: 'Google DoubleClick for Publishers',
      link: 'https://admanager.google.com/home/',
      experience_dates: [['2021-01', '2024-04']]
    },
    firebase: {
      title: 'Google Firebase',
      link: 'https://firebase.google.com/',
      experience_dates: [['2017-10', '2019-02']]
    },
    jquery: { title: 'JQuery', link: 'https://jquery.com/', experience_dates: [['2017-10', '2019-02']] },
    boot: {
      title: 'Bootstrap',
      link: 'https://getbootstrap.com/',
      experience_dates: [
        ['2017-10', '2019-02'],
        ['2021-01', '2024-04']
      ]
    },
    next: { title: 'NextJS', link: 'https://nextjs.org/', experience_dates: [['2021-01', '2024-04']] },
    node: { title: 'NodeJS', link: 'https://nodejs.org/', experience_dates: [['2017-10', '2024-04']] },
    nosql: {
      title: 'MongoDB (NoSQL)',
      link: 'https://www.mongodb.com/nosql-explained',
      experience_dates: [['2017-10', '2019-02']]
    },
    mysql: {
      title: 'MySQL (and Workbench)',
      link: 'https://www.mysql.com/',
      experience_dates: [['2019-02', '2024-04']]
    },
    react: { title: 'ReactJS', link: 'https://reactjs.org/', experience_dates: [['2017-10', '2024-04']] }, // Corrected spelling
    pbd: { title: 'Prebid.js', link: 'https://prebid.org/', experience_dates: [['2020-02', '2024-04']] },
    typescript: {
      title: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
      experience_dates: [['2017-10', '2019-02']]
    },
    express: { title: 'ExpressJS', link: 'https://expressjs.com/', experience_dates: [['2017-10', '2024-04']] },
    aws: {
      title: 'Amazon Web Services (AWS)',
      link: 'https://aws.amazon.com/',
      experience_dates: [['2019-02', '2024-04']]
    }, // Corrected spelling
    css: { title: 'CSS/SCSS', link: 'https://en.wikipedia.org/wiki/CSS', experience_dates: [['2017-10', '2024-04']] },
    html: {
      title: 'HTML/HTML5',
      link: 'https://en.wikipedia.org/wiki/HTML5',
      experience_dates: [['2017-10', '2024-04']]
    },
    d3: { title: 'D3 JS', link: 'https://d3js.org/', experience_dates: [['2020-02', '2024-04']] },
    plot: { title: 'Plotly', link: 'https://plotly.com/javascript/', experience_dates: [['2021-01', '2024-04']] },
    shell: {
      title: 'Bash / Shell',
      link: 'https://www.gnu.org/software/bash/',
      experience_dates: [['2017-10', '2024-04']]
    },
    linux: { title: 'Linux/Ubuntu', link: 'https://ubuntu.com/', experience_dates: [['2017-10', '2024-04']] },
    vscode: {
      title: 'Visual Studio Code',
      link: 'https://code.visualstudio.com/',
      experience_dates: [['2017-10', '2024-04']]
    },
    docker: { title: 'Docker', link: 'https://www.docker.com/', experience_dates: [['2019-02', '2024-04']] },
    jira: {
      title: 'Jira',
      link: 'https://www.atlassian.com/software/jira',
      experience_dates: [['2019-02', '2024-04']]
    },
    conf: {
      title: 'Confluence',
      link: 'https://www.atlassian.com/software/confluence',
      experience_dates: [['2019-02', '2024-04']]
    }
  }
};

// Create the actual Context object using the default value.
// This context object does not render any UI itself.
const GlobalContext = createContext(EXPERIENCE_OVERVIEW);

/**
 * Context Provider component.
 * Wraps its children in the Context Provider, making the 'EXPERIENCE_OVERVIEW'
 * value available to any descendant component that uses the 'useGlobalContext' hook.
 * This is typically used once in `_app.jsx`.
 *
 * @param {{ children: React.ReactNode }} props - Component props containing child elements.
 */
export function GlobalProvider({ children }) {
  return (
    // The Provider component makes the 'value' prop available via the context.
    <GlobalContext.Provider value={EXPERIENCE_OVERVIEW}>
      {children} {/* Render the wrapped components */}
    </GlobalContext.Provider>
  );
}

/**
 * Custom Hook for easily consuming the GlobalContext value.
 * Simplifies accessing the context data in consuming components.
 *
 * @returns {typeof EXPERIENCE_OVERVIEW} - The context value (the EXPERIENCE_OVERVIEW object).
 */
export function useGlobalContext() {
  // Returns the 'value' provided by the nearest GlobalContext.Provider up the component tree.
  return useContext(GlobalContext);
}
