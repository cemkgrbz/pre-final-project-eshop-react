import React from "react";
import logo from "../images/acd-eshop.png";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GoHome } from "react-icons/go";


function Header() {
    return ( 
    <div className="flex items-end justify-around h-[8rem] border-b-2 gap-3 border-amber-500 bg-slate-200 p-2">

        <img src={logo} alt="" className="ml-3 w-[100px]"/>
        <form action="" className="flex items-center text-amber-500 gap-2">
            <GoHome className="text-[2.2rem] mb-1 "/>
                <BsSearch className="text-[2rem] mb-2 text-black" />
                <input type="text" className="mb-2 rounded-2xl p-2 pl-5 w-[40%]" placeholder="Search" />
            <FiShoppingCart className="text-[2rem] mb-1 ml-5"/>
        </form>
    </div> );
}

export default Header;