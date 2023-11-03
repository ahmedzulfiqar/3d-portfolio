import React from "react";
import logo from "../media/dsd.png";
function Navbar() {
  const list = [
    { name: "Home" },
    { name: "About Me" },
    { name: "Services" },
    { name: "Pricing" },
    { name: "Contact Me" },
  ];
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-primarys my-2 ">
      <div class="container">
        <a class="fs-2 text-main fw-bolder d-block" href="#">
          WEBDEVIFY
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mt-lg-0 mt-3" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            {list.map((i) => {
              return (
                <li class="nav-item fw-lighter fs-5 mx-2">
                  <a
                    class="nav-link active rounded-2"
                    aria-current="page"
                    href="#"
                  >
                    {i.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
