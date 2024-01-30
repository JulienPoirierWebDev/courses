import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 1, content: "Faire la vaisselle", status: "to do" },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addNewTask: (tasksState, action) => {
      tasksState.push({
        id: Date.now(),
        content: action.payload.content,
        status: "to do",
      });
    },
    deleteTask: (tasksState, action) => {
      const newTasks = tasksState.tasks.filter((task) => {
        if (task.id !== action.payload.idToDelete) {
          return task;
        }

        tasksState.tasks = newTasks;
      });
    },
  },
});

export const { addNewTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
