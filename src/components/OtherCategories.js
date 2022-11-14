// import { ListItem } from '@mui/material'
import React from 'react'
// import Header from './Header'
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../context/ContextProvider';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Products = () => {
  const {categories, setCategories} = useContext(Context);



  console.log(categories)


  
  return (

  <div>
    <div className="flex flex-wrap w-[80%] justify-center m-auto gap-5 mb-10 mt-10">

    {
      categories.map((item,idx) =>
      <div key={idx} item={item} className="relative w-[16rem] mb-8 bg-gray-200">
        <Link to={`/singleProduct/${item.id}`}>
        <img src={item.images} alt="" className="border-2 rounded-lg hover:opacity-75"/>
        <div className="flex justify-between ">
          <p>{item.title}</p>
          <p className="font-bold">{item.price}€</p>

        </div></Link>
        <button className="absolute top-[-10px] right-[-10px] text-center bg-amber-500 rounded-xl p-1 text-white">
        <IconButton aria-label="cart" >
                <Badge className="text-white">
                    <ShoppingCartIcon/>
                </Badge>
            </IconButton>
        </button>
      </div>
      )
    }
  </div>


</div>)
}

export default Products