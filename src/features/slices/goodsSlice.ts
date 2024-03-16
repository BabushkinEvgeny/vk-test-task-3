import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IGood } from "../../types";

interface GoodsState {
  goods: IGood[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const fetchGoods = createAsyncThunk("goods/fetchGoods", async () => {
  const response = await fetch("https://dummyjson.com/cart/1");
  const jsonData = await response.json();
  return jsonData.products as IGood[];
});

const initialState: GoodsState = {
  goods: [],
  status: "idle",
  error: null,
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.goods = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default goodsSlice.reducer;
