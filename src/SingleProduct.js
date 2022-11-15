import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SelectSizes from "./components/SelectSizes";
import { Context } from './context/ContextProvider';



function SingleProduct(item) {

  const [singleProduct, setSingleProduct] = useState([]);
  const {cart, setCart} = useContext(Context);


  const { id } = useParams();


  const handleClick = (item) => {
    setCart([...cart, item])
    console.log(cart)
  }

  useEffect(() => {
    const getData = async() =>{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      const data = await response.json();
      console.log(data)

      setSingleProduct(data);
    };  
    getData();

  
  }, []);

  return (
    <div className="flex flex-col justify-between w-[70%] m-auto">
      
      <div className="mt-12 m-auto text-[4vw]">
        {singleProduct.title}
      </div>

      <div className="flex justify-center flex-wrap my-10 ">

        <div className="w-[24rem] text-center">
          <img src={singleProduct.images} alt="" className="rounded-xl"/>
        </div>

        <div className="flex flex-col items-center justify-center w-[24rem] p-3">
          
          <div className="font-bold text-center">Price: {singleProduct.price} €</div>


          <div className="w-[8%] border-2 text-center mt-10">
            
            <select name="SizeSelect" id="SizeSelectorClothes">
        <option value="">Please select</option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
        <option value="xxxl">XXXL</option>
      </select>
            
          </div>
  
          <button onClick={() => handleClick(singleProduct)} className="text-center bg-amber-500 rounded-xl px-2 py-1 w-[10rem] mt-4 text-white">
            Add to the Cart
          </button>

          <div className="ml-5 mt-10 mb-[11rem]">
                 {singleProduct.description}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
