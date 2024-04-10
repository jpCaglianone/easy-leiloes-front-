import React from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import "../../css/table.css";
import "../../css/styles.css";
import { useContext, useEffect, useState } from "react";
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
            const response = await axios.post(`http://localhost:8080/bid`, { auctionId }, config);
            console.log(response.data);
            // Adicione aqui o código para lidar com a resposta do servidor, se necessário
        } catch (error) {
            console.error(`Erro ao fazer o lance: ${error}`);
        }
    };

    const numCardsPerRow = window.innerWidth < 550 ? 1 : 4; 
    const cardWidth = `col-lg-${Math.floor(12 / numCardsPerRow)}`;
    return (
        <>
        <Top />
            <div className='container'>
                <div className='d-flex justify-content-center flex-wrap'>
                    <div className="row">
                        {cardAuctions.map((auction, index) => (
                            <motion.div key={index} className={`d-flex ${cardWidth} justify-content-center flex-wrap card-auction`}
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2.5, delay: index * 0.5 }}
                            >
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllAuctions;
