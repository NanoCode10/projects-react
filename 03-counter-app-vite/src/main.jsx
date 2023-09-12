import React from 'react'
import ReactDOM from 'react-dom/client'
import {} from '../src/styles.css'

import  { FirstApp } from './FirstApp.jsx'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  { /*<FirstApp  />*/}
  <CounterApp value={20}/>
  </React.StrictMode>,
)
