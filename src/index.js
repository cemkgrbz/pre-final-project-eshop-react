import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleProduct from "./SingleProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/singleProduct" element={<SingleProduct />} />
      {/* <Route path='/product' element= {} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
);
