import "./assets/css/style.default.css";
import "./assets/css/custom.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./router/Layout";
import Home from "./components/home/Home";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* <Route path="Shop" element={<Shop />} /> */}
              {/* <Route path="Details" element={<Details />} /> */}
              {/* <Route path="Cart" element={<Cart />} /> */}
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
    )

}

export default App;
