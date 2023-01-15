import React, { useState } from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price } = props;
    const [quantity, setQuantity] = useState(0);

    const handleAddQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const handleDeleteQuantity = () => {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
        <div className='product'>
            <h1>Product Name: {name}</h1>
            <h2>Price: {price}</h2>
            <h3>Quantity: {quantity}</h3>
            <button className='add-quantity' onClick={handleAddQuantity}>Add Quantity</button>
            <button onClick={handleDeleteQuantity}>Delete Quantity</button>
        </div>
    );
};

export default Product;