import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "./cartSlice";


export const CartItems = ({ items }) => {
    console.log(items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        
        dispatch(removeFromCart(item));
    };
    
    const handleIncrementQuantity = (item) => { ;
        dispatch(incrementQuantity(item));
    }
    
    const handleDecrementQuantity = (item) => {
        dispatch(decrementQuantity(item));
    }  

    

   
    return (
        <div className="display_box1">
            {items.length === 0 && <p>No items selected</p>}
            <table className="table_item_data">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Unit Cost</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>${item.cost}</td>
                            <td>
                                <button className="decrement_button" onClick={() => handleDecrementQuantity(item)}>-</button>
                                    {item.quantity}
                                <button className="increment_button" onClick={() => handleIncrementQuantity(item)}>+</button>
                            </td>
                            <td>${item.cost * item.quantity}
                            </td>
                            <td>
                                <button className="remove_button" onClick={() => handleRemoveFromCart(item)} > Remove </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
      ) };

