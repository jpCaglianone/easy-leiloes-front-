import React, { useState, useEffect } from 'react';
import "../../css/table.css";
import "../../css/styles.css";
import axios from 'axios';


const allAuctions = () => {
    const [auctions, setAuctions] = useState([]);

    const clearSessionStorage = () => {
        sessionStorage.clear();
    }

    useEffect(() => {

        clearSessionStorage();


        axios.get('http://localhost:8080/auction-api/auction')
            .then((response) => {
                setAuctions(response.data.data.Auctions)
            })
            .catch((error) => {
                console.error(`Erro na requisição: ${error}`);
            });
    }, [])



    return (
        <>
           
            <div className='container'>
                <div className='col-12 d-flex justify-content-center flex-wrap'>
                    <div className="row gy-5">
                        {auctions.map((auction, index) => (
                            <div key={index} className="col-3 d-flex justify-content-center flex-wrap">

                                <div className="card shadow bg-light">
                                    <img src={auction.imageUrl} className="card-img-top" alt={auction.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{auction.name}</h5>
                                        <p className="card-text">{auction.description}</p>
                                        <p className="card-text">Modelo: {auction.model}</p>
                                        <p className="card-text">Especificações: {auction.specifications}</p>
                                        <p className="card-text">Valor Inicial: {auction.initialValue}</p>
                                        <div className="text-center">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      
    </>
    );
};

export default allAuctions;
