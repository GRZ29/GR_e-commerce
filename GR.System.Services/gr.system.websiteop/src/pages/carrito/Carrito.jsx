import React from "react";
import { Link } from "react-router-dom";
import CarritoItems from "../../components/CarritoItems";
import Hero from "../../components/Hero";
import { useCarrito } from "../../hooks/useCarrito";

function Carrito() {
  const { state } = useCarrito();

  return (
    <div className="container">
      <Hero />
      <section className="py-5">
        <h2 className="h5 text-uppercase mb-4">Mi Carrito</h2>
        <div className="row">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="table-responsive mb-4">
              <CarritoItems />
            </div>
            <div className="bg-light px-4 py-3">
              <div className="row align-items-center text-center">
                <div className="col-md-6 mb-3 mb-md-0 text-md-start">
                  <Link
                    to="/tienda"
                    className="btn btn-link p-0 text-dark btn-sm"
                  >
                    <i className="fas fa-long-arrow-alt-left me-2"></i>
                    Continuar comprando
                  </Link>
                </div>
                <div className="col-md-6 text-md-end">
                  <span className="btn btn-outline-dark btn-sm">
                    Realizar Pago
                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 rounded-0 p-lg-4 bg-light">
              <div className="card-body">
                <h5 className="text-uppercase mb-4">Carrito total</h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center justify-content-between">
                    <strong className="text-uppercase small font-weight-bold">
                      Subtotal
                    </strong>
                    <span className="text-muted small">₡250</span>
                  </li>
                  <li className="border-bottom my-2"></li>
                  <li className="d-flex align-items-center justify-content-between mb-4">
                    <strong className="text-uppercase small font-weight-bold">
                      Total
                    </strong>
                    <span>
                      ₡
                      {state.carrito.reduce((total, item) => {
                        return (total +=
                          (item.precioColor + item.costo) * item.cantidad);
                      }, 0)}
                    </span>
                  </li>
                  <li>
                    {/* <form>
                      <div className="input-group mb-0">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your coupon"
                        />
                        <button
                          className="btn btn-dark btn-sm w-100"
                          type="submit"
                        >
                          {" "}
                          <i className="fas fa-gift me-2"></i>Apply coupon
                        </button>
                      </div>
                    </form> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carrito;
