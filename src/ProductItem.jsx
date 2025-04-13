import React, { useState } from 'react';
//import "./ProductItem.css";

import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

export const ProductItem = (props) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        
        dispatch(addToCart({ ...props.item, quantity: parseInt(quantity) }));
        props.setShowItems(!props.showItems); // Toggle showItems to true only if it's currently false
        setQuantity(1); // Reset quantity to 1 after adding to cart
        
    };
    
    return (
        <div className="product-item">
            <div className="img">
                <img src={props.item.img} alt={props.item.name} />
            </div>
            <div className="text"> <h2>{props.item.name}</h2> </div>
                            
            <p>Price: $ {props.item.cost}</p>
            <div className="addons_btn">
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
            />
            <button  className="btn-success" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}