import { configureStore } from '@reduxjs/toolkit';
import wishReducer from './wishSlice';

export default configureStore({
    reducer: {
         wish: wishReducer
    }
});
