import React from 'react';
import logo from '../src/assets/logo.png';
import './css/styles.css'

const Header = () => {
  return (
    <div className="container-fluid bg-white">

      <div className="row bg-white text-white">
        <div className="col-md-2 d-flex align-items-center justify-content-between">
          <i className="fas fa-user-circle"></i>
          <i className="fas fa-user-circle"></i>
        </div>

        <div className="col-md-8 text-center" id="logo-container">
          <img src={logo} alt="Logo" className="img-fluid" id="logo-img"/>
        </div>

        <div className="col-md-2 d-flex align-items-center justify-content-end">
          <a href="#" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
