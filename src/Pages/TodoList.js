import React, { useState } from 'react';
import TodoUsers from './TodoUsers';
import { Button, Input } from '../Component';
import { useDispatch } from 'react-redux';
import {
  deleteTodoData,
  handleDelete,
  patchTodoData,
  updatePatchData,
} from '../Slice/fetchPostsSlice';
import { unwrapResult } from '@reduxjs/toolkit';

const TodoList = ({
  todoData,
  handleEditPost,
  seletedId,
  editEnabled,
  handleEditTitle,
  editText,
  handleCloseEdit,
  handleUpdateTodo,
}) => {
  const dispatch = useDispatch();

  const handleCompleted = async (e, seleted_id) => {
    if (!seleted_id) return;
    try {
      const patchData = {
        seletedId: seleted_id,
        patchData: { ...todoData, completed: e.target.checked },
      };
      const responce = await dispatch(patchTodoData(patchData));
      const data = unwrapResult(responce);
      dispatch(updatePatchData(data));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePost = async (seletedTodoId) => {
    if (!seletedTodoId) return;
    try {
      await dispatch(deleteTodoData(seletedTodoId));
      dispatch(handleDelete(seletedTodoId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section style={{ border: '1px solid #000', marginBottom: '4px' }}>
      <Input
        inputType='checkbox'
        inputName='completed'
        inputChecked={todoData.completed}
        handleChange={(e) => handleCompleted(e, todoData.id)}
      />
      {seletedId === todoData.id && editEnabled ? (
        <Input
          inputType='text'
          inputName='title'
          inputValue={editText}
          handleChange={(e) => handleEditTitle(e)}
        />
      ) : (
        <div>{todoData.title}</div>
      )}
      <TodoUsers userId={todoData.userId} />
      {seletedId === todoData.id && editEnabled ? (
        <>
          <Button
            type='button'
            children='Update'
            handleClick={() => handleUpdateTodo(todoData)}
          />
          <Button
            type='button'
            children='Cancel'
            handleClick={() => handleCloseEdit(todoData.id)}
          />
        </>
      ) : (
        <>
          <Button
            type='button'
            children='Edit'
            handleClick={() => handleEditPost(todoData)}
          />
          <Button
            type='button'
            children='Delete'
            handleClick={() => handleDeletePost(todoData.id)}
          />
        </>
      )}
    </section>
  );
};

export default TodoList;
