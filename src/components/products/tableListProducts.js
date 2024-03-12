import React, { useState, useEffect } from 'react';

const TableListProducts = () => {
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     axios.get('')
    //         .then(response => {
    //             setItems(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Houve um erro ao buscar os dados!', error);
    //         });
    // }, []);

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
                {/* {items.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.nome}</td>
                        <td>{item.descricao}</td>
                        <td>{item.modelo}</td>
                        <td>{item.especificacoes}</td>
                        <td>{item.valorInicial}</td>
                        <td>
                            <Button variant="outline-primary" size="sm" className="mr-2">
                                <PencilSquare />
                            </Button>
                            <Button variant="outline-danger" size="sm">
                                <XSquare />
                            </Button>
                        </td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    );
};

export default TableListProducts;
