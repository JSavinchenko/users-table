import {configureStore} from '@reduxjs/toolkit';
import usersTodoReducer from './reducers';

export const store = configureStore({
  reducer: {
    usersTodo: usersTodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
