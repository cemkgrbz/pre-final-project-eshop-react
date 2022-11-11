import React from "react";
import logo from "../images/acd-eshop.png";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="bottom-0 w-[100%] h-[100%]">

            <footer className="flex items-end justify-around border-t-2 border-b-2 gap-3 border-amber-500 bg-slate-200 p-2 pb-4 text-[13px]">

                <img src={logo} alt="" className="ml-3 w-[70px] mt-2" />
                <form action="" className="flex items-center text-amber-500 gap-2">
                    <Link to="/"><GoHome className="text-[1.5rem] mb-1" /></Link>
                    <Link to="/"><p>Go to Homepage</p></Link>
                </form>
                <div>
                    <div>About Us</div>
                    <div>Terms and Conditions</div>
                    <div>Track Shipping</div>
                </div>
            </footer>
            <div className="flex justify-between px-4 py-2 text-[12px] bg-slate-700 text-white">
                <div className="">2022 Copyright</div>
                <p>ACS Eshop</p>

            </div>
        </div>
    );
}

export default Footer