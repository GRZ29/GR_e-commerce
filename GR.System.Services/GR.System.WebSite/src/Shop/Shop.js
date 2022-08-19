import React from "react";
import Articulos from "./Articulos";
import Categorias from "./Categorias";

const Shop = () => {
  return (
    <div>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">Shop</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                  <li className="breadcrumb-item">
                    <span className="text-dark">Home</span>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shop
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container p-0">
          <div className="row">
            <Categorias />
            <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="row mb-3 align-items-center">
                <div className="col-lg-6 mb-2 mb-lg-0">
                  <p className="text-sm text-muted mb-0">
                    Showing 1-12 of 53 results
                  </p>
                </div>
                <div className="col-lg-6">
                  <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                    <li className="list-inline-item">
                      <select
                        className="selectpicker"
                        data-customclass="form-control form-control-sm"
                      >
                        <option value>Sort By </option>
                        <option value="default">Default sorting </option>
                        <option value="popularity">Popularity </option>
                        <option value="low-high">Price: Low to High </option>
                        <option value="high-low">Price: High to Low </option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              <Articulos />
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center justify-content-lg-end">
                  <li className="page-item mx-1">
                    <a className="page-link" href="#!" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item mx-1 active">
                    <a className="page-link" href="#!">
                      1
                    </a>
                  </li>
                  <li className="page-item mx-1">
                    <a className="page-link" href="#!">
                      2
                    </a>
                  </li>
                  <li className="page-item mx-1">
                    <a className="page-link" href="#!">
                      3
                    </a>
                  </li>
                  <li className="page-item ms-1">
                    <a className="page-link" href="#!" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
