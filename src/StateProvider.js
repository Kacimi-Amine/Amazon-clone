import React, { createContext, useContext, useReducer } from "react";

//prepares the datalayer

// This is Data layer
export const StateContext = createContext();

// create Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// use inside component //pull information from th data layer
export const useStateValue = () => useContext(StateContext);
