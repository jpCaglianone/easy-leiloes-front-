import React, { useState } from "react";

const [form, setForm] = useState(
  email = "",
  password = ""
)

const sendFormLogin = (event) => {
  let data = event.target.value;
  let id = event.target.id;

  setFormData((prevValue) => {

    console.log(prevValue)
    const newValue = { ...prevValue, [id]: data };
    return newValue;
  })
}

const FormLogin = () => {

  return (
    <div className="container mt-5" id='custom-login'>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            test-id="testEmail"
            onChange={sendData} />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            test-id="testPassword"
            onChange={sendData} />
        </div>
        <div className="form-group">
          <a href='/rememberPassword'>Esqueci minha senha</a>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={sendFormLogin}>
            Entrar
          </button>
        </div>

      </form>
    </div>
  )
}
export default FormLogin;