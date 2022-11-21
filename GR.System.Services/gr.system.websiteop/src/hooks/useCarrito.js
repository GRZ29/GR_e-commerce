import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext/CarritoContext";

export const useCarrito = () => {
  const { addCarrito, dispatch, state } = useContext(CarritoContext);

  return { addCarrito, dispatch, state };
};
