import React, { useContext } from "react";
import { CardContext } from "../hooks/CartContext";
import CartList from "./CartList";

const Car = () => {
  const { cart, increaseCantidad, decreaseCantidad, removeItem, total } =
    useContext(CardContext);

  return (
    <div className="container">
      {/* <!-- HERO SECTION--> */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">Cart</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                  <li className="breadcrumb-item">
                    <span className="text-dark">Home</span>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cart
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
        <div className="row">
          <div className="col-lg-8 mb-4 mb-lg-0">
            {/* <!-- CART TABLE--> */}
            <div className="table-responsive mb-4">
              <CartList
                cart={cart}
                increaseCantidad={increaseCantidad}
                decreaseCantidad={decreaseCantidad}
                removeItem={removeItem}
              />
            </div>
            {/* <!-- CART NAV--> */}
            <div className="bg-light px-4 py-3">
              <div className="row align-items-center text-center">
                <div className="col-md-6 mb-3 mb-md-0 text-md-start">
                  <span className="btn btn-link p-0 text-dark btn-sm">
                    <i className="fas fa-long-arrow-alt-left me-2"> </i>
                    Continue shopping
                  </span>
                </div>
                <div className="col-md-6 text-md-end">
                  <span className="btn btn-outline-dark btn-sm">
                    Procceed to checkout
                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ORDER TOTAL--> */}
          <div className="col-lg-4">
            <div className="card border-0 rounded-0 p-lg-4 bg-light">
              <div className="card-body">
                <h5 className="text-uppercase mb-4">Cart total</h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center justify-content-between">
                    <strong className="text-uppercase small font-weight-bold">
                      Subtotal
                    </strong>
                    <span className="text-muted small">$250</span>
                  </li>
                  <li className="border-bottom my-2"></li>
                  <li className="d-flex align-items-center justify-content-between mb-4">
                    <strong className="text-uppercase small font-weight-bold">
                      Total
                    </strong>
                    <span>${total}</span>
                  </li>
                  <li>
                    <form>
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
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Car;
