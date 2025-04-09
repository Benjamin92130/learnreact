
import { createSlice } from "@reduxjs/toolkit";

export const roseSlice = createSlice({
  name: "rose",
  initialState: [
    {
      img: "https://cdn.pixabay.com/photo/2017/06/21/14/13/rose-2427865_960_720.jpg",
      name: "Rose Rouge",
      cost: 15.99,
      quantity: 0
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Rosa_gallica_versicolor_1.jpg/800px-Rosa_gallica_versicolor_1.jpg",
      name: "Rose Blanche",
      cost: 12.99,
      quantity: 0
    },
    {
      img: "https://i.pinimg.com/originals/3a/6a/6e/3a6a6e7f4dc3b2c943e94d5cbee7c8.jpg",
      name: "Rose Jaune",
      cost: 18.99,
      quantity: 0
    },
    {
      img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/rose.jpg",
      name: "Rose Pink",
      cost: 14.99,
      quantity: 0
    },
    {
      img: "https://www.proflowers.com/blog/wp-content/uploads/2019/07/Rose.jpg",
      name: "Rose Rouge Intense",
      cost: 19.99,
      quantity: 0
    }
  
  ],
  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
          item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
          item.quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = roseSlice.actions;

export default roseSlice.reducer;
