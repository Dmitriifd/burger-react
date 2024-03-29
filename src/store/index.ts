import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import productReducer from './product/productSlice';
import modalReducer from './modalDelivery/modalDeliverySlice';
import formReducer from './form/formSlice';
import orderReducer, { localStorageMiddleware } from './order/orderSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    modal: modalReducer,
    form: formReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
