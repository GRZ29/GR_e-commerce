import { ACTION_TYPES_ARTICULO } from "./initialStateArticulos";

export const articulosReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES_ARTICULO.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        initialArticulo: action.payload.data,
      };

    case ACTION_TYPES_ARTICULO.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case ACTION_TYPES_ARTICULO.FETCH_ARTICULO_BY_ID: {
      return {
        ...state,
        articulo: action.payload,
      };
    }

    case ACTION_TYPES_ARTICULO.FETCH_COLORS_BY_ID: {
      return {
        ...state,
        colores: action.payload,
      };
    }

    default:
      return state;
  }
};
