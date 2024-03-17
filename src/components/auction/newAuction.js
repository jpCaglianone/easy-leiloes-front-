import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import "../../css/styles.css";



const NewAuction = () => {

    const [maskVal, setMaskVal] = useState ();

    const product = JSON.parse(sessionStorage.getItem('product'));
    // TODO: sessionStorage.clear()


    function maskValue(event) {
        let value = event.target.value;
        let currentValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        if (value === ""){      
            setMaskVal(0)
        }
        else {
            document.getElementById("value").value = "" 
            setMaskVal(parseFloat(currentValue))
        }
        
    }

    return (
       

        <div className="row">
            <div className='col-3'>
                <div className="card shadow bg-light">
                    <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Modelo: {product.model}</p>
                        <p className="card-text">Especificações: {product.specifications}</p>
                        <p className="card-text">Tempo total (em minutos):
                            <input type='number' className='input'/>
                        </p>
                        <p className="card-text">Valor Inicial: R$
                            <input type='number' 
                            className='input' 
                            value={maskVal} 
                            onChange={(event) => maskValue(event)} 
                            id="value" /> ,00
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
