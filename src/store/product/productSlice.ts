import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from 'store/const';

import { Product } from 'types/product';
import { Status } from 'types/status';

interface ProductSlice {
  products: Product[];
  flag: boolean;
  error: string | null;
  status: Status;
}

const initialState: ProductSlice = {
  products: [],
  flag: false,
  error: null,
  status: 'idle'
};

export const productRequestAsync = createAsyncThunk<Product[], string>('product/fetch', (category) => {
  return fetch(`${API_URI}${POSTFIX}?category=${category}`)
    .then((req) => req.json())
    .catch((error) => ({ error }));
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productRequestAsync.pending, (state) => {
        state.error = '';
        state.status = 'loading';
      })
      .addCase(productRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.status = 'success';
        state.products = action.payload;
        state.flag = true;
      })
      .addCase(productRequestAsync.rejected, (state) => {
        state.error = 'Can not load data';
        state.status = 'failed';
      });
  }
});

export default productSlice.reducer;
