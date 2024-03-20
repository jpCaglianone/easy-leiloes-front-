import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../css/table.css";
import "../../css/styles.css";
import axios from 'axios';


const TableListAuctions = () => {
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
        <div className='container'>
            <div className='col-12 d-flex justify-content-center flex-wrap'>
                <div className="row gy-5">
                    {auctions.map((auction, index) => (
                        <div key={index} className="col-3 d-flex justify-content-center flex-wrap">

                            <div className="card shadow bg-light">
                                {/* Aqui você pode adicionar a imagem ilustrativa */}
                                <img src={auction.imageUrl} className="card-img-top" alt={auction.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{auction.name}</h5>
                                    <p className="card-text">{auction.description}</p>
                                    <p className="card-text">Modelo: {auction.model}</p>
                                    <p className="card-text">Especificações: {auction.specifications}</p>
                                    <p className="card-text">Valor Inicial: {auction.initialValue}</p>
                                    <div className="text-center">
                                        <Link
                                            to="/newAuction"
                                            onClick={() => handleClick(auction)}
                                            className="btn btn-success mr-2"
                                        >
                                            Criar leilão
                                        </Link>
                                        <button className="btn btn-primary mr-2">Editar</button>
                                        <button className="btn btn-danger" onClick={deleteItem}>Excluir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                </div>
                );
};

                export default TableListAuctions;
