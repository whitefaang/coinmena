export const fetchCryptoAssets = (page?: number, limit = 10) => {
  const headers = new Headers()
  headers.set('x-messari-api-key', 'ca822321-9a64-4e4b-bfb8-c33fae94d5f0')
  return fetch(
    `https://data.messari.io/api/v2/assets?page=${page}&limit=${limit}&fields=id,slug,symbol,name,metrics/market_data/price_usd,profile/general/background/issuing_organizations`,
    { headers }
  ).then((res) => res.json())
}

export const getAvailableCurrencies = () => {
  return fetch('https://api.exchangerate.host/symbols').then((res) =>
    res.json()
  )
}

export const getExchangeRate = (to: string, amount: number) => {
  return fetch(
    `https://api.exchangerate.host/convert?from=USD&to=${to}&amount=${amount}`
  ).then((res) => res.json())
}
