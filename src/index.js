import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleProduct from "./SingleProduct";
import ContextProvider from "./context/ContextProvider";
import OtherCategories from './components/OtherCategories'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/singleProduct/:id" element={<SingleProduct />} />
      <Route path='/categories/:id' element= {<OtherCategories />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </ContextProvider>
);
