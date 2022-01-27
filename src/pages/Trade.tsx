/**
 * Trade page
 */
import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import Modal from '../components/atomic/Modal'
import Error from '../components/Error'
import ExchangeForm from '../components/ExchangeForm'
import LoginForm from '../components/LoginForm'
import useCryptoAssets from '../hooks/useCryptoAssets'
import { getAvailableCurrencies } from '../services'
import { useUIStore } from '../store/uiStore'

function Trade() {
  // user object from store
  const user = useUIStore((state) => state.user)
  // hook to fetch crypto assets
  // here 50 assets are fetched implying this platform only suports 50 assets
  const cryptosApi = useCryptoAssets(50)

  // fetch list of availlable fiat currencies
  const availableCurrencies = useQuery(
    'fiat/currencies',
    () => getAvailableCurrencies(),
    {
      initialData: {
        symbols: {},
      },
    }
  )

  // hook to retrieve any searcch params
  const search = useLocation().search

  // show loader
  if (cryptosApi.loading || availableCurrencies.isLoading) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-10/12 md:w-1/3 bg-primary rounded-lg h-1.5 lg:h-3 animate-pulse"></div>
      </div>
    )
  }

  // show error
  if (cryptosApi.error || availableCurrencies.error) {
    return <Error />
  }

  // check for any search params
  const params = new URLSearchParams(search)

  // used to get the base ie the base crypto which requires conversion
  const baseCrypto = params.get('base')
  // intial direction ie whether the user wants to buy or sell crypto assets
  const initialDirection = params.get('dir') || 'Buy'
  // direction map to determine to set the corresponding ..
  // .. ftc (fiat to crypto) or ctf (crypto to assets) direction
  const directionMap: any = {
    Buy: 'ftc',
    Sell: 'ctf',
  }

  return (
    <>
      {/* this modal to be shoen
        when the user isn't logged in */}
      <Modal show={!user}>
        <div className="bg-surface w-10/12 lg:w-6/12 2xl:w-1/3 px-6 py-10 lg:p-12 rounded-lg shadow-md">
          <LoginForm />
        </div>
      </Modal>
      <ExchangeForm
        // check for the inital crypto currency based on the baseCrypto calculated above
        initialCrypto={
          baseCrypto
            ? cryptosApi.data.find((c: any) => c.Symbol === baseCrypto) ||
              cryptosApi.data[0]
            : cryptosApi.data[0]
        }
        // set the inital direction of the trade paanel (ctf or ftc)
        initialDirection={directionMap[initialDirection] as any}
        // list of available cryptos
        availableCryptos={cryptosApi.data}
        // liist of available fiats
        availableFiats={availableCurrencies.data}
      />
    </>
  )
}

export default Trade
