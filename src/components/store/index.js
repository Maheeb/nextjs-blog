import { configureStore } from '@reduxjs/toolkit';
import blogSliceReducer from './data';

 const store = configureStore({
    reducer: {
        blogSlice: blogSliceReducer
    }
});

export default store;