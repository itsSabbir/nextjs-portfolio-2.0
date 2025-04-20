import { withRouter } from 'next/router';

import Contact from './Contact';

const NESTED_ACTIVE_CLASS = 'nested-active';

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'Experiences', href: '/experiences' },
  ];

  const isPath = (href, items = []) =>
    router.pathname === href ||
    (items.some((item) => router.pathname === item.href) && NESTED_ACTIVE_CLASS);

  const getLink = ({ href, text, items }) => {
    const activeItem = isPath(href, items);
    const activeClass = activeItem ? 'active' : '';
    const nestedActiveClass = activeItem === NESTED_ACTIVE_CLASS ? NESTED_ACTIVE_CLASS : '';

    return (
      <a className={`nav-item ${activeClass} ${nestedActiveClass}`} href={href}>{text}</a>
    ); 
  };

  const renderNested = ({ items = [] }) => {
    if (!(items && items.length)) return '';
    return (
      <div className="nested-nav">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{getLink(item)}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a className="logo" href="/">
          Khadem A. Alam
        </a>

        <ul className="nav-links">
          {navs.map((nav, index) => (
            <li key={index}>
              <>{getLink(nav)}</>
              <>{renderNested(nav)}</>
            </li>
          ))}
        </ul>
      </div>
      <Contact />
    </nav>
  );
}

export default withRouter(Navbar);
