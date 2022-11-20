import React from 'react';
import { useNavigate } from "react-router-dom";

const QuickArticules = () => {

    let {BASE_URL} = 'test';

    const navigate = useNavigate();

    const handleIdSelected = (id) => {
        navigate("/Details");
    };

    return (
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white bg-"></div>
                <a className="d-block" onClick={() => handleIdSelected(4)}>
                  <img className="img-fluid w-100" src={BASE_URL+"resources/BAR-2202.jpeg"} alt="..." />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" onClick={() => handleIdSelected(4)}>
                        Detalles
                      </a>
                    </li>
                    <li className="list-inline-item me-0">
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
                <a className="reset-anchor" >
                  name
                </a>
              </h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white bg-"></div>
                <a className="d-block" onClick={() => handleIdSelected(5)}>
                  <img className="img-fluid w-100" src={BASE_URL+"resources/EST-2207.jpeg"} alt="..." />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" onClick={() => handleIdSelected(5)}>
                        Detalles
                      </a>
                    </li>
                    <li className="list-inline-item me-0">
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
                <a className="reset-anchor">
                  name
                </a>
              </h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white bg-"></div>
                <a className="d-block" onClick={() => handleIdSelected(8)}>
                  <img className="img-fluid w-100" src={BASE_URL+"resources/ET-2203.jpeg"} alt="..." />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" onClick={() => handleIdSelected(8)}>
                        Detalles
                      </a>
                    </li>
                    <li className="list-inline-item me-0">
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
                <a className="reset-anchor">
                  name
                </a>
              </h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white bg-"></div>
                <a className="d-block" onClick={() => handleIdSelected(9)}>
                  <img className="img-fluid w-100" src={BASE_URL+"resources/VEL-2203.jpeg"} alt="..." />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" onClick={() => handleIdSelected(9)}>
                        Detalles
                      </a>
                    </li>
                    <li className="list-inline-item me-0">
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
                <a className="reset-anchor" >
                  name
                </a>
              </h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
        </div>
      );
};

export default QuickArticules;