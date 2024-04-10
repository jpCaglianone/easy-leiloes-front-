import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../css/table.css";
import "../../css/styles.css";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from 'react-router-dom';
import CountdownTimer from './countdownTimer';
import Top from '../header/top';
import Footer from '../footer';

const AllAuctions = () => {
    const { __secTK } = useContext(UserContext);
    const [cardAuctions, setCardAuctions] = useState([]);
    const [auctionsWithZeroTime, setAuctionsWithZeroTime] = useState([]);
    const token = __secTK.trim();
    const navigate = useNavigate();

    const config = {
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        }
    };

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/auction-api/auction', config);
                const auxAuctions = response.data.data.Auctions;

                const responseProducts = await axios.get('http://localhost:8080/auction-api/product', config);
                const auxProducts = responseProducts.data.data.Products;

                const allInforms = auxAuctions.map(auction => {
                    const product = auxProducts.find(prod => prod.id === auction.productId);
                    return { ...auction, ...product };
                });

                setCardAuctions(allInforms);
            } catch (error) {
                console.error(`Erro na requisição: ${error}`);
            }
        };

        fetchAuctions();
    }, []);

    useEffect(() => {
        const auctionsWithZeroTime = cardAuctions.filter(auction => new Date(auction.auctionEndDate) <= new Date());
        setAuctionsWithZeroTime(auctionsWithZeroTime);
    }, [cardAuctions]);

    const makeBid = async (auctionId) => {
        try {
            const response = await axios.post(`http://localhost:8080/bid`, dataBid, config);
            console.log(response.data);
        } catch (error) {
            console.error(`Erro ao fazer o lance: ${error}`);
        }
    };

    return (
        <>
        <Top />
            <div className='container'>
                <div className='d-flex justify-content-center flex-wrap'>
                    <div className="row">
                        {cardAuctions.map((auction, index) => (
                            <div key={index} className='col-12 col-lg-4 d-flex justify-content-center flex-wrap'>
                                <div className="card shadow bg-light">
                                    <img src={auction.imageUrl} className="card-img-top" alt={auction.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{auction.name}</h5>
                                        <p className="card-text">{auction.description}</p>
                                        <p className="card-text">Modelo: {auction.model}</p>
                                        <p className="card-text">Especificações: {auction.specifications}</p>
                                        <p className="card-text">Preço inicial: {auction.initialPrice + "00"}</p>
                                        <p>Tempo Restante: <CountdownTimer endDate={auction.auctionEndDate} /></p>
                                        <div className="text-center">
                                           </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AllAuctions;
