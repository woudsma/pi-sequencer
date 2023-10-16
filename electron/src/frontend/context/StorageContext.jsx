import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import isEqual from 'react-fast-compare'

import { omit } from '../../utils'

export const initialStorageState = {
  storage: {},
  count: 0,
}

const StorageContext = createContext(initialStorageState)

export const useStorageContext = () => useContext(StorageContext)

export const StorageContextProvider = ({ children }) => {
  const storageRef = useRef(window.storage || {})

  const [storage, setStorage] = useState(storageRef.current)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isEqual(storageRef.current, storage)) {
      storageRef.current = storage
      setCount((e) => e + 1)
      electron.setStorage(
        JSON.stringify(omit(storage, Function, 'midiDeviceCharts')),
      )
    }
  }, [storage])

  const value = useMemo(
    () => ({ storage: storageRef.current, setStorage }),
    [count],
  )

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  )
}
