import { useEffect, useState } from 'react'

function useSearch (query, setQuery, cb) {
  const [input, setInput] = useState('')
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

  return [input, handleInputChange, handleEnterKey]
}

export default useSearch
