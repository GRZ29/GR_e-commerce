import React, { useEffect, useState } from "react";
import { BASE_URL, CreateAPIEndPoint, ENDPOINTS } from "../api";
import RenderFreshData from "../hooks/RenderFreshData";
import { Context } from "../hooks/Context";
import { useContext } from "react";
import AddCar from "./AddCar";
import Carousel from "../Slider/Carousel";
import MoreInfo from "./MoreInfo";

const Details = () => {
  const [imgArticulo, setImgArticulo] = useState([]);
  const [articulo, setArticulo] = useState([]);
  const { idProduct, setIdProduct, idCar, setIdCar } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (idProduct.idSelectProduct == 0) {
      setIdProduct(RenderFreshData.GetIdSelect(idProduct));
    } else {
      CreateAPIEndPoint(ENDPOINTS.ImgArticulo + "/" + idProduct.idSelectProduct)
        .fetch()
        .then((res) => {
          setImgArticulo(res.data);
        })
        .catch((err) => console.log(err));

      CreateAPIEndPoint(ENDPOINTS.Articulo + "/" + idProduct.idSelectProduct)
        .fetch()
        .then((res) => {
          setArticulo(res.data);
        })
        .catch((err) => console.log(err));

      setLoading(true);
    }
  }, [idProduct]);

  if (!loading == true) {
    return <div>CARGANDO</div>;
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="row m-sm-0">
              <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2">
                <div className="swiper product-slider-thumbs">
                  {imgArticulo.map((item, index) => (
                    <div
                      className="swiper-slide h-auto swiper-thumb-item mb-3"
                      key={index}
                      style={{ backgroundColor: "white" }}
                    >
                      <div className="swiper-wrapper">
                        <img
                          className="w-100 imagen-logo"
                          src={BASE_URL + "resources/" + item.img}
                          alt="..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {articulo.map((item, index) => (
                <div key={index} className="col-sm-10 order-1 order-sm-2">
                  <div className="swiper product-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide h-auto">
                        <a
                          className="glightbox product-view"
                          href="img/product-detail-4.jpg"
                          data-gallery="gallery2"
                          data-glightbox="Product item 4"
                        >
                          <img
                            className="img-fluid"
                            src={
                              BASE_URL +
                              "resources/" +
                              item.imgPreviewArticulos.img
                            }
                            alt="..."
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AddCar articulo={articulo} />
        </div>
        <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link text-uppercase active"
              id="description-tab"
              data-bs-toggle="tab"
              href="#description"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-uppercase"
              id="reviews-tab"
              data-bs-toggle="tab"
              href="#reviews"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              Detalles
            </a>
          </li>
        </ul>

        <MoreInfo articulo={articulo} />
        {/* <div className="tab-content mb-5" id="myTabContent">
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
        </div> */}

        {/* <!-- RELATED PRODUCTS--> */}
        <h2 className="h5 text-uppercase mb-4">Muebles populares</h2>
        {/* <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
              <div className="d-block mb-3 position-relative">
                <a className="d-block" href="detail.html">
                  <img className="img-fluid w-100" src={product1} alt="..." />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-outline-dark" href="#!">
                        <i className="far fa-heart"></i>
                      </a>
                    </li>
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" href="#!">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn btn-sm btn-outline-dark"
                        href="#productView"
                        data-bs-toggle="modal"
                      >
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <a className="reset-anchor" href="detail.html">
                  Kui Ye Chen’s AirPods
                </a>
              </h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
              <div className="d-block mb-3 position-relative">
                <a className="d-block" href="detail.html">
                  <img className="img-fluid w-100" src={product2} alt="..." />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-outline-dark" href="#!">
                        <i className="far fa-heart"></i>
                      </a>
                    </li>
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" href="#!">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn btn-sm btn-outline-dark"
                        href="#productView"
                        data-bs-toggle="modal"
                      >
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <a className="reset-anchor" href="detail.html">
                  Air Jordan 12 gym red
                </a>
              </h6>
              <p className="small text-muted">$300</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
              <div className="d-block mb-3 position-relative">
                <a className="d-block" href="detail.html">
                  <img className="img-fluid w-100" src={product3} alt="..." />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-outline-dark" href="#!">
                        <i className="far fa-heart"></i>
                      </a>
                    </li>
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" href="#!">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn btn-sm btn-outline-dark"
                        href="#productView"
                        data-bs-toggle="modal"
                      >
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <a className="reset-anchor" href="detail.html">
                  Cyan cotton t-shirt
                </a>
              </h6>
              <p className="small text-muted">$25</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
              <div className="d-block mb-3 position-relative">
                <a className="d-block" href="detail.html">
                  <img className="img-fluid w-100" src={product4} alt="..." />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-outline-dark" href="#!">
                        <i className="far fa-heart"></i>
                      </a>
                    </li>
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" href="#!">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn btn-sm btn-outline-dark"
                        href="#productView"
                        data-bs-toggle="modal"
                      >
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <a className="reset-anchor" href="detail.html">
                  Timex Unisex Originals
                </a>
              </h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
        </div> */}
        <Carousel />
      </div>
    </section>
  );
};

export default Details;
