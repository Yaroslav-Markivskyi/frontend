import { RootState } from "../../store";


export const selectActiveCart = (state: RootState) => state.activeCart;

export const selectSellerActiveCart = (state: RootState) => state.activeCart.seller;

