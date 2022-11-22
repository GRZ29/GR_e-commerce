import { useContext } from "react";
import { ArticuloContext } from "../context/ArticuloContext/ArticuloContext";
import paginator from "../utils/paginator";

export const useArticulos = () => {
  const {
    state,
    dispatch,
    handleFilterByCategoria,
    handleFilterBySubCategoria,
    handleReset,
  } = useContext(ArticuloContext);
  const {
    isLoading,
    isError,
    articulo,
    initialArticulo,
    colores,
    page,
    articuloByFilters,
  } = state;

  const articulosPage = paginator(
    articuloByFilters.length === 0 ? initialArticulo : articuloByFilters
  );

  return {
    isLoading,
    isError,
    articulo,
    initialArticulo,
    dispatch,
    colores,
    page,
    articulosPage,
    handleFilterByCategoria,
    handleFilterBySubCategoria,
    handleReset,
  };
};
