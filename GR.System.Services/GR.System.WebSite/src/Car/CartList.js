import React from "react";
import { BASE_URL } from "../api";

export default function CartList({
  cart,
  increaseCantidad,
  decreaseCantidad,
  removeItem,
}) {
  return (
    <table className="table text-nowrap">
      <thead className="bg-light">
        <tr>
          <th className="border-0 p-3" scope="col">
            <strong className="text-sm text-uppercase">Articulo</strong>
          </th>
          <th className="border-0 p-3" scope="col">
            <strong className="text-sm text-uppercase">Color</strong>
          </th>
          <th className="border-0 p-3" scope="col">
            <strong className="text-sm text-uppercase">Precio</strong>
          </th>
          <th className="border-0 p-3" scope="col">
            <strong className="text-sm text-uppercase">Cantidad</strong>
          </th>
          <th className="border-0 p-3" scope="col">
            <strong className="text-sm text-uppercase">Total</strong>
          </th>
          <th className="border-0 p-3" scope="col">
            <strong className="text-sm text-uppercase"></strong>
          </th>
        </tr>
      </thead>
      <tbody className="border-0">
        {cart.map((item, idx) => (
          <tr key={idx}>
            <th className="ps-0 py-3 border-light" scope="row">
              <div className="d-flex align-items-center">
                <span className="reset-anchor d-block animsition-link">
                  <img
                    src={BASE_URL + "resources/" + item.img}
                    alt="..."
                    width="70"
                  />
                </span>
                <div className="ms-3">
                  <strong className="h6">
                    <span className="reset-anchor animsition-link">
                      {item.nomArticulo}
                    </span>
                  </strong>
                </div>
              </div>
            </th>
            <td className="p-3 align-middle border-light">
              <span
                style={{
                  backgroundColor: `${item.hexColor}`,
                  height: "40px",
                  width: "40px",
                  display: "block",
                  borderRadius: "50%",
                  position: "relative",
                  left: "50%",
                  transform: "translate(-50%)",
                  border: "4px solid #e3e3e3",
                  // margin-right: 5px;
                }}
              ></span>
            </td>
            <td className="p-3 align-middle border-light">
              <p className="mb-0 small">₡{item.precioArticulo}</p>
            </td>
            <td className="p-3 align-middle border-light">
              <div className="border d-flex align-items-center justify-content-between px-3">
                <span className="small text-uppercase text-gray headings-font-family">
                  Cantidad
                </span>
                <div className="quantity">
                  <button
                    className="dec-btn p-0"
                    onClick={() => decreaseCantidad(item.id, item.cantidad)}
                  >
                    <i className="fas fa-caret-left"></i>
                  </button>
                  <span className="form-control form-control-sm border-0 shadow-0">
                    {item.cantidad}
                  </span>
                  <button
                    className="inc-btn p-0"
                    onClick={() => increaseCantidad(item.id, 1)}
                  >
                    <i className="fas fa-caret-right"></i>
                  </button>
                </div>
              </div>
            </td>
            <td className="p-3 align-middle border-light">
              <p className="mb-0 small">
                ₡{item.precioArticulo * item.cantidad}
              </p>
            </td>
            <td className="p-3 align-middle border-light">
              <span
                className="reset-anchor"
                style={{ cursor: "pointer" }}
                onClick={() => removeItem(item.id)}
              >
                <i className="fas fa-trash-alt small text-muted"></i>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
