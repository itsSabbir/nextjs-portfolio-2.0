// --- components/Navbar.jsx ---

import Link from 'next/link'; // Use Next.js Link for client-side navigation
import { useRouter } from 'next/router'; // Hook to access router information (like current path)

import Contact from './Contact'; // Import the Contact component for icons

/**
 * Renders the main navigation bar for the website.
 * Includes the site logo (name), navigation links, and contact icons.
 * Uses useRouter to highlight the currently active page link.
 */
function Navbar() {
  // Get the router object which contains information about the current route
  const router = useRouter();

  // Define the navigation links that will appear in the navbar
  const navs = [
    { text: 'Home', href: '/' }, // Link to the homepage
    { text: 'Experiences', href: '/experiences' } // Link to the experiences page
    // Future links can be added here easily by uncommenting or adding new objects:
    // { text: 'Projects', href: '/projects' },
    // { text: 'Blog', href: '/blog' },
    // { text: 'About', href: '/about' },
  ];

  /**
   * Checks if the provided navigation link 'href' matches the current page's path.
   * @param {string} href - The href attribute of the navigation link.
   * @returns {boolean} - True if the href matches the current router pathname, false otherwise.
   */
  const isPathActive = (href) => {
    // Simple check: is the link's destination the exact same as the current page route?
    return router.pathname === href;
    // Note: This doesn't handle nested routes (e.g., highlighting "Blog" when on "/blog/my-post").
    // For that, more complex logic using router.asPath and startsWith might be needed if structure changes.
  };

  return (
    // Use the semantic <nav> element for navigation
    <nav className="navbar">
      {' '}
      {/* Styled by .navbar in app.css */}
      {/* Use .container for consistent centering and max-width */}
      <div className="container">
        {/* Logo: A link back to the homepage */}
        <Link href="/" className="logo">
          {' '}
          {/* Link component wraps the logo text */}
          {/* Your Name/Logo Text */}
          Sabbir Hossain
        </Link>

        {/* Navigation Links Section */}
        <ul className="nav-links">
          {' '}
          {/* Unordered list for navigation items */}
          {/* Map over the 'navs' array to create each navigation link */}
          {navs.map((nav) => {
            // Determine if the current link is active
            const isActive = isPathActive(nav.href);
            // Dynamically create the className string, adding 'active' if the link is active
            const activeClass = isActive ? 'active' : ''; // CSS rule `.nav-item.active` provides styling

            return (
              <li key={nav.href}>
                {' '}
                {/* Use the href as a unique key */}
                {/* Use the Link component for the actual navigation item */}
                <Link href={nav.href} className={`nav-item ${activeClass}`}>
                  {nav.text} {/* The visible text of the link */}
                </Link>
                {/* Nested rendering logic (for dropdowns) was removed for simplicity */}
              </li>
            );
          })}
        </ul>

        {/* Include the Contact component (Email, GitHub, LinkedIn icons) */}
        {/* Ensure the Contact component itself is correctly implemented */}
        <Contact />
      </div>
    </nav>
  );
}

// Export the Navbar component for use in Layout.jsx
export default Navbar;
