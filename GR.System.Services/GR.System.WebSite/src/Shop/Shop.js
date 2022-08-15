import React from "react";
import Produc from "../assets/img/product-1.jpg";

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
            <div className="col-lg-3 order-2 order-lg-1">
              <h5 className="text-uppercase mb-4">Categories</h5>
              <div className="py-2 px-4 bg-dark text-white mb-3">
                <strong className="small text-uppercase fw-bold">
                  Fashion &amp; Acc
                </strong>
              </div>
              <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                <li className="mb-2">
                  <span className="reset-anchor">Women's T-Shirts</span>
                </li>
                <li className="mb-2">
                  <span className="reset-anchor">Men's T-Shirts</span>
                </li>
              </ul>
            </div>
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
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="product text-center">
                    <div className="mb-3 position-relative">
                      <div className="badge text-white bg-"></div>
                      <a className="d-block" href="detail.html">
                        <img className="img-fluid w-100" src={Produc} alt="..." />
                      </a>
                      <div className="product-overlay">
                        <ul className="mb-0 list-inline">
                          <li className="list-inline-item m-0 p-0">
                            <span className="btn btn-sm btn-dark">Add to cart</span>
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
                      <a className="reset-anchor" href="detail.html">
                        Kui Ye Chen’s AirPods
                      </a>
                    </h6>
                    <p className="small text-muted">$250</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product text-center">
                    <div className="mb-3 position-relative">
                      <div className="badge text-white bg-"></div>
                      <a className="d-block" href="detail.html">
                        <img className="img-fluid w-100" src={Produc} alt="..." />
                      </a>
                      <div className="product-overlay">
                        <ul className="mb-0 list-inline">
                          <li className="list-inline-item m-0 p-0">
                            <span className="btn btn-sm btn-dark">Add to cart</span>
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
                      <a className="reset-anchor" href="detail.html">
                        Air Jordan 12 gym red
                      </a>
                    </h6>
                    <p className="small text-muted">$300</p>
                  </div>
                </div>
              </div>
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
