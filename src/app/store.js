import { configureStore } from '@reduxjs/toolkit';
import fetchPosts from '../Slice/fetchPostsSlice';
import usersSlice from '../Slice/usersSlice';
import searchSlice from '../Slice/searchSlice';

export const store = configureStore({
  reducer: {
    posts: fetchPosts,
    users: usersSlice,
    searchTerm: searchSlice,
  },
});
