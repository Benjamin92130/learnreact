import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from "./cartSlice";

import "./TotalCost.css";

const TotalCost = ({ totalCosts,  ItemsDisplay,  showItems, setShowItems}) => {
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();

  const handleClearCart = () => {
          dispatch(clearCart());
      };
  
    const handleSwapPopup = () => {
        setPopup(!popup);
    }
  
  const handleShowItems = () => {
    setShowItems(!showItems);
  };

  const total_amount = totalCosts;
  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading"><h3>Total cost in your cart</h3></p>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
           $ {total_amount}
          </h2>
         
            <div>
             <div className="render_items">
                              <ItemsDisplay />
                          </div>
              <div className='cart_actions'>
                  <div className='back_to_shop_btn'><button className='back_to_shop_btn'  onClick={handleShowItems} >continue shopping</button> </div>
                  <div className="clear_cart_btn">
                    <button onClick={handleClearCart} className="clear_cart">Clear Cart</button>
                  </div>
                  <div className="checkout_btn">
                    <button className="checkout" onClick={handleSwapPopup}>Checkout</button>
                  </div>
              </div>
            </div>

              { popup ? 
              (
                <>
                <div className="popup_checkout">  
                <div className="popup_content">
                  <h2>Checkout - Comming soon</h2>
                  <p>Total Amount: ${total_amount}</p>
                  <button className="close_popup" onClick={handleSwapPopup}>Close</button>
                </div>
                </div>
                </>
                ):null
              }
            <div className='display_popup'></div>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
