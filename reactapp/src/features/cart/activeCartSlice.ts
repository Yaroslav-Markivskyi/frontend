import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActiveCart } from "./types";

const initialState: ActiveCart = {
    seller: "",
    person: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        deliveryDetails: "",
    },
    address: {
        street: "",
        city: "",
        state: "",
        zip: "",
    },
    paymentMethod: "creditCard",
}

const activeCartSlice = createSlice({
    name: "activeCart",
    initialState,
    reducers: {
        setSeller: (state, action: PayloadAction<string>) => {
            state.seller = action.payload;
        },
        setPerson: (state, action: PayloadAction<ActiveCart["person"]>) => {
            state.person = action.payload;
        },
        setAddress: (state, action: PayloadAction<ActiveCart["address"]>) => {
            state.address = action.payload;
        },
        setPaymentMethod: (state, action: PayloadAction<ActiveCart["paymentMethod"]>) => {
            state.paymentMethod = action.payload;
        },
        clearActiveCart: () => initialState,
    },
});


export const { setSeller, setPerson, setAddress, setPaymentMethod, clearActiveCart } = activeCartSlice.actions;

export default activeCartSlice.reducer;