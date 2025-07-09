import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  numberList: number[];
}

const initialState: CounterState = {
  count: 0,
  numberList: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      if (state.count % 5 === 0) {
        state.numberList.push(state.count);
      }
    },
    decrement: (state) => {
      state.count -= 1;
      const lastNumber = state.numberList.at(-1);
      if (lastNumber !== undefined && lastNumber > state.count) {
        state.numberList.pop();
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
