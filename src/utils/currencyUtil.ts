import currency from 'currency.js'

export function formatCurrency(value: number, withSymbol = true) {
  return currency(value, {
    symbol: withSymbol ? 'R$ ' : '',
    precision: 2,
    decimal: ',',
    separator: '.',
  }).format()
}
