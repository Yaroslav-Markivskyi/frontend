import { RootState } from "../../store";

export const selectCart = (state: RootState) => state.cart;

export const selectCartbySeller = (seller: string) => (state: RootState) => state.cart.find((order) => order.seller === seller);
