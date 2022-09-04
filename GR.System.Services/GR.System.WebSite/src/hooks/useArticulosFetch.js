import { useState, useEffect } from "react";
import { CreateAPIEndPoint, ENDPOINTS } from "../api";
import paginador from "./CustomPaginador";

export const useArticulosFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [todosData, setTodosData] = useState([]);
  const [name, setName] = useState("");

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

  const handleInput = (e) => {
    try {
      let filter = todosData.filter((a) => {
        return (
          a.nomArticulo.toLowerCase().includes(e.target.value.toLowerCase()) ||
          a.codArticulo.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });

      if (filter.length === 0) {
        setData(paginador(filter));
      } else {
        setData(paginador(filter));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    loading,
    data,
    todosData,
    handleCategorias,
    handleSubCategorias,
    handleReset,
    handleInput,
  };
};
