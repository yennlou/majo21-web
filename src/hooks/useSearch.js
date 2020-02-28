import { useEffect, useContext } from 'react'
import InputContext from '../contexts/input-context'

function useSearch (query, setQuery, cb) {
  const [input, setInput] = useContext(InputContext)
  useEffect(() => {
    setInput(query)
  }, [])

  const handleInputChange = (e) => {
    const changedValue = e.target.value
    setInput(changedValue)
  }

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      setQuery(input)
      cb()
    }
  }

  return [input, setInput, handleInputChange, handleEnterKey]
}

export default useSearch
