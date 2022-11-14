// import { ListItem } from '@mui/material'
import React from 'react'
// import Header from './Header'
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
   
    
    const getProducts = async() =>{
      const response = await fetch("https://api.escuelajs.co/api/v1/products")
      const data = await response.json();
      // console.log(data)
      setProducts(data)
    };  
    getProducts();
  }, []);
  
  return (
   <div class="bg-white">
 
 <div className="flex flex-wrap w-[80%] justify-center m-auto gap-5 mb-10">

{
  products.map((item,idx) =>
  <Link to={`/${item.title}`}><div key={idx} className="w-[16rem] mb-8">
    <img src={item.images[2]} alt="" className="border-2"/>
    <div className="flex justify-between ">
      <p>{item.title}</p>
      <p>{item.price}€</p>

    </div>
    <button className="text-center bg-amber-500 rounded-xl px-2 py-1 text-white">Add to the Cart</button>
  </div></Link>
  )
}
</div>


  {/* <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Products</h2>

    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src="" alt="" class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img src="" alt="" class="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img src="" alt="" class="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img src="" alt="" class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700"> </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">€</p>
      </a>

    </div>
  </div> */}

</div>
  )
}

export default Products