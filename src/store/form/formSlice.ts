import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from 'store';
import { Form, FormResponse, ValidateFormErrors, FormList, FormValue } from 'types/form';

import { closeModal } from '../modalDelivery/modalDeliverySlice';
import { clearOrder } from '../order/orderSlice';

const initialState: Form = {
  name: '',
  phone: '',
  format: 'delivery',
  address: '',
  floor: '',
  intercom: '',
  error: null,
  errors: {},
  touch: false,
  status: 'idle',
  response: null
};

export const submitForm = createAsyncThunk<FormResponse[], FormList, { rejectValue: string }>(
  'form/submit',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch('https://cloudy-slash-rubidium.glitch.me/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error(`Ошибка ${response.statusText}`);
      }
      dispatch(clearOrder());
      dispatch(closeModal());
      dispatch(clearForm());

      return await response.json();
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormValue: (state, action: PayloadAction<FormValue>) => {
      state[action.payload.field] = action.payload.value;
    },
    setError: (state, action) => {
      state.errors = action.payload;
    },
    clearError: (state) => {
      state.errors = {};
    },
    clearForm: () => initialState,
    changeTouch: (state) => {
      state.touch = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.response = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.status = 'success';
        state.response = action.payload;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = 'failed';
        if (action.payload) {
          state.error = action.payload;
        }
      });
  }
});

export const { updateFormValue, setError, clearError, changeTouch, clearForm } = formSlice.actions;
export default formSlice.reducer;

export const validateForm = () => (dispatch: AppDispatch, getState: () => RootState ) => {
  const form = getState().form;

  const errors: ValidateFormErrors = {};

  if (!form.name) {
    errors.name = 'Name is required';
  }
  if (!form.phone) {
    errors.phone = 'Phone is required';
  }

  if (!form.floor && form.format === 'delivery') {
    errors.floor = 'Floor is required';
  }
  if (!form.address && form.format === 'delivery') {
    errors.address = 'Address is required';
  }
  if (!form.intercom && form.format === 'delivery') {
    errors.intercom = 'Intercom is required';
  }

  if (form.format === 'pickup') {
    dispatch(updateFormValue({ field: 'address', value: '' }));
    dispatch(updateFormValue({ field: 'floor', value: '' }));
    dispatch(updateFormValue({ field: 'intercom', value: '' }));
  }

  if (Object.keys(errors).length) {
    dispatch(setError(errors));
  } else {
    dispatch(clearError());
  }
};
