import React, {useState } from 'react';

const FormRegister = () => {


    let url = "https://a5436e77-1d77-4583-8d79-1a0ec14f8b4a-00-13osuyguj3pdp.janeway.replit.dev/";

   

    const [formData, setFormData] = useState({
        name: "",
        birthday: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: ""
    });


    const sendRequest = async () => {
        try {
            const response = await fetch(`${url}register`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    const sendData = (event) => {
        let value = event.target.value
        let id = event.target.id

        setFormData(previousState => {
           const newState = {...previousState, [id]:value}
           return newState
        });
    }

    const submitFormButton = (event) => {
        event.preventDefault();
        let btnRegister = document.getElementById("btn-register")
        btnRegister.addEventListener('click', sendRequest)
        return () => {
            btnRegister.removeEventListener('click', sendRequest);
          };
    }

  

    return (


        <div className="container" id='custom-register'>
            <br></br>
            <h2>Registrar-se</h2>
            <div className='col-6 mx-auto'>
                <form>

                    <div className="form-group">
                        <label>Nome completo:</label>
                        <input
                            type="text"
                            className="form-control"
                            id='name'
                            onChange={sendData}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Data Nascimento:</label>
                        <input
                            type="date"
                            className="form-control"
                            id='birthday'
                            onChange={sendData}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id='email'
                            onChange={sendData}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Confirme o email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id='confirmEmail'
                            onChange={sendData}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Senha:</label>
                        <input
                            type="password"
                            className="form-control"
                            id='password'
                            onChange={sendData}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Confirme a senha:</label>
                        <input
                            type="password"
                            className="form-control"
                            id='confirmPassword'
                            onChange={sendData}
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary" id="btn-register" onClick={submitFormButton}>Registrar</button>

                </form>
                <br></br>
            </div>
        </div>
    )

}

export default FormRegister;