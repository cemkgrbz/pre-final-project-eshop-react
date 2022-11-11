// import Footer from "./components/Footer";
// import Header from "./components/Header";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import mainCat from "./images/mainCat.jpg";


function App() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async() =>{
      const response = await fetch("https://api.escuelajs.co/api/v1/categories")
      const data = await response.json();
      // console.log(data)
      setCategories(data.slice(0,4))
    };  
    getData();

    const getProducts = async() =>{
      const response = await fetch("https://api.escuelajs.co/api/v1/products")
      const data = await response.json();
      // console.log(data)
      setProducts(data.slice(0,12))
    };  
    getProducts();
  }, []);
  console.log(categories[0])

  console.log(products)

  const mainCategory = [categories[0]]
  const otherCategories = categories.slice(1,4);

  console.log(mainCategory)
  
  return (
    <div className="h-[100%]">
      {/* <Header /> */}
      <div>
        <Link to={"/clothes"}> <div className="w-[75%] h-[30%] text-center m-auto mt-10">
          <img src={mainCat} alt="" className="border-2 object-contain relative"/>
          <p className="absolute top-[50%] left-[60%] text-[10vh]">
            All Clothes
            </p> 
          </div>
        </Link>
        
      </div>
      <div className="flex justify-center w-[80%] flex-wrap mb-20 mt-4 gap-10 m-auto">
        {
          otherCategories.map((item,idx) =>

            <Link to={`/${item.name}`}> 
            <div key={idx} className="h-[13rem] w-[20rem] text-center">
              <img src={item.image} className="border-2" alt=""/>{item.name}
            </div> 
          </Link>
          )
        }
      </div>
      
      
        <div className="flex flex-wrap w-[80%] justify-center m-auto gap-5 mb-10">

        {
          products.map((item,idx) =>
          <Link to={`/${item.title}`}><div key={idx} className="w-[16rem] h-[10rem] border-2 mb-16">
            <img src={item.images[2]} alt="" />
            <div className="flex justify-between">
              <p>{item.title}</p>
              <p>{item.price}€</p>

            </div>
          </div></Link>
          )
        }
      </div>


      {/* <Footer /> */}
    </div>
  );
}

export default App;