import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../untils/api';

export const deleteTodoData = createAsyncThunk('update/todo', async (data) => {
  if (!data.seletedId) return;
  const responce = await api.put(`/todos/${data.seletedId}`, data.patchData);
  return responce.data;
});

const initialState = {
  state: 'idle',
  error: null,
};

const deleteDataSlice = createSlice({
  name: 'deleteData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteTodoData.pending, (status, action) => {
        status.state = 'loading';
      })
      .addCase(deleteTodoData.fulfilled, (status, action) => {
        status.state = 'success';
      })
      .addCase(deleteTodoData.rejected, (status, action) => {
        status.state = 'error';
        status.error = action.error.message;
      });
  },
});

export const deleteDataState = (state) => state.deleteData.state;
export const deleteDataError = (state) => state.deleteData.error;

export default deleteDataSlice.reducer;
