import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const loadCartState = () => {
  if (typeof window === "undefined") {
    return defaultCartState;
  }

  try {
    const raw = window.localStorage.getItem("cartState");
    if (!raw) {
      return defaultCartState;
    }

    const parsed = JSON.parse(raw);
    return {
      items: Array.isArray(parsed.items) ? parsed.items : [],
      totalQuantity: Number(parsed.totalQuantity) || 0,
      totalPrice: Number(parsed.totalPrice) || 0,
    };
  } catch {
    return defaultCartState;
  }
};

const initialState = loadCartState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ➕ ADD TO CART
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      const price = Number(product.price) || 0;

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += price;
    },

    // ❌ REMOVE SINGLE ITEM OR DECREMENT QUANTITY
    removeFromCart: (state, action) => {
      const index = action.payload;
      const removedItem = state.items[index];

      if (!removedItem) {
        return;
      }

      const price = Number(removedItem.price) || 0;
      state.totalQuantity -= 1;
      state.totalPrice -= price;

      if (removedItem.quantity > 1) {
        removedItem.quantity -= 1;
      } else {
        state.items.splice(index, 1);
      }
    },

    // 🧹 CLEAR CART
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;