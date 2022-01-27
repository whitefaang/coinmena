/**
 * Component that holds all the Routing, and react-query configuration
 * Layout is also managed here for the sticky navbar
 */
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/atomic/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Trade from './pages/Trade'

// Query client wrapper to use for react-query Provider
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Wrapper to be used with Router */}
      <HashRouter>
        <main className="flex flex-col h-screen">
          {/* Sticky Navigation Bar */}
          <Navbar />
          {/* Content Section */}
          <section id="content" className="flex-1 overflow-y-auto p-6">
            {/* Routes of the app */}
            <Routes>
              <Route index element={<Home />} />
              {/* Trading page route */}
              <Route path="/trade" element={<Trade />} />
              {/* Login Page route */}
              <Route path="/login" element={<Login />} />
            </Routes>
          </section>
        </main>
      </HashRouter>
    </QueryClientProvider>
  )
}

export default App
