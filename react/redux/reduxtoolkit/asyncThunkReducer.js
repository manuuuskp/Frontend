// Thunk is a middleware which will handle the async requests.
// It is mandatory to inform the redux that this state update is a asynchronous one and inorder to do that
// we should use async thunk.

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const thunkFunction = createAsyncThunk(
  "thunkname",
  async (dispatch, getState) => {
    //asynchronous calls
  }
);

const sliceName = createSlice({
  name: "reducername",
  initialState: initialState,
  reducers: {
    //list of action creaters
  },
  extraReducers: {
    [thunkFunction.pending]: (state, action) => {},
    [thunkFunction.fulfilled]: (state, action) => {},
    [thunkFunction.rejected]: (state, action) => {},
  },
  // extraReducers: (builder) => {
  //     builder.addCase(thunkFunction.pending, (state, action) => {}),
  //     builder.addCase(thunkFunction.fulfilled, (state, action)=>{}),
  //     builder.addCase(thunkFunction.rejected, (state, action) => {})
  // }
});

// basically thunk function will have three status as because it is an asynchronous function.
// so need to create cases for those in the extrareducers.
// however thunkFunction name is used as action dispatcher.

export const actions = sliceName.actions;
export default sliceName.reducer;
