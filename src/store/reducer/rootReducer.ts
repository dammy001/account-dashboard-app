import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import utilReducer from './features/utilSlice';
import accountReducer from './features/accountSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  util: utilReducer,
  account: accountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
