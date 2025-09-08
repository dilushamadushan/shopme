import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300; index++) {
      cart[index] = 0;
    }
    return cart;
  };

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:3000/allproduct")
    .then((res) => res.json())
    .then((data) => setProducts(data))

    if(localStorage.getItem('auth-token')){
        fetch("http://localhost:3000/getcart",{
            method : "POST",
            headers : {
                Accept : 'application/form-data',
                'auth-token' : `${localStorage.getItem('auth-token')}`,
                'Content-Type' : 'application/json',
            },
            body: "",
        }).then((res) => res.json()).then((data)=>setCartItems(data))
    }
  },[])

  const addToCart = async (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));

  if (!localStorage.getItem("auth-token")) {
    alert("You must log in first!");
    window.location.replace("/login");
    return; 
  }

  try {
    const res = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        Accept: "application/form-data", 
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({ itemId }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Item added to cart ✅");
    } else {
      alert("Something went wrong!");
    }
  } catch (err) {
    console.error("Error adding to cart:", err);
    alert("Failed to add item ❌");
  }
};


  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem('auth-token')){
        fetch("http://localhost:3000/removeCart", {
            method : "POST",
            headers : {
                Accept : 'application/form-data',
                'auth-token' : `${localStorage.getItem('auth-token')}`,
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({itemId})
         })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
