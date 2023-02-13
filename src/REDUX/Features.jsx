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
  },
});

export const { userData,clear_userData  } = features.actions;
export default features.reducer;
