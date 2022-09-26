import React, { useEffect, useState, useContext, useReducer } from "react";
import { CardContext } from "../hooks/CartContext";
import { CreateAPIEndPoint, ENDPOINTS } from "../api";
import { useNavigate } from "react-router-dom";
import { ACTION_TYPES, cardReduce, INTIAL_STATE } from "../hooks/cardReducer";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AddCar = ({ articulo }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useContext(CardContext);
  const [state, dispatch] = useReducer(cardReduce, INTIAL_STATE);

  // const [empty] useState(false)

  toast.error("Seleccione un color", {
    toastId: "success1",
  });

  useEffect(() => {
    if (!articulo.length == 0) {
      setLoading(true);
    }
  }, [articulo]);

  const fetchTipColors = () => {
    const { idSelectProduct } = JSON.parse(
      localStorage.getItem("contextIdProduct")
    );
    CreateAPIEndPoint(ENDPOINTS.Color)
      .fetchById(idSelectProduct)
      .then((res) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTipColors();
  }, []);

  useEffect(() => {
    if (state.fetchColors.length !== 0) {
      const newItem = state.fetchColors.filter((items) => {
        return items.id === state.idSelected;
      });
      dispatch({ type: ACTION_TYPES.FETCH_NEW_ITEM, payload: newItem });
    }
  }, [state.idSelected]);

  if (!loading == true) {
    return <div>CARGANDO</div>;
  }

  const handleAddCar = () => {
    if (!state.checked) {
      dispatch({ type: ACTION_TYPES.ERROR_STATE });
      return;
    }

    addToCart(state.newItem, state.cantidad);
    navigate("/Cart");
  };

  return (
    <div className="col-lg-6" style={{ textAlign: "left" }}>
      <h1>{articulo[0].nomArticulo} </h1>
      <p className="text-muted lead">₡{articulo[0].precio.costo}</p>
      <p className="text-sm mb-4">{articulo[0].detalles.descripcionCorta}</p>
      <div className="row align-items-stretch mb-4">
        <div className="col-sm-5 pr-sm-0">
          <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
            <span className="small text-uppercase text-gray mr-4 no-select">
              Cantidad
            </span>
            <div className="quantity">
              <button
                className="dec-btn p-0"
                onClick={() => dispatch({ type: ACTION_TYPES.DECREASE })}
              >
                <i className="fas fa-caret-left"></i>
              </button>
              <span
                className="form-control form-control-sm border-0 shadow-0"
                style={{ textAlign: "center" }}
              >
                {state.cantidad}
              </span>
              <button
                className="inc-btn p-0"
                onClick={() => dispatch({ type: ACTION_TYPES.INCREASE })}
              >
                <i className="fas fa-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-3 pl-sm-0">
          <a
            className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
            onClick={() => handleAddCar()}
          >
            {`${state.checked ? `Agregar al carrito` : `Seleccione un color`}`}
          </a>
        </div>
      </div>
      <div className="type-info">
        <div className="py-2 mb-1 bg-white">
          <strong className="text-uppercase">Codigo:</strong>
          <span className="ms-2 text-muted">{articulo[0].codArticulo}</span>
        </div>
        <div className="py-2 mb-1 bg-white text-muted">
          <strong className="text-uppercase text-dark">Categoria:</strong>
          <a className="reset-anchor ms-2">
            {articulo[0].subCategorias.categorias.nomCategoria}
          </a>
        </div>
        <div className="py-2 mb-1 bg-white text-muted">
          <strong className="text-uppercase text-dark">Etiquetas:</strong>
          <a className="reset-anchor ms-2">Innovation</a>
        </div>
        {/* <div className="py-2 mb-1 bg-white text-muted">
          <strong className="text-uppercase text-dark">Precio:</strong>
          <a className="reset-anchor ms-2">
            ₡
            {`${
              newItem.length !== 0
                ? articulo[0].precio.costo + newItem[0].colores.precioColor
                : articulo[0].precio.costo
            }`}
            <span style={{ color: "red" }}> esto es un extra</span>
          </a>
        </div> */}
        <div className="py-2 mb-1 bg-white text-muted colores">
          <strong className="text-uppercase text-dark color-title">
            Color:
          </strong>
          {state.fetchColors.length === 0 ? (
            <h2>no existen colores en este producto</h2>
          ) : (
            state.fetchColors.map((item, idx) => (
              <a className="reset-anchor ms-2 buttons" key={idx}>
                <input
                  className="form-check-input chech-blanco"
                  style={{ backgroundColor: `${item.colores.hexColor}` }}
                  type="radio"
                  name="radioColor"
                  id="radioColor"
                  onClick={() =>
                    dispatch({
                      type: ACTION_TYPES.ID_SELECTED,
                      payload: item.id,
                    })
                  }
                />
              </a>
            ))
          )}
          {state.error && <ToastContainer />}
        </div>
      </div>
    </div>
  );
};

export default AddCar;
