import React from 'react';
import Top from '../header/top';


const Login = () => {
  return (

    <>

    <Top/>

    <div className="container mt-5" id='custom-login'>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
        <a href='/rememberPassword'>Esqueci minha senha</a>
        <button type="submit" className="btn btn-primary">Entrar</button>
        </div>
        
      </form>
    </div>

    </>
  );
};

export default Login;
