import { configureStore } from '@reduxjs/toolkit';

// Import the reducer from the slice file. It is a default export so we can name it whatever we want.
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});