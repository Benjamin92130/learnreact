// store.js
import { configureStore } from '@reduxjs/toolkit';

import cartSliceReducer from './cartSlice';
import productReducer from './productSlice';


export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartSliceReducer,
  },
});
