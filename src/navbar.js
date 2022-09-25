import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <span style={{ color: "green" }}>demo</span>
                <span style={{ color: "red" }}>CART</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sort by
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/#">
                          Price low to high
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/#">
                          Price high to low
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => {}}
                  />
                  <button
                    className="btn btn-outline-success me-2"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
                <div className="cart-div">
                  <Link
                    to="/Cartpage"
                    style={{ color: "white", fontSize: "24px" }}
                  >
                    <BsFillCartFill />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
