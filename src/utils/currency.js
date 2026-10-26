const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function formatCurrency(amount) {
  return currencyFormatter.format(amount)
}

export function formatObjectCount(count) {
  return `${count} ${count === 1 ? 'object' : 'objects'}`
}
