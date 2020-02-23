import { useEffect, useState } from 'react'
import { debounced } from '../utils/function'

function useSearch (query, setQuery) {
  const [input, setInput] = useState('')
  const [setQueryDebounced] = useState(() => debounced((query) => { setQuery(query) }))
  useEffect(() => {
    setInput(query)
  }, [])
  const handleInputChange = (e) => {
    const changedValue = e.target.value
    setInput(changedValue)
    setQueryDebounced(changedValue)
  }

  return [input, handleInputChange]
}

export default useSearch
