/**
 * hook for Debouncing state value
 */
import { useEffect, useState } from 'react'

export default function useDebounce<T = any>(val: T, timeout = 700): T {
  const [value, setValue] = useState(val)
  useEffect(() => {
    setTimeout(() => {
      setValue(val)
    }, timeout)
  }, [val])

  return value
}
