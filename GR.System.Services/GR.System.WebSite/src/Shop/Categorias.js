import React from "react";

export default function Categorias({ articulos }) {
  let categorias = articulos.map((articulo) => {
    const { nomCategoria } = articulo.subCategorias.categorias;
    const { nomSubCategoria } = articulo.subCategorias;
    return { nomCategoria, nomSubCategoria };
  });

  let reduceCategorias = categorias.reduce((acc, item) => {
    let found = acc.find((x) => x.nomCategoria === item.nomCategoria);
    if (found) {
      found.nomSubCategoria.push(item.nomSubCategoria);
    } else {
      acc.push({
        nomCategoria: item.nomCategoria,
        nomSubCategoria: [item.nomSubCategoria],
      });
    }
    return acc;
  }, []);

  const test = (nombreSubCategoria) => {
    let sub = articulos.filter(
      (item) => item.subCategorias.nomSubCategoria === nombreSubCategoria
    );
  };

  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <h5 className="text-uppercase mb-4">Categories</h5>
      {reduceCategorias.map((categoria, indexCategoria) => (
        <div key={indexCategoria}>
          <div className="py-2 px-4 bg-dark text-white mb-3">
            <strong className="small text-uppercase fw-bold">
              {categoria.nomCategoria}
            </strong>
          </div>
          {categoria.nomSubCategoria.map((subCategoria, subCategoriaIndex) => (
            <ul
              className="list-unstyled small text-muted ps-lg-4 font-weight-normal"
              key={subCategoriaIndex}
            >
              <li className="mb-2">
                <span
                  className="reset-anchor"
                  onClick={() => test(subCategoria)}
                >
                  {subCategoria}
                </span>
              </li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}
