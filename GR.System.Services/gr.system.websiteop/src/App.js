import "./assets/css/style.default.css";
import "./assets/css/custom.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./router/Layout";
import Home from "./pages/home/Home";
import Tienda from "./pages/tienda/Tienda";
import Detalles from "./pages/detalles/Detalles";
import { ArticuloProvider } from "./context/ArticuloContext/ArticuloContext";
import Carrito from "./pages/carrito/Carrito";
import { CarritoProvider } from "./context/CarritoContext/CarritoContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ArticuloProvider>
          <CarritoProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="tienda">
                  <Route index element={<Tienda />} />
                  <Route path=":id" element={<Detalles />} />
                </Route>
                <Route path="carrito" element={<Carrito />} />
                {/* <Route path="Cart" element={<Cart />} /> */}
                {/* <Route path="*" element={<NoPage />} /> */}
              </Route>
            </Routes>
          </CarritoProvider>
        </ArticuloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
