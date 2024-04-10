import React, { useState, useEffect } from 'react';
import "../../css/table.css";
import "../../css/styles.css";
import axios from 'axios';
import { useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from 'react-router-dom';
import CountdownTimer from './countdownTimer';

const AllAuctions = ({ cardAuctions }) => {
    const [auctions, setAuctions] = useState();
    const { userId, setUserId } = useContext(UserContext);
    const { userUuid } = useContext(UserContext)
    const { __secTK } = useContext(UserContext)
    const [products, setProducts] = useState([])
    const [currentPrice, setCurrentPrice] = useState()
    const token = __secTK.trim();
    const navigate = useNavigate();

    const config = {
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        }
    };

    const clearSessionStorage = () => {
        sessionStorage.clear();
    }

    useEffect(() => {
        const fetchAuctions = async () => {
            let auxAuctions;
            let auxProducts;
            let allInforms = []

            clearSessionStorage();

            try {
                const response = await axios.get(`http://localhost:8080/auction-api/auction/${userUuid}`, config);
                auxAuctions = response.data.data.Auctions;

            } catch (error) {
                console.error(`Erro na requisição: ${error}`);
            }

            try {
                const response = await axios.get(`http://localhost:8080/auction-api/product`, config);
                auxProducts = response.data.data.Products

            } catch (error) {
                console.error(`Erro na requisição: ${error}`);
            }

            for (let i in auxAuctions) {
                for (let j in auxProducts) {
                    if (auxAuctions[i].productId === auxProducts[j].id) {
                        allInforms.push(Object.assign({}, auxAuctions[i], auxProducts[j]));
                    }
                }
            }
            setAuctions(allInforms)
        };

        fetchAuctions();
    }, []);

    if (auctions && auctions.length !== 0) {
        return (
            <>

                <div className='container'>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <div className="row">
                            {auctions.map((auction, index) => (
                                <div key={index} className="col-6 d-flex justify-content-center flex-wrap">

                                    <div className="card shadow bg-light">
                                        <img src={auction.imageUrl} className="card-img-top" alt={auction.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{auction.name}</h5>
                                            <p className="card-text">{auction.description}</p>
                                            <p className="card-text">Modelo: {auction.model}</p>
                                            <p className="card-text">Especificações: {auction.specifications}</p>
                                            <p className="card-text">Preço inicial: {auction.initialPrice + "00"}</p>
                                            <p>Tempo Restante: <CountdownTimer endDate={auction.auctionEndDate} /></p>
                                            <p className="card-text">Preço atual: {currentPrice}</p>
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
    }
    else {
        return (<h1 className='text-danger'>Você ainda nao criou um leilão</h1>)
    }
};

export default AllAuctions;
