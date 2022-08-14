import axios from "axios";

export const BASE_URL = "https://localhost:44342/";

export const ENDPOINTS = {
  Articulo: "Articulo",
  ImgArticulo: "ImgArticulo",
};

export const CreateAPIEndPoint = (endpoint) => {
  let url = BASE_URL + "api/" + endpoint + "/";
  return {
    fetch: () => axios.get(url),
    fetchById: (Id) => axios.get(url + Id),
    post: (NewRecord) => axios.post(url, NewRecord),
    put: (Id, UpdateRecord) => axios.put(url + Id, UpdateRecord),
    delete: (Id) => axios.delete(url + Id),
  };
};
