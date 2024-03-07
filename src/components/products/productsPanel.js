
import UserProducts from "../user/userProducts";
import UserAuctions from "../user/userAuctions";
import UserAccount from "../user/userAccount";
import UserSettings from "../user/userSettings";
import UserAllAuctions from "../user/userAllAuctions"
import UserNotifications from "../user/userNotifications";


import "../../css/styles.css";

const ProductsPanel = () => {
    return (
        <>
        
            <div className="container user-panel">
                <div className="row justify-content-center">
                    <div className="col-3">
                        Cadastrar meu produto
                    </div>
                    <div className="col-3">
                        alterar/excluir meu produto
                    </div>
                    <div className="col-3">
                        listar meus produtos
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default ProductsPanel;