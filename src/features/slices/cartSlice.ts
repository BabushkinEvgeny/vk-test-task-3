import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, IGood } from "../../types";

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IGood>) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        if (state.items[existingIndex].quantity < 10) {
          state.items[existingIndex].quantity += 1;
          state.total += action.payload.price;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.total += action.payload.price;
      }
    },

    deleteItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (index >= 0) {
        state.total -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingIndex >= 0) {
        const existingItem = state.items[existingIndex];
        if (existingItem.quantity > 1) {
          state.items[existingIndex].quantity -= 1;
          state.total -= existingItem.price;
        } else {
          state.items.splice(existingIndex, 1);
          state.total -= existingItem.price;
        }
      }
    },
  },
});

export const { addItem, deleteItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
