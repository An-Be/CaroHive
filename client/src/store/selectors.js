export const selectCartData = (state) => {
    return state.cart;
  };

export const selectAmountOfProduct = (state, id) => {
  return state.cart.filter((item) => item.id == id);
}

export const selectUserData = (state) => {
  return state.user
}