import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const MainApp = () => {
  return (
    <BrowserRouter>
      <SnackbarProvider>
          <App />
      </SnackbarProvider>
    </BrowserRouter>

  )
}

const rootDom = ReactDOM.createRoot(document.getElementById('root'))

rootDom.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
)
