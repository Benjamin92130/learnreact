import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
        id : 1,
        img: "https://i.etsystatic.com/33684310/c/800/800/0/0/il/8157a5/3638141751/il_800x800.3638141751_dx7v.jpg",
        name: "Rose Rouge",
        cost: 15.99,
        quantity: 0,
        type : "rose"
      },
      {
        id : 2,
        img: "https://i.etsystatic.com/35171679/r/il/3d5897/5845690962/il_800x800.5845690962_qqjw.jpg",
        name: "Rose Blanche",
        cost: 12.99,
        quantity: 0,
        type : "rose"
      },
      {
        id : 3,
        img: "https://i.etsystatic.com/28550306/r/il/21eddb/4639921458/il_800x800.4639921458_bb78.jpg",
        name: "Rose Jaune",
        cost: 18.99,
        quantity: 0,
        type : "rose"
      },
      {
        id : 4,
        img: "https://i.etsystatic.com/9472596/r/il/c8ef92/4205205450/il_800x800.4205205450_ttbr.jpg",
        name: "Rose Pink",
        cost: 14.99,
        quantity: 0,
        type : "rose"
      },
      {
        id : 5,
        img: "https://i.etsystatic.com/33684310/c/800/800/0/0/il/8157a5/3638141751/il_800x800.3638141751_dx7v.jpg",
        name: "Rose Rouge Intense",
        cost: 19.99,
        quantity: 0,
        type : "rose"
      }, 
      {
        id : 6,
        img: "https://i.etsystatic.com/22903410/r/il/15df33/4271591018/il_1588xN.4271591018_osgk.jpg",
        name: "Snake Plant Laurentii",
        cost: 12.99,
        quantity: 0,
        type : "snake"
      },
      {
        id : 7,
        img: "https://i.etsystatic.com/30945882/r/il/d6f002/6360037306/il_1588xN.6360037306_gkoj.jpg",
        name: "Snake Plant Trifasciata",
        cost: 9.99,
        quantity: 0,
        type : "snake"
      },
      {
        id : 8,
        img: "https://i.etsystatic.com/55008860/r/il/85dbd3/6364506341/il_1588xN.6364506341_nnde.jpg",
        name: "Snake Plant Cylindrica",
        cost: 14.99,
        quantity: 0,
        type : "snake"
      },
      {
        id : 9,
        img: "https://i.etsystatic.com/23760654/r/il/609766/5472445464/il_1588xN.5472445464_7a33.jpg",
        name: "Snake Plant Moonshine",
        cost: 11.99,
        quantity: 0,
        type : "snake"
      },
      {
        id : 10,
        img: "https://i.etsystatic.com/30751368/r/il/33683d/6835208927/il_1588xN.6835208927_oupl.jpg",
        name: "Snake Plant Black Coral",
        cost: 16.99,
        quantity: 0,
        type : "snake"
      },{
        id : 11,
        img: "https://i.etsystatic.com/16613526/r/il/8bc697/3428678807/il_800x800.3428678807_s82d.jpg",
        name: "Aloe Vera",
        cost: 8.99,
        quantity: 0,
        type : "succulent"
      },
      {
        id : 12,
        img: "https://i.etsystatic.com/57229016/r/il/ecd1a0/6803158493/il_800x800.6803158493_m9l2.jpg",
        name: "Echeveria",
        cost: 10.99,
        quantity: 0,
        type : "succulent"
      },
      {
        id : 13,
        img: "https://i.etsystatic.com/23192747/c/1771/1771/239/614/il/46639f/5956433800/il_800x800.5956433800_dhco.jpg",
        name: "Crassula",
        cost: 12.99,
        quantity: 0,
        type : "succulent"
      },
      {
        id : 14,
        img: "https://i.etsystatic.com/30799278/c/1460/1460/175/383/il/def3ca/6586924268/il_800x800.6586924268_beeo.jpg",
        name: "Sedum",
        cost: 9.99,
        quantity: 0,
        type : "succulent"
      },
      {
        id : 15,
        img: "https://i.etsystatic.com/35359783/r/il/01b487/6733640897/il_800x800.6733640897_jels.jpg",
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