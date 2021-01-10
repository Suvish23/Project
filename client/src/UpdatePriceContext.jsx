import React, { createContext, useReducer } from 'react';

 export const UpdateContext = createContext();

 export const UpdateContextProvider = (props) => {
  const initialState = [];
  const reducer = (state, action) => {
    switch (action.type) {
       case 'addtostore':
           console.log("came here")
           console.log(action.payload)
         return {state,id:action.payload.id};
      default:
        return state;
    }
  };

  const [updatestore, dispatch2] = useReducer(reducer, initialState);

  return (
    <UpdateContext.Provider value={{ updatestore, dispatch2 }}>
      {props.children}
    </UpdateContext.Provider>
  );
};