import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  id: ""
};

const features = createSlice({
  name: "health",
  initialState,
  reducers: {

    userData: (state, { payload }) => {
      state.users = [payload];
    },
    clear_userData: (state) => {
      state.users = [];
    },
    addToCart: (state, { payload }) => {
      const check = state.cart.findIndex((i) => i.id === payload.id);
      if (check >= 0) {
        state.cart[check].QTY += 1;
      } else {
        const items = { ...payload, QTY: 1 };
        state.cart.push(items);
      }
    },
    addId: (state, {payload}) =>{
      state.id = payload
  },
  signOut: (state) => {
    state.id = "";
  }
  },
});

export const { userData, clear_userData, addToCart,addId,  } = features.actions;
export default features.reducer;
