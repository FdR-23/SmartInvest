import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'
import './index.css'

axios.defaults.baseURL = import.meta.env.VITE_DEPLOY_APY || "http://localhost:3000"

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    <App />
//  </React.StrictMode>,
)
