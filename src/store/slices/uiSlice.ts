import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  loading: boolean;
}

const initialState: UiState = {
  loading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
  },
});

export const uiReducer = uiSlice.reducer;

export const { startLoading, finishLoading } = uiSlice.actions;
