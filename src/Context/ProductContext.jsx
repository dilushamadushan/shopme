import React,{createContext} from "react";
import all_product from "../assets/all_product"

export const ProductContext = createContext(null);

const ProductProvider = (props) =>{
    const contextValue = {all_product}
    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;