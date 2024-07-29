import { configureStore } from '@reduxjs/toolkit';
import documentReducer from './DocumentSlice';
import authReducer from './AuthSlice'

const store = configureStore({
  reducer: {
    documents: documentReducer,
    auth: authReducer
  }
});

export default store;
