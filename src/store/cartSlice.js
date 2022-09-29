import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
      state.count++;
    },
    remove(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.count--;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
