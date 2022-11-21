import React, { useEffect, useReducer } from "react";
import { fetchCategorias, fetchSubCategorias } from "../services/services";
import { categoriasReducer } from "../utils/categoriasReducer/categoriasReducer";
import {
  ACTION_TYPES_CATEGORIA,
  INITIAL_STATE_CATEGORIA,
} from "../utils/categoriasReducer/initialStateCategorias";

function Categorias() {
  const [state, dispatch] = useReducer(
    categoriasReducer,
    INITIAL_STATE_CATEGORIA
  );

  const handleFetchCategorias = async () => {
    try {
      const responseCatergorias = fetchCategorias();
      const dataCategorias = await responseCatergorias;
      const responseSubCategorias = fetchSubCategorias();
      const dataSubCategorias = await responseSubCategorias;

      dispatch({
        type: ACTION_TYPES_CATEGORIA.FETCH_SUCCESS_CATEGORIA,
        payload: dataCategorias,
      });

      dispatch({
        type: ACTION_TYPES_CATEGORIA.FETCH_SUCCESS_SUBCATEGORIA,
        payload: dataSubCategorias,
      });
    } catch (err) {
      dispatch({ type: ACTION_TYPES_CATEGORIA.FETCH_ERROR });
    }
  };

  useEffect(() => {
    handleFetchCategorias();
  }, []);

  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <h5 className="text-uppercase mb-4">Categories</h5>
      <div
        className="py-2 px-4 bg-dark text-white mb-3 info-color"
        style={{ cursor: "pointer" }}
        // onClick={() => handleReset()}
      >
        <strong className="small text-uppercase fw-bold">
          todos los articulos
        </strong>
      </div>
      {state.isLoading ? (
        <p>...loading</p>
      ) : (
        state.initialCategoria.map((categoria, indexCategoria) => (
          <div key={indexCategoria}>
            <div
              className="py-2 px-4 bg-dark text-white mb-3"
              style={{ cursor: "pointer" }}
              // onClick={() => handleCategorias(categoria.nomCategoria)}
            >
              <strong className="small text-uppercase fw-bold">
                {categoria.nomCategoria}
              </strong>
            </div>
            <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
              {state.initialSubCategoria.map(
                (subCategoria, indexSubCategoria) => {
                  if (subCategoria.idCategoria === categoria.id) {
                    return (
                      <li className="mb-2" key={indexSubCategoria}>
                        <span
                          className="reset-anchor"
                          style={{ cursor: "pointer" }}
                          //   onClick={() =>
                          //     handleSubCategorias(subCategoria.nomSubCategoria)
                          //   }
                        >
                          {subCategoria.nomSubCategoria}
                        </span>
                      </li>
                    );
                  }
                }
              )}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default Categorias;
