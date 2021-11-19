import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk, RootState } from '../../index';
import type { AccountI } from '../../../types';

interface State {
  accounts: AccountI[] | null;
  account: AccountI | null | undefined;
  loading: boolean;
}

const initialState: State = {
  accounts: [],
  account: {} as AccountI,
  loading: false,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, { payload }: PayloadAction<AccountI>) => {
      state.accounts?.push(payload);
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const linkAccount =
  (account: AccountI): AppThunk =>
  async (dispatch) => {
    await dispatch(setAccount(account));
  };

export const { setAccount, setLoading } = accountSlice.actions;

export const userSelector = (state: RootState) => state.auth;

export default accountSlice.reducer;
