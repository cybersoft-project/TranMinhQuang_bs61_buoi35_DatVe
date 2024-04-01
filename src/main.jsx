import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './redux/configureStore.js'
import { Provider } from 'react-redux'
import './index.css'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App />
   </Provider>

)
