import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };

const toogleCartSlice = createSlice({
  name: "toggleCart",
  initialState,
  reducers: {
    toggleCarts(state) {
      state.showCart = true;
    },

    unToggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const toggleCartAction = toogleCartSlice.actions;
export default toogleCartSlice.reducer;
