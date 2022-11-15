import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleProduct from "./SingleProduct";
import ContextProvider from "./context/ContextProvider";
import Categories from './components/Categories'
import Cart from "./components/Cart";
import SearchPage from "./components/SearchPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
  <BrowserRouter>
    <Header />
    <Routes>

      <Route path="/" element={<App />} />
      <Route path="/singleProduct/:id" element={<SingleProduct />} />
      <Route path='/categories/:id' element= {<Categories />} />
      <Route path='/cart' element= {<Cart />} />
      <Route path='/searchResults' element={<SearchPage />}/>


    </Routes>
    <Footer />
  </BrowserRouter>
  </ContextProvider>
);
