import React from 'react'
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from '../Context/ProductContext'; 
import all_product from '../assets/all_product';
import ProductContent from '../Components/ProductContent';

function Product() {
    const { products } = useContext(ProductContext);
    const {prosuctId} = useParams();

    const product = products.find((e) => e.id === Number(prosuctId));

  return (
    <div>
        <ProductContent product={product} />
    </div>
  )
}

export default Product