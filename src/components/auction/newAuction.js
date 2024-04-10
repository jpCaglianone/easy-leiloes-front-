import React from 'react';
import { useState } from 'react';
import "../../css/styles.css";
import axios from 'axios';
import { useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from 'react-router-dom';

const NewAuction = () => {

    const [maskVal, setMaskVal] = useState();
    const [timeAuction, setTimeAuction] = useState();
    const [auctionCreated, setAuctionCreated] = useState(false)
    const [isDisabled, setIsDisabed] = useState(false)
    const { userId, setUserId } = useContext(UserContext);
    const { __secTK } = useContext(UserContext)
    const token = __secTK.trim();
    const navigate = useNavigate();

    const config = {
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        }
    };

    let actualDate = new Date();

    const product = JSON.parse(sessionStorage.getItem('product'));

    function sendRequest() {
        const startDate = new Date(); 
        const endDate = new Date(startDate.getTime() + (Number(timeAuction) * 60000)); 
    
        let inputDatas = {
            "productId": product.id,
            "auctionOwnerUuid": userId,
            "auctionStartDate": startDate.toISOString(), 
            "auctionEndDate": endDate.toISOString(), 
            "initialPrice" : maskVal,
            "auctionStatus": "ACTIVE"
        };
    
        axios.post('http://localhost:8080/auction-api/auction', inputDatas, config)
            .then((response) => {
                console.log(response);
                setIsDisabed(true);
                setAuctionCreated(true);
            })
            .catch((error) => {
                console.error(`Erro na requisição: ${error}`);
            });
    }

    function maskValue(event) {
        let value = event.target.value;
        let currentValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        if (value === "") {
            setMaskVal(0)
        }
        else {
            document.getElementById("value").value = ""
            setMaskVal(parseFloat(currentValue))
        }
    }

    function userPanelRedirect () {
        navigate("/userPanel")
    }

    return (
        <div className="row">
            <div className='col-3'>
                <div className="card shadow bg-light">
                    <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Modelo: {product.model}</p>
                        <p className="card-text">Especificações: {product.specifications}</p>
                        <p className="card-text">Tempo total (em minutos):
                            <input
                                type='number'
                                className='input'
                                onChange={(event) => setTimeAuction(event.target.value)}
                                disabled={isDisabled}
                                data-testid="timeAuction" />
                        </p>

                        <p className="card-text">Valor Inicial: R$
                            <input type='number'
                                className='input'
                                value={maskVal}
                                onChange={(event) => maskValue(event)}
                                disabled={isDisabled}
                                id="value"
                                data-testid="value" /> ,00
                        </p>
                        {auctionCreated === false ?
                            <>
                                <div className="text-center">
                                    <button className='btn btn-success' onClick={sendRequest}>Criar</button>
                                    <button className='btn btn-danger'>Cancelar</button>
                                </div>
                            </>
                            : 
                            <>
                                <div className="text-center">
                                    <p className='bg-success h3'> Leilão criado! </p>

                                    <button className='btn btn-warning'>Meus leilões</button>
                                
                                    <button className='btn btn-warning' onClick={userPanelRedirect}>Meu painel</button>
                                
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewAuction;
