import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../untils/api';

export const putTodoData = createAsyncThunk('update/todo', async (data) => {
  if (!data.seletedId) return;
  const responce = await api.put(`/todos/${data.seletedId}`, data.patchData);
  return responce.data;
});

const initialState = {
  data: {},
  state: 'idle',
  error: null,
};

const putDataSlice = createSlice({
  name: 'putData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(putTodoData.pending, (status, action) => {
        status.state = 'loading';
      })
      .addCase(putTodoData.fulfilled, (status, action) => {
        status.state = 'success';
        status.data = action.payload;
      })
      .addCase(putTodoData.rejected, (status, action) => {
        status.state = 'error';
        status.error = action.error.message;
      });
  },
});

export const putData = (state) => state.putData.data;
export const putDataState = (state) => state.putData.state;
export const putDataError = (state) => state.putData.error;

export default putDataSlice.reducer;
