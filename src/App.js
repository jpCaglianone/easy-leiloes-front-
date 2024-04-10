import React, { useEffect } from 'react';
import './App.css';
import Main from './components/home/main';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ProductsPanel from "./components/products/productsPanel"
import NewAuction from "./components/auction/newAuction"
import AllAuctions from './components/auction/allAuctions';
import AllOtherAuctions from './components/auction/allOtherAuctions';
import { useContext, useState } from 'react';
import UserPanel from './components/user/userPanel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const UserContext = React.createContext();

function App() {
  const [userLogged, setUserLogged] = useState(null);
  const [__secTK, set__secTK] = useState(localStorage.getItem('token') || null);
  const [userId, setUserId] = useState(null)
  const [urlTK, set__UrlTK] = useState(null)
  const [userUuid, setUserUuid] = useState(null)
  const [decodedToken, setDecodedToken] = useState(null);

  console.log("useruuid " + userUuid)

  useEffect(() => {
    if (__secTK !== null) {
      set__UrlTK(__secTK.slice(10, 20));
      decodeJwt();
    }
  }, [__secTK]);

  const decodeJwt = () => {
    try {
      const token = __secTK.replace('Bearer ', '');
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload));
      setDecodedToken(decoded);
      setUserUuid(decoded.userUuid);
    } catch (error) {
      console.error('Erro ao decodificar o token:', error.message);
    }
  };
  
  return (
    <UserContext.Provider value={{ userLogged, setUserLogged, __secTK, set__secTK, userId, setUserId, userUuid }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path={`/userPanel`} element={<UserPanel />} />
          <Route path="/userPanel/productsPanel" element={<ProductsPanel />}></Route>
          <Route path="/newAuction" element={<NewAuction />}></Route>
          <Route path="/userPanel/allAuctionsPanel" element={<AllAuctions />}></Route>
          <Route path="/userPanel/allOtherAuctions" element={<AllOtherAuctions />}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
