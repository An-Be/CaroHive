import { configureStore } from '@reduxjs/toolkit';
import { caroApi } from './slices/api';
import cartReducer from './slices/cart';
import userReducer from './slices/user';
//create redux store
export const store = configureStore({
    reducer: {
        [caroApi.reducerPath]: caroApi.reducer,
        cart: cartReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(caroApi.middleware),
})