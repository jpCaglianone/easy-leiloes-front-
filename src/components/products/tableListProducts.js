import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../css/table.css";
import "../../css/styles.css";
import axios from 'axios';


const TableListProducts = () => {
    const [products, setProducts] = useState([]);

    const clearSessionStorage = () => {
        sessionStorage.clear();
    }



    useEffect(() => {

     clearSessionStorage()ç


        axios.get('http://localhost:8080/auction-api/product')
            .then((response) => {
                setProducts(response.data.data.Products)
            })
            .catch((error) => {
                console.error(`Erro na requisição: ${error}`);
            });
    }, [])


    function deleteItem(productName) {
        if (window.confirm("Deseja realmente deletar esse item?")) {
            const updatedProducts = products.filter(item => item.name !== productName);
            setProducts(updatedProducts);
            alert("Produto excluído");
            // TODO: Aqui tem que ser enviada uma requisição
        } else {
            alert("Cancelar");
        }
    }

    function handleClick(product) {
        sessionStorage.setItem('product', JSON.stringify(product));
    }



    return (
        <div className='container'>
            <div className='col-12 d-flex justify-content-center flex-wrap'>
                <div className="row gy-5">
                    {products.map((product, index) => (
                        <div key={index} className="col-3 d-flex justify-content-center flex-wrap">

                            <div className="card shadow bg-light">
                                {/* Aqui você pode adicionar a imagem ilustrativa */}
                                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">Modelo: {product.model}</p>
                                    <p className="card-text">Especificações: {product.specifications}</p>
                                    <p className="card-text">Valor Inicial: {product.initialValue}</p>
                                    <div className="text-center">
                                        <Link
                                            to="/newAuction"
                                            onClick={() => handleClick(product)}
                                            className="btn btn-success mr-2"
                                        >
                                            Criar leilão
                                        </Link>
                                        <button className="btn btn-primary mr-2">Editar</button>
                                        <button className="btn btn-danger">Excluir</button>
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

                export default TableListProducts;
