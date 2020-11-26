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
          axios.post('http://localhost:5000/Register',{
            name:"suvish",
            email:"suvishjain23@gmail.com",
            password:"9743576371",
            phonenumber:"9845201258"
          })
          .then(response => { 
            console.log(response.data)
          })
          .catch(error => {
              console.log(error.response)
          });
          case 'Login':
            axios.post('http://localhost:5000/Login', {
              email: "suvishjai@gmail.com",
              password: "7892092503"
            })
            .then(response => { 
              console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
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
