import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './reducer/rootReducer';
import * as AuthActions from './reducer/features/authSlice';

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export * from './reducer/features/accountSlice';
export * from './reducer/features/utilSlice';
export { AuthActions };

export default store;
