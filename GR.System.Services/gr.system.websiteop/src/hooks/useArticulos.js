import { useContext } from "react";
import { ArticuloContext } from "../context/ArticuloContext/ArticuloContext";

export const useArticulos = () => {
  const { state, dispatch } = useContext(ArticuloContext);
  const { isLoading, isError, articulo, initialArticulo, colores } = state;

  return { isLoading, isError, articulo, initialArticulo, dispatch, colores };
};
