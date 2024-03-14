import React, { useState, useEffect } from 'react';
import listCharge from "../../js/listCharge";
import { Link } from 'react-router-dom';
import "../../css/table.css";

const TableListProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await listCharge();
                if (data && data.data && data.data.products) {
                    setProducts(data.data.products);
                } else {
                    console.error('Os dados retornados não contêm a lista de produtos.');
                }

                // 

            } catch (error) {
                console.error('Erro ao buscar os produtos:', error);
            }
        };

        fetchData();
    }, []);

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

    function clearSessionStorage() {
        sessionStorage.clear();
    }

    return (
        <div className="row">
            {products.map((product, index) => (
                <div key={index} className="col-md-4 mb-4">
                    <div className="card shadow bg-light">
                        {/* Aqui você pode adicionar a imagem ilustrativa */}
                        <img src={product.image} className="card-img-top" alt={product.name} />
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
    );
};

export default TableListProducts;
