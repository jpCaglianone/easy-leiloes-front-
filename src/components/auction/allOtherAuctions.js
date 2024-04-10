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

const AllOtherAuctions = () => {
    const { __secTK } = useContext(UserContext);
    const { userUuid } = useContext(UserContext);
    const { userId } = useContext(UserContext);
    const [cardAuctions, setCardAuctions] = useState([]);
    const [auctionsWithZeroTime, setAuctionsWithZeroTime] = useState([]);
    const token = __secTK.trim();
    const navigate = useNavigate();
    const [currentBid, setCurrentBid] = useState(0);
    const [ws, setWs] = useState(null);
    const [highestBid, setHighestBid] = useState("Sem lances no momento!"); // Adicionando o estado para highestBid
    const [first, setFirst] = useState(false);

    const config = {
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        }
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
                    if (!first) {
                        return { ...auction, ...product, actualValue: auction.initialPrice, highestBid: highestBid };
                    }
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
            console.log(`Recebendo lance via websocket - ${event.data} event: ${event}. StringFy: ${JSON.stringify(event)}`)
            const data = JSON.parse(event.data);

            setCardAuctions((prevAuctions) => {
                return prevAuctions.map(auction => {
                    if (auction.id === data.auctionId) {
                        setCurrentBid(data.amount)
                        setHighestBid(data.bidderUuid); // Definindo o estado de highestBid
                        return { ...auction, actualValue: data.amount };
                    }
                    else {
                        return auction
                    }
                });
            });
        };
        setWs(webSocket);
        return () => webSocket.close();

    }, []);

    useEffect(() => {
        const auctionsWithZeroTime = cardAuctions.filter(auction => new Date(auction.auctionEndDate) <= new Date());
        setAuctionsWithZeroTime(auctionsWithZeroTime);
    }, [cardAuctions]);

    const makeBid = (auctionId, actualValue) => {
        let inputBid = {
            "auctionId": auctionId,
            "bidderUuid": userUuid,
            "amount": actualValue + 10
        };


        setFirst(true)

        axios.post('http://localhost:8080/auction-api/bid', inputBid, config)
            .then((response) => {
                console.log(`Lance efetuado com sucesso: ${JSON.stringify(response)}`);
            })
            .catch((error) => {
                console.error(`Erro na requisição: ${error}`);
            });
    };

    const numCardsPerRow = window.innerWidth < 650 ? 1 : 4;
    const cardWidth = `col-lg-${Math.floor(12 / numCardsPerRow)}`;

    if (cardAuctions.length > 0) {
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
                                            <p className="card-text">Preço inicial: {"R$" + auction.initialPrice + ",00"}</p>
                                            <p>Tempo Restante: <CountdownTimer endDate={auction.auctionEndDate} /></p>
                                            <p>Preço atual : {auction.actualValue}</p>
                                            <p>Maior lance : Usuario de registro {highestBid.substring(0, 13)}</p>
                                            <div className="text-center">
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => makeBid(auction.id, auction.actualValue)}
                                                    disabled={auctionsWithZeroTime.some(a => a.id === auction.id)}
                                                >
                                                    Dar Lance
                                                </button>
                                                {auctionsWithZeroTime.some(a => a.id === auction.id) && <p>Encerrado</p>}
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
    }
    else {
        return (
            <>
                <h1 className='text-danger'>Não há leilões para participar no momento !</h1>
            </>
        )
    }
};

export default AllOtherAuctions;
