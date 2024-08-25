import { createSlice } from "@reduxjs/toolkit";
import { useId } from "react";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Faire les courses",
      completed: false,
      userId: 1,
    },
    {
      id: 2,
      title: "Faire la vaisselle",
      completed: true,
      userId: 1,
    },
    {
      id: 3,
      title: "Faire le ménage",
      completed: false,
      userId: 1,
    },
  ],
};

export const taskGroupSlice = createSlice({
  name: "taskGroup",
  initialState,
  reducers: {
    updateCompleted: (state, action) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload.id) {
          task.completed = !task.completed;
        }
      });
    },
    addNewTask: (state, action) => {
      console.log(action.payload.title);
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        userId: 1,
      };
      state.tasks.push(newTask);
    },
    removeTask: (state, action) => {
      console.log(action.payload.id);
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => {
        if (action.payload.id === task.id) {
          task.title = action.payload.title;
        }
        return task;
      });
    },
  },
});

export const { updateCompleted, addNewTask, removeTask, updateTask } =
  taskGroupSlice.actions;

export default taskGroupSlice.reducer;
