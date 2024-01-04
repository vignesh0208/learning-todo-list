import { configureStore } from '@reduxjs/toolkit';
import fetchPosts from '../Slice/fetchPostsSlice';
import usersSlice from '../Slice/usersSlice';
import searchSlice from '../Slice/searchSlice';
import postDataSlice from '../Slice/postDataSlice';
import putDataSlice from '../Slice/putDataSlice';
import deleteDataSlice from '../Slice/deleteDataSlice';

export const store = configureStore({
  reducer: {
    posts: fetchPosts,
    users: usersSlice,
    searchTerm: searchSlice,
    postData: postDataSlice,
    putData: putDataSlice,
    deleteData: deleteDataSlice,
  },
});
