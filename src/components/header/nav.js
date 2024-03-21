import React from 'react';
import '../../css/styles.css';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/" className="text mx-3 nav-link nav-custom">
                  Principal
                </Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  Sobre nós
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  Nossos serviços
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
