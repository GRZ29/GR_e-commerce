import React from "react";

export default function Categorias() {
  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <h5 className="text-uppercase mb-4">Categories</h5>
      <div className="py-2 px-4 bg-dark text-white mb-3">
        <strong className="small text-uppercase fw-bold">
          Fashion &amp; Acc
        </strong>
      </div>
      <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
        <li className="mb-2">
          <span className="reset-anchor">Women's T-Shirts</span>
        </li>
        <li className="mb-2">
          <span className="reset-anchor">Men's T-Shirts</span>
        </li>
      </ul>
    </div>
  );
}
