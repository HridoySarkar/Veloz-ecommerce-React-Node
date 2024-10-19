import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    carts: [],
    cart_total: 0,
  },
  reducers: {
    add_to_cart: function (state, { payload: product }) {
      let temp = JSON.parse(JSON.stringify(product));
      let check = state.carts.find((i) => i.id === product.id);
      if (check) {
        check.qty++;
      } else {
        temp.qty = 1;
        state.carts.push(temp);
      }
      cartSlice.caseReducers.save_cart_Data(state);
      cartSlice.caseReducers.save_cart_Data(state);
    },
    update_cart: (state, { payload }) => {
      const { qty, product } = payload;
      let check = state.carts.find((i) => i.id === product.id);
      if (check) {
        check.qty = qty;
      }
      cartSlice.caseReducers.save_cart_Data(state);
      cartSlice.caseReducers.save_cart_Data(state);
    },

    remove_from_cart: (state, { payload: product }) => {
      state.carts = state.carts.filter((item) => item.id !== product.id);
      cartSlice.caseReducers.save_cart_Data(state);
    },
    clear_cart: (state) => {
      state.carts = [];
      state.cart_total = 0;
      cartSlice.caseReducers.save_cart_Data(state);
    },

    save_cart_Data: (state) => {
      localStorage.setItem("carts", JSON.stringify(state.carts));
      state.cart_total = state.carts.reduce(
        (t, i) => (t += i.qty * i.price),
        0
      );
    },

    set_default_carts: (state) => {
      try {
        let carts_els = JSON.parse(localStorage.getItem("carts"));
        if (carts_els && Array.isArray(carts_els)) {
          state.carts = carts_els;
        } else {
          state.carts = []; // Set to empty array if nothing is in localStorage
        }
      } catch (error) {
        state.carts = []; // Handle JSON parsing errors and default to an empty array
      }
      cartSlice.caseReducers.save_cart_Data(state);
    },
  },
});

export default cartSlice.reducer;
