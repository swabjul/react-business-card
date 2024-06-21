import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootEl = ReactDOM.createRoot(document.getElementById('root'))
rootEl.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)