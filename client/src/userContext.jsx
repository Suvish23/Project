import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const initialState = {
    login :false,
    user :''
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'addUser':
        console.log(action.payload.name);
     const newState = {...state,login:true,user:action.payload.name}
     return newState; 
     case 'logout':
       const response={...state,login:false,user:action.payload.name}
       return response;
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