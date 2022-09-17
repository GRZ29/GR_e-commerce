import React, { useEffect, useState } from "react";
import { Context } from "../hooks/Context";
import { useContext } from "react";
import { CardContext } from "../hooks/CartContext";
import { useNavigate } from "react-router-dom";

const AddCar = ({ articulo }) => {
  // const [cantidad, setCantidad] = useState(0);

  // const [carritoadd, setCarritoadd] = useState([]);
  // const { idCar, setIdCar } = useContext(Context);

  const [color, setColor] = useState("Blanco");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useContext(CardContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!articulo.length == 0) {
      setLoading(true);
    }
  }, [articulo]);

  // const addtocar = () => {
  //   console.log(
  //     "codigo =>",
  //     articulo[0].codArticulo,
  //     " color =>",
  //     color,
  //     " cantidad =>",
  //     cantidad
  //   );

  //   carritoadd.push({
  //     codigo: articulo[0].codArticulo,
  //     color: color,
  //     cantidad: cantidad,
  //   });
  //   console.log("carritoadd =>", carritoadd);

  //   idCar.push({
  //     codigo: articulo[0].codArticulo,
  //     color: color,
  //     cantidad: cantidad,
  //   });
  //   console.log("idCar =>", idCar);
  // };

  if (!loading == true) {
    return <div>CARGANDO</div>;
  }

  return (
    <div className="col-lg-6">
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
              <input
                className="form-control border-0 shadow-0 p-0"
                // value={cantidad}
                // onChange={(e) => setCantidad(e.target.value)}
                // type="number"
                // name="cantidad"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-3 pl-sm-0">
          <a
            className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
            onClick={() => {
              addToCart(articulo);
              navigate("/Cart");
            }}
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
          <a className="reset-anchor ms-2">
            {articulo[0].subCategorias.categorias.nomCategoria}
          </a>
        </div>
        <div className="px-3 py-2 mb-1 bg-white text-muted">
          <strong className="text-uppercase text-dark">Tags:</strong>
          <a className="reset-anchor ms-2">Innovation</a>
        </div>
        <div className="px-3 py-2 mb-1 bg-white text-muted colores">
          <strong className="text-uppercase text-dark color-title">
            Color:
          </strong>
          <a className="reset-anchor ms-2 buttons">
            <input
              className="form-check-input chech-blanco"
              type="radio"
              name="radioColor"
              id="radioColor"
              value="blanco"
              onChange={() => setChecked(!checked)}
              onClick={() => setColor("Blanco")}
            />
            <input
              className="form-check-input chech-cafe"
              type="radio"
              name="radioColor"
              id="radioColor"
              value="cafe"
              onChange={() => setChecked(!checked)}
              onClick={() => setColor("Cafe")}
            />
            <input
              className="form-check-input chech-gris"
              type="radio"
              name="radioColor"
              id="radioColor"
              value="gris"
              onChange={() => setChecked(!checked)}
              onClick={() => setColor("Gris")}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
