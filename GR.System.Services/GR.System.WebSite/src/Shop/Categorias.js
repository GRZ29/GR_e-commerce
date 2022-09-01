import React, { useState, useEffect } from "react";
import { CreateAPIEndPoint, ENDPOINTS } from "../api";

export default function Categorias({
  articulos,
  handleFilterCategorias,
  handleFilterSubCategorias,
}) {
  const [categorias, setCategorias] = useState([]);
  const [subCategorias, setSubCategorias] = useState([]);

  const fetchCategorias = () => {
    CreateAPIEndPoint(ENDPOINTS.Categorias)
      .fetch()
      .then((res) => {
        setCategorias(res.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchSubCategorias = () => {
    CreateAPIEndPoint(ENDPOINTS.SubCategorias)
      .fetch()
      .then((res) => setSubCategorias(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCategorias();
    fetchSubCategorias();
  }, []);

  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <h5 className="text-uppercase mb-4">Categories</h5>
      <div
        className="py-2 px-4 bg-dark text-white mb-3 info-color" 
        style={{ cursor: "pointer" }}
        onClick={() => handleFilterCategorias("todos")}
      >
        <strong className="small text-uppercase fw-bold">
          todos los articulos
        </strong>
      </div>
      {categorias.map((categoria, indexCategoria) => (
        <div key={indexCategoria}>
          <div
            className="py-2 px-4 bg-dark text-white mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleFilterCategorias(categoria.nomCategoria)}
          >
            <strong className="small text-uppercase fw-bold">
              {categoria.nomCategoria}
            </strong>
          </div>
          <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
            {subCategorias.map((subCategoria, indexSubCategoria) => {
              if (subCategoria.idCategoria === categoria.id) {
                return (
                  <li className="mb-2" key={indexSubCategoria}>
                    <span
                      className="reset-anchor"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleFilterSubCategorias(subCategoria.nomSubCategoria)
                      }
                    >
                      {subCategoria.nomSubCategoria}
                    </span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
