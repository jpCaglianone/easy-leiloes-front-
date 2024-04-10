

import React, { useState, useEffect } from 'react';
import "../../css/table.css";
import "../../css/styles.css";
import axios from 'axios';
import { useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from 'react-router-dom';

const allOtherAuctions = () => {
    const [auctions, setAuctions] = useState();
    const { userId, setUserId } = useContext(UserContext);
    const { __secTK } = useContext(UserContext)
    const [products, setProducts] = useState([])
    const [currentPrice, setCurrentPrice] = useState(0)
    const [cardAuctions, setCardAuctions] = useState([])
    const token = __secTK.trim();
    const { userUuid } = useContext(UserContext)
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
                const response = await axios.get(`http://localhost:8080/auction-api/auction/other/${userUuid}`, config);
                auxAuctions = response.data.data.Auctions;

            } catch (error) {
                console.error(`Erro na requisição: ${error}`);
            }

            try {
                const response = await axios.get(`http://localhost:8080/auction-api/product/other/${userId}`, config);
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


            setCardAuctions(allInforms)

        };

        fetchAuctions();
    }, []);

    // function makeBid(e) {
    //     // @Id
    //     // private Long id;
    //     // @Builder.Default
    //     // private String uuid = UUID.randomUUID().toString();
    //     // @Version
    //     // private Long version;
    //     // private Long auctionId;
    //     // private String bidderUuid;
    //     // private Double amount;


    //     e.preventDefault()
    //     const url = 'http://localhost:8080/auction-api/product';
    //     const data = inputDatas;
    //     const token = __secTK.trim();

    //     const config = {
    //         headers: {
    //             'Authorization': `${token}`,
    //             'Content-Type': 'application/json'
    //         }
    //     };
    //     try {
    //         axios.post(url, data, config)
    //         window.alert("Produto registrado com sucesso!")
    //         clearInputs()
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    if (cardAuctions.lenght !== 0) {
        return (
            <>
                <div className='container'>
                    <div className='col-12 d-flex justify-content-center flex-wrap'>
                        <div className="row gy-5">

                            {cardAuctions.map((auction, index) => (
                                <div key={index} className="col-6 d-flex justify-content-center flex-wrap">

                                    <div className="card shadow bg-light">
                                        <img src={auction.imageUrl} className="card-img-top" alt={auction.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{auction.name}</h5>
                                            <p className="card-text">{auction.description}</p>
                                            <p className="card-text">Modelo: {auction.model}</p>
                                            <p className="card-text">Especificações: {auction.specifications}</p>
                                            <p className="card-text">Preço inicial: {"R$ " + auction.initialPrice + ",00"}</p>
                                            <p className="card-text">Preço atual:{currentPrice + auction.initialPrice}</p>
                                            <button className='btn btn-success'>
                                                Dar Lance (incremento automatico de 1 real) </button>
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
        return (
            <h1 className='text-danger'>Não há leiloes ativos no momento</h1>)
    }
};

export default allOtherAuctions;
