import FormProductRegister from "./formProductsRegister";
import TableListProducts from "./tableListProducts";

const MainProducts = (props) => {

    if (props.type === "Register") {
        return (<FormProductRegister/>)
    }

    else if (props.type === "List") {
        return (<TableListProducts/>)
    }

    else {
        return (
            <h1> MainProducts </h1>
        )
    }
}

export default MainProducts;