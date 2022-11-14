import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectSizes from "./components/SelectSizes";


function SingleProduct(item) {

  const [singleProduct, setSingleProduct] = useState([]);

  const { id } = useParams();

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
      
      <div className="mt-10 m-auto text-[4vw]">
        {singleProduct.title}
      </div>

      <div className="flex justify-center flex-wrap my-10 ">

        <div className="w-[24rem] text-center">
          <img src={singleProduct.images} alt="" className="rounded-xl"/>
        </div>

        <div className="flex flex-col items-center justify-center w-[24rem] p-3">
          
          <div className="font-bold text-center">Price: {singleProduct.price} €</div>


          <div className="w-[8%] border-2 text-center mt-10">
            <select  name="" id="">
              <option value={SelectSizes}></option>
            </select>
          </div>
  
          <button className="text-center bg-amber-500 rounded-xl px-2 py-1 w-[10rem] mt-4 text-white">
            Add to the Cart
          </button>

          <div className="ml-5 mt-10">
                 {singleProduct.description}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
