import { configureStore } from '@reduxjs/toolkit';
import fetchPosts from '../Slice/fetchPostsSlice';
import usersSlice from '../Slice/usersSlice';

export const store = configureStore({
  reducer: {
    posts: fetchPosts,
    users: usersSlice,
  },
});
