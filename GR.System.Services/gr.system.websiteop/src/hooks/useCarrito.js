// import { useContext, useReducer } from "react";
// import { CarritoContext } from "../context/CarritoContext/CarritoContext";
// import { carritoReducer } from "../utils/carritoReducer/carritoReducer";
// import { INITIAL_STATE_CARRITO } from "../utils/carritoReducer/initialStateCarrito";

const addCarrito = (articulo, cantidad) => {
  const { id, idArticulo, articulos, colores } = articulo[0];
  const { nomArticulo, precio, imgPreviewArticulos } = articulos;
  const { iva, costo } = precio;
  const { img } = imgPreviewArticulos;
  const { nomColor, precioColor, hexColor } = colores;
};

// export const useCarrito = () => {
//   const obj = {
//     state,
//   };
//   return obj;
// };
