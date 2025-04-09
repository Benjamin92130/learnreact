import { createSlice } from "@reduxjs/toolkit";

export const succulentSlice = createSlice({
  name: "succulent",
  initialState: [
    {
      "img": "https://cdn.pixabay.com/photo/2017/09/19/14/31/aloe-vera-2764276_960_720.jpg",
      "name": "Aloe Vera",
      "cost": 8.99,
      "quantity": 20
    },
    {
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Echeveria_perle_von_nürnberg.jpg/800px-Echeveria_perle_von_nürnberg.jpg",
      "name": "Echeveria",
      "cost": 10.99,
      "quantity": 15
    },
    {
      "img": "https://i.pinimg.com/originals/3a/6a/6e/3a6a6e7f4dc3b2c943e94d5cbee7c8.jpg",
      "name": "Crassula",
      "cost": 12.99,
      "quantity": 10
    },
    {
      "img": "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/succulent.jpg",
      "name": "Sedum",
      "cost": 9.99,
      "quantity": 18
    },
    {
      "img": "https://www.proflowers.com/blog/wp-content/uploads/2019/07/Succulent.jpg",
      "name": "Kalanchoe",
      "cost": 11.99,
      "quantity": 12
    }

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
