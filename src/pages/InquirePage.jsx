import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { CheckCircle2, MapPin, ShieldCheck } from 'lucide-react'
import { selectCatalog } from '../redux/slices/productSlice'
import { showToast } from '../redux/slices/uiSlice'

function InquirePage() {
  const dispatch = useDispatch()
  const catalog = useSelector(selectCatalog)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    inquiryType: 'Acquisition Consultation',
    objectId: 'general',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    dispatch(
      showToast('A senior curator will review your dossier and contact you within 24 hours.')
    )
  }

  return (
    <motion.div
      className="inquire-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
    >
      <div style={{ maxWidth: '720px' }}>
        <p className="eyebrow eyebrow--gold">White-Glove Advisory</p>
        <h1 style={{ fontFamily: 'var(--p-font-serif)', fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--p-vintage-green-dark)', marginTop: '8px' }}>
          Private Acquisitions &amp; Curatorial Concierge
        </h1>
        <p style={{ color: 'var(--p-text-subdued)', fontSize: '1rem', lineHeight: '1.7', marginTop: '12px' }}>
          We welcome inquiries from distinguished private collectors, institutional curators,
          and historical foundations. Every communication is treated with utmost discretion.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(320px, 1fr)', gap: '48px', alignItems: 'start' }}>
        {/* Form Box */}
        <div style={{ background: 'var(--p-surface)', padding: '40px', borderRadius: 'var(--p-radius-300)', border: '1px solid var(--p-border)', boxShadow: 'var(--p-shadow-100)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '48px 16px' }}>
              <CheckCircle2 size={48} color="var(--p-vintage-green)" style={{ margin: '0 auto 16px' }} />
              <h2 style={{ fontFamily: 'var(--p-font-serif)', fontSize: '1.75rem', color: 'var(--p-vintage-green-dark)' }}>
                Dossier Received
              </h2>
              <p style={{ color: 'var(--p-text-subdued)', marginTop: '12px', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '42ch', marginInline: 'auto' }}>
                Thank you, {formData.name}. Your inquiry regarding{' '}
                {formData.objectId === 'general' ? 'our cabinet' : 'the requested antiquity'}{' '}
                has been routed to the Senior Conservator’s desk. We will reach you at {formData.email}.
              </p>
              <button
                type="button"
                className="p-btn p-btn--outline-green"
                style={{ marginTop: '24px' }}
                onClick={() => setSubmitted(false)}
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--p-text-subdued)', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Lord / Lady / Dr. / Full Name"
                    style={{ width: '100%', height: '42px', padding: '0 14px', border: '1px solid var(--p-border)', borderRadius: 'var(--p-radius-200)', background: 'var(--p-surface-subdued)' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--p-text-subdued)', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="collector@domain.com"
                    style={{ width: '100%', height: '42px', padding: '0 14px', border: '1px solid var(--p-border)', borderRadius: 'var(--p-radius-200)', background: 'var(--p-surface-subdued)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div>
                  <label htmlFor="institution" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--p-text-subdued)', marginBottom: '6px' }}>
                    Institution or Family Office (Optional)
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="e.g. Cambridge Heritage Trust"
                    style={{ width: '100%', height: '42px', padding: '0 14px', border: '1px solid var(--p-border)', borderRadius: 'var(--p-radius-200)', background: 'var(--p-surface-subdued)' }}
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--p-text-subdued)', marginBottom: '6px' }}>
                    Nature of Inquiry
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="p-select"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    style={{ width: '100%', height: '42px' }}
                  >
                    <option value="Acquisition Consultation">Acquisition Consultation</option>
                    <option value="Private Viewing Appointment">Private Viewing Appointment (Paris / London)</option>
                    <option value="Scientific Dossier Request">Scientific Dossier &amp; Provenance Request</option>
                    <option value="Institutional Exhibition Loan">Institutional Exhibition Loan</option>
                    <option value="Bespoke Antiquity Search">Bespoke Historical Sourcing</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="objectId" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--p-text-subdued)', marginBottom: '6px' }}>
                  Specific Object of Interest
                </label>
                <select
                  id="objectId"
                  name="objectId"
                  className="p-select"
                  value={formData.objectId}
                  onChange={handleChange}
                  style={{ width: '100%', height: '42px' }}
                >
                  <option value="general">General Cabinet Inquiry (Entire Collection)</option>
                  {catalog.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.reference} · {item.name} ({item.epoch})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--p-text-subdued)', marginBottom: '6px' }}>
                  Particulars &amp; Scheduling Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please specify desired viewing dates, specific metallurgical concerns, or acquisition requirements..."
                  style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--p-border)', borderRadius: 'var(--p-radius-200)', background: 'var(--p-surface-subdued)', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="p-btn p-btn--primary" style={{ height: '44px', fontSize: '0.95rem' }}>
                Dispatch Curatorial Request
              </button>
            </form>
          )}
        </div>

        {/* Aside Salon Details */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ background: 'var(--p-surface-parchment)', padding: '32px', borderRadius: 'var(--p-radius-200)', border: '1px solid var(--p-border)' }}>
            <h3 style={{ fontFamily: 'var(--p-font-serif)', fontSize: '1.25rem', color: 'var(--p-vintage-green-dark)', marginBottom: '16px' }}>
              International Salons
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--p-accent-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--p-text-primary)' }}>Paris Salon</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--p-text-subdued)', lineHeight: '1.5' }}>
                    18 Rue du Faubourg Saint-Honoré, 75008 Paris
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--p-vintage-green)', fontWeight: 600, marginTop: '2px' }}>
                    By appointment only
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--p-accent-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--p-text-primary)' }}>London Salon</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--p-text-subdued)', lineHeight: '1.5' }}>
                    14 Albemarle Street, Mayfair, London W1S 4PH
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--p-vintage-green)', fontWeight: 600, marginTop: '2px' }}>
                    By appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--p-vintage-green-dark)', color: '#ffffff', padding: '32px', borderRadius: 'var(--p-radius-200)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <ShieldCheck size={20} color="var(--p-accent-gold-light)" />
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#faf6ee' }}>Curatorial Confidentiality</h4>
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#c7d5cd', lineHeight: '1.6' }}>
              All client records, acquisition dossiers, and transit locations are safeguarded
              under strict Swiss fiduciary privacy standards. No collector identities are ever
              disclosed to third parties.
            </p>
          </div>
        </aside>
      </div>
    </motion.div>
  )
}

export default InquirePage
