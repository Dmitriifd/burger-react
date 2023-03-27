import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from 'store/const';
import { Category } from 'types/category';

interface CategorySlice {
  category: Category[];
  error: string;
  activeCategory: number;
}

interface CategorySliceAction {
  indexCategory: number;
}

const initialState: CategorySlice = {
  category: [],
  error: '',
  activeCategory: 0
};

export const categoryRequestAsync = createAsyncThunk<Category[], undefined>('category/fetch', (_, thunkAPI) => {
  return fetch(`${API_URI}${POSTFIX}/category`)
    .then((req) => req.json())
    .catch((error) => ({ error }));
});

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<CategorySliceAction>) {
      state.activeCategory = action.payload.indexCategory;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(categoryRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.category = action.payload;
      })
      .addCase(categoryRequestAsync.rejected, (state) => {
        state.error = 'Can not load data';
      });
  }
});
export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
