import PropTypes from 'prop-types'

export const cartItemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
})

export const productShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  epoch: PropTypes.string.isRequired,
  yearCreated: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired,
  maker: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  materials: PropTypes.string.isRequired,
  dimensions: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  certificate: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  provenance: PropTypes.string.isRequired,
})
