import { Link } from 'react-router-dom'
import logoImage from '../../assets/logo.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/" aria-label="Heritage & Co. home">
            <img
              src={logoImage}
              alt="Heritage & Co."
              className="site-footer__logo-img"
            />
          </Link>
          <p className="site-footer__tagline">Antiquités, Instruments &amp; Objets d’Art</p>
          <p className="site-footer__description">
            A discreet international salon devoted to the acquisition,
            scientific authentication, and conservation of historical
            masterpieces.
          </p>
        </div>

        <div>
          <p className="site-footer__label">The Collection</p>
          <ul className="site-footer__links">
            <li>
              <Link to="/catalog">All Antiquities (20)</Link>
            </li>
            <li>
              <Link to="/catalog">Scientific Instruments</Link>
            </li>
            <li>
              <Link to="/catalog">Numismatics &amp; Coins</Link>
            </li>
            <li>
              <Link to="/catalog">Illuminated Manuscripts</Link>
            </li>
            <li>
              <Link to="/catalog">Classical Antiquities</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="site-footer__label">Curatorial Salon</p>
          <ul className="site-footer__links">
            <li>
              <Link to="/about">Curatorial Philosophy</Link>
            </li>
            <li>
              <Link to="/about">Conservation Ethics</Link>
            </li>
            <li>
              <Link to="/inquire">Private Viewings</Link>
            </li>
            <li>
              <Link to="/inquire">Institutional Loans</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="site-footer__label">Curation Protocol</p>
          <p>Every object is unique and offered once.</p>
          <p>Zero alcohol, spirits, or barware in curation.</p>
          <p>Insured white-glove fine art transit worldwide.</p>
          <p>Spectrometric &amp; TL scientific verification.</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 Heritage &amp; Co. Antiquaires. All rights reserved.</p>
        <p>Curated museum demonstration · Objects &amp; provenance records are illustrative.</p>
      </div>
    </footer>
  )
}

export default Footer
