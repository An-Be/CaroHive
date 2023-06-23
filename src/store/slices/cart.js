import { createSlice } from "@reduxjs/toolkit";
import coupons from "../../coupons";

const initialState = {
  products: [],
  totalAmountWithCoupon: null,
  totalAmountSavedWithCoupon: null,
  totalAmountWithoutCoupon: 0,
  totalCount: 0,
  couponUsed: ''
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartTotal: (state) => {
      const { totalAmountWithoutCoupon, totalCount } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.totalAmountWithoutCoupon += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        { totalAmountWithoutCoupon: 0, totalCount: 0 }
      );
      state.totalAmountWithoutCoupon = parseInt(totalAmountWithoutCoupon.toFixed(2))
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
        state.products[index].amount = Number(action.payload.productToAddToCart.amount)
        state.totalCount += Number(action.payload.productToAddToCart.amount)
        
      }else{
        const product = {...action.payload.productToAddToCart, amount: Number(action.payload.productToAddToCart.amount)}
        state.products.push(product)
        state.totalCount += Number(action.payload.productToAddToCart.amount)
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
                state.totalAmountWithCoupon = state.totalAmountWithoutCoupon * coupons[coupon];
                state.totalAmountSavedWithCoupon = state.totalAmountWithoutCoupon - state.totalAmountWithCoupon
            }
          });
      }  
    },
  },
});

export const {
  getCartTotal,
  changeAmount,
  removeProduct,
  addProduct,
  clearCart,
  applyCoupon,
} = cartSlice.actions;
export default cartSlice.reducer;
