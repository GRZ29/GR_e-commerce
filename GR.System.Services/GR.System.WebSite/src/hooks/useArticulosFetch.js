import { useState, useEffect } from "react";
import { CreateAPIEndPoint, ENDPOINTS } from "../api";
import paginador from "./CustomPaginador";

export const useArticulosFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [todosData, setTodosData] = useState([]);

  //llamada api
  const getArticulos = async () => {
    await CreateAPIEndPoint(ENDPOINTS.Articulo)
      .fetch()
      .then((res) => {
        setData(paginador(res.data.data)); //6
        setTodosData(res.data.data); //12
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    getArticulos();
  }, []);

  //buttones
  const handleCategorias = (categoria) => {
    let filter = todosData.filter((articulo) => {
      return articulo.subCategorias.categorias.nomCategoria === categoria;
    });
    setData(paginador(filter));
  };

  const handleSubCategorias = (subCategoria) => {
    let filter = todosData.filter((articulo) => {
      return articulo.subCategorias.nomSubCategoria === subCategoria;
    });
    setData(paginador(filter));
  };

  const handleReset = () => {
    setData(paginador(todosData));
  };

  return {
    loading,
    data,
    todosData,
    handleCategorias,
    handleSubCategorias,
    handleReset,
  };
};
