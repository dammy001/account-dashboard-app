import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk, RootState } from '../../index';
import type { User } from '../../../types/User';

interface State {
  user: User | null;
  token: string | null | undefined;
  loading: boolean;
}

const initialState: State = {
  user: null,
  token: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const login =
  ({ user, token }: { user: User; token: string }): AppThunk =>
  async (dispatch) => {
    await dispatch(setUser(user));
    await dispatch(setToken(token));
  };

export const { setUser, setToken, setLoading } = userSlice.actions;

export const userSelector = (state: RootState) => state.auth;

export default userSlice.reducer;
