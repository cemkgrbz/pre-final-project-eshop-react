import React, { useState, useEffect } from "react";
import { createContext } from "react";


export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);


  return (
    <Context.Provider value={{products, setProducts, topProducts, setTopProducts, categories, setCategories, cart, setCart}}>

      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
