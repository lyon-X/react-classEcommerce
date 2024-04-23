import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQty: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id == action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += action.payload.productPrice;
      } else {
        state.cart.push({
          id: action.payload.id,
          productName: action.payload.productName,
          productPrice: action.payload.productPrice,
          quantity: 1,
          totalPrice: action.payload.productPrice,
        });
        state.totalQty++;
      }
    },

    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.totalQty--;
    },
  },
});

export const { addToCart, deleteCart } = CartSlice.actions;

export default CartSlice;
