import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import GetStart from './components/GetStart/GetStart.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>
  },
  {
    path : '/getstart',
    element : <GetStart/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router} />
)
