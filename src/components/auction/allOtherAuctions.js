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
import { motion } from 'framer-motion';

const AllAuctions = () => {
    const { __secTK } = useContext(UserContext);
    const { userUuid } = useContext(UserContext);
    const { userId } = useContext(UserContext);
    const [cardAuctions, setCardAuctions] = useState([]);
    const [auctionsWithZeroTime, setAuctionsWithZeroTime] = useState([]);
    const token = __secTK.trim();
    const navigate = useNavigate();
    const [currentBid, setCurrentBid] = useState({});
    const [ws, setWs] = useState(null);
    
    const config = {
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        }
    };

    const getWebSocketConfig = () => {
        const token = __secTK.trim();
        return {
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json'
            }
        };
    };

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/auction-api/auction/other/${userUuid}`, config);
                const auxAuctions = response.data.data.Auctions;

                const responseProducts = await axios.get(`http://localhost:8080/auction-api/product/other/${userId}`, config);
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

        const webSocket = new WebSocket('ws://localhost:8080/auction-api/ws/bids');
        webSocket.onopen = () => console.log('WebSocket Connected');
        webSocket.onerror = (error) => console.error('WebSocket Error:', error);
        webSocket.onmessage = (event) => {
            console.log(`CAGLIANONE ZIKADO data: ${event.data} event: ${event}. StringFy: ${JSON.stringify(event)}`)
          const data = JSON.parse(event.data);
            setCardAuctions((currentAuctions) => currentAuctions.map((auction) => {
                // if (auction.id === data.auctionId) {
                //     return { ...auction, currentBid: data.amount };
                // }
                return auction;
            }));
        };
        setWs(webSocket);
    
        // Clean up the WebSocket connection when the component unmounts
        return () => webSocket.close();

    }, []);

    useEffect(() => {
        const auctionsWithZeroTime = cardAuctions.filter(auction => new Date(auction.auctionEndDate) <= new Date());
        setAuctionsWithZeroTime(auctionsWithZeroTime);
    }, [cardAuctions]);

    const makeBid = (increment, auctionId) => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            const bidData = {
                auctionId: auctionId,
                amount: 110,
                bidderUuid: userUuid,
            };
            console.log("json stringfy bid data - " +JSON.stringify(bidData))
            ws.send(JSON.stringify(bidData));
        } else {
            console.error('WebSocket is not connected.');
        }
    };

    const numCardsPerRow = window.innerWidth < 650 ? 1 : 4; 
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
                                        <p>Lance Atual: {currentBid[auction.id]}</p>
                                        <div className="text-center">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => makeBid(10, auction.id)}
                                                disabled={auctionsWithZeroTime.some(a => a.id === auction.id)}
                                            >
                                                Dar Lance
                                            </button>
                                            {auctionsWithZeroTime.some(a => a.id === auction.id) && <p>Expirado</p>}
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
