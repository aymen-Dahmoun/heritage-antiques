import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FlaskConical, Scale, ShieldCheck } from 'lucide-react'

function AboutPage() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
    >
      <section className="banner" style={{ background: 'var(--p-vintage-green-dark)', color: '#ffffff' }}>
        <div className="banner__copy">
          <p className="eyebrow eyebrow--gold">Curatorial Stewardship</p>
          <h1 style={{ color: '#faf6ee' }}>
            Where Art History Meets
            <span style={{ color: 'var(--p-accent-gold-light)', fontStyle: 'italic' }}> Exacting Science.</span>
          </h1>
          <p className="banner__lede" style={{ color: '#c7d5cd' }}>
            Heritage &amp; Co. was established on a radical premise: that the
            guardianship of antiquity requires both the passionate eye of the
            historian and the absolute empirical precision of the laboratory.
          </p>
          <div className="banner__actions">
            <Link to="/catalog" className="p-btn p-btn--gold">
              Explore The Cabinet
              <ArrowRight size={15} />
            </Link>
            <Link to="/inquire" className="p-btn p-btn--secondary" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
              Consult With A Conservator
            </Link>
          </div>
        </div>

        <div className="banner__standards" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="standard">
            <span className="standard__icon" style={{ background: 'rgba(194,153,72,0.15)', borderColor: 'var(--p-accent-gold)', color: 'var(--p-accent-gold-light)' }}>
              <ShieldCheck size={18} />
            </span>
            <div>
              <p className="standard__title" style={{ color: '#ffffff' }}>Unbroken Chain of Title</p>
              <p className="standard__text" style={{ color: '#adbdb2' }}>Every work documented through auction archives and historical registries.</p>
            </div>
          </div>
          <div className="standard">
            <span className="standard__icon" style={{ background: 'rgba(194,153,72,0.15)', borderColor: 'var(--p-accent-gold)', color: 'var(--p-accent-gold-light)' }}>
              <FlaskConical size={18} />
            </span>
            <div>
              <p className="standard__title" style={{ color: '#ffffff' }}>Non-Destructive Testing</p>
              <p className="standard__text" style={{ color: '#adbdb2' }}>X-ray fluorescence (XRF) and thermoluminescence verified.</p>
            </div>
          </div>
          <div className="standard">
            <span className="standard__icon" style={{ background: 'rgba(194,153,72,0.15)', borderColor: 'var(--p-accent-gold)', color: 'var(--p-accent-gold-light)' }}>
              <Scale size={18} />
            </span>
            <div>
              <p className="standard__title" style={{ color: '#ffffff' }}>Strict Ethics</p>
              <p className="standard__text" style={{ color: '#adbdb2' }}>Zero cultural looting, zero conflict trade, and zero alcohol or barware.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        <div style={{ background: 'var(--p-surface)', padding: '36px', borderRadius: 'var(--p-radius-200)', border: '1px solid var(--p-border-subdued)', boxShadow: 'var(--p-shadow-100)' }}>
          <p className="eyebrow eyebrow--green" style={{ marginBottom: '8px' }}>Pillar I</p>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '14px', color: 'var(--p-vintage-green-dark)' }}>
            The Ethics of Preservation
          </h2>
          <p style={{ color: 'var(--p-text-subdued)', fontSize: '0.9rem', lineHeight: '1.7' }}>
            We adhere rigorously to the Venice Charter for the Conservation and
            Restoration of Monuments and Sites. Restoration is only ever performed
            when structurally imperative, using strictly reversible media that can
            be removed without harm by future conservators. Original tool markings,
            patinas, and workshop signatures are preserved as sacrosanct historical records.
          </p>
        </div>

        <div style={{ background: 'var(--p-surface)', padding: '36px', borderRadius: 'var(--p-radius-200)', border: '1px solid var(--p-border-subdued)', boxShadow: 'var(--p-shadow-100)' }}>
          <p className="eyebrow eyebrow--gold" style={{ marginBottom: '8px' }}>Pillar II</p>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '14px', color: 'var(--p-vintage-green-dark)' }}>
            Scientific Dating Laboratories
          </h2>
          <p style={{ color: 'var(--p-text-subdued)', fontSize: '0.9rem', lineHeight: '1.7' }}>
            Before entering our cabinet, ceramic works undergo thermoluminescence
            testing through Oxford Authentication to establish firing date. Metal
            alloys in our bronzes, astrolabes, and ancient coins are scrutinized
            via energy-dispersive X-ray fluorescence to confirm the absence of modern
            trace elements or synthetic solderings.
          </p>
        </div>

        <div style={{ background: 'var(--p-surface)', padding: '36px', borderRadius: 'var(--p-radius-200)', border: '1px solid var(--p-border-subdued)', boxShadow: 'var(--p-shadow-100)' }}>
          <p className="eyebrow eyebrow--green" style={{ marginBottom: '8px' }}>Pillar III</p>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '14px', color: 'var(--p-vintage-green-dark)' }}>
            Unbroken Title &amp; Clear Boundaries
          </h2>
          <p style={{ color: 'var(--p-text-subdued)', fontSize: '0.9rem', lineHeight: '1.7' }}>
            Every object is vetted against the Art Loss Register and international
            cultural heritage red lists. We enforce strict curatorial boundaries:
            our cabinet contains strictly high-culture antiquities, scientific
            instruments, manuscripts, and objets d’art. We strictly exclude alcohol,
            wine, decanters, or barware of any kind.
          </p>
        </div>
      </section>

      {/* Curatorial Protocol Checklist */}
      <section style={{ background: 'var(--p-surface-parchment)', padding: '48px', borderRadius: 'var(--p-radius-300)', border: '1px solid var(--p-border)' }}>
        <h2 style={{ fontFamily: 'var(--p-font-serif)', fontSize: '2rem', color: 'var(--p-vintage-green-dark)', marginBottom: '24px' }}>
          The Six-Stage Acquisition Protocol
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            'Visual & Macro-photographic examination under UV and raking light',
            'Spectrometric analysis (XRF) of metallic and ceramic substrates',
            'Archival ownership genealogy & legal title verification',
            'Dossier compilation by independent academic specialists',
            'Conservation condition grading and reversible stabilization',
            'Secure climatized vaulting and insured global courier delivery',
          ].map((step, idx) => (
            <div key={step} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ display: 'grid', width: '28px', height: '28px', flexShrink: 0, placeItems: 'center', background: 'var(--p-vintage-green)', color: '#fff', borderRadius: '50%', fontSize: '0.75rem', fontWeight: 700 }}>
                {idx + 1}
              </span>
              <p style={{ color: 'var(--p-text-primary)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default AboutPage
