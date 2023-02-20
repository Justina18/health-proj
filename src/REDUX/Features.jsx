import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
};

const features = createSlice({
  name: "health",
  initialState,
  reducers: {
    userData: (state, { payload }) => {
      if (state.user.length) {
        state.user = [{ ...payload }];
      } else { 
        state.user = [{ ...state.user[0], ...payload }];
      }
    },
    clear_userData: (state) => {
      state.user = [];
    },
    addToCart: (state, {payload})=>{
      const check = state.cart.findIndex((i) => i.id === payload.id);
      if(check >= 0){
          state.cart[check].QTY += 1;
      } else {
          const items ={...payload, QTY : 1};
          state.cart.push(items);
      }
  },
  },
});

export const { userData,clear_userData,addToCart } = features.actions;
export default features.reducer;
