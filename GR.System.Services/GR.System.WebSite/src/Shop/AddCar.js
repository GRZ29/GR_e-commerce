import React, { useEffect, useState } from "react";

const AddCar = ({ articulo }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!articulo.length == 0) {
      setLoading(true);
    }
  }, [articulo]);

  if (!loading == true) {
    return <div>CARGANDO</div>;
  }

  return (
    <div className="col-lg-6">
      <ul className="list-inline mb-2 text-sm">
        <li className="list-inline-item m-0">
          <i className="fas fa-star small text-warning"></i>
        </li>
        <li className="list-inline-item m-0 1">
          <i className="fas fa-star small text-warning"></i>
        </li>
        <li className="list-inline-item m-0 2">
          <i className="fas fa-star small text-warning"></i>
        </li>
        <li className="list-inline-item m-0 3">
          <i className="fas fa-star small text-warning"></i>
        </li>
        <li className="list-inline-item m-0 4">
          <i className="fas fa-star small text-warning"></i>
        </li>
      </ul>

      <h1>{articulo[0].nomArticulo} </h1>
      <p className="text-muted lead">₡{articulo[0].precio.costo}</p>
      <p className="text-sm mb-4">{articulo[0].detalles.descripcionCorta}</p>
      <div className="row align-items-stretch mb-4">
        <div className="col-sm-5 pr-sm-0">
          <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
            <span className="small text-uppercase text-gray mr-4 no-select">
              Quantity
            </span>
            <div className="quantity">
              <button className="dec-btn p-0">
                <i className="fas fa-caret-left"></i>
              </button>
              <input
                className="form-control border-0 shadow-0 p-0"
                type="text"
              />
              <button className="inc-btn p-0">
                <i className="fas fa-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-3 pl-sm-0">
          <a
            className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
            href="cart.html"
          >
            Add to cart
          </a>
        </div>
      </div>
      <div className="type-info">
        <div className="px-3 py-2 mb-1 bg-white">
          <strong className="text-uppercase">COD:</strong>
          <span className="ms-2 text-muted">{articulo[0].codArticulo}</span>
        </div>
        <div className="px-3 py-2 mb-1 bg-white text-muted">
          <strong className="text-uppercase text-dark">Category:</strong>
          <a className="reset-anchor ms-2" href="#!">
            {articulo[0].categorias.nomCategoria}
          </a>
        </div>
        <div className="px-3 py-2 mb-1 bg-white text-muted">
          <strong className="text-uppercase text-dark">Tags:</strong>
          <a className="reset-anchor ms-2" href="#!">
            Innovation
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
