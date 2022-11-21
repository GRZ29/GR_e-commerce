import React from "react";
import { useNavigate } from "react-router-dom";
import { useArticulos } from "../hooks/useArticulos";
import { BASE_URL } from "../services/services";

function Articulos() {
  const { isLoading, initialArticulo } = useArticulos();
  const navigate = useNavigate();

  const navigateWithCode = (id) => {
    navigate(`/tienda/${id}`);
  };

  return (
    <div className="row">
      {isLoading ? (
        <p>...laoding</p>
      ) : (
        initialArticulo.map((articulo, idx) => (
          <div className="col-lg-4 col-sm-6" key={articulo.id}>
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white bg-"></div>
                <a
                  className="d-block"
                  onClick={() => navigateWithCode(articulo.id)}
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
        ))
      )}
    </div>
  );
}

export default Articulos;
