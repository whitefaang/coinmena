import classNames from 'classnames'
import React, { ReactElement, useState } from 'react'
import { useUIStore } from '../../store/uiStore'
import LoginForm from '../LoginForm'
import Button from './Button'
import Dropdown from './Dropdown'
import Link from './Link'
import Logo from './Logo'
import Modal from './Modal'

/**
 * This component is the navbar for the app
 * @returns {ReactElement}
 */
function Navbar(): ReactElement {
  // state to determine whether the navbar is open or close
  // used only in mobile view
  const [open, setOpen] = useState(false)
  const [showLoginModal, setLoginModal] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trade', path: '/trade' },
  ]

  const { user, setUser, selectCoin } = useUIStore((state) => state)

  const logout = () => {
    setUser(null)
    // selectCoin(null)
  }

  return (
    <>
      <Modal show={showLoginModal} onOverlayClick={() => setLoginModal(false)}>
        <div className="bg-surface w-10/12 lg:w-6/12 2xl:w-1/3 px-6 py-10 lg:p-12 rounded-lg shadow-md">
          <LoginForm onSuccess={() => setLoginModal(false)} />
        </div>
      </Modal>
      <nav className="flex gap-x-2 relative justify-end  lg:justify-between p-5 shadow-sm items-center bg-surface">
        {/* main content of navbar */}
        <Link to={'/'} className="lg:order-1 flex-1 lg:flex-none">
          <Logo />
        </Link>
        {user ? (
          <Dropdown
            header={
              <div className="flex items-center gap-3 py-1">
                <div
                  className="overflow-hidden w-8 md:w-12 h-8 md:h-12 bg-center bg-cover rounded-full border-2 border-primary"
                  style={{
                    backgroundImage:
                      'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6TmaQB-RHMc1PtloLIyDagHaEK%26pid%3DApi&f=1)',
                  }}
                ></div>
                <span className="hidden lg:text-sm">
                  {user.email.split('@')[0]}
                </span>
              </div>
            }
            className="lg:order-3"
            onChange={logout}
          >
            <Dropdown.Option value="welcome" info>
              <>
                <p className="text-xs font-bold">Welcome, {user.email}</p>
              </>
            </Dropdown.Option>
            <Dropdown.Option value="logout">
              <div className="flex items-center text-sm text-red-500 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span className="ml-2">Logout</span>
              </div>
            </Dropdown.Option>
          </Dropdown>
        ) : (
          <Button
            className="rounded-[30px] lg:order-3"
            onClick={() => setLoginModal(true)}
          >
            Login
          </Button>
        )}
        <Button
          className="lg:hidden"
          title="More.."
          aria-label="More.."
          ghost
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </Button>
        <div
          className={classNames(
            'flex-1 hidden absolute lg:relative lg:flex lg:order-2 px-16 gap-10',
            {
              '!grid top-full bg-surface w-full left-0 shadow-md pb-3 z-10':
                open,
            }
          )}
        >
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navbar
