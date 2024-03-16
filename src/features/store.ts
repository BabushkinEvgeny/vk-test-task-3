import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "../features/slices/goodsSlice";
import cartReducer from "../features/slices/cartSlice";
import layoutReducer from "../features/slices/layouSlice";
export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
