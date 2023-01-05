import {configureStore} from '@reduxjs/toolkit';
import CountReducer from './reducers/countReducer';

export const store = configureStore({
  reducer: {
    count: CountReducer,
  },
});
