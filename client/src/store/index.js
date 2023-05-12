import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart';
import { productsApi } from './slices/api';

//create redux store
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware),
})