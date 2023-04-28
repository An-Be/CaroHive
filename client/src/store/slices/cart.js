import { createSlice } from "@reduxjs/toolkit";
import products from "../../products";

const initialState = {
    products: products,
    totalAmount: 0,
    totalCount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        getCardTotal : (state) => {
            const { totalAmount, totalCount } = state.products.reduce((cartTotal, cartItem) => {
                const {price, amount } = cartItem;
                const itemTotal = price * amount;
                cartTotal.totalAmount += itemTotal;
                cartTotal.totalCount += amount;
                return cartTotal;
            },{totalAmount: 0, totalCount: 0}
            );
            state.totalAmount = parseInt(totalAmount.toFixed(2));
            state.totalCount = totalCount;
        },
        changeAmount: (state, action) => {
            state.products = state.products.map((product) => {
                if(product.id === action.payload.id){
                   return {...product, amount: Number(action.payload.value)}
                }
                return product;
            });
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => {
                return product.id !== action.payload.id
            })
        },
        clearCart: (state) => {
            state.products = []
        }
    }
})

export const { getCardTotal, changeAmount, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;