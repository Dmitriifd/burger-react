import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    isOpenProductModal: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    openModalProduct: (state) => {
      state.isOpenProductModal = true;
    },
    closeModalProduct: (state) => {
      state.isOpenProductModal = false;
    },
  },
});

export const { openModal, closeModal, openModalProduct, closeModalProduct } =
  modalSlice.actions;
export default modalSlice.reducer;
