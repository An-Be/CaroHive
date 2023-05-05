import { createSlice } from "@reduxjs/toolkit";
import products from "../../products";
import coupons from "../../coupons";

const initialState = {
  products: [],
  totalAmount: 0,
  totalCount: 0,
  couponUsed: ''
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCardTotal: (state) => {
      const { totalAmount, totalCount } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    changeAmount: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, amount: Number(action.payload.value) };
        }
        return product;
      });
    },
    addProduct: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.productToAddToCart.id);
      if(index >= 0){
        state.products[index].amount +=1
        state.totalCount += 1
      }else{
        const product = {...action.payload.productToAddToCart, amount: 1}
        console.log(product)
        state.products.push(product)
        state.totalCount += 1
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => {
        return product.id !== action.payload.id;
      });
    },
    clearCart: (state) => {
      state.products = [];
    },
    applyCoupon: (state, action) => {
      if(state.couponUsed !== action.payload.coupon){
        Object.keys(coupons).map((coupon) => {
            if (coupon == action.payload.coupon) {
                state.couponUsed = action.payload.coupon
              return (state.totalAmount *= coupons[coupon]);
            }
          });
      }  
    },
  },
});

export const {
  getCardTotal,
  changeAmount,
  removeProduct,
  addProduct,
  clearCart,
  applyCoupon,
} = cartSlice.actions;
export default cartSlice.reducer;
