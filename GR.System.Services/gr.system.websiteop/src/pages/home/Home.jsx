import React from "react";
import product from "../../assets/img/product-5-alt-1.jpg";
import hero from "../../assets/img/landing-logo.jpg";
import categoriaBed from "../../assets/img/bed-categoria.jpg";
import categorieSala from "../../assets/img/sala-categoria.jpg";
import categorieCocina from "../../assets/img/cocina-categoria.jpg";
import categorieBano from "../../assets/img/bano-categoria.jpg";
import { useNavigate } from "react-router-dom";
import QuickArticules from "../../components/quickArticules/QuickArticules";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="modal fade" id="productView" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content overflow-hidden border-0">
            <button
              className="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body p-0">
              <div className="row align-items-stretch">
                <div className="col-lg-6 p-lg-0">
                  <span
                    className="glightbox product-view d-block h-100 bg-cover bg-center"
                    style={{ background: `url(${product})` }}
                    data-gallery="gallery1"
                    data-glightbox="Red digital smartwatch"
                  ></span>
                  <span
                    className="glightbox d-none"
                    data-gallery="gallery1"
                    data-glightbox="Red digital smartwatch"
                  ></span>
                  <span
                    className="glightbox d-none"
                    data-gallery="gallery1"
                    data-glightbox="Red digital smartwatch"
                  ></span>
                </div>
                <div className="col-lg-6">
                  <div className="p-4 my-md-4">
                    <ul className="list-inline mb-2">
                      <li className="list-inline-item m-0">
                        {" "}
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0 1">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0 2">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0 3">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0 4">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                    </ul>
                    <h2 className="h4">Red digital smartwatch</h2>
                    <p className="text-muted">$250</p>
                    <p className="text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ut ullamcorper leo, eget euismod orci. Cum sociis
                      natoque penatibus et magnis dis parturient montes nascetur
                      ridiculus mus. Vestibulum ultricies aliquam convallis.
                    </p>
                    <div className="row align-items-stretch mb-4 gx-0">
                      <div className="col-sm-7">
                        <div className="border d-flex align-items-center justify-content-between py-1 px-3">
                          <span className="small text-uppercase text-gray mr-4 no-select">
                            Quantity
                          </span>
                          <div className="quantity">
                            <button className="dec-btn p-0">
                              <i className="fas fa-caret-left"></i>
                            </button>
                            <input
                              className="form-control border-0 shadow-0 p-0"
                              type="text"
                            />
                            <button className="inc-btn p-0">
                              <i className="fas fa-caret-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <span className="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0">
                          Add to cart
                        </span>
                      </div>
                    </div>
                    <span className="btn btn-link text-dark text-decoration-none p-0">
                      <i className="far fa-heart me-2"></i>Add to wish list
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <section
                className="hero pb-3 bg-cover bg-center d-flex align-items-center"
                style={{ background: `url(${hero})` }}
              >
                {/* <img src={product}></img> */}
                <div className="container py-5">
                  <div className="row px-4 px-lg-5">
                    <div className="col-lg-6">
                      <p className="text-muted small text-uppercase mb-2">
                        Bienvenidos
                      </p>
                      <h1 className="h2 text-uppercase mb-3">
                        20% en nuestras 200 primeras compras
                      </h1>
                      <a
                        href="*"
                        className="btn btn-dark"
                        onClick={() => navigate("/Shop")}
                      >
                        Vamos!
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <section
                className="hero pb-3 bg-cover bg-center d-flex align-items-center"
                style={{ background: `url(${hero})` }}
              >
                {/* <img src={product}></img> */}
                <div className="container py-5">
                  <div className="row px-4 px-lg-5">
                    <div className="col-lg-6">
                      <p className="text-muted small text-uppercase mb-2">
                        Bienvenidos
                      </p>
                      <h1 className="h2 text-uppercase mb-3">
                        20% en nuestras 200 primeras compras
                      </h1>
                      <a
                        href="*"
                        className="btn btn-dark"
                        onClick={() => navigate("/Shop")}
                      >
                        Vamos!
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <section
                className="hero pb-3 bg-cover bg-center d-flex align-items-center"
                style={{ background: `url(${hero})` }}
              >
                {/* <img src={product}></img> */}
                <div className="container py-5">
                  <div className="row px-4 px-lg-5">
                    <div className="col-lg-6">
                      <p className="text-muted small text-uppercase mb-2">
                        Bienvenidos
                      </p>
                      <h1 className="h2 text-uppercase mb-3">
                        20% en nuestras 200 primeras compras
                      </h1>
                      <a
                        href="*"
                        className="btn btn-dark"
                        onClick={() => navigate("/Shop")}
                      >
                        Vamos!
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <section className="pt-5">
          <header className="text-center">
            <p className="small text-muted small text-uppercase mb-1">
              Busca en nuestras
            </p>
            <h2 className="h5 text-uppercase mb-4">categorias</h2>
          </header>
          <div className="row">
            <div className="col-md-4">
              <a
                href="*"
                className="category-item"
                onClick={() => navigate("/Shop")}
              >
                <img className="img-fluid" src={categoriaBed} alt="" />
                <strong className="category-item-title">Dormitorio</strong>
              </a>
            </div>

            <div className="col-md-4">
              <a
                href="*"
                className="category-item mb-4"
                onClick={() => navigate("/Shop")}
              >
                <img className="img-fluid" src={categorieSala} alt="" />
                <strong className="category-item-title">Sala</strong>
              </a>
              <a
                href="*"
                className="category-item"
                onClick={() => navigate("/Shop")}
              >
                <img className="img-fluid" src={categorieBano} alt="" />
                <strong className="category-item-title">Baño</strong>
              </a>
            </div>

            <div className="col-md-4">
              <a
                href="*"
                className="category-item"
                onClick={() => navigate("/Shop")}
              >
                <img className="img-fluid" src={categorieCocina} alt="" />
                <strong className="category-item-title">Cocina</strong>
              </a>
            </div>
          </div>
        </section>

        <section className="py-5">
          <header>
            <p className="text-center small text-muted small text-uppercase mb-1">
              Nosotros hacemos realidad tus sueños
            </p>
            <h2 className="text-center h5 text-uppercase mb-4">
              Muebles populares
            </h2>
            <QuickArticules />
          </header>
        </section>
      </div>
    </div>
  );
}

export default Home;
