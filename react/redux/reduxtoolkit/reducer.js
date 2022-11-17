import { createSlice } from "@reduxjs/toolkit";

// // createSlice will create the reducer.
// This way we can create many slices of reducer and combine the reducer and configure the store.

const slicename = createSlice({
  name: "reducername",
  initialState: initialState,
  reducers: {
    //action types
    addCount(state, action) {
      state.count = action.payload;
    },

    addNextCount(state, action) {
      state.nextCount = action.payload;
    },
  },
});

// createSlice will take an obj as an argument and will has props to set.
// this reducers object will create actions that can be dispatched later.

//exporting the action types to dispatch it which later triggers reducer function
export const actionTypes = slicename.actions;

//exporting the reducer to add it to the store
export default slicename.reducer;
