import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../domain/user.interface';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;
