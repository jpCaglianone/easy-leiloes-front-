import ProductsRegister from "./productsRegister";
import ProductsList from "./productsList";
import MainProducts from "./mainProducts";
import React from "react";
import { useState, useEffect } from "react";
import "../../css/styles.css";
import Top from "../header/top";
import Footer from "../footer";
import BackUserPanel from "./backUserPanel";
const ProductsPanel = () => {



    const [typeAction, setTypeAction] = useState("")

    function activeCard(type) {
        setTypeAction(() => {
            return type
        })
    }

    useEffect(() => { }, [typeAction]);

    return (
        <>
        <Top />
            <div className="container user-panel">
                <div className="row justify-content-center" id="user-panel">

                    <div className="col-2">
                        <BackUserPanel/>
                    </div>

                    <div className="col-2">
                        <ProductsRegister onClick={() => activeCard("Register")} />
                    </div>

                    <div className="col-2">
                        <ProductsList onClick={() => activeCard("List")} />
                    </div>

                    
                </div>
            </div>

            <MainProducts type={typeAction} ></MainProducts>

        <Footer/>
        </>
    )
}

export default ProductsPanel;