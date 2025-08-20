import React,{useContext, useEffect} from 'react'
import { ProductContext } from '../Context/ProductContext'; 
import all_product from '../assets/all_product';
import Item from '../Components/Item';

function ShopCategory(props) {
    const { products } = useContext(ProductContext);

    const filterProducts = products.map(
                    (prd, idx) => 
                        prd.category === props.category && (
                        <Item key={idx} {...prd} />
                    ));
  return (
        <div className="flex flex-wrap justify-center gap-6 p-6">
            {filterProducts}
        </div>
    )
}

export default ShopCategory