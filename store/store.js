import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const saveCartState = (cartState) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem("cartState", JSON.stringify(cartState));
  } catch {
    
  }
};

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});