export const throttle = (func, delay) => {
  let block = false
  let timeoutId

  return () => {
    if (timeoutId) clearTimeout(timeoutId)

    if (block) {
      timeoutId = setTimeout(() => { func() }, delay)
    } else {
      block = true
      setTimeout(() => { block = false }, delay)
      func()
    }
  }
}

export const range = ([ from, to ]) => {
  let range = Array(to - from + 1).fill()
  return range.map((_, i) => from + i)
}

export default { throttle, range }
