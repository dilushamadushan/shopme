import React,{createContext, useState} from "react";
import all_product from "../assets/all_product";

export const ProductContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length; index++){
        cart[all_product[index].id] = 0;
    }
    return cart;
}

const ProductProvider = ({ children }) =>{
    const [products, setProducts] = useState(all_product); 
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log("Added to cart:", itemId);
    }
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    return (
        <ProductContext.Provider value={{ products, setProducts, cartItems, addToCart, removeFromCart }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;