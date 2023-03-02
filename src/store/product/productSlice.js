import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../const";

const initialState = {
  products: [],
  flag: false,
  error: "",
  status: "",
};

export const productRequestAsync = createAsyncThunk(
  "product/fetch",
  (category) =>
    fetch(`${API_URI}${POSTFIX}?category=${category}`)
      .then((req) => req.json())
      .catch((error) => ({ error }))
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productRequestAsync.pending, (state) => {
        state.error = "";
        state.status = 'loading';
      })
      .addCase(productRequestAsync.fulfilled, (state, action) => {
        state.error = "";
        state.status = "success";
        state.products = action.payload;
        state.flag = true
      })
      .addCase(productRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;
