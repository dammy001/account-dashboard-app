import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './reducer/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
