import Axios from 'axios';
import React, { createContext, useReducer } from 'react';
import axios from 'axios'

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const initialState = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case 'addToCart':
        return [...state, action.payload];
      case 'removeFromCart':
        const newState = state.filter((state) => state.id !== action.payload);
        return newState;
        case 'Register':
          axios.post('http://localhost:5000/Register')
          .then(res=>{
            console.log('hi')
          })
      default:
        return state;
    }
  };

  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ store, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
