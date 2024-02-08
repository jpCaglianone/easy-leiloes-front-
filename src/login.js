import React from 'react';

const Login = () => {
  return (
    <div className="container mt-5">
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
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
