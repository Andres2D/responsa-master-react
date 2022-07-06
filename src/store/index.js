import { configureStore } from '@reduxjs/toolkit';
import questionsSlice from './questions';

const store = configureStore({
  reducer: {
    questions: questionsSlice
  }
});

export default store;
