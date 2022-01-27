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

type Props = {}

function Trade({}: Props) {
  const user = useUIStore((state) => state.user)
  const cryptosApi = useCryptoAssets(50)
  const search = useLocation().search

  const availableCurrencies = useQuery(
    'fiat/currencies',
    () => getAvailableCurrencies(),
    {
      initialData: {
        symbols: {},
      },
    }
  )

  if (cryptosApi.loading || availableCurrencies.isLoading) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-10/12 md:w-1/3 bg-primary rounded-lg h-1.5 lg:h-3 animate-pulse"></div>
      </div>
    )
  }

  if (cryptosApi.error || availableCurrencies.error) {
    return <Error />
  }

  const params = new URLSearchParams(search)
  const baseCrypto = params.get('base')
  const initialDirection = params.get('dir') || 'Buy'
  const directionMap: any = {
    Buy: 'ftc',
    Sell: 'ctf',
  }

  return (
    <>
      <Modal show={!user}>
        <div className="bg-surface w-10/12 lg:w-6/12 2xl:w-1/3 px-6 py-10 lg:p-12 rounded-lg shadow-md">
          <LoginForm />
        </div>
      </Modal>
      <ExchangeForm
        initialCrypto={
          baseCrypto
            ? cryptosApi.data.find((c: any) => c.Symbol === baseCrypto)
            : cryptosApi.data[0]
        }
        initialDirection={directionMap[initialDirection] as any}
        availableCryptos={cryptosApi.data}
        availableFiats={availableCurrencies.data}
      />
    </>
  )
}

export default Trade
