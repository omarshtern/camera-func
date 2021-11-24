import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
    selectedImage: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state, action) {
      state.user = null;
    },
    selectImage(state, action) {
      state.selectedImage = action.payload;
    },
    resetImage(state, action) {
      state.selectedImage = null;
    },
  },
});

export const { login, logout, selectImage, resetImage } = appSlice.actions;
export const selectSelectedImage = state => state.
export const selectApp = (state) => state.app.value;
export default appSlice.reducer;