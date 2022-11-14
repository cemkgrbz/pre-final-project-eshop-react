import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";


export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);


  const { id } = useParams();

  useEffect(() => {
   
    
    const getProducts = async() =>{
      const response = await fetch("https://api.escuelajs.co/api/v1/products")
      const data = await response.json();
      // console.log(data)
      setProducts(data)
    };  
    getProducts();

    const getCategories= async() =>{
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories/1/products`)
        const data = await response.json();
        // console.log(data)
        setCategories(data.slice(0,30))
      };  
      getCategories();
  }, []);

  return (
    <Context.Provider value={{ products, setProducts, categories, setCategories}}>

      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
