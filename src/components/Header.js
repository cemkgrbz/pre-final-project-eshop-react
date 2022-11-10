import React from "react";
import logo from "../images/acd-eshop.png"

function Header() {
    return ( 
    <div className="flex items-end h-[8rem] border-b-2 border-indigo-300 bg-slate-300 p-2">
        <img src={logo} alt="" className="ml-12 mt-2 w-[100px]"/>
        <div className="mb-2 ">Main Page</div>
    </div> );
}

export default Header;