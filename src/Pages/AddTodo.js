import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postData, setPostData } from '../Slice/fetchPostsSlice';
import { postTodoData } from '../Slice/postDataSlice';
import { Input, Button } from '../Component';
import { unwrapResult } from '@reduxjs/toolkit';

const AddTodo = () => {
  const dispatch = useDispatch();
  const todoData = useSelector(postData);
  const [todo, setTodo] = useState('');
  const currentRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todo) return;
    try {
      const responce = await dispatch(
        postTodoData({
          id: todoData.length ? todoData[todoData.length - 1].id + 1 : 1,
          userId: 1,
          title: todo,
          completed: false,
        }),
      );
      const unWarpData = unwrapResult(responce);
      dispatch(setPostData(unWarpData));
      currentRef.current.focus();
      setTodo('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          inputType='text'
          inputName='title'
          inputPlaceholder='Enter title'
          inputValue={todo}
          handleChange={(e) => setTodo(e.target.value)}
          inputRef={currentRef}
        />
        <Button
          ButtonType='submit'
          children='Add Todo'
        />
      </form>
    </>
  );
};

export default AddTodo;
