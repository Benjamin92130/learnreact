import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
        id : 1,
        img: "https://cdn.pixabay.com/photo/2017/06/21/14/13/rose-2427865_960_720.jpg",
        name: "Rose Rouge",
        cost: 15.99,
        quantity: 0,
        type : "rose"
      },
      {
        id : 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Rosa_gallica_versicolor_1.jpg/800px-Rosa_gallica_versicolor_1.jpg",
        name: "Rose Blanche",
        cost: 12.99,
        quantity: 0,
        type : "rose"
      },
      {
        id : 3,
        img: "https://i.pinimg.com/originals/3a/6a/6e/3a6a6e7f4dc3b2c943e94d5cbee7c8.jpg",
        name: "Rose Jaune",
        cost: 18.99,
        quantity: 0,
        type : "rose"
      },
      {
        id : 4,
        img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/rose.jpg",
        name: "Rose Pink",
        cost: 14.99,
        quantity: 0,
        type : "rose"
      },
      {
        id : 5,
        img: "https://www.proflowers.com/blog/wp-content/uploads/2019/07/Rose.jpg",
        name: "Rose Rouge Intense",
        cost: 19.99,
        quantity: 0,
        type : "rose"
      }, 
      {
        id : 6,
        img: "https://cdn.pixabay.com/photo/2017/09/19/14/31/sansevieria-2764274_960_720.jpg",
        name: "Snake Plant Laurentii",
        cost: 12.99,
        quantity: 0,
        type : "snake"
      },
      {
        id : 7,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sansevieria_trifasciata_03.jpg/800px-Sansevieria_trifasciata_03.jpg",
        name: "Snake Plant Trifasciata",
        cost: 9.99,
        quantity: 0,
        type : "snake"
      },
      {
        id : 8,
        img: "https://i.pinimg.com/originals/3a/6a/6e/3a6a6e7f4dc3b2c943e94d5c bee7c8.jpg",
        name: "Snake Plant Cylindrica",
        cost: 14.99,
        quantity: 0,
        type : "snake"
      },
      {
        id : 9,
        img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/sansevieria.jpg",
        name: "Snake Plant Moonshine",
        cost: 11.99,
        quantity: 0,
        type : "snake"
      },
      {
        id : 10,
        img: "https://www.proflowers.com/blog/wp-content/uploads/2019/07/Snake-Plant.jpg",
        name: "Snake Plant Black Coral",
        cost: 16.99,
        quantity: 0,
        type : "snake"
      },{
        id : 11,
        img: "https://cdn.pixabay.com/photo/2017/09/19/14/31/aloe-vera-2764276_960_720.jpg",
        name: "Aloe Vera",
        cost: 8.99,
        quantity: 0,
        type : "succulent"
      },
      {
        id : 12,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Echeveria_perle_von_nürnberg.jpg/800px-Echeveria_perle_von_nürnberg.jpg",
        name: "Echeveria",
        cost: 10.99,
        quantity: 0,
        type : "succulent"
      },
      {
        id : 13,
        img: "https://i.pinimg.com/originals/3a/6a/6e/3a6a6e7f4dc3b2c943e94d5cbee7c8.jpg",
        name: "Crassula",
        cost: 12.99,
        quantity: 0,
        type : "succulent"
      },
      {
        id : 14,
        img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/succulent.jpg",
        name: "Sedum",
        cost: 9.99,
        quantity: 0,
        type : "succulent"
      },
      {
        id : 15,
        img: "https://www.proflowers.com/blog/wp-content/uploads/2019/07/Succulent.jpg",
        name: "Kalanchoe",
        cost: 11.99,
        quantity: 0,
        type : "succulent"
      }

  ],
  reducers: {
    incrementProductQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
          item.quantity++;
      }
    },
    decrementProductQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item && item.quantity > 0) {
          item.quantity--;
      }
    },

    getProductTypes: (state) => {
      const productTypes = state.map((item) => item.type);
      return [...new Set(productTypes)];
    }

  }
});

export const {incrementProductQuantity, decrementProductQuantity,getProductTypes } = productsSlice.actions;

export default productsSlice.reducer;