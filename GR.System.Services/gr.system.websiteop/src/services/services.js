// export const BASE_URL = "https://localhost:5001/";

export const BASE_URL = "https://localhost:44342/";

export const ENDPOINTS = {
  Articulos: "Articulo",
  Categorias: "Categorias",
  SubCategorias: "SubCategorias",
  ImgCategorias: "ImgCategorias",
  ImgArticulo: "ImgArticulo",
  Color: "Color",
};

export const fetchArticulos = () =>
  fetch(`${BASE_URL}api/${ENDPOINTS.Articulos}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export const fetchArticulosById = (id) =>
  fetch(`${BASE_URL}api/${ENDPOINTS.Articulos}/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export const fetchCategorias = () =>
  fetch(`${BASE_URL}api/${ENDPOINTS.Categorias}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export const fetchSubCategorias = () =>
  fetch(`${BASE_URL}api/${ENDPOINTS.SubCategorias}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export const fetchColoresById = (id) =>
  fetch(`${BASE_URL}api/${ENDPOINTS.Color}/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
