import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../untils/api';

export const postTodoData = createAsyncThunk('post/todo', async (data) => {
  const responce = await api.post('/todos', data);
  return responce.data;
});

const initialState = {
  data: {},
  state: 'idle',
  error: null,
};

const postDataSlice = createSlice({
  name: 'postData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postTodoData.pending, (status, action) => {
        status.state = 'loading';
      })
      .addCase(postTodoData.fulfilled, (status, action) => {
        status.state = 'success';
        status.data = action.payload;
      })
      .addCase(postTodoData.rejected, (status, action) => {
        status.state = 'error';
        status.error = action.error.message;
      });
  },
});

export const postData = (state) => state.postData.data;
export const postDataState = (state) => state.postData.state;
export const postDataError = (state) => state.postData.error;

export default postDataSlice.reducer;
