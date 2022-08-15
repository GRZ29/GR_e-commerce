import "./App.css";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Car/Car";
import NoPage from "./NoPage/NoPage";
import Layout from "./Router/Layout";
import Details from "./Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

function App() {
  

  useEffect(() => {
    
    console.log("HOLA")
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="Details" element={<Details />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );


}

export default App;
