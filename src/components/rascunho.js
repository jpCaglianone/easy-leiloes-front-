//no App.js

import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// ... importe outros componentes de página conforme necessário

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* ... outras rotas */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//..........


//No header.js
import React from 'react';
import { Link } from 'react-router-dom';
// ... outros imports

const Header = () => {
  // ... código do header
  return (
    // ... estrutura do header
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        {/* ... outros links do menu */}
      </ul>
    </nav>
    // ... restante do código do header
  );
};

export default Header;

