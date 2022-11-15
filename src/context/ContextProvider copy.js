import React, { useState, useEffect } from "react";
import { createContext } from "react";


export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
   
    
    const getProducts = async() =>{
      const response = await fetch("https://api.escuelajs.co/api/v1/products")
      const data = await response.json();
      // console.log(data)
      setProducts(data)
    };  
    getProducts();

    const getCategories = async() =>{
      const response = await fetch("https://api.escuelajs.co/api/v1/categories")
      const data = await response.json();
      // console.log(data)
      setCategories(data.slice(0,4))
    };  
    getCategories();

    const getTopProducts = async() =>{
      const response = await fetch("https://api.escuelajs.co/api/v1/products")
      const data = await response.json();
      // console.log(data)
      setTopProducts(data.slice(0,8))
    };  
    getTopProducts();

  }, []);

    

  return (
    <Context.Provider value={{products, setProducts, topProducts, setTopProducts, categories, setCategories, cart, setCart}}>

      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
