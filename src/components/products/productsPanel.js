import ProductsRegister from "./productsRegister";
import ProductsList from "./productsList";
import React from "react";
import { useState } from "react";
import "../../css/styles.css";

const ProductsPanel = () => {

    const [typeAction, setTypeAction] = useState ("")

    function activeCard(event) {
       console.log(event.target)
    }

    return (
        <>
            <div className="container user-panel">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <ProductsRegister  onClick={activeCard}/>
                    </div>
                    
                    <div className="col-2">
                        <ProductsList id="productsList" onClick={activeCard}/>
                    </div>
                </div>                
            </div>
            <main>
                {/* <MainProducts type={typeAction} ></MainProducts> */}
            </main>
        </>
    )
}

export default ProductsPanel;