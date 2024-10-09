import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // This will hold the items in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log('Adding item to cart:', newItem); // Log to confirm the item being added
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    updateQuantity(state, action) {
      const { id, change } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem && existingItem.quantity + change >= 1) {
        existingItem.quantity += change;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const { addItemToCart, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
