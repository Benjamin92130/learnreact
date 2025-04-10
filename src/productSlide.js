import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
        img: "https://cdn.pixabay.com/photo/2017/06/21/14/13/rose-2427865_960_720.jpg",
        name: "Rose Rouge",
        cost: 15.99,
        quantity: 0,
        type : "rose"
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Rosa_gallica_versicolor_1.jpg/800px-Rosa_gallica_versicolor_1.jpg",
        name: "Rose Blanche",
        cost: 12.99,
        quantity: 0,
        type : "rose"
      },
      {
        img: "https://i.pinimg.com/originals/3a/6a/6e/3a6a6e7f4dc3b2c943e94d5cbee7c8.jpg",
        name: "Rose Jaune",
        cost: 18.99,
        quantity: 0,
        type : "rose"
      },
      {
        img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/rose.jpg",
        name: "Rose Pink",
        cost: 14.99,
        quantity: 0,
        type : "rose"
      },
      {
        img: "https://www.proflowers.com/blog/wp-content/uploads/2019/07/Rose.jpg",
        name: "Rose Rouge Intense",
        cost: 19.99,
        quantity: 0,
        type : "rose"
      }, {
        img: "https://cdn.pixabay.com/photo/2017/09/19/14/31/sansevieria-2764274_960_720.jpg",
        name: "Snake Plant Laurentii",
        cost: 12.99,
        quantity: 0,
        type : "snake"
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sansevieria_trifasciata_03.jpg/800px-Sansevieria_trifasciata_03.jpg",
        name: "Snake Plant Trifasciata",
        cost: 9.99,
        quantity: 0,
        type : "snake"
      },
      {
        img: "https://i.pinimg.com/originals/3a/6a/6e/3a6a6e7f4dc3b2c943e94d5c bee7c8.jpg",
        name: "Snake Plant Cylindrica",
        cost: 14.99,
        quantity: 0,
        type : "snake"
      },
      {
        img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/sansevieria.jpg",
        name: "Snake Plant Moonshine",
        cost: 11.99,
        quantity: 0,
        type : "snake"
      },
      {
        img: "https://www.proflowers.com/blog/wp-content/uploads/2019/07/Snake-Plant.jpg",
        name: "Snake Plant Black Coral",
        cost: 16.99,
        quantity: 0,
        type : "snake"
      },{
        img: "https://cdn.pixabay.com/photo/2017/09/19/14/31/aloe-vera-2764276_960_720.jpg",
        name: "Aloe Vera",
        cost: 8.99,
        quantity: 0,
        type : "succulent"
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Echeveria_perle_von_nürnberg.jpg/800px-Echeveria_perle_von_nürnberg.jpg",
        name: "Echeveria",
        cost: 10.99,
        quantity: 0,
        type : "succulent"
      },
      {
        img: "https://i.pinimg.com/originals/3a/6a/6e/3a6a6e7f4dc3b2c943e94d5cbee7c8.jpg",
        name: "Crassula",
        cost: 12.99,
        quantity: 0,
        type : "succulent"
      },
      {
        img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/succulent.jpg",
        name: "Sedum",
        cost: 9.99,
        quantity: 0,
        type : "succulent"
      },
      {
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
    getProductByType: (state, action) => {
      return state.filter((item) => item.type === action.payload);
    },
    getProductTypes: (state) => {
        const types = new Set();
        state.forEach((item) => {  types.add(item.type); });
        return Array.from(types);
    }
  }
});