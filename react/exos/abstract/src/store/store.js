import { configureStore } from "@reduxjs/toolkit";
import taskGroupReducer from "./slices/taskGroupSlice";

const store = configureStore({
  reducer: {
    taskGroup: taskGroupReducer,
  },
});

export default store;
