import React, { createContext, useReducer } from 'react';

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
      default:
        return state;
    }
  };

  const [cartstore, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cartstore, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};