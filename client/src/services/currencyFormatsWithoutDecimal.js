export const currencyWithoutDecimal = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: "USD",
  })
 // console.log("salida",formatter.format(value))
  return formatter.format(value)
}

