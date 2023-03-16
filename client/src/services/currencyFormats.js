export const currencyFormatter = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumSignificantDigits: 6,
      currency: "USD",
    })
    return formatter.format(value)
  }