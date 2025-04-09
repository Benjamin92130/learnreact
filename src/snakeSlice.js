import { createSlice } from "@reduxjs/toolkit";

export const snakeSlice = createSlice({
  name: "snake",
  initialState: [
    {
      img: "https://cdn.pixabay.com/photo/2017/09/19/14/31/sansevieria-2764274_960_720.jpg",
      name: "Snake Plant Laurentii",
      cost: 12.99,
      quantity: 0
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sansevieria_trifasciata_03.jpg/800px-Sansevieria_trifasciata_03.jpg",
      name: "Snake Plant Trifasciata",
      cost: 9.99,
      quantity: 0
    },
    {
      img: "https://i.pinimg.com/originals/3a/6a/6e/3a6a6e7f4dc3b2c943e94d5c bee7c8.jpg",
      name: "Snake Plant Cylindrica",
      cost: 14.99,
      quantity: 0
    },
    {
      img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/sansevieria.jpg",
      name: "Snake Plant Moonshine",
      cost: 11.99,
      quantity: 0
    },
    {
      img: "https://www.proflowers.com/blog/wp-content/uploads/2019/07/Snake-Plant.jpg",
      name: "Snake Plant Black Coral",
      cost: 16.99,
      quantity: 0
    }

  ],


  reducers: {
    incrementSnakeQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
          item.quantity++;
      }
    },
    decrementSnakeQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
          item.quantity--;
      }
    },
  },
});

export const { incrementSnakeQuantity, decrementSnakeQuantity } = snakeSlice.actions;

export default snakeSlice.reducer;
