import { ACTION_TYPES_CATEGORIA } from "./initialStateCategorias";

export const categoriasReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES_CATEGORIA.FETCH_SUCCESS_CATEGORIA:
      return {
        ...state,
        isLoading: false,
        initialCategoria: action.payload,
      };

    case ACTION_TYPES_CATEGORIA.FETCH_SUCCESS_SUBCATEGORIA:
      return {
        ...state,
        initialSubCategoria: action.payload,
      };
    case ACTION_TYPES_CATEGORIA.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
