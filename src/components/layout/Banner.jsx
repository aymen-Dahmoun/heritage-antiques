import { ScrollText, ShieldCheck, Truck } from 'lucide-react'
import { useSelector } from 'react-redux'
import { selectCatalogSize } from '../../redux/slices/productSlice'
import { formatObjectCount } from '../../utils/currency'

const standards = [
  {
    icon: ShieldCheck,
    title: 'Museum verified',
    text: 'Reviewed for age, material, and condition.',
  },
  {
    icon: ScrollText,
    title: 'Documented provenance',
    text: 'Every object arrives with a research dossier.',
  },
  {
    icon: Truck,
    title: 'Insured delivery',
    text: 'White-glove shipping is included worldwide.',
  },
]

function Banner() {
  const catalogSize = useSelector(selectCatalogSize)

  return (
    <section className="banner" aria-labelledby="banner-title">
      <div className="banner__copy">
        <p className="eyebrow">The 2026 cabinet · {formatObjectCount(catalogSize)}</p>
        <h1 id="banner-title">
          Objects with a history.
          <span> Chosen for what comes next.</span>
        </h1>
        <p className="banner__lede">
          A close-held cabinet of museum-grade antiques, from instruments that
          mapped the heavens to objects that once sat on the desks of emperors.
          Each piece is unique and offered once.
        </p>
        <div className="banner__actions">
          <a className="p-btn p-btn--primary" href="#collection">
            Explore the collection
          </a>
          <span className="banner__note">Private viewings by appointment</span>
        </div>
      </div>

      <div className="banner__standards" aria-label="Our standards">
        {standards.map(({ icon: Icon, title, text }) => (
          <div className="standard" key={title}>
            <span className="standard__icon" aria-hidden="true">
              <Icon size={18} />
            </span>
            <div>
              <p className="standard__title">{title}</p>
              <p className="standard__text">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Banner
