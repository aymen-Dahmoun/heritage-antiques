function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="brand__name">Heritage &amp; Co.</p>
          <p className="site-footer__description">
            A fictional academic catalogue of antiquities and objets d’art,
            built to demonstrate React and Redux state management.
          </p>
        </div>

        <div>
          <p className="site-footer__label">Academic context</p>
          <p>ENSTA · WAMD</p>
          <p>TD / TP 2 · Redux global state</p>
          <p>Academic year 2026</p>
        </div>

        <div>
          <p className="site-footer__label">Catalogue notes</p>
          <p>Every object is offered once, one of one.</p>
          <p>No alcohol or barware is offered.</p>
          <p>Images courtesy of Wikimedia Commons.</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 Heritage &amp; Co.</p>
        <p>Objects and provenance are illustrative. No payment is processed.</p>
      </div>
    </footer>
  )
}

export default Footer
