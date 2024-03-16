import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    layout: 'grid',
  },
  reducers: {
    toggleLayout: (state) => {
      state.layout = state.layout === 'grid' ? 'list' : 'grid';
    },
  },
});

export const { toggleLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
