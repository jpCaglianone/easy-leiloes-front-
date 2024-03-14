import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NewAuction = () => {
    const product = JSON.parse(sessionStorage.getItem('product'));
    // TODO: sessionStorage.clear()
    return (
        // <div>
        //     <h2>Novo Leilão</h2>
        //     <p>Nome do Produto: {product?.name}</p>
        //     <p>Especificações do Produto: {product?.specifications}</p>
        //     {/* Renderize os detalhes do produto ou faça o que for necessário com o produto */}
        // </div>

        <div className="row">
            <div className='col-3'>
                <div className="card shadow bg-light">
                    {/* Aqui você pode adicionar a imagem ilustrativa */}
                    <img src={product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Modelo: {product.model}</p>
                        <p className="card-text">Especificações: {product.specifications}</p>
                        <p className="card-text">Valor Inicial:
                            <input type='text' />
                        </p>
                        <div className="text-center">
                            <button className='btn btn-success'>Criar</button>
                            <button className='btn btn-danger'>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default NewAuction;
