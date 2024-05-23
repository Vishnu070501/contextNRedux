import { configureStore } from '@reduxjs/toolkit';// this one is is it is not the default import
import counterReducer from './counter/counterSlice';//for default imports (here the default import is the reducersdefined in the silce)

export const store = configureStore({
  reducer: {// this store will export reducer slices 
    counter: counterReducer, 
  },
});
