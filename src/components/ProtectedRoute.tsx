/**
 * A Protected route component used to guard routes which require authentication
 */
import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUIStore } from '../store/uiStore'

function ProtectedRoute() {
  // user from store
  const user = useUIStore((state) => state.user)
  const search = useLocation().search
  // navigate to login if no user
  if (!user) {
    return <Navigate to={search ? `/login${search}` : `/login`} />
  }
  // returns the normal routes if user is authenticated
  return <Outlet />
}

export default ProtectedRoute
