import React from "react";
import Footer from "./components/Footer";

function SingleProduct() {
  return (
    <div className="flex flex-col justify-between">
      <div className=" w-[50%] h-[15rem] border-2 text-center m-auto mt-10">
        <h2>Name of the Product</h2>
      </div>
      <div className="flex justify-center  w-full my-10 ">
        <div className="mr-10 w-[40%]  border-2 text-center  ">
          {" "}
          PHOTO <img src="" alt="" />{" "}
        </div>
        <div className=" w-[40%]  border-2 p-3">
          <div className=" border-2 text-center  ">
            <p>
              <strong>PRICE</strong>
            </p>
          </div>
          <div className="ml-10 w-[8%] border-2 text-center  mt-10">
            <select name="" id="">
              <option value="">Please Select</option>
            </select>
          </div>
          <div className="ml-10 w-[8%] border-2 text-center  mt-10">
            <button>ADD TO BAG</button>
          </div>
          <div className="ml-10 w-[33%]  border-2 text-center  mt-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos amet
              quibusdam, iure provident fugiat adipisci quaerat tempora
              molestiae molestias accusamus facere distinctio Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quos amet quibusdam, iure
              provident fugiat adipisci quaerat tempora molestiae molestias
              accusamus facere distinctio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
