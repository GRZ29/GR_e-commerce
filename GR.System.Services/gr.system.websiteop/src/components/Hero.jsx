import React from "react";

function Hero() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="h2 text-uppercase mb-0">NOMBRE DINAMICO</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                <li className="breadcrumb-item">
                  <span className="text-dark">Home</span>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  NOMBRE DINAMICO
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
