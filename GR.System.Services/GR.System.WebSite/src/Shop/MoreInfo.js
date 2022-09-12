import React, { useEffect, useState } from "react";
 
 const MoreInfo = ({articulo}) => {
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (!articulo.length == 0) {
        setLoading(true);
      }
    }, [articulo]);
  
    if (!loading == true) {
      return <div>CARGANDO</div>;
    }

    return (
        <div className="tab-content mb-5" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <div className="p-4 p-lg-5 bg-white">
              <h6 className="text-uppercase">
                Descripcion del Producto
              </h6>
              <p className="text-muted text-sm mb-0">
                {articulo[0].detalles.descripcion.descripcionLarga}
              </p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <div className="p-4 p-lg-5 bg-white">
              <h6 className="text-uppercase">
                Descripcion del Producto
              </h6>
              <p className="text-muted text-sm mb-0 txts">
                <label className="text-uppercase">Alto: {articulo[0].detalles.descripcion.alto}</label>
                <label className="text-uppercase">Ancho: {articulo[0].detalles.descripcion.ancho}</label>
                <label className="text-uppercase">Fondo: {articulo[0].detalles.descripcion.fondo}</label>
                <label className="text-uppercase">Dimensiones: {articulo[0].detalles.descripcionAdicional.dimensiones}</label>
              </p>
            </div>
          </div>
        </div>
    );
 };
 
 export default MoreInfo;