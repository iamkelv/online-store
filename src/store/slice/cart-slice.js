import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalQuantity: 0,
};
const cartSice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemFromCart(state, { payload }) {
      const existingItem = state.items.find((item) => item.id === payload.id);
      if (!existingItem) {
        state.totalQuantity++;
        state.items.push({
          id: payload.id,
          title: payload.title,
          price: payload.price,
          quantity: 1,
          totalPrice: payload.totalPrice,
        });
      } else {
        // state.totalQuantity++;
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + payload.price;
      }
    },
    removeItemFromCart(state, { payload }) {},
  },
});

export const cartAction = cartSice.actions;
export default cartSice.reducer;
