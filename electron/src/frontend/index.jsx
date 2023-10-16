import React from 'react'
import { createRoot } from 'react-dom/client'

import { StorageContextProvider } from './context/StorageContext'
import { StateContextProvider } from './context/StateContext'
import { MenuContextProvider } from './context/MenuContext'
import { TracksContextProvider } from './context/TracksContext'
import GlobalStyle from './layouts/GlobalStyle'
import App from './layouts/App'

// set up IPC proxy
window['electron'] = new Proxy(window?.['electronAPI'] || {}, {
  get(obj, prop) {
    return prop in obj ? obj[prop] : () => {}
  },
})

// handle incoming events
electron.onWindowReload(() => window.location.reload())

// send browser events to app
window.addEventListener('error', (e) => electron.setError(e))

// render react app
document.addEventListener('DOMContentLoaded', () =>
  createRoot(document.getElementById('app')).render(
    <StorageContextProvider>
      <StateContextProvider>
        <MenuContextProvider>
          <TracksContextProvider>
            <GlobalStyle />
            <App />
          </TracksContextProvider>
        </MenuContextProvider>
      </StateContextProvider>
    </StorageContextProvider>,
  ),
)
