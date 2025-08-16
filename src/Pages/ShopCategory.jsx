import React,{useContext} from 'react'
import { ProductContext } from '../Context/ProductContext'; 
import NavBar from '../Components/NavBar';
import all_product from '../assets/all_product';
import Item from '../Components/Item';

function ShopCategory(props) {
    const {all_product} = useContext(ProductContext);
  return (
    <>
        <NavBar />
        <div className="flex flex-wrap justify-center gap-6 p-6">
            {all_product.map((product,i) => {
                if(props.category === product.category){
                    return <Item key={i} id={product.id} name={product.name} img={product.image} new_price = {product.new_price} old_price = {product.old_price} />
                }
                else{
                    return null;
                }
            })}
        </div>
    </>
    )
}

export default ShopCategory