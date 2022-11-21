import { createContext, useEffect, useReducer } from "react";
import { carritoReducer } from "../../utils/carritoReducer/carritoReducer";
import {
  ACTION_TYPES_CARRITO,
  INITIAL_STATE_CARRITO,
} from "../../utils/carritoReducer/initialStateCarrito";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, INITIAL_STATE_CARRITO);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(state.carrito));
    dispatch({ type: ACTION_TYPES_CARRITO.ITEMS_TOTAL });
  }, [state.carrito]);

  const addCarrito = (articulo, cantidad, colorObj) => {
    const { id, nomArticulo, precio, imgPreviewArticulos } = articulo[0];
    const { iva, costo } = precio;
    const { img } = imgPreviewArticulos;
    const obj = { id, nomArticulo, iva, costo, img };

    dispatch({
      type: ACTION_TYPES_CARRITO.ADD_CARRITO,
      payload: { ...obj, ...colorObj, cantidad },
    });
  };

  return (
    <CarritoContext.Provider value={{ addCarrito, dispatch, state }}>
      {children}
    </CarritoContext.Provider>
  );
};
