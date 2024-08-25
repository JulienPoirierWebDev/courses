import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import tasksSlice from "./tasksSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    tasks: tasksSlice,
  },
});
