import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment: (sliceState) => {
      sliceState.value++;
    },
    decrement: (sliceState) => {
      sliceState.value--;
    },
    reset: (sliceState) => {
      sliceState.value = 0;
    },
    incrementByAmount: (sliceState, action) => {
      sliceState.value += action.payload.amount;
    },
    decrementByAmount: (sliceState, action) => {
      sliceState.value -= action.payload.amount;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
