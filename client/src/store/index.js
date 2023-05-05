import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart';

//create redux store
export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})