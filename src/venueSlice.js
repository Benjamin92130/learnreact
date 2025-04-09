// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://cdn.pixabay.com/photo/2017/06/21/14/13/rose-2427865_960_720.jpg",
      name: "Rose Rouge",
      cost: 15.99,
      quantity: 10
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Rosa_gallica_versicolor_1.jpg/800px-Rosa_gallica_versicolor_1.jpg",
      name: "Rose Blanche",
      cost: 12.99,
      quantity: 15
    },
    {
      img: "https://i.pinimg.com/originals/3a/6a/6e/3a6a6e7f4dc3b2c943e94d5cbee7c8.jpg",
      name: "Rose Jaune",
      cost: 18.99,
      quantity: 8
    },
    {
      img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/rose.jpg",
      name: "Rose Pink",
      cost: 14.99,
      quantity: 12
    },
    {
      img: "https://www.proflowers.com/blog/wp-content/uploads/2019/07/Rose.jpg",
      name: "Rose Rouge Intense",
      cost: 19.99,
      quantity: 6
    }
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
