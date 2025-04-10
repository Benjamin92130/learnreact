import React, { useState, useEffect } from 'react';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  
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
            </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
