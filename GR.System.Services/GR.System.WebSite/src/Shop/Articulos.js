import React, { useState, useEffect } from "react";
import { BASE_URL, CreateAPIEndPoint, ENDPOINTS } from "../api";

export default function Articulos() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    CreateAPIEndPoint(ENDPOINTS.Articulo)
      .fetch()
      .then((res) => setArticulos(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row">
      {articulos.map((item) => (
        <div className="col-lg-4 col-sm-6" key={item.id}>
          <div className="product text-center">
            <div className="mb-3 position-relative">
              <div className="badge text-white bg-"></div>
              <a className="d-block">
                <img
                  className="img-fluid w-100"
                  src={BASE_URL + "resources/" + item.imgPreviewArticulos.img}
                  alt={item.nomArticulo}
                />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <span
                      className="btn btn-sm btn-dark"
                      onClick={() => console.log("clicked")}
                    >
                      Add to cart
                    </span>
                  </li>
                  <li className="list-inline-item mr-0">
                    <a
                      className="btn btn-sm btn-outline-dark"
                      href="#productView"
                      data-bs-toggle="modal"
                    >
                      <i className="fas fa-expand"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              {" "}
              <a className="reset-anchor">{item.nomArticulo}</a>
            </h6>
            <p className="small text-muted">${item.precio.costo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
