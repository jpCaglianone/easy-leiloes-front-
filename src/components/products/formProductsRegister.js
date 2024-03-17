import "../../css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState } from 'react';

const FormProductRegister = () => {
    const [inputDatas, setInputDatas] = useState({
        name: "",
        description: "",
        model: "",
        specifications: ""
    });

    function sendRegister(e) {
        e.preventDefault();
        for (let i in inputDatas) {
            if (inputDatas[i] === "") {
                alert("Todos os campos do formulário são obrigatórios!")
                return false;
            }
        }
    }

    function clearInputs() {
        setInputDatas({
            name: "",
            description: "",
            model: "",
            specifications: ""
        });
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
                                <input type="text" className="form-control" id="name" placeholder="Digite o nome" name="name" value={inputDatas.name} onChange={handleChange} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Descrição:</label>
                                <textarea className="form-control" id="description" placeholder="Digite a descrição" name="description" value={inputDatas.description} onChange={handleChange} required></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="model">Modelo:</label>
                                <input type="text" className="form-control" id="model" placeholder="Digite o modelo" name="model" value={inputDatas.model} onChange={handleChange} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="specifications">Especificações:</label>
                                <input type="text" className="form-control" id="specifications" placeholder="Digite as especificações" name="specifications" value={inputDatas.specifications} onChange={handleChange} required />
                            </div>

                            <div className="button">
                                <button type="submit" className="btn btn-success" onClick={sendRegister}>Enviar</button>
                                <button type="button" className="btn btn-danger" onClick={clearInputs}>Limpar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormProductRegister;
