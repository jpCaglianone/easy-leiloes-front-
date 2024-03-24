import "../../css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from "react";
import { UserContext } from "../../App";

const FormProductRegister = () => {

    const {__secTK} = useContext(UserContext)
    
    const [inputDatas, setInputDatas] = useState({
        name: "",
        description: "",
        model: "",
        specifications: "",
        imageUrl: "https://i.imgur.com/Cd03Oqm.jpg"
    });

    // function sendRegister(e) {
    //     e.preventDefault();
    //     for (let i in inputDatas) {
    //         if (inputDatas[i] === "") {
    //             alert("Todos os campos do formulário são obrigatórios!")
    //             return false;
    //         }
    //     }
    //     sendRequest();
    //     clearInputs();
    // }

    // function sendRequest() {
    //     axios.post('http://localhost:8080/auction-api/product', inputDatas)
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch((error) => {
    //         console.error(`Erro na requisição: ${error}`);
    //     });
    // }

    // function clearInputs() {
    //     setInputDatas({
    //         name: "",
    //         description: "",
    //         model: "",
    //         specifications: ""
    //     });
    // }

    const sendData = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:8080/auction-api/product'; 
        const data = inputDatas;
        const token = __secTK; 
        
        const config = {
            headers: { 'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' }
        };

        try {
            await axios.post(url, data, config)
            .then(response => console.log(response.data));
        } catch (error) {
            console.error(error);
        }
    }

    function handleChange(e) {
        setInputDatas({ ...inputDatas, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container main-form-products">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2>Formulário de Cadastro de produto</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Nome:</label>
                                <input type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Digite o nome"
                                    name="name"
                                    value={inputDatas.name}
                                    onChange={handleChange}
                                    data-testid="name"
                                    required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Descrição:</label>
                                <textarea className="form-control"
                                    id="description"
                                    placeholder="Digite a descrição"
                                    name="description"
                                    value={inputDatas.description}
                                    onChange={handleChange}
                                    data-testid="description"
                                    required></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="model">Modelo:</label>
                                <input type="text"
                                    className="form-control"
                                    id="model"
                                    placeholder="Digite o modelo"
                                    name="model"
                                    value={inputDatas.model}
                                    onChange={handleChange}
                                    data-testid="model"
                                    required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="specifications">Especificações:</label>
                                <input type="text"
                                    className="form-control"
                                    id="specifications"
                                    placeholder="Digite as especificações"
                                    name="specifications"
                                    value={inputDatas.specifications}
                                    onChange={handleChange}
                                    data-testid="specifications"
                                    required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="imageUrl">URl da Imagem:</label>
                                <input type="text"
                                    className="form-control"
                                    id="imageUrl"
                                    placeholder="Digite as especificações"
                                    name="imageUrl"
                                    value={inputDatas.imageUrl}
                                    onChange={handleChange}
                                    data-testid="imageUrl"
                                    required disabled />
                            </div>

                            <button
                                id="btn-SendForm"
                                type="submit"
                                className="btn btn-success"
                                onClick={(event) => sendData(event)}>
                                Cadastrar
                            </button>

                            <button
                                id="btn-SendForm"
                                type="submit"
                                className="btn btn-danger">
                                Limpar
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </>
    );
}

export default FormProductRegister;
