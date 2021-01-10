import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContextProvider } from './CartContext';
import { UserContextProvider } from './userContext';
import {UpdateContextProvider} from './UpdatePriceContext';


ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <UserContextProvider> 
        <UpdateContextProvider>
        <App /> 
          </UpdateContextProvider>     
      </UserContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);