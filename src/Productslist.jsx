import React, { useState } from "react";
import "./Productslist.css";
import TotalCost from "./TotalCost";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "./ProductItem";
import {CartItems} from "./CartItems";


const Productslist = () => {
    const [showItems, setShowItems] = useState(false);
    const productItems = useSelector((state) => state.products);
    const cartItems = useSelector((state) => state.cart);

    
    const dispatch = useDispatch();

    const getProductsByType = (items, type) => {
      return items.filter((item) => item.type === type);
    };

    const roseItems = getProductsByType(productItems,"rose");
    const snakeItems = getProductsByType(productItems,"snake");
    const succulentItems = getProductsByType(productItems,"succulent");

    function getTotalCost(items) {
      console.log(items);
      if (!items || items.length === 0) {
        console.log("No items in cart");
        return 0;
      }else{
        console.log("Multiple items in cart");
        let total_amount = 0;
        items.forEach(item => {
          total_amount += item.cost * item.quantity;
        });
        return total_amount;
    }}
    
  
  const totalCosts = getTotalCost(cartItems);
    console.log("totalCosts", totalCosts);

    const navigateToProducts = (idType) => {
        if (idType == '#snake' || idType == '#rose' || idType == '#succulent') {
          if (showItems) { // Check if showItems is false
            setShowItems(!showItems); // Toggle showItems to true only if it's currently false
          }
        }
      }

  return (
        <>
            <navbar className="navbar_event_conference">
                <div className="company_logo">Paradise Nursery</div>
                <div className="left_navbar">
                    <div className="nav_links">
                        <a href="#snake" onClick={() => navigateToProducts("#snake")} >SnakePlant</a>
                        <a href="#rose" onClick={() => navigateToProducts('#rose')}>Rose</a>
                        <a href="#succulent" onClick={() => navigateToProducts('#succulent')}>Succulent</a>
                    </div>
                    <button className="details_button" onClick={() => setShowItems(!showItems)}>
                        Cart ({cartItems.length})
                    </button>
                </div>
            </navbar>
            <div className="main_container">
                {!showItems
                    ?
                    (
                        <div className="items-information">

                             <div id="snake" className="rose_container container_main">
                                <div className="text">  <h2>Snake Plant</h2></div>
                                <div className="rose_selection">
                                  {snakeItems.map((item, index) => (
                                   <ProductItem item={item} showItems={showItems}  setShowItems={setShowItems} />
                                  ))}
                                </div>
        
                              </div>

                            {/*Necessary Add-ons*/}
                            <div id="rose" className="rose_container container_main">


                                <div className="text">

                                    <h2> Rose</h2>

                                </div>
                                <div className="addons_selection">
                                {roseItems.map((item, index) => (
                                  <ProductItem item={item}  showItems={showItems}  setShowItems={setShowItems}/>
                                ))}
                                </div>
                               
                            </div>

                            {/* Meal Section */}

                            <div id="meals" className="rose_container container_main">

                                <div className="text">

                                    <h2>Succulent</h2>
                                </div>
                                <div className="addons_selection">
                                {succulentItems.map((item, index) => (
                                  <ProductItem item={item} showItems={showItems}  setShowItems={setShowItems} />
                              ))}
                                </div>
                              

                            </div>
                          
                        </div>
                        
                    ) : (
                      <div className="total_amount_detail">
                        <TotalCost totalCosts={ totalCosts } showItems={showItems}  setShowItems={setShowItems}  ItemsDisplay={() => <CartItems items={ cartItems } />} />
                      </div>
                    )
                }




            </div>
        </>

  ); 
};

export default Productslist;
