import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { userReducer } from './slices/userSlice';
import { planReducer } from './slices/planSlice';
import { uiReducer } from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    plan: planReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
