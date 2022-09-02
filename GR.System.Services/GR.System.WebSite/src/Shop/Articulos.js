import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api";
import { useNavigate } from "react-router-dom";
import RenderFreshData from "../hooks/RenderFreshData";
import { Context } from "../hooks/Context";
import { useContext } from "react";

const Articulos = ({ articulos }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { idProduct, setIdProduct } = useContext(Context);

  const handleIdSelected = (id) => {
    RenderFreshData.SetIdSelect(id, idProduct, setIdProduct);
    navigate("/Details");
  };

  return (
    <div className="row">
      {articulos.map((articulo, idx) => (
        <div className="col-lg-4 col-sm-6" key={idx}>
          <div className="product text-center">
            <div className="mb-3 position-relative">
              <div className="badge text-white bg-"></div>
              <a
                className="d-block"
                onClick={() => handleIdSelected(articulo.id)}
              >
                <img
                  className="img-fluid w-100"
                  src={
                    BASE_URL + "resources/" + articulo.imgPreviewArticulos.img
                  }
                  alt={articulo.nomArticulo}
                />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <span className="btn btn-sm btn-dark">Add to cart</span>
                  </li>
                  <li className="list-inline-item mr-0">
                    <a
                      className="btn btn-sm btn-outline-dark"
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
              <a className="reset-anchor">{articulo.nomArticulo}</a>
            </h6>
            <p className="small text-muted">${articulo.precio.costo}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articulos;
