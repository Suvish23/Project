import React, { createContext, useReducer } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const initialState = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case 'Register':
        console.log('in register', action.payload);
        const { name, email, password, phonenumber } = action.payload;
        axios
          .post('http://localhost:5000/Register', {
            name,
            email,
            password,
            phonenumber,
          })
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            return error;
          });
        return state;
      case 'Login':
        axios
          .post('http://localhost:5000/Login', {
            email: 'suvishjai@gmail.com',
            password: '7892092503',
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response);
          });
        return state;
      default:
        return state;
    }
  };

  const [userstore, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ userstore, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
