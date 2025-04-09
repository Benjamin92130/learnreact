// store.js
import { configureStore } from '@reduxjs/toolkit';
import roseReducer from './roseSlice';
import snakeReducer from './snakeSlice';
import succulentReducer from './succulentSlice';


export default configureStore({
  reducer: {
    rose: roseReducer,
    snake: snakeReducer,
    succulent: succulentReducer,
  },
});
