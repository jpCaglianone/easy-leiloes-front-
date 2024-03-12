import React, { useState, useEffect } from 'react';
import listCharge from "../../js/listCharge"

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
            } catch (error) {
                console.error('Erro ao buscar os produtos:', error);
            }
        };

        fetchData();
    }, []);

    
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Modelo</th>
                    <th>Especificações</th>
                    <th>Valor Inicial</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {products.map((products, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{products.name}</td>
                        <td>{products.description}</td>
                        <td>{products.model}</td>
                        <td>{products.specifications}</td>
                        <td>{0}</td>
                        <td>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableListProducts;
