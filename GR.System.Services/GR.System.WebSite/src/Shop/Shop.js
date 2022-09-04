import React, { useState, useEffect } from "react";
import Articulos from "./Articulos";
import Categorias from "./Categorias";
import { CreateAPIEndPoint, ENDPOINTS } from "../api";
import useStateContext, { Context } from "../hooks/useStateContext";
import { useArticulosFetch } from "../hooks/useArticulosFetch";
import paginador from "../hooks/CustomPaginador";

const Shop = () => {
  const {
    loading,
    data,
    todosData,
    handleCategorias,
    handleSubCategorias,
    handleReset,
    handleInput,
  } = useArticulosFetch();
  const [page, setPage] = useState(0);
  const [articulos, setArticulos] = useState([]);
  const [checkState, setcheckState] = useState(false);

  useEffect(() => {
    if (loading) return;
    setArticulos(data[page]);
  }, [loading, page, data]);

  const handlePage = (index) => setPage(index);

  const handleResetPage = () => {
    setArticulos(data[0]);
  };

  return (
    <div>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">Tienda</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                  <li className="breadcrumb-item">
                    <span className="text-dark">Home</span>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Tienda
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
            <Categorias
              // articulos={articulos}
              handleCategorias={handleCategorias}
              handleSubCategorias={handleSubCategorias}
              handleReset={handleReset}
            />
            <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="row mb-3 align-items-center">
                <div className="col-lg-6 mb-2 mb-lg-0">
                  <p className="text-sm text-muted mb-0">
                    Showing 1-12 of 53 results
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center justify-content-lg-end mb-0">
                    <label className="mx-2">Buscar:</label>
                    <input type="text" onChange={(e) => handleInput(e)} />
                    {/* <button type="submit">Buscar</button> */}
                  </div>
                </div>
              </div>
              {data.length !== 0 ? (
                articulos === undefined ? (
                  handleResetPage()
                ) : (
                  <Articulos articulos={articulos} />
                )
              ) : (
                <h3>no hay data</h3>
              )}

              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center justify-content-lg-end">
                  {/* <li className="page-item mx-1">
                    <a className="page-link" href="#!" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li> */}
                  {data.map((_, index) => (
                    <li
                      key={index}
                      className={`page-item mx-1 ${
                        index === page ? "active" : null
                      } `}
                      onClick={() => handlePage(index)}
                    >
                      <a className="page-link" href="#!">
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  {/* <li className="page-item ms-1">
                    <a className="page-link" href="#!" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li> */}
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
