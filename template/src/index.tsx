import { Buffer } from 'buffer'

import React from 'react'

import ReactDOM from 'react-dom/client'

import { useInactiveListener } from 'hooks'
// eslint-disable-next-line no-restricted-imports
import 'react-toastify/dist/ReactToastify.css'
import { ToastWrapper } from 'styles/components'
import GlobalStyles from 'styles/globalStyles'

import App from './App'
import { Providers } from './Providers'
import reportWebVitals from './reportWebVitals'

const GlobalHooks = () => {
  useInactiveListener()

  return null
}

window.Buffer = window.Buffer || Buffer

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Providers>
      <GlobalHooks />
      <GlobalStyles />
      <ToastWrapper
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'colored'}
      />
      <App />
    </Providers>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
