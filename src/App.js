// import Footer from "./components/Footer";
// import Header from "./components/Header";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import mainCat from "./images/mainCat.jpg";


function App() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getData = async() =>{
      const response = await fetch("https://api.escuelajs.co/api/v1/categories")
      const data = await response.json();
      // console.log(data)
      setCategories(data.slice(0,4))
    };  
    getData();
  }, []);
  console.log(categories[0])

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
      <div className="flex flex-wrap w-[70%] justify-center m-auto gap-5 mb-10">
        <div className="w-[14rem] h-[10rem] border-2">Products</div>
        <div className="w-[14rem] h-[10rem] border-2">Products</div>
        <div className="w-[14rem] h-[10rem] border-2">Products</div>
        <div className="w-[14rem] h-[10rem] border-2">Products</div>
        <div className="w-[14rem] h-[10rem] border-2">Products</div>
        <div className="w-[14rem] h-[10rem] border-2">Products</div>
        <div className="w-[14rem] h-[10rem] border-2">Products</div>
        <div className="w-[14rem] h-[10rem] border-2">Products</div>
      </div>


      {/* <Footer /> */}
    </div>
  );
}

export default App;