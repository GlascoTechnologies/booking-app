import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
// import restaurantReducer from "./redux/restaurantSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    // restaurant: restaurantReducer,
  },
});
