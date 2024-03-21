import React, { useState } from "react";
import axios from "axios";

const FormLogin = () => {

  let url = "http://localhost:8087"

  const [buttonActive, setButtonActive] = useState (false)

  const [formData, setFormData] = useState({
    email : "",
    password : ""
  });

  const sendData = (event) => {
    let data = event.target.value
    let id = event.target.id

    setFormData((prevValue) => {
  
      console.log(prevValue)
      let newValue = { ...prevValue, [id]: data };
      return newValue;
    })
  }
  
  async function sendFormLogin(event) {
    event.preventDefault()
    setButtonActive (()=> {return true}); // desabilita o botao ate recer a promise
   
    if (sendRequest()) {
      const interval = setInterval(()=>{setButtonActive (()=> {
        clearInterval(interval)
        return false
      });},1500)
      
    }

  }

  const sendRequest = async () => {
    const username = `${formData.email}`;
    const password = `${formData.password}`;
    const base64 = btoa(`${username}:${password}`);
    const instance = axios.create({
      baseURL: `${url}`,
      headers: { 'Authorization': `Basic ${base64}` }
    });
    instance.get('/easyAuth/auth/login')
    .then(response => console.log(response.data))
    .catch(error => console.error('Erro na requisição:', error));
  };


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
            onChange={sendData} 
            data-testid="email"/>
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            data-testid="password"
            onChange={sendData} 
            />
        </div>
        <div className="form-group">
          <a href='/rememberPassword'>Esqueci minha senha</a>
          <button
            id="btn-SendForm" 
            type="submit"
            className="btn btn-primary"
            onClick={sendFormLogin}
            disabled = {buttonActive}>
            Entrar
          </button>
        </div>

      </form>
    </div>
  )
}
export default FormLogin;