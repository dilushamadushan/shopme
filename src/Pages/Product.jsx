import React from 'react'
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from '../Context/ProductContext'; 
import all_product from '../assets/all_product';
import ProductContent from '../Components/ProductContent';

function Product() {
    const { product, setProducts } = useContext(ProductContext);
    const {prosuctId} = useParams();

    useEffect(() => {
            setProducts(all_product);
    }, [setProducts]);

    const products = all_product.find((e) => e.id === Number(prosuctId));

  return (
    <div>
        <ProductContent product={products} />
    </div>
  )
}

export default Product