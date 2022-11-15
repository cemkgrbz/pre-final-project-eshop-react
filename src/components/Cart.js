import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

function Cart () {

    const { cart, setCart } = useContext(Context) 


    console.log(cart)
    const handleRemove = (item) => {

        const newCart = [...cart]
        
        
        newCart.splice(cart.indexOf(item), 1)
        setCart(newCart)

        console.log(cart)
    }

    return ( 
        <div>
            {
              
                cart.map((item,idx) => 
                    <div key={idx} className="flex items-center gap-4 m-auto border-2 w-[50%] my-8 relative" >
                        <img src={item.images} alt="" className="w-[12rem]"/>
                        <div className="flex justify-between m-2 w-[100%]">
                            <div>{item.title}</div>
                            <div> Price: {item.price}€</div>
                        </div>
                        <button onClick={() => handleRemove(item)} className="bg-amber-500 px-3 py-1 rounded-[100px] absolute top-[-10px] right-[-10px]">X</button>
                    </div>
                )
            }

            <div> 
                {<p className="bg-amber-500 p-4 text-xl text-right w-[50%] m-auto mb-[10rem]">
                    Total price: {cart.reduce((total, item)=>total+(item.price),0)}€
                </p>}    
            </div>
        </div>
     );
}

export default Cart ;