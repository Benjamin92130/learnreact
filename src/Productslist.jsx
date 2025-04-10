import React, { useState } from "react";
import "./Productslist.css";
import TotalCost from "./TotalCost";
import { useSelector, useDispatch } from "react-redux";
import { incrementRoseQuantity, decrementRoseQuantity } from "./roseSlice";
import { incrementSnakeQuantity, decrementSnakeQuantity } from "./snakeSlice";
import { incrementSucculentQuantity, decrementSucculentQuantity } from "./succulentSlice";
import { incrementProductsQuantity, decrementProductsQuantity, getProductByType ,getProductTypes } from "./productSlice";
import { addToCart, removeFromCart } from "./cartSlice";


const Productslist = () => {
    const [showItems, setShowItems] = useState(false);
    //const [numberOfPeople, setNumberOfPeople] = useState(1);
    const roseItems = useSelector((state) => state.rose);
    const snakeItems = useSelector((state) => state.snake);
    const succulentItems = useSelector((state) => state.succulent);
    const productItems = useSelector((state) => state.products);
    const cartItems = useSelector((state) => state.cart);
    const totalCost = useSelector((state) => state.cart.totalCost);
    const productroseItems = getProductByType(state.products,"rose");
    const productSnakeItems = getProductByType(state.products,"snake");
    const productSucculentItems = getProductByType(state.products,"succulent");
    const productTypes = getProductTypes(state.products);

    console.log("productTypes", productTypes);
    console.log("productroseItems", productroseItems);  
    console.log("productSnakeItems", productSnakeItems);
    console.log("productSucculentItems", productSucculentItems);

    const dispatch = useDispatch();
    // remainingAuditoriumQuantity = 3 - roseItems.find(item => item.name === "Auditorium Hall (Capacity:200)").quantity;
   
    
    const handleToggleItems = () => {
        console.log("handleToggleItems called");
        setShowItems(!showItems);
    };

    const handleAddToCart = (index) => {
        dispatch(incrementRoseQuantity(index));
    };
    
    const handleRemoveFromCart = (index) => {
        if (roseItems[index].quantity > 0) {
          dispatch(decrementRoseQuantity(index));
        }
    };
    const handleIncrementsnakeQuantity = (index) => {
        dispatch(incrementSnakeQuantity(index));
    };
    
    const handleDecrementsnakeQuantity = (index) => {
      if (snakeItems[index].quantity > 0) {
        dispatch(decrementSnakeQuantity(index));
      }
    };


    const handleIncrementsucculentQuantity = (index) => {
      dispatch(incrementSucculentQuantity(index));
   };
  
  const handleDecrementsucculentQuantity = (index) => {
    if (succulentItems[index].quantity > 0) {
      dispatch(decrementSucculentQuantity(index));
    }
  };

    const getItemsFromTotalCost = () => {
      const items = [];
      roseItems.forEach((item) => {
        if (item.quantity > 0) {   items.push({ ...item, type: "rose" }); }
      });
      snakeItems.forEach((item) => {
        if (item.quantity > 0) {  items.push({ ...item, type: "snake" }); }
      });
      succulentItems.forEach((item) => {
        if (item.quantity > 0) {  items.push({ ...item, type: "succulent" }); }
      });
      return items;
    };

    const items = getItemsFromTotalCost();

    const ItemsDisplay = ({ items }) => {
    console.log(items);
    return <>
        <div className="display_box1">
            {items.length === 0 && <p>No items selected</p>}
            <table className="table_item_data">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Unit Cost</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>${item.cost}</td>
                            <td>
                                {item.quantity}
                            </td>
                            <td>${item.cost * item.quantity}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </> };

    const calculateTotalCost = (section) => {
        let totalCost = 0;
        if (section === "rose") { 
          roseItems.forEach((item) => {  totalCost += item.cost * item.quantity; });
        }else if (section === "snake") {
          snakeItems.forEach((item) => {  totalCost += item.cost * item.quantity;});
        }else if (section === "succulent") {
          succulentItems.forEach((item) => {  totalCost += item.cost * item.quantity;  });
        }
        return totalCost;
      };

    const roseTotalCost = calculateTotalCost("rose");
    const snakeTotalCost = calculateTotalCost("snake");
    const succulentTotalCost = calculateTotalCost("succulent");

    const totalCosts = {rose: roseTotalCost,  snake: snakeTotalCost,  succulent: succulentTotalCost };
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
                        Cart
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
                                  {roseItems.map((item, index) => (
                                    <div className="rose_main" key={index}>
                                      <div className="img">
                                        <img src={item.img} alt={item.name} />
                                      </div>
                                      <div className="text">{item.name}</div>
                                      <div>${item.cost}</div>
                                      <div className="button_container">
                                
                                        <div className="button_container">
                                          <button
                                              className={roseItems[index].quantity ===0 ? " btn-warning btn-disabled" : "btn-warning btn-plus"}
                                              onClick={() => handleRemoveFromCart(index)}
                                            >  &#8211;  </button>
                                            <span className="selected_count">  {roseItems[index].quantity > 0 ? ` ${roseItems[index].quantity}` : "0"} </span>
                                            <button
                                              className={roseItems[index].quantity === 10 ? " btn-success btn-disabled" : "btn-success btn-plus"}
                                              onClick={() => handleAddToCart(index)}
                                            > &#43; </button>
                                        </div>
                                
                                      </div>
                                    </div> 
                                  ))}
                                </div>
        
                                <div className="total_cost">Total Cost: ${roseTotalCost}</div>
                              </div>

                            {/*Necessary Add-ons*/}
                            <div id="rose" className="rose_container container_main">


                                <div className="text">

                                    <h2> Rose</h2>

                                </div>
                                <div className="addons_selection">
                                {snakeItems.map((item, index) => (
                                  <div className="snake_data rose_main" key={index}>
                                      <div className="img">
                                          <img src={item.img} alt={item.name} />
                                      </div>
                                  <div className="text"> {item.name} </div>
                                  <div> ${item.cost} </div>
                                      <div className="addons_btn">
                                          <button className="btn-warning" onClick={() => handleDecrementsnakeQuantity(index)}> &ndash; </button>
                                          <span className="quantity-value">{item.quantity}</span>
                                          <button className=" btn-success" onClick={() => handleIncrementsnakeQuantity(index)}> &#43; </button>
                                      </div>
                                  </div>
                              ))}
                                </div>
                                <div className="total_cost">Total Cost: ${snakeTotalCost}</div>

                            </div>

                            {/* Meal Section */}

                            <div id="meals" className="rose_container container_main">

                                <div className="text">

                                    <h2>Succulent</h2>
                                </div>
                                <div className="addons_selection">
                                {succulentItems.map((item, index) => (
                                  <div className="succulent_data rose_main" key={index}>
                                      <div className="img">
                                          <img src={item.img} alt={item.name} />
                                      </div>
                                  <div className="text"> {item.name} </div>
                                  <div> ${item.cost} </div>
                                      <div className="addons_btn">
                                          <button className="btn-warning" onClick={() => handleDecrementsucculentQuantity(index)}> &ndash; </button>
                                          <span className="quantity-value">{item.quantity}</span>
                                          <button className=" btn-success" onClick={() => handleIncrementsuccuelentQuantity(index)}> &#43; </button>
                                      </div>
                                  </div>
                              ))}
                                </div>
                                <div className="total_cost">Total Cost: ${succulentTotalCost}</div>
                          

                            </div>
                          
                        </div>
                        
                    ) : (
                      <div className="total_amount_detail">
                        <TotalCost totalCosts={ totalCosts } ItemsDisplay={() => <ItemsDisplay items={ items } />} />
                      </div>
                    )
                }




            </div>
        </>

  ); 
};

export default Productslist;
