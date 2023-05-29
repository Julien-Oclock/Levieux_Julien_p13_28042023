import ReactDOM from 'react-dom/client'
import  {RouterProvider} from 'react-router-dom'

import './index.scss'

// redux store
import { Provider } from 'react-redux'
import store from './Store/Store.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

import router from './router.jsx'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
