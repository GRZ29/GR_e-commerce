export const INITIAL_STATE_ARTICULO = {
  isLoading: true,
  isError: false,
  initialArticulo: [],
  articulo: [],
  colores: [],
};

export const ACTION_TYPES_ARTICULO = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  FETCH_ARTICULO_BY_ID: "FETCH_ARTICULO_BY_ID",
  FETCH_COLORS_BY_ID: "FETCH_COLORS_BY_ID",
};
