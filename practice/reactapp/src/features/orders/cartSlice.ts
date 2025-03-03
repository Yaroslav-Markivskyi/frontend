import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadCart, saveCart } from "../../utils/cart/cartStorage";
import { CartProduct, Order } from "../../types/orders";

const initialState: Order[] = loadCart();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{item: CartProduct }>) => { 
            const { item } = action.payload;
            const existingOrder = state.find(order => order.seller === item.seller);
            if (existingOrder) {
                const existingItem = existingOrder.items.find(i => i.id === item.id);
                if (existingItem) {
                    if (existingItem.quantity < existingItem.available) {
                        existingItem.quantity += 1;
                    }
                } else {
                    existingOrder.items.push({ ...item, quantity: 1 });
                }
            } else {
                state.push({ seller: item.seller, items: [{ ...item, quantity: 1 }] });
            }
            saveCart(state);
        },
        removeItem: (state, action: PayloadAction<{ seller: string; id: number }>) => {
            const newState = state
                .map((order) =>
                    order.seller === action.payload.seller
                        ? { ...order, items: order.items.filter((item) => item.id !== action.payload.id) }
                        : order
                )
                .filter((order) => order.items.length > 0);
        
            saveCart(newState);
            return newState;
        },
        updateQuantity: (state, action: PayloadAction<{ seller: string; id: number; quantity: number }>) => {
            const { seller, id, quantity } = action.payload;
            const order = state.find(o => o.seller === seller);
            if (!order) return;
            const item = order.items.find(i => i.id === id);
            if (item) {
                item.quantity = Math.min(Math.max(quantity, 1), item.available);
            }
            saveCart(state);
        },
        clearCart: () => {
            saveCart([]);
            return [];
        },
    },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
