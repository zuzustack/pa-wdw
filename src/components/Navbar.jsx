import { useEffect, useState } from "react";

function Navbar({ isLoginUser }) {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container">
        <a class="navbar-brand text-white" href="#">
          WanTech Shop
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav me-auto">
            <a class="nav-link active text-white" aria-current="page" href="#">
              🏠 Home
            </a>
            {
                isLoginUser ? <a
                class="nav-link text-white"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                🛒 Carts
              </a> : ""
            }
          </div>
          {isLoginUser ? (
            <div className="d-flex text-white align-items-center">
              <div className="img-photo me-1 d-flex justify-content-center align-items-center">
                👤
              </div>
              <p className="mb-0">Rdwn</p>
            </div>
          ) : (
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalLogin"
            >
              Log-in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
