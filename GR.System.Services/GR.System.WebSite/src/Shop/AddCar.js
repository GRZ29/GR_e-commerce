import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CardContext } from "../hooks/CartContext";
import { CreateAPIEndPoint, ENDPOINTS } from "../api";
import { useNavigate } from "react-router-dom";

const AddCar = ({ articulo }) => {
  const [itemColors, setItemsColors] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [newArticulo, setNewArticulo] = useState([]);
  const [error, setError] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  const navigate = useNavigate();

  const { addToCart } = useContext(CardContext);

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
      .then((res) => setItemsColors(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTipColors();
  }, []);

  useEffect(() => {
    if (itemColors.length !== 0) {
      const filterItem = itemColors.filter((items) => {
        return items.id === index;
      });
      setNewArticulo(filterItem);
    }
  }, [index]);

  if (!loading == true) {
    return <div>CARGANDO</div>;
  }

  const handleAddCar = () => {
    if (!checked) {
      setError(true);
      return;
    }

    addToCart(newArticulo, cantidad);
    navigate("/Cart");
  };

  const handleInput = (id) => {
    setError(false);
    setIndex(id);
  };

  const checkNumber = (num) => {
    if (num < 1) {
      return 1;
    }
    return num;
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
                onClick={() =>
                  setCantidad((cantidad) => {
                    let newCantidad = cantidad - 1;
                    return checkNumber(newCantidad);
                  })
                }
              >
                <i className="fas fa-caret-left"></i>
              </button>
              <span
                className="form-control form-control-sm border-0 shadow-0"
                style={{ textAlign: "center" }}
              >
                {cantidad}
              </span>
              <button
                className="inc-btn p-0"
                onClick={() => setCantidad((prev) => prev + 1)}
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
            {`${checked ? `Agregar al carrito` : `Seleccione un color`}`}
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
              newArticulo.length !== 0
                ? articulo[0].precio.costo + newArticulo[0].colores.precioColor
                : articulo[0].precio.costo
            }`}
            <span style={{ color: "red" }}> esto es un extra</span>
          </a>
        </div> */}
        <div className="py-2 mb-1 bg-white text-muted colores">
          <strong className="text-uppercase text-dark color-title">
            Color:
          </strong>
          {itemColors.length === 0 ? (
            <h2>no existen colores en este producto</h2>
          ) : (
            itemColors.map((item, idx) => (
              <a className="reset-anchor ms-2 buttons" key={idx}>
                <input
                  className="form-check-input chech-blanco"
                  style={{ backgroundColor: `${item.colores.hexColor}` }}
                  type="radio"
                  name="radioColor"
                  id="radioColor"
                  onChange={() => setChecked(true)}
                  onClick={() => handleInput(item.id)}
                />
              </a>
            ))
          )}
          {error && (
            <span style={{ color: "red", fontSize: "8" }}>
              seleccione un color
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCar;
