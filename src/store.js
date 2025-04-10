// store.js
import { configureStore } from '@reduxjs/toolkit';
import roseReducer from './roseSlice';
import snakeReducer from './snakeSlice';
import succulentReducer from './succulentSlice';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';


export default configureStore({
  reducer: {
    rose: roseReducer,
    snake: snakeReducer,
    succulent: succulentReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
