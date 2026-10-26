import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Scale,
  Scroll,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from 'lucide-react'
import celestialMapImage from '../assets/images/celestial-map.jpg'
import { addToCart } from '../redux/slices/cartSlice'
import {
  selectCatalog,
  setCategory,
  setSearchTerm,
  setSortOrder,
} from '../redux/slices/productSlice'
import { showToast } from '../redux/slices/uiSlice'
import { formatCurrency } from '../utils/currency'
import '../styles/landing.css'

function LandingPage({ onSelectProduct }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const catalog = useSelector(selectCatalog)
  const ringRef = useRef(null)
  const [emailInput, setEmailInput] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // Top featured artifacts
  const heroArtifact = catalog.find((item) => item.id === 'hc-001') || catalog[0]
  const spotlightArtifacts = catalog
    .filter((item) => item.featured)
    .slice(0, 6)

  // GSAP subtle celestial orbit animation
  useEffect(() => {
    if (ringRef.current) {
      const tween = gsap.to(ringRef.current, {
        rotation: 360,
        duration: 90,
        repeat: -1,
        ease: 'none',
      })
      return () => tween.kill()
    }
  }, [])

  const handleAddToCart = (product, e) => {
    e.stopPropagation()
    dispatch(addToCart(product))
    dispatch(showToast(`${product.name} reserved in your cabinet.`))
  }

  const handleEpochClick = (query) => {
    dispatch(setCategory('All'))
    dispatch(setSearchTerm(query))
    dispatch(setSortOrder('oldest'))
    navigate('/catalog')
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!emailInput) return
    setSubscribed(true)
    dispatch(showToast('You have been enrolled in the private salon registry.'))
    setEmailInput('')
  }

  return (
    <div className="landing">
      {/* 1. HERO SECTION */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__badge-wrapper">
              <span className="hero__badge">
                <Sparkles size={14} aria-hidden="true" />
                Museum Verified · Est. 2026
              </span>
            </div>

            <h1 id="hero-title" className="hero__title">
              Timeless Antiquities.
              <span>Unbroken Provenance.</span>
            </h1>

            <p className="hero__subtitle">
              A strictly curated cabinet of museum-grade artifacts, precision
              navigational instruments, imperial ceramics, and classical
              antiquities spanning three millennia of human genius.
            </p>

            <div className="hero__actions">
              <Link to="/catalog" className="p-btn p-btn--primary">
                Explore The Master Collection
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/about" className="p-btn p-btn--secondary">
                Curatorial Philosophy
              </Link>
            </div>

            <div className="hero__stats">
              <div className="hero__stat-item">
                <span className="hero__stat-value">{catalog.length}</span>
                <span className="hero__stat-label">Authenticated Pieces</span>
              </div>
              <div className="hero__stat-item">
                <span className="hero__stat-value">3,000+</span>
                <span className="hero__stat-label">Years of History</span>
              </div>
              <div className="hero__stat-item">
                <span className="hero__stat-value">100%</span>
                <span className="hero__stat-label">TL &amp; Scientific Dating</span>
              </div>
              <div className="hero__stat-item">
                <span className="hero__stat-value">Zero</span>
                <span className="hero__stat-label">Alcohol or Barware</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Showcase Card */}
          <div className="hero__showcase-wrap">
            <div ref={ringRef} className="hero__orbit-ring" aria-hidden="true" />

            {heroArtifact && (
              <motion.div
                className="hero__showcase-card"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProduct(heroArtifact)}
              >
                <div className="hero__showcase-media">
                  <img
                    src={heroArtifact.image}
                    alt={heroArtifact.imageAlt}
                    className="hero__showcase-img"
                  />
                  <span className="hero__showcase-seal">Cabinet Crown Jewel</span>
                  <span className="hero__showcase-epoch">{heroArtifact.epoch}</span>
                </div>

                <div className="hero__showcase-details">
                  <span className="hero__showcase-category">
                    {heroArtifact.category} · {heroArtifact.origin}
                  </span>
                  <h3 className="hero__showcase-name">{heroArtifact.name}</h3>
                  <p className="hero__showcase-summary">{heroArtifact.summary}</p>

                  <div className="hero__showcase-footer">
                    <span className="hero__showcase-price">
                      {formatCurrency(heroArtifact.price)}
                    </span>
                    <button
                      type="button"
                      className="p-btn p-btn--primary"
                      onClick={(e) => handleAddToCart(heroArtifact, e)}
                    >
                      <ShoppingBag size={15} aria-hidden="true" />
                      Acquire
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 2. CURATOR'S MANIFESTO */}
      <section className="manifesto" aria-labelledby="manifesto-title">
        <motion.div
          className="manifesto__box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="manifesto__media-wrap">
            <img
              src={celestialMapImage}
              alt="Hand-coloured 1687 celestial planisphere mapping the northern and southern skies"
              className="manifesto__img"
            />
            <span className="manifesto__stamp">Curatorial Seal · Paris</span>
          </div>

          <div className="manifesto__content">
            <p className="eyebrow eyebrow--gold">The Sacred Stewardship</p>
            <h2 id="manifesto-title" className="manifesto__title">
              Every Object Holds a Century. We Ensure It Survives Another.
            </h2>
            <p className="manifesto__body">
              Antiquities are not merely decorative ornaments; they are tangible
              witnesses to celestial discoveries, imperial treaties, and forgotten
              master artisans. At Heritage &amp; Co., each acquisition undergoes
              strict non-destructive metallurgical verification, archival title
              audits, and museum-grade conservation.
            </p>
            <blockquote className="manifesto__quote">
              “To hold Harrison’s marine timekeeper or an Athenian owl tetradrachm
              is to touch the exact hands that shaped our modern conception of time,
              geometry, and civilization.”
            </blockquote>
            <div className="manifesto__curator">
              <div className="manifesto__curator-info">
                <h4>Dr. Elena Rostova</h4>
                <p>Chief Conservator &amp; Fellow of Antiquities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. MASTERPIECES SPOTLIGHT */}
      <section className="spotlight" aria-labelledby="spotlight-title">
        <div className="section-head">
          <div className="section-head__left">
            <p className="eyebrow eyebrow--green">Handpicked Curations</p>
            <h2 id="spotlight-title" className="section-title">
              Cabinet Masterpieces
            </h2>
            <p className="section-desc">
              Rare, authenticated survivor objects of historical importance.
              Offered as one-of-one pieces with certified research dossiers.
            </p>
          </div>
          <Link to="/catalog" className="p-btn p-btn--outline-green">
            View All 20 Antiquities
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="spotlight__grid">
          {spotlightArtifacts.map((artifact, index) => (
            <motion.article
              key={artifact.id}
              className="spotlight-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="spotlight-card__media"
                onClick={() => onSelectProduct(artifact)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={artifact.image}
                  alt={artifact.imageAlt}
                  className="spotlight-card__img"
                />
                <span className="spotlight-card__badge">Verified</span>
                <span className="spotlight-card__epoch">{artifact.epoch}</span>
              </div>

              <div className="spotlight-card__body">
                <span className="spotlight-card__cat">{artifact.category}</span>
                <h3 className="spotlight-card__name">{artifact.name}</h3>
                <p className="spotlight-card__desc">{artifact.summary}</p>

                <div className="spotlight-card__footer">
                  <span className="spotlight-card__price">
                    {formatCurrency(artifact.price)}
                  </span>
                  <div className="spotlight-card__actions">
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => onSelectProduct(artifact)}
                      aria-label={`View dossier for ${artifact.name}`}
                    >
                      <Eye size={17} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="p-btn p-btn--primary"
                      onClick={(e) => handleAddToCart(artifact, e)}
                    >
                      Acquire
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 4. EPOCHS & CHRONOLOGY EXPLORER */}
      <section className="epochs" aria-labelledby="epochs-title">
        <div className="section-head">
          <div className="section-head__left">
            <p className="eyebrow eyebrow--gold">Chronological Archives</p>
            <h2 id="epochs-title" className="section-title">
              Explore by Historical Epoch
            </h2>
            <p className="section-desc">
              Journey across three millennia of craftsmanship, from classical
              Mediterranean bronze to Enlightenment scientific breakthroughs.
            </p>
          </div>
        </div>

        <div className="epochs__grid">
          <div
            className="epoch-card"
            onClick={() => handleEpochClick('BCE')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleEpochClick('BCE')}
          >
            <span className="epoch-card__era">Epoch I</span>
            <h3 className="epoch-card__title">Classical Antiquity</h3>
            <span className="epoch-card__dates">c. 600 BCE – 500 CE</span>
            <p className="epoch-card__desc">
              Archaic coins, Saite Egyptian ushabti figures, and Roman blown glass
              bearing iridescent subterranean patinas.
            </p>
            <span className="epoch-card__link">
              Explore Epoch <ArrowRight size={14} />
            </span>
          </div>

          <div
            className="epoch-card"
            onClick={() => handleEpochClick('12th century')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleEpochClick('12th century')}
          >
            <span className="epoch-card__era">Epoch II</span>
            <h3 className="epoch-card__title">Byzantine &amp; Medieval</h3>
            <span className="epoch-card__dates">500 – 1450 CE</span>
            <p className="epoch-card__desc">
              Imperial gold intaglio signets, Southern Song Dynasty celadon
              porcelains, and monumental illuminated choir leaves.
            </p>
            <span className="epoch-card__link">
              Explore Epoch <ArrowRight size={14} />
            </span>
          </div>

          <div
            className="epoch-card"
            onClick={() => handleEpochClick('Renaissance')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleEpochClick('Renaissance')}
          >
            <span className="epoch-card__era">Epoch III</span>
            <h3 className="epoch-card__title">Renaissance &amp; Baroque</h3>
            <span className="epoch-card__dates">1450 – 1750 CE</span>
            <p className="epoch-card__desc">
              Astrolabes, celestial planispheres, Florentine bronze castings,
              and Persian astronomical brasswork.
            </p>
            <span className="epoch-card__link">
              Explore Epoch <ArrowRight size={14} />
            </span>
          </div>

          <div
            className="epoch-card"
            onClick={() => handleEpochClick('Horology')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleEpochClick('Horology')}
          >
            <span className="epoch-card__era">Epoch IV</span>
            <h3 className="epoch-card__title">Enlightenment &amp; Horology</h3>
            <span className="epoch-card__dates">1750 – 1900 CE</span>
            <p className="epoch-card__desc">
              Harrison marine chronometers, Dollond naval telescopes, and Belle
              Époque sculptural mantel timekeepers.
            </p>
            <span className="epoch-card__link">
              Explore Epoch <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </section>

      {/* 5. THE FOUR PILLARS OF AUTHENTICATION */}
      <section className="pillars" aria-labelledby="pillars-title">
        <div className="pillars__header">
          <p className="eyebrow eyebrow--gold">The Curation Standard</p>
          <h2 id="pillars-title" className="pillars__title">
            The Four Pillars of Authentication
          </h2>
          <p className="pillars__desc">
            We adhere to the strictest curatorial ethics in the art market.
            Every item in the cabinet satisfies four immutable safeguards.
          </p>
        </div>

        <div className="pillars__grid">
          <div className="pillar-card">
            <div className="pillar-card__icon">
              <Scale size={22} aria-hidden="true" />
            </div>
            <h3 className="pillar-card__title">Spectrometric Dating</h3>
            <p className="pillar-card__text">
              Thermoluminescence (TL), X-ray fluorescence spectrometry, and
              dendrochronology establish precise metallurgical and material age.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-card__icon">
              <Scroll size={22} aria-hidden="true" />
            </div>
            <h3 className="pillar-card__title">Archival Provenance</h3>
            <p className="pillar-card__text">
              Complete ownership genealogy documented across museum deaccession
              catalogues, estate inventories, and historical sales transcripts.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-card__icon">
              <ShieldCheck size={22} aria-hidden="true" />
            </div>
            <h3 className="pillar-card__title">Conservation Ethics</h3>
            <p className="pillar-card__text">
              All conservation is strictly non-invasive and reversible,
              preserving original historic tool marks, patinas, and movements.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-card__icon">
              <Truck size={22} aria-hidden="true" />
            </div>
            <h3 className="pillar-card__title">Insured Courier Transit</h3>
            <p className="pillar-card__text">
              White-glove climate-regulated security delivery with full Lloyd’s
              of London fine art insurance coverage to private vaults worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 6. COLLECTOR TESTIMONIALS */}
      <section className="testimonials" aria-labelledby="testimonials-title">
        <div className="section-head">
          <div className="section-head__left">
            <p className="eyebrow eyebrow--green">Distinguished Guardians</p>
            <h2 id="testimonials-title" className="section-title">
              From the Curatorial Community
            </h2>
            <p className="section-desc">
              Reflections from private curators, foundation trustees, and
              discerning guardians of global heritage.
            </p>
          </div>
        </div>

        <div className="testimonials__grid">
          <div className="testimonial-card">
            <blockquote className="testimonial-card__quote">
              “The Harrison H4 and the Persian astrolabe arrived with scientific
              metallurgical documentation rivaling major national museums.
              A truly peerless level of rigor.”
            </blockquote>
            <div className="testimonial-card__author">
              <h4>Lord Julian Montagu</h4>
              <p>Trustee, Greenwich Navigational Heritage Society</p>
            </div>
          </div>

          <div className="testimonial-card">
            <blockquote className="testimonial-card__quote">
              “In an era where provenance is too often an afterthought,
              Heritage &amp; Co. provides unbroken ownership chains that give our
              acquisition committee complete confidence.”
            </blockquote>
            <div className="testimonial-card__author">
              <h4>Claire Delacroix</h4>
              <p>Director of Classical Collections, Geneva</p>
            </div>
          </div>

          <div className="testimonial-card">
            <blockquote className="testimonial-card__quote">
              “Their commitment to strictly classical antiquities and scientific
              instruments, without commercial distractions or barware, makes their
              cabinet an essential biannual study.”
            </blockquote>
            <div className="testimonial-card__author">
              <h4>Prof. Arthur Vance</h4>
              <p>Emeritus Chair of Ancient Numismatics, Oxford</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRIVATE SALON & INVITATION */}
      <section className="cta-salon" aria-labelledby="salon-title">
        <div className="cta-salon__left">
          <span className="eyebrow eyebrow--gold">Private Salon</span>
          <h2 id="salon-title" className="cta-salon__title">
            Join the Curatorial Gazette
          </h2>
          <p className="cta-salon__desc">
            Receive private notifications prior to public catalogue releases,
            scholarly conservation papers, and invitations to private viewings
            in our London and Paris salons.
          </p>
        </div>

        <div className="cta-salon__form-wrap">
          {subscribed ? (
            <div className="cta-salon__form" style={{ textAlign: 'center' }}>
              <CheckCircle2 size={32} color="#c29948" style={{ margin: '0 auto' }} />
              <h3 style={{ color: '#faf6ee', margin: '8px 0 4px', fontSize: '1.1rem' }}>
                Invitation Confirmed
              </h3>
              <p style={{ color: '#c5d3ca', fontSize: '0.85rem' }}>
                Your address has been placed in our private acquisition register.
              </p>
            </div>
          ) : (
            <form className="cta-salon__form" onSubmit={handleSubscribe}>
              <div className="cta-salon__input-group">
                <input
                  type="email"
                  className="cta-salon__input"
                  placeholder="Enter collector email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                />
                <button type="submit" className="p-btn p-btn--gold">
                  Request Gazette
                </button>
              </div>
              <p className="cta-salon__note">
                Strict privacy. Zero solicitation. Only scholarly monographs and
                private accession previews.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

LandingPage.propTypes = {
  onSelectProduct: PropTypes.func.isRequired,
}

export default LandingPage
