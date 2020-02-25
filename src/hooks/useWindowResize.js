import { useLayoutEffect } from 'react'

const useWindowResize = (handler) => {
  useLayoutEffect(() => {
    handler()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
}

export default useWindowResize
