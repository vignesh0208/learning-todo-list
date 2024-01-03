import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../untils/api';

export const fetchDataPosts = createAsyncThunk('fetch/todos', async () => {
  const responce = await api.get('/todos');
  return responce.data;
});

export const postTodoData = createAsyncThunk('post/todo', async (data) => {
  const responce = await api.post('/todos', data);
  return responce.data;
});

export const deleteTodoData = createAsyncThunk(
  'delete/todo',
  async (deleteId) => {
    if (!deleteId) return;
    const responce = await api.delete(`/todos/${deleteId}`);
    return responce.data;
  },
);

export const patchTodoData = createAsyncThunk('update/todo', async (data) => {
  if (!data.seletedId) return;
  const responce = await api.put(`/todos/${data.seletedId}`, data.patchData);
  return responce.data;
});

const initialState = {
  posts: [],
  state: 'idle',
  error: null,
};

const fetchPosts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostData: (state, action) => {
      state.posts.push(action.payload);
    },
    handleDelete: (state, action) => {
      if (!action.payload) return;
      const newTodoData = state.posts.filter(
        (post) => post.id !== action.payload,
      );
      state.posts = newTodoData;
    },
    updatePatchData: (state, action) => {
      if (!action.payload?.id) return;
      state.posts.map((post, index) => {
        if (post.id === action.payload?.id) {
          state.posts[index] = action.payload;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataPosts.pending, (status, action) => {
        status.state = 'pending';
      })
      .addCase(fetchDataPosts.fulfilled, (status, action) => {
        status.state = 'fulfilled';
        status.posts = action.payload;
      })
      .addCase(fetchDataPosts.rejected, (status, action) => {
        status.state = 'error';
        status.posts = action.error.message;
      })
      .addCase(postTodoData.fulfilled, (status, action) => {
        status.state = 'fulfilled';
      })
      .addCase(deleteTodoData.fulfilled, (status, action) => {
        status.state = 'fulfilled';
      })
      .addCase(patchTodoData.fulfilled, (status, action) => {
        status.state = 'fulfilled';
      });
  },
});

export const postData = (state) => state.posts.posts;
export const postState = (state) => state.posts.state;
export const postError = (state) => state.posts.error;

export const { setPostData, handleDelete, updatePatchData } =
  fetchPosts.actions;

export default fetchPosts.reducer;
