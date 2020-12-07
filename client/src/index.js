import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContextProvider } from './CartContext';
import { UserContextProvider } from './userContext';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <UserContextProvider>     
        <App />       
      </UserContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);