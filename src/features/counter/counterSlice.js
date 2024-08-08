import { createSlice ,createAction} from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const increment = createAction('externalAction');

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers(builder){
    builder
      .addCase(increment, (state) => {
        state.count += 10;
      })

  },
});

export const {decrement, reset, incrementByAmount,increment:Increment} =
  counterSlice.actions;

export default counterSlice.reducer;
