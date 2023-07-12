import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartReducer';
import ProductsReducer from './ProductsReducer';
import AuthReducer from './AuthReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: ProductsReducer,
    user: AuthReducer,
  },
});
