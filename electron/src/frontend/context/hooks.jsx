import { useEffect, useRef } from 'react'

import gpio from '../gpio'

export const useIdleCallback = (callback, deps) => {
  const handle = useRef(undefined)

  useEffect(() => {
    if (!callback) return () => null

    if (handle.current) cancelIdleCallback(handle.current)
    
    handle.current = requestIdleCallback(callback, { timeout: 1000 })

    return () => {
      if (handle.current) cancelIdleCallback(handle.current)
    }
  }, deps)
}

export const useGPIOEvents = (events, deps) => {
  useEffect(
    () => {
      events.forEach(([event, callback]) => gpio.on(event, callback))

      return () => {
        events.forEach(([event, callback]) => gpio.off(event, callback))
      }
    },
    Array.isArray(deps) ? deps : events,
  )
}
