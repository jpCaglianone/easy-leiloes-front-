import React from 'react';
import { useState } from 'react';
import "../../css/styles.css";
import axios from 'axios';

const NewAuction = () => {

    const [maskVal, setMaskVal] = useState();
    const [timeAuction, setTimeAuction] = useState();
    const [auctionCreated, setAuctionCreated] = useState(false)
    const [isDisabled, setIsDisabed] = useState(false)

    
    let actualDate = new Date();

    const product = JSON.parse(sessionStorage.getItem('product'));

    function sendRequest() {

        let inputDatas = ({
            "productId": product.id,
            "auctionOwnerUuid": "1", //TODO: PARA TESTES, RETIRAR
            "initialPrice": maskVal,
            "auctionStartDate": actualDate,
            "auctionEndDate": new Date(actualDate.setMinutes(actualDate.getMinutes() + Number(timeAuction))).toISOString(),
            "auctionStatus": "ACTIVE"

        })
        console.log(inputDatas)

        axios.post('http://localhost:8080/auction-api/auction', inputDatas)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.error(`Erro na requisição: ${error}`);
            });


        setIsDisabed(true)
        setAuctionCreated(true)

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
                                disabled={isDisabled} />
                        </p>

                        <p className="card-text">Valor Inicial: R$
                            <input type='number'
                                className='input'
                                value={maskVal}
                                onChange={(event) => maskValue(event)}
                                disabled={isDisabled}
                                id="value" /> ,00
                        </p>
                        {auctionCreated === false ?
                            <>
                                <div className="text-center">
                                    <button className='btn btn-success' onClick={sendRequest}>Criar</button>
                                    <button className='btn btn-danger'>Cancelar</button>
                                </div>
                            </>
                            : //senão
                            <>
                                <div className="text-center">
                                    <p className='bg-success h3'> Leilão criado! </p>

                                    <button className='btn btn-warning'>Meus leilões</button>
                                    <button className='btn btn-warning'>Pagina inicial</button>
                                </div>


                            </>
                        }
                    </div>
                </div>
            </div>
        </div>



    );
};

export default NewAuction;
