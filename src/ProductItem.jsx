import React, { useState } from 'react';
//import "./ProductItem.css";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

export const ProductItem = (props) => {
  //  const [{ cart }, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    const handleAddToCart = () => {
        console.log(props.item,quantity);
        
        dispatch(addToCart({ ...props.item, quantity: parseInt(quantity) }));
        setQuantity(1); // Reset quantity to 1 after adding to cart
        console.log(cartItems);
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
            <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}