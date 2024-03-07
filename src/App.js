import React from 'react';
import './App.css';
import Main from './components/home/main';
import Register from './components/auth/register'; 
import Login from './components/auth/login'; 

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
        </Routes>
    </Router>
  );
}

export default App;


