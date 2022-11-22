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

    case ACTION_TYPES_ARTICULO.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case ACTION_TYPES_ARTICULO.FILTER_CAT_BY_CATEGORIA:
      return {
        ...state,
        page: 0,
        articuloByFilters: [...state.initialArticulo].filter(
          (item) =>
            item.subCategorias.categorias.nomCategoria ===
            action.payload.nomCategoria
        ),
      };

    case ACTION_TYPES_ARTICULO.FILTER_CAT_BY_SUBCATEGORIA:
      return {
        ...state,
        page: 0,
        articuloByFilters: [...state.initialArticulo].filter(
          (item) =>
            item.subCategorias.nomSubCategoria ===
            action.payload.nomSubCategoria
        ),
      };

    case ACTION_TYPES_ARTICULO.SEARCH_ARTICULO:
      return {
        ...state,
        page: 0,
        articuloByFilters: [...state.initialArticulo].filter((item) =>
          item.nomArticulo.toLowerCase().includes(action.payload)
        ),
      };

    case ACTION_TYPES_ARTICULO.RESET:
      return {
        ...state,
        articuloByFilters: [],
      };

    default:
      return state;
  }
};
