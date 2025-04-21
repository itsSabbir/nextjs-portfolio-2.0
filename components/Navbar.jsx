// --- START OF UPDATED components/Navbar.jsx ---
import Link from 'next/link'; // ** Added: Use Next.js Link for client-side navigation **
import { useRouter } from 'next/router'; // ** Added: Import the useRouter hook **
import Contact from './Contact'; // Assuming Contact component exists and is correct

// Removed: Legacy 'withRouter' import

// No need for this constant if we don't implement nested routes visually right now
// const NESTED_ACTIVE_CLASS = 'nested-active';

function Navbar() {
  // Use the hook to get router information
  const router = useRouter();

  // Navigation items configuration
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'Experiences', href: '/experiences' },
    // Future links can be added here easily:
    // { text: 'Projects', href: '/projects' },
    // { text: 'About', href: '/about' },
  ];

  // Simplified check for active path directly using router.pathname
  const isPathActive = (href) => {
    return router.pathname === href;
    // ** Note:** The old logic for 'nested-active' is removed for simplicity.
    // If true nested dropdowns are added later, this logic would need expanding.
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo Link - wraps the name */}
        <Link href="/" className="logo"> {/* ** Changed: Use Link component ** */}
           {/* ** Changed: Updated name ** */}
          Sabbir Hossain
        </Link>

        {/* Navigation Links List */}
        <ul className="nav-links">
          {navs.map((nav) => {
            const isActive = isPathActive(nav.href);
            // ** Determine class string dynamically **
            const activeClass = isActive ? 'active' : '';

            return (
              <li key={nav.href}>
                {/* ** Changed: Use Link component for navigation item ** */}
                <Link href={nav.href} className={`nav-item ${activeClass}`}>
                  {nav.text}
                </Link>
                {/* ** Removed: Nested rendering logic - simplify for now ** */}
                {/* If nested menus are needed later, this can be re-added */}
              </li>
            );
          })}
        </ul>

        {/* Contact Component (assumed correct) */}
        <Contact />
      </div>
    </nav>
  );
}

// ** Changed: Export the component directly, no need for withRouter **
export default Navbar;
// --- END OF UPDATED components/Navbar.jsx ---