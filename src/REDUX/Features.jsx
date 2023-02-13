import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
};

const features = createSlice({
  name: "e-store",
  initialState,
  reducers: {
    userData: (state, { payload }) => {
      if (state.user.length) {
        
      }
      state.product = payload;
    },
  },
});

export const { userData } = features.actions;
export default features.reducer;
