/**
 * Hook to fetch all crypto Assets
 */
import { useState } from 'react'
import { useQuery } from 'react-query'
import { CryptoAsset } from '../models'
import { fetchCryptoAssets } from '../services'

interface ReturnProps {
  page: number
  next: () => void
  prev: () => void
  lastUpdated: string
  sortKey: string
  sortBy: (key: string, direction: string) => void
  loading: boolean
  isRefetching: boolean
  error: any
  data: CryptoAsset[]
}

function useCryptoAssets(limit = 10): ReturnProps {
  // page no. state
  const [page, setPage] = useState(1)
  // sort key state
  const [sortKey, setSortKey] = useState('Price desc')
  // paginated crypto assets func
  const paginatedCryptoAssets = (page = 0) => fetchCryptoAssets(page, limit)

  // paginated api call for crypto assets
  const cryptos = useQuery(
    ['crypto/assets', page],
    () => paginatedCryptoAssets(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  // func to goto next page
  const next = () => {
    setPage((prev) => prev + 1)
  }

  // func to goto prev page
  const prev = () => {
    setPage((prev) => prev - 1)
  }

  // get key to be sorted with and direction from sortKey
  const [sKey, direction] = sortKey.split(' ')

  // func to set the sortKey
  const sortBy = (key: string, direction: string) => {
    // set the page only if the key we are sorting with is new
    if (key !== sKey) {
      setPage(1)
    }
    setSortKey(`${key} ${direction}`)
  }

  return {
    page,
    next,
    prev,
    lastUpdated: new Date(cryptos.dataUpdatedAt).toLocaleString(),
    sortKey,
    sortBy,
    loading: cryptos.isLoading,
    isRefetching: cryptos.isRefetching,
    error: cryptos.error,
    data: cryptos.data
      ? cryptos.data.data
          ?.map((coin: any): CryptoAsset => {
            return {
              Name: coin.name,
              Price: coin.metrics.market_data.price_usd.toFixed(3),
              ID: coin.id,
              Symbol: coin.symbol,
              Logo:
                coin.profile.general.background.issuing_organizations?.[0]
                  ?.logo || 'dollar.jfif',
            }
          })
          .sort((a: CryptoAsset, b: CryptoAsset) => {
            if (sKey === 'Name') {
              const textA = a[sKey].toLowerCase()
              const textB = b[sKey].toLowerCase()
              if (direction === 'desc') {
                return textA < textB ? 1 : textA > textB ? -1 : 0
              }
              return textA < textB ? -1 : textA > textB ? 1 : 0
            } else if (sKey === 'Price') {
              const textA = a[sKey]
              const textB = b[sKey]
              if (direction === 'desc') {
                return textB - textA
              }
              return textA - textB
            }
          })
      : [],
  }
}

export default useCryptoAssets
