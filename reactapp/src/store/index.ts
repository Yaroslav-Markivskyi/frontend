import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import activeCartSlice from "../features/cart/activeCartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    activeCart: activeCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
