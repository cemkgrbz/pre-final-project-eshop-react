import { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import mainCat from "./images/mainCat.jpg";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from './context/ContextProvider';



function App() {

  const {categories, setCategories, topProducts, setTopProducts, cart, setCart} = useContext(Context);


  const handleClick = (item) => {
    setCart([...cart, item])
    console.log(cart)
  }

  const otherCategories = categories.slice(1,4);
  
  return (
    <div className="h-[100%]">

      <div>
        <Link to={"/categories/1"}> <div className="relative w-[75%] h-[30%] text-center m-auto mt-10">
          <img src={mainCat} alt="" className="border-2 object-contain relative"/>
          <p className="absolute top-[50%] left-[60%] text-[5vw]">
            All Clothes
            </p> 
          </div>
        </Link>
        
      </div>
      <div className="flex justify-center w-[80%] flex-wrap mb-20 mt-4 gap-10 m-auto">
        {
          otherCategories.map((item,idx) =>

            <Link to={`/categories/${item.id}`} key={idx}> 
            <div className="h-[13rem] w-[18rem] text-center mt-4 mb-8">
              <img src={item.image} className="border-2" alt=""/>{item.name}
            </div> 
          </Link>
          )
        }
      </div>
      <div className="flex items-center justify-center italic bg-amber-500 h-14 mb-12 text-center text-xl">
        Take a look at our top products!
      </div>
      
        <div className="flex flex-wrap w-[80%] justify-center m-auto gap-5 mb-10">

        {
          topProducts.map((item,idx) =>
          <div key={idx} item={item} className="relative w-[16rem] mb-8">
            <Link to={`/singleProduct/${item.id}`}>
            <img src={item.images[1]} alt="" className="border-2 rounded-lg hover:opacity-75"/>
            <div className="flex justify-between ">
              <p>{item.title}</p>
              <p className="font-bold">{item.price}€</p>

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

    </div>
  );
}

export default App;