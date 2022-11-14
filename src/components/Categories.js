import React from 'react'
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../context/ContextProvider';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useParams } from "react-router-dom";


const Products = () => {

  const {cart, setCart} = useContext(Context);

  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  const handleClick = (item) => {
    setCart([...cart, item])
    console.log(cart)
  }


  useEffect(() => {

    const getCategories= async() =>{
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
        const data = await response.json();
        // console.log(data)
        setCategories(data.slice(0,30))
      };  
      getCategories();
  }, []);

  return (

  <div>
    <div className="flex flex-wrap w-[80%] justify-center m-auto gap-5 mb-10 mt-10">

    {
      categories.map((item,idx) =>
      <div key={idx} item={item} className="relative w-[16rem] mb-8 bg-gray-200 rounded-lg ">
        <Link to={`/singleProduct/${item.id}`}>
        <img src={item.images} alt="" className="border-2 rounded-lg hover:opacity-75"/>
        <div className="flex justify-between ">
          <p className='text-gray-700'>{item.title}</p>
          <p className="font-bold text-gray-700">{item.price}€</p>

        </div></Link>
        <button onClick={() => handleClick(item)} className="absolute top-[-10px] right-[-10px] text-center bg-amber-500 rounded-xl p-1 text-white">
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