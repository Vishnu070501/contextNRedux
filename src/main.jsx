import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/NewContext.jsx'//context provider
import { store } from './redux/store.js'
import { Provider } from 'react-redux' //provider that willprovide the store to whole of the app
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppProvider>
          <App />
        </AppProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
