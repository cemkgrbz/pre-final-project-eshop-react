import React, { useState, useEffect, useReducer } from "react";
import { createContext } from "react";


export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);


  const reducer = (state, action) => {


    switch(action.type) {

        case 'search':

        return {
            ...state,
            searchText: action.payload
        }
        default:

        return
    }

}

const [state, dispatch] = useReducer(reducer, {

    searchText: ''
})

  return (
    <Context.Provider value={{products, setProducts, topProducts, setTopProducts, categories, setCategories, cart, setCart, state, dispatch}}>

      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
