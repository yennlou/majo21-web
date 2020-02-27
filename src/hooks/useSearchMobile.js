import { useEffect, useState, useContext } from 'react'
import { debounced } from '../utils/function'

import InputContext from '../contexts/input-context'

function useSearchMobile (query, setQuery) {
  const [input, setInput] = useContext(InputContext)
  const [setQueryDebounced] = useState(() => debounced((query) => { setQuery(query) }))
  useEffect(() => {
    setInput(query)
  }, [])

  useEffect(() => {
    setQueryDebounced(input)
  }, [input])
  const handleInputChange = (e) => {
    const changedValue = e.target.value
    setInput(changedValue)
  }

  return [input, handleInputChange]
}

export default useSearchMobile
