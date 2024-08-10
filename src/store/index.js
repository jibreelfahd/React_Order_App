import { configureStore } from "@reduxjs/toolkit";

import toggleCartSlice from "./toggle-cart";

const store = configureStore({
  reducer: {
    toggleCart: toggleCartSlice,
  },
});

export default store;
