import React from 'react';
import './App.css';
import Main from './components/home/main';
import Register from './components/auth/register'; 
import Login from './components/auth/login'; 
import ProductsPanel from "./components/products/productsPanel"
import NewAuction from "./components/auction/newAuction"

import UserPanel from './components/user/userPanel';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userPanel" element={<UserPanel />} />
          <Route path="/userPanel/productsPanel" element={<ProductsPanel/>}></Route>
          <Route path="/newAuction" element={<NewAuction/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;


