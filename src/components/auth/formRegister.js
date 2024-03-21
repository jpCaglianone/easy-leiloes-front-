import React, { useState } from 'react';
import axios from 'axios';

const FormRegister = () => {


    const [formData, setFormData] = useState("");
    const [userRegister, setUserRegister] = useState(false)


    const sendRequest = async () => {

        let data = {
            name: formData.name,
            lastname: formData.lastname,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            birthday: formData.birthday,
            fullName: `${formData.name} ${formData.lastname}`,
            phoneNumber: formData.phoneNumber,
            cpf: formData.cpf,
            imgUrl: "https://img.freepik.com/vetores-premium/icone-de-solucoes-de-negocios-criativos-de-negocios-icone-simples-para-dispositivos-moveis-e-web_720607-10085.jpg?size=626&ext=jpg"
        }

        console.log(data)

        axios.post(`http://localhost:8087/easyAuth/auth/register`, data)
            .then((response) => {
                console.log(response)
                cleanForm()
                setUserRegister(true)
            })
            .catch((error) => {
                console.error(`Erro na requisição: ${error}`);
            });
    };

    const sendData = (event) => {
        let value = event.target.value
        let id = event.target.id

        setFormData(previousState => {
            const newState = { ...previousState, [id]: value }
            return newState
        });

    }

    const submitFormButton = (event) => {
        event.preventDefault();
        sendRequest();
    }

    function cleanForm() {
        setFormData({
            name: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            confirmEmail: "",
            birthday: "",
            fullName: "",
            phoneNumber: "",
            cpf: ""
        })
    }


    if (!userRegister) {
        return (

            <div className="container" id='custom-register'>
                <br></br>
                <h2>Registro de usuário</h2>
                <div className='col-6 mx-auto'>
                    <form>
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Nome:</label>
                            <input
                                data-testid="name"
                                type="text"
                                className="form-control"
                                id='name'
                                onChange={sendData}
                                value={formData.name}
                                required />
                        </div>
                        {/* lastname */}
                        <div className="form-group">
                            <label htmlFor="lastname">Sobrenome:</label>
                            <input
                                data-testid="lastname"
                                type="text"
                                className="form-control"
                                id='lastname'
                                onChange={sendData}
                                value={formData.lastname}
                                required />
                        </div>

                        {/* birthday */}
                        <div className="form-group">
                            <label htmlFor="birthday">Data de nascimento:</label>
                            <input
                                data-testid="birthday"
                                type="date"
                                className="form-control"
                                id='birthday'
                                value={formData.birthday}
                                onChange={sendData}
                                required />
                        </div>

                        {/* cpf */}
                        <div className="form-group">
                            <label htmlFor="cpf">CPF:</label>
                            <input
                                data-testid="cpf"
                                type="number"
                                className="form-control"
                                id='cpf'
                                onChange={sendData}
                                maxLength={11}
                                value={formData.cpf}
                                required />
                        </div>

                        {/* username */}
                        <div className="form-group">
                            <label htmlFor="username">Nome de usuário:</label>
                            <input
                                data-testid="username"
                                type="username"
                                className="form-control"
                                id='username'
                                onChange={sendData}
                                value={formData.username}
                                required />
                        </div>

                        {/* phone number */}
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Telefone:</label>
                            <input
                                data-testid="phoneNumber"
                                type="tel"
                                className="form-control"
                                id='phoneNumber'
                                onChange={sendData}
                                value={formData.phoneNumber}
                                required />
                        </div>

                        {/* email */}
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                data-testid="email"
                                type="email"
                                className="form-control"
                                id='email'
                                onChange={sendData}
                                value={formData.email}
                                required />
                        </div>

                        {/* confirmEmail */}
                        <div className="form-group">
                            <label>Confirme o email:</label>
                            <input
                                data-testid="confirmEmail"
                                type="email"
                                className="form-control"
                                id='confirmEmail'
                                onChange={sendData}
                                value={formData.confirmEmail}
                                required />
                        </div>

                        {/* password */}
                        <div className="form-group">
                            <label>Senha:</label>
                            <input
                                data-testid="password"
                                type="password"
                                className="form-control"
                                id='password'
                                onChange={sendData}
                                value={formData.password}
                                required />
                        </div>

                        {/* confirmPassword */}
                        <div className="form-group">
                            <label>Confirme a senha:</label>
                            <input
                                data-testid="confirmPassword"
                                type="password"
                                className="form-control"
                                id='confirmPassword'
                                onChange={sendData}
                                value={formData.confirmPassword}
                                required />
                        </div>

                        <button type="submit" className="btn btn-primary" id="btn-register" onClick={submitFormButton}>Registrar</button>

                    </form>
                    <br></br>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='d-flex justify-content-center align-items-center alert-user-register'>
                
                    <h1 className='bg-success text-white'> Usuário registrado !</h1>
                
                
            </div>
        )
    }
}

export default FormRegister;