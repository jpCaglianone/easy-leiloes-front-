import ProductsRegister from "./productsRegister";
import ProductsList from "./productsList";
import MainProducts from "./mainProducts";
import React from "react";
import { useState, useEffect } from "react";
import "../../css/styles.css";

const ProductsPanel = () => {


    const [typeAction, setTypeAction] = useState("")

    function activeCard(type) {
       setTypeAction(()=>{
        return type
       })
    }

    useEffect(() => {}, [typeAction]); 

    return (
        <>
            <div className="container user-panel">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <ProductsRegister  onClick={() => activeCard("Register")}/>
                    </div>
                    
                    <div className="col-2">
                        <ProductsList  onClick={() => activeCard("List")}/>
                    </div>
                </div>                
            </div>
            
                <MainProducts type={typeAction} ></MainProducts>
           
        </>
    )
}

export default ProductsPanel;