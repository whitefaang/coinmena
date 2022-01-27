/**
 * Home Page
 */
import React from 'react'
import AssetsTable from '../components/AssetsTable'
import Button from '../components/atomic/Button'
import Link from '../components/atomic/Link'
import Switcher from '../components/atomic/Switcher'
import { useUIStore } from '../store/uiStore'

function Home() {
  // selected coin from store
  const { selectedCoin } = useUIStore((state) => state)

  return (
    <div className="flex flex-wrap">
      <div className="w-full xl:w-3/4 xl:px-4">
        <AssetsTable />
      </div>
      <div className="mt-4 xl:mt-0 w-full xl:w-1/4 xl:px-4">
        <Switcher>
          <Switcher.Tabs>
            <Switcher.Item value={{ text: 'awesome!' }} id="Buy" default>
              Buy
            </Switcher.Item>
            <Switcher.Item value={{ text: 'not awesome' }} id="Sell">
              Sell
            </Switcher.Item>
          </Switcher.Tabs>
          <Switcher.Detail>
            {(value) => {
              return selectedCoin ? (
                <div className="p-2">
                  <div className="mb-4">
                    <div className="flex items-center gap-4 text-xl font-bold">
                      <img
                        src={selectedCoin.Logo}
                        alt={selectedCoin.Name}
                        className="w-14 h-14 rounded-full shadow-md"
                      />
                      <div>
                        <span className="ml-2">{selectedCoin.Name}</span>
                        <span className="ml-2">({selectedCoin.Symbol})</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="my-5">
                          <p className="text-3xl sm:text-4xl 2xl:text-6xl font-light truncate">
                            1
                          </p>
                          <p className="font-bold ml-2">
                            1 {selectedCoin.Name} ({selectedCoin.Symbol}) for
                          </p>
                        </div>

                        <div className="my-5">
                          <p
                            className="text-3xl sm:text-4xl 2xl:text-6xl font-light truncate"
                            title={`$${selectedCoin.Price}`}
                          >
                            {selectedCoin.Price}
                          </p>
                          <p className="font-bold ml-2">USD($)</p>
                        </div>
                      </div>
                      <div className="mb-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="var(--primary)"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="w-full"
                    to={`/trade?base=${selectedCoin.Symbol}&dir=${value}`}
                  >
                    <Button id="buySell" className="w-full">
                      Proceed to {value}
                    </Button>
                  </Link>
                </div>
              ) : (
                <div
                  id="buySell"
                  className="min-h-[300px] flex items-center justify-center text-3xl"
                >
                  <div className="mb-5 text-center">
                    <p className="text-5xl mb-4">$</p>
                    <p>No Asset selected</p>
                  </div>
                </div>
              )
            }}
          </Switcher.Detail>
        </Switcher>
      </div>
    </div>
  )
}

export default Home
