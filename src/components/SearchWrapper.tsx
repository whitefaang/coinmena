/**
 * Search wrapper component wraps around a list of
 * elements making them searchable with a search input at the top
 */
import React, { ReactElement, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import Input from './atomic/Input'

type Props = {
  children: (searchKey: string) => ReactElement
}

function SearchWrapper({ children }: Props) {
  const [searchKey, setSearchKey] = useState('')
  const debouncedSearchKey = useDebounce(searchKey)
  const render = () => children(debouncedSearchKey)
  return (
    <>
      <Input
        name="searchKey"
        className="shadow-md sticky"
        placeholder="Search .."
        value={searchKey}
        onChange={(e: any) => setSearchKey(e.target.value)}
      />
      {render()}
    </>
  )
}

export default SearchWrapper
