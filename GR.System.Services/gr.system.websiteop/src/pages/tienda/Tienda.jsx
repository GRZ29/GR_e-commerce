import React from "react";
import Articulos from "../../components/Articulos";
import Categorias from "../../components/Categorias";
import Hero from "../../components/Hero";
import { useArticulos } from "../../hooks/useArticulos";
import { ACTION_TYPES_ARTICULO } from "../../utils/articulosReducer/initialStateArticulos";

function Tienda() {
  const { page, dispatch, articulosPage } = useArticulos();

  return (
    <div>
      <Hero />
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
                  <div className="d-flex align-items-center justify-content-lg-end mb-0">
                    <label className="mx-2">Buscar:</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        dispatch({
                          type: ACTION_TYPES_ARTICULO.SEARCH_ARTICULO,
                          payload: e.target.value.toLowerCase(),
                        })
                      }
                    />
                    {/* <button type="submit">Buscar</button> */}
                  </div>
                </div>
              </div>
              <Articulos />
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center justify-content-lg-end">
                  {/* <li className="page-item mx-1">
                    <a className="page-link" href="#!" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li> */}
                  {[...Array(articulosPage.length)].map((_, idx) => (
                    <li
                      key={idx}
                      className={`page-item mx-1 ${
                        idx === page ? "active" : null
                      } `}
                      onClick={() =>
                        dispatch({
                          type: ACTION_TYPES_ARTICULO.SET_PAGE,
                          payload: idx,
                        })
                      }
                    >
                      <button className="page-link">{idx + 1}</button>
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
}

export default Tienda;
