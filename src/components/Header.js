import React, { useContext, useEffect } from "react";
import logo from "../images/acd-eshop.png";
import { BsSearch } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaShippingFast } from "react-icons/fa";
import { Context } from "../context/ContextProvider";



function Header() {

    const { cart, setCart, products, setProducts, categories, setCategories, topProducts, setTopProducts } = useContext(Context)


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
    <div>

    <div className="flex items-end justify-around h-[8rem] gap-3 border-amber-500 bg-slate-200 p-2">
        <Link to="/"><img src={logo} alt="" className="ml-3 w-[100px]"/></Link>
        <form action="" className="flex items-center text-amber-500 gap-2 b-2">
            <Link to="/"><GoHome className="text-[2.2rem] mb-1 "/></Link>
                <BsSearch className="text-[2rem] mb-2 text-black" />
                <input type="text" className="mb-2 rounded-2xl p-2 pl-5 w-[40%]" placeholder="Search" />
               <Link to="/cart"><IconButton aria-label="cart" >
                    <Badge badgeContent={cart.length} color="secondary" className="text-amber-500 ">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton></Link> 
        </form>
    </div>
    <p className="flex items-center gap-6 justify-center p-1 bg-amber-500 text-center italic text-sm border-b-2 border-slate-400"><FaShippingFast/> Free shipping on Orders Over 50€ <FaShippingFast/>
    </p> 
    </div>);
}

export default Header;