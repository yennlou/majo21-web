import { useState } from 'react'

function usePagination (items, pageSize = 6) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageStart = (currentPage - 1) * pageSize
  const pageEnd = Math.min(pageStart + pageSize, items.length)
  const pageCount = Math.ceil(items.length / pageSize)
  const currentItems = items.slice(pageStart, pageEnd)
  return [currentPage, setCurrentPage, pageCount, currentItems]
}

export default usePagination
