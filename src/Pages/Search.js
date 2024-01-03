import React from 'react';
import { Input } from '../Component';
import { useSelector, useDispatch } from 'react-redux';
import { searchTerm, handleSearchTerm } from '../Slice/searchSlice';

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(searchTerm);

  const handleSearchTitle = (e) => {
    dispatch(handleSearchTerm(e.target.value));
  };

  return (
    <>
      <Input
        inputType='text'
        inputName='search'
        inputPlaceholder='Search todo list'
        inputValue={searchValue}
        handleChange={handleSearchTitle}
      />
    </>
  );
};

export default Search;
