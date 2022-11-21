import { createContext, useEffect, useReducer } from "react";
import { fetchArticulos } from "../../services/services";
import { articulosReducer } from "../../utils/articulosReducer/articulosReducer";
import {
  ACTION_TYPES_ARTICULO,
  INITIAL_STATE_ARTICULO,
} from "../../utils/articulosReducer/initialStateArticulos";

export const ArticuloContext = createContext(INITIAL_STATE_ARTICULO);

export const ArticuloProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    articulosReducer,
    INITIAL_STATE_ARTICULO
  );

  const handleFetchArticulos = async () => {
    try {
      const response = fetchArticulos();
      const data = await response;
      dispatch({ type: ACTION_TYPES_ARTICULO.FETCH_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: ACTION_TYPES_ARTICULO.FETCH_ERROR });
    }
  };

  useEffect(() => {
    handleFetchArticulos();
    return () => {};
  }, []);

  return (
    <ArticuloContext.Provider value={{ state, dispatch }}>
      {children}
    </ArticuloContext.Provider>
  );
};
