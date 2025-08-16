import React from 'react'
import NavBar from '../Components/NavBar';
import BodyContent from '../Components/BodyContent';

function ShopCategory(props) {
  return (
    <>
        <NavBar />
        <BodyContent>
            <h1 className="text-3xl font-bold">Welcome to Our {props.category} Category</h1>
        </BodyContent>
    </>
    )
}

export default ShopCategory