import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from '../features/orders/ordersSlice';

export const store = configureStore({
    reducer: {
        ordersReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;