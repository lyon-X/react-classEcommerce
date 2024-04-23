import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Rdux/newUserSlice";
import CartSlice from "./Rdux/cartSlice";

const store = configureStore({
  reducer: {
    allUsers: userSlice.reducer,
    carts: CartSlice.reducer,
  },
});

export default store;
