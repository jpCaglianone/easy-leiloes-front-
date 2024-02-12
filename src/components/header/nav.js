import React from 'react';
import '../../css/styles.css';


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
                <a className="nav-link" aria-current="page" href="/teste">
                  Principal
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/teste">
                  Sobre nós
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/teste">
                  Nossos serviços
                </a>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="/teste"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu ">
                  <li >
                    <a className="dropdown-item" href="/teste">
                      Action
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="/teste">
                      Another action
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="/teste">
                      Something else here
                    </a>
                  </li>
                  <li className='bg-white'>
                    <nav className="navbar bg-body-tertiary">
                      <div className="container-fluid">
                        <form className="d-flex" role="search">
                          <input
                            className="form-control me-2 bg-white"
                            type="search"
                            placeholder="Search"
                            aria-label="Search" />
                          <button className="btn btn-outline-success" type="submit">
                            Search
                          </button>
                        </form>
                      </div>
                    </nav>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
