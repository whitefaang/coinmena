/**
 * Login Page
 */
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { useUIStore } from '../store/uiStore'

function Login() {
  /**
   * Short messages to show on login page
   */
  const shorts = [
    'Built with TailwindCSS + ViteJS for smaller and faster builds',
    'Custom components like Select, Switcher etc',
    'Zustand used for state management',
    '3 routes available home, trade and login',
    'Includes custom hooks for debounce and transforming api responses from react-query',
    'Responsive layout',
  ]

  const navigate = useNavigate()
  const search = useLocation().search
  const user = useUIStore((state) => state.user)

  if (user) {
    return <Navigate to="/" />
  }

  const onLoginSuccess = () => {
    const params = new URLSearchParams(search)
    const next = params.get('next')
    navigate(next ? `/${next}` : '/')
  }

  return (
    <div className="px-3 py-6 rounded-2xl flex flex-wrap justify-evenly">
      <div className="md:w-1/3 md:order-2 mb-10">
        <LoginForm onSuccess={onLoginSuccess} />
      </div>
      <div className="md:w-1/3 grid md:order-1">
        {shorts.map((s) => (
          <div key={s} className="flex gap-x-5 text-lg md:text-2xl">
            <div className="w-8 mb-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <span>{s}</span>
          </div>
        ))}
      </div>

      <svg
        id="clouds"
        className="fixed bottom-[-160px] left-[-230px] w-screen -z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="2611.084"
        height="485.677"
        viewBox="0 0 2611.084 485.677"
      >
        <title>Gray Clouds Background</title>
        <path
          id="Path_39"
          data-name="Path 39"
          d="M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z"
          transform="translate(142.69 -634.312)"
          fill="#eee"
        />
      </svg>
    </div>
  )
}

export default Login
