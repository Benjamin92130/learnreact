// store.js
import { configureStore } from '@reduxjs/toolkit';
import roseReducer from './roseSlice';
import snakeReducer from './snakeSlice';
//import mealsReducer from './mealsSlice';


export default configureStore({
  reducer: {
    rose: roseReducer,
    snake: snakeReducer,
   // meals: mealsReducer,
  },
});
