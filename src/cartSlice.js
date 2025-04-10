import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
    clearCart: (state) => {  return []; },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) { item.quantity++; }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item && item.quantity > 0) { item.quantity--; }
    },
    getTotalCost: (state) => {
      return state.reduce((total, item) => total + item.cost * item.quantity, 0);
    },
    getTotalItems: (state) => {
      return state.reduce((total, item) => total + item.quantity, 0);
    },
    getCartItems: (state) => {
      return state;
    },
    getCartItemCount: (state) => {
      return state.length;
    },
    isEmpty: (state) => {
      return state.length === 0;
    },
    


  },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity, getTotalCost, getTotalItems, getCartItems, getCartItemCount, isEmpty } = cartSlice.actions;
export default cartSlice.reducer;


