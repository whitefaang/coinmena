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
    return <p>'Loading .. '</p>
  }

  if (cryptosApi.error || availableCurrencies.error) {
    return <Error />
  }

  const baseCrypto = new URLSearchParams(search).get('base')

  return (
    <>
      <Modal show={!user}>
        <div className="bg-surface w-10/12 lg:w-6/12 2xl:w-1/3 p-12 rounded-lg shadow-md">
          <LoginForm />
        </div>
      </Modal>
      <ExchangeForm
        initialCrypto={
          baseCrypto
            ? cryptosApi.data.find((c: any) => c.Symbol === baseCrypto)
            : cryptosApi.data[0]
        }
        availableCryptos={cryptosApi.data}
        availableFiats={availableCurrencies.data}
      />
    </>
  )
}

export default Trade