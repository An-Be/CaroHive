import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItems: 0,
    products: [

    ],
    price: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        incrementTotalItems: (state) => {
            state.totalItems +=1;
        },
        decrementTotalItems: (state) => {
            state.totalItems -= 1;
        },
        incrementByMultiple: (state, action) => {
            state.totalItems += action.payload;
        },
        decrementByMultiple: (state, action) => {
            state.totalItems -= action.payload;
        },
        addProduct : (state, action) => {
            state.products = state.products.push(action.payload);
        },
        removeProduct : (state, action) => {
            // here we want to filter through array find the product to remove
            state.products = state.products.push(action.payload);
        }, 
        incrementTotalPrice: (state, action) => {
            //incremement price cart according to items added
        },
        decremenentTotalPrice: (state, action) => {
            //decrement price cart according to items added
        }
    }
})

export const { incrementTotalItems, decrementTotalItems } = cartSlice.actions;
export default cartSlice.reducer;