import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/NewContext.jsx'//context provider
import { store } from './redux/store.js'
import { Provider } from 'react-redux' //provider that willprovide the store to whole of the app

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
    
  </React.StrictMode>,
)
