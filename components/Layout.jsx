import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="root-content-container">
        {children}
      </div>
      <div className="get-pdf">
        <a className="pdf-link" href="/Khadem-Avinoor-Alam-Resume.pdf" target="_blank" rel="noreferrer" title="Open resume PDF in new window">
          <img src="/pdf-icon.svg" alt="PDF icon" />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Layout;