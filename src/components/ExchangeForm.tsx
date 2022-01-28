/**
 * Exchange form used to show the exchange
 * of currencies
 */
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import useDebounce from '../hooks/useDebounce'
import { CryptoAsset, FiatCurrency } from '../models'
import { getExchangeRate } from '../services'
import Button from './atomic/Button'
import Modal from './atomic/Modal'
import SearchWrapper from './SearchWrapper'

// direction in which this panel wil be displayed
// ctf = Crypto to Fiat
// ftc = Fiat to Crypto
type Direction = 'ctf' | 'ftc'

type Props = {
  /**
   * Initial crpto assset value
   */
  initialCrypto: CryptoAsset
  /**
   * Inital direction of the exchange panel
   */
  initialDirection?: Direction
  /**
   * Array of available fiat currencies
   */
  availableFiats: Record<string, FiatCurrency>
  /**
   * List of available crypto assets
   */
  availableCryptos: CryptoAsset[]
}

/**
 * Direction map to safeguard against invalid directions
 * that maybe supplied from parent components during runtime
 */
const directionMap = {
  ctf: 'ctf',
  ftc: 'ftc',
}

function ExchangeForm({
  availableCryptos,
  availableFiats,
  initialCrypto,
  initialDirection,
}: Props) {
  // form state for the state
  const [form, setForm] = useState<{
    // slectd crypto currency
    crypto: CryptoAsset
    // selected fiat curency
    fiat: FiatCurrency
    // crypto amount
    cryptoAmount: number
    // fiat amount
    fiatAmount: number
    // direction of conversion
    conversionDir: Direction
    // modal type / visibility
    modal: 'crypto' | 'fiat' | null
  }>({
    fiat: { code: 'USD', description: 'United Stated Dollar' },
    crypto: initialCrypto,
    fiatAmount: 1,
    cryptoAmount: 1,
    // check if the passed value exists in the direction<ap if not,
    // assume it to be invalid and fallback to default 'ctf'
    conversionDir: initialDirection
      ? (directionMap[initialDirection] as any) || 'ctf'
      : 'ctf' || 'ctf',
    modal: null,
  })

  // debounced currency used so that the reactivity of the form output ie conversion rate
  // isn't calculated evrytime user types but is done with some delay
  const debouncedCryptoAmount = useDebounce(form.cryptoAmount)
  const debouncedFiatAmount = useDebounce(form.fiatAmount)

  // available currencies api call
  const exchangeRateApi = useQuery(
    'fiat/exchange',
    () => getExchangeRate(form.fiat.code),
    {
      initialData: { rates: {} },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  // refresh the exchange rates when a new fiat currency is selected
  useEffect(() => {
    exchangeRateApi.refetch()
  }, [form.fiat.code])

  //   calculate the resulting amount from changing input controls
  useEffect(() => {
    if (exchangeRateApi.data?.info) {
      setForm((prev) => ({
        ...prev,
        ...(prev.conversionDir === 'ctf'
          ? {
              fiatAmount:
                exchangeRateApi.data.info.rate *
                (prev.cryptoAmount * prev.crypto.Price),
            }
          : {
              cryptoAmount:
                (exchangeRateApi.data?.info.rate * prev.fiatAmount) /
                prev.crypto.Price,
            }),
      }))
    }
  }, [
    // look for changes in the input rate as a side effect from the changing of selected fiat currency
    exchangeRateApi.data?.info?.rate,
    // look for changes in selected crypto asset
    form.crypto.ID,
    // look for changes in fiat amount
    debouncedFiatAmount,
    // look for changes in crypto amount
    debouncedCryptoAmount,
  ])

  // func to select crypto asset
  const selectCrypto = (crypto: CryptoAsset) => {
    setForm((prev) => ({ ...prev, crypto, modal: null }))
  }

  // func to select fiat currency
  const selectFiat = (fiat: FiatCurrency) => {
    setForm((prev) => ({ ...prev, fiat, modal: null }))
  }

  // dynamic fiat currencies
  const Fiats = () => {
    return (
      <SearchWrapper>
        {(searchKey) => (
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-4">
            {Object.entries(availableFiats.symbols).map((f: any) => {
              const [code, val] = f
              return JSON.stringify(Object.values(val)).match(
                new RegExp(searchKey, 'i')
              ) ? (
                <div
                  key={code}
                  className="px-3 py-4 border flex items-center gap-7 shadow-sm cursor-pointer hover:shadow-md rounded-md"
                  onClick={() => selectFiat(val)}
                >
                  <div
                    className={`w-12 h-8 shadow-lg currency-flag currency-flag-${code.toLowerCase()}`}
                  />
                  <div className="flex-1 font-semibold">
                    <p>{code}</p>
                    <p className="font-semibold">{val.description}</p>
                  </div>
                </div>
              ) : (
                ''
              )
            })}
          </div>
        )}
      </SearchWrapper>
    )
  }

  // dynamic crypto assets
  const Cryptos = () => (
    <SearchWrapper>
      {(searchKey) => (
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-4">
          {availableCryptos.map((c) =>
            JSON.stringify(Object.values(c)).match(
              new RegExp(searchKey, 'i')
            ) ? (
              <div
                key={c.ID}
                className="px-3 py-4 border flex gap-7 shadow-sm cursor-pointer hover:shadow-md rounded-md"
                onClick={() => selectCrypto(c)}
              >
                <img src={c.Logo} alt={c.Name} className="w-12 h-12" />
                <div className="flex-1 font-semibold">
                  <p>{c.Name}</p>
                  <p className="font-semibold">${c.Price}</p>
                </div>
              </div>
            ) : (
              ''
            )
          )}
        </div>
      )}
    </SearchWrapper>
  )

  // func to open modal
  const openModal = (modal: 'crypto' | 'fiat') => {
    setForm((prev) => ({ ...prev, modal }))
  }

  // func to close modal
  const closeModal = () => {
    setForm((prev) => ({ ...prev, modal: null }))
  }

  // set the amount changes from input
  const onAmountChange = (e: any) => {
    // check if only numbers supplied
    // if not, return without changing state
    if (e.target.value && !/^-?\d+\.?\d*$/.exec(e.target.value)) {
      return
    }
    let value = (e.target.value ? e.target.value : 0).toString()
    // remove any extra preceeding zeros
    while (value.startsWith('0') && value.length > 1) {
      value = value.slice(1)
    }
    setForm((prev) => ({
      ...prev,
      [e.target.name]: value,
    }))
  }

  // change the direction of conversion
  const changeConversionDirection = () => {
    setForm((prev) => ({
      ...prev,
      conversionDir: prev.conversionDir === 'ctf' ? 'ftc' : 'ctf',
    }))
  }

  return (
    <>
      {/*
       * Modal to show list of searchable  crypto / fiats
       */}
      <Modal show={!!form.modal} onOverlayClick={closeModal}>
        <div className="bg-surface w-11/12 2xl:w-2/3 h-3/4 overflow-y-auto rounded-lg shadow-lg p-3">
          <div className="relative h-full">
            {form.modal === 'crypto' ? <Cryptos /> : <Fiats />}
          </div>
        </div>
      </Modal>
      {/*
       * Trading panel
       */}
      <div className="w-full flex flex-wrap bg-surface h-full rounded-lg p-4 shadow-md justify-between">
        <div
          className={classNames('w-full md:w-1/3 flex flex-col gap-4', {
            // change flex order when panel direction changed
            'order-3': form.conversionDir === 'ftc',
          })}
        >
          <div
            className="flex justify-between items-center px-5 border shadow-sm cursor-pointer hover:shadow-md rounded-md"
            onClick={() => openModal('crypto')}
          >
            <div className="pr-3 py-4 flex gap-7">
              <img
                src={form.crypto.Logo}
                alt={form.crypto.Name}
                className="w-12 h-12"
              />
              <div className="flex-1 font-semibold">
                <p>{form.crypto.Name}</p>
                <p className="font-semibold">${form.crypto.Price}</p>
              </div>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="var(--primary)"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </span>
          </div>
          <div className="flex-1 w-full">
            <textarea
              name="cryptoAmount"
              disabled={form.conversionDir === 'ftc'}
              onChange={onAmountChange}
              value={form.cryptoAmount}
              className="shadow-md text-lg h-full w-full rounded-lg focus:outline-none border border-primary-muted focus:border-2 focus:rounded-xl resize-none md:text-5xl p-4"
            />
          </div>
        </div>

        <div
          className={classNames(
            'w-full md:w-1/3 text-xl sm:text-3xl lg:text-4xl 2xl:text-6xl flex flex-col items-center justify-center gap-5 md:gap-y-10',
            // change flex order when panel direction changed
            { 'order-2': form.conversionDir === 'ftc' }
          )}
        >
          <div
            className={classNames(
              'transform transition-all cursor-pointer hover:scale-125',
              {
                'md:rotate-90': form.conversionDir === 'ctf',
                'md:-rotate-90 rotate-180': form.conversionDir === 'ftc',
              }
            )}
            onClick={changeConversionDirection}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="var(--primary)"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </div>
          <div>
            {form.conversionDir === 'ctf' ? (
              <span>x</span>
            ) : (
              <span>&#247;</span>
            )}
            <span className="ml-3 font-semibold">{form.crypto.Price}</span>
          </div>

          <Button
            className="!py-3 hidden md:block md:text-lg font-semibold rounded-md"
            type="button"
          >
            Connect Wallet
          </Button>
        </div>

        <div
          className={classNames('w-full md:w-1/3 flex flex-col gap-4', {
            // change flex order when panel direction changed
            'order-1': form.conversionDir === 'ftc',
          })}
        >
          <div
            className="px-3 py-4 border flex items-center gap-7 shadow-sm cursor-pointer hover:shadow-md rounded-md"
            onClick={() => openModal('fiat')}
          >
            <div
              className={`w-12 h-8 shadow-lg currency-flag currency-flag-${form.fiat.code.toLowerCase()}`}
            />
            <div className="flex-1 font-semibold">
              <p>{form.fiat.code}</p>
              <p className="font-semibold">{form.fiat.description}</p>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="var(--primary)"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </span>
          </div>
          <div className="flex-1 w-full">
            <textarea
              name="fiatAmount"
              onChange={onAmountChange}
              disabled={form.conversionDir === 'ctf'}
              value={form.fiatAmount}
              className="shadow-md text-lg h-full w-full rounded-lg focus:outline-none border border-primary-muted focus:border-2 focus:rounded-xl resize-none md:text-5xl p-4"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ExchangeForm
