import React from 'react';
import './App.css';
import Main from './components/home/main';
import Register from './components/auth/register'; 
import Login from './components/auth/login'; 
import ProductsPanel from "./components/products/productsPanel"
import NewAuction from "./components/auction/newAuction"
import AllAuctions from './components/auction/allAuctions';
import { useContext, useState } from 'react';
import UserPanel from './components/user/userPanel';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const UserContext = React.createContext();

function App() {
  const [userLogged, setUserLogged] = useState(null);
  const [__secTK, set__secTK] = useState(null)

  return (
    <UserContext.Provider value={{ userLogged, setUserLogged,__secTK, set__secTK }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userPanel" element={<UserPanel />} />
          <Route path="/userPanel/productsPanel" element={<ProductsPanel/>}></Route>
          <Route path="/newAuction" element={<NewAuction/>}></Route>
          <Route path="/userPanel/allAuctionsPanel" element={<AllAuctions/>}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
