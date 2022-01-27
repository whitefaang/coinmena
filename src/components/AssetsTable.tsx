/**
 * Assets table component for crypto assets
 */
import classNames from 'classnames'
import React, { useMemo } from 'react'
import useCryptoAssets from '../hooks/useCryptoAssets'
import { CryptoAsset } from '../models'
import { useUIStore } from '../store/uiStore'
import Button from './atomic/Button'
import Error from './Error'

function AssetsTable() {
  const cryptos = useCryptoAssets()
  const { selectedCoin, selectCoin } = useUIStore((state) => state)

  const selectCoinForTrade = (coin: CryptoAsset) => {
    if (selectedCoin && (selectedCoin as any).ID === coin.ID) {
      return
    }
    selectCoin(coin)
    const buySellEl = document.getElementById('buySell')
    if (buySellEl) {
      document.getElementById('content')?.scrollTo({
        top: buySellEl.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  const [sortKey, direction] = cryptos.sortKey.split(' ')

  const sortTable = (col: string) => {
    if (sortKey === col) {
      cryptos.sortBy(col, direction === 'desc' ? 'asc' : 'desc')
    } else {
      cryptos.sortBy(col, 'desc')
    }
  }

  const columns = ['Name', 'Price']

  if (cryptos.error) {
    return <Error />
  }
  const TBody = () => {
    if (cryptos.loading) {
      return (
        <>
          {Array(10)
            .fill(0)
            .map((_, idx) => {
              return (
                <tr key={idx} className="bg-white border-gray-200">
                  {Array(2)
                    .fill(0)
                    .map((_, idx) => {
                      return (
                        <td key={idx} className="pl-3 py-5 gap-4">
                          <div className="h-6 w-2/3 lg:w-1/3 bg-gray-200 rounded-lg animate-pulse"></div>
                        </td>
                      )
                    })}
                </tr>
              )
            })}
        </>
      )
    }

    return (
      <>
        {cryptos.data.map((d: CryptoAsset) => {
          return useMemo(
            () => (
              <tr
                key={d.ID as string}
                className={classNames(
                  'bg-white hover:bg-primary-muted border-b border-gray-200 text-sm cursor-pointer font-semibold',
                  {
                    '!bg-primary':
                      selectedCoin && (selectedCoin as any).ID === d.ID,
                  }
                )}
                onClick={() => selectCoinForTrade(d)}
              >
                <td className="flex items-center gap-4 px-5 py-3">
                  <img
                    src={d.Logo}
                    alt={d.Name}
                    className="w-10 h-10 rounded-full shadow-md"
                  />
                  <span>{d.Name}</span>
                </td>
                <td>{`$${d.Price}`}</td>
              </tr>
            ),
            [d.ID]
          )
        })}
      </>
    )
  }

  return (
    <React.Fragment>
      <div className="flex bg-surface flex-wrap">
        <div className="p-5 flex-1 text-sm font-bold">
          Last updated on {cryptos.lastUpdated}
        </div>
        <div className="">
          <Button
            onClick={cryptos.prev}
            ghost
            aria-label="Previous Page"
            title="Previous Page"
            className="h-full !rounded-none"
            disabled={
              cryptos.page === 1 || cryptos.loading || cryptos.isRefetching
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </Button>
          <Button
            onClick={cryptos.next}
            ghost
            aria-label="Next Page"
            title="Next Page"
            className="h-full !rounded-none"
            disabled={cryptos.loading || cryptos.isRefetching}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Button>
        </div>
      </div>
      <table className="min-w-full xl:h-full leading-normal bg-surface rounded-lg shadow-sm overflow-hidden">
        <thead>
          <tr className="border-gray-200 border-2">
            {columns.map((col) => {
              return (
                <th
                  key={col}
                  className="w-1/2 px-4 py-5 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  <span
                    className="cursor-pointer flex hover:text-primary"
                    onClick={() => sortTable(col)}
                  >
                    {col}
                    {sortKey === col &&
                      (direction === 'desc' ? (
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7l4-4m0 0l4 4m-4-4v18"
                          ></path>
                        </svg>
                      ))}
                  </span>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="h-full">
          <TBody />
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default AssetsTable
