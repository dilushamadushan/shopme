import React,{useContext, useEffect} from 'react'
import { ProductContext } from '../Context/ProductContext'; 
import all_product from '../assets/all_product';
import Item from '../Components/Item';

function ShopCategory(props) {
    const { products, setProducts } = useContext(ProductContext);

    useEffect(() => {
        setProducts(all_product);
    }, []);

    const Products = all_product.map(
                    (prd, idx) => 
                        prd.category === props.category && (
                        <Item key={idx} {...prd} />
                    ));
  return (
        <div className="flex flex-wrap justify-center gap-6 p-6">
            {Products}
        </div>
    )
}

export default ShopCategory