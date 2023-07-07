import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar({ count }) {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container" style={{ backgroundColor: "#f8f9fa" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-cart-div"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"  
                >
                  Shop
                </a> 
              </li>
            </ul>
            <div className="cart-div">
              <div className="cart-ele">
                {" "}
                <i className="bi bi-cart3"></i> <ShoppingCartIcon /> CART{" "}
                {count}{" "}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
