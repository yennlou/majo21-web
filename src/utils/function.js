export function throttled (fn, delay = 1000) {
  let lastCall = 0
  return function (...args) {
    const now = (new Date()).getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}

export function debounced (fn, delay = 1000) {
  let timerId
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}
