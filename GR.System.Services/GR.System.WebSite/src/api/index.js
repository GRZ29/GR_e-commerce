import axios from "axios";

export const BASE_URL = "https://localhost:5001/";

export const ENDPOINTS = {
  Articulo: "Articulo",
  Categorias: "Categorias",
  SubCategorias: "SubCategorias",
  ImgCategorias: "ImgCategorias",
  ImgArticulo: "ImgArticulo",
  Color: "Color",
};

export const CreateAPIEndPoint = (endpoint) => {
  let url = `${BASE_URL}api/${endpoint}/`;

  return {
    fetch: () => axios.get(url),
    fetchById: (Id) => axios.get(url + Id),
    post: (NewRecord) => axios.post(url, NewRecord),
    put: (Id, UpdateRecord) => axios.put(url + Id, UpdateRecord),
    delete: (Id) => axios.delete(url + Id),
  };
};
