import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import utilReducer from './features/utilSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  util: utilReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
