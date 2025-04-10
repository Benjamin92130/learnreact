import { createSlice } from "@reduxjs/toolkit";

export const succulentSlice = createSlice({
  name: "succulent",
  initialState: [
    

  ],


  reducers: {
    incrementSucculentQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
          item.quantity++;
      }
    },
    decrementSucculentQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
          item.quantity--;
      }
    },
  },
});

export const { incrementSucculentQuantity, decrementSucculentQuantity } = succulentSlice.actions;

export default succulentSlice.reducer;
