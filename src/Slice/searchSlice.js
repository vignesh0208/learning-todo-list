import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

const searchSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    handleSearchTerm: (status, action) => {
      status.searchTerm = action.payload;
    },
  },
});

export const searchTerm = (state) => state.searchTerm.searchTerm;

export const { handleSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
