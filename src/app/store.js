import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import priceReducer from '../features/price/priceSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    price: priceReducer,
  },
});

export default store;
