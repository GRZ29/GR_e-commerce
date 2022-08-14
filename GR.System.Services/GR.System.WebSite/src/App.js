import logo from "./logo.svg";
import product from "./assets/img/product-5-alt-1.jpg";
import hero from "./assets/img/hero-banner-alt.jpg";
import categorie1 from "./assets/img/cat-img-1.jpg";
import categorie2 from "./assets/img/cat-img-2.jpg";
import categorie3 from "./assets/img/cat-img-3.jpg";
import categorie4 from "./assets/img/cat-img-4.jpg";
import "./App.css";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Checkout from "./Checkout/Checkout";
import Cart from "./Car/Car";
import NoPage from "./NoPage/NoPage";
import Layout from "./Router/Layout";
import Details from "./Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log("hey");
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
