import React, { useState } from "react";

const FormLogin = () => {

  let url = "https://a5436e77-1d77-4583-8d79-1a0ec14f8b4a-00-13osuyguj3pdp.janeway.replit.dev/";

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
    try {
        const response = await fetch(`${url}register`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data.status);
        return true;
    } catch (error) {
        console.error('Erro:', error);
    }
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