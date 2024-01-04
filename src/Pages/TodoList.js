import React from 'react';
import { Button, Input } from '../Component';
import { useDispatch } from 'react-redux';
import { handleDelete, updatePatchData } from '../Slice/fetchPostsSlice';
import { putTodoData } from '../Slice/putDataSlice';
import { deleteTodoData } from '../Slice/deleteDataSlice';
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
      const responce = await dispatch(putTodoData(patchData));
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
    <section className='border-[1px] border-[#c5c9cd] p-4 text-[#262626] text-sm rounded mb-2 last:mb-0 flex items-center justify-between'>
      <div className='flex items-center'>
        <Input
          inputType='checkbox'
          inputName='completed'
          inputChecked={todoData.completed}
          handleChange={(e) => handleCompleted(e, todoData.id)}
          extraClassName='mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus-visible:outline-none'
        />
        {seletedId === todoData.id && editEnabled ? (
          <Input
            inputType='text'
            inputName='title'
            inputValue={editText}
            handleChange={(e) => handleEditTitle(e)}
            extraClassName='w-[300px]'
          />
        ) : (
          <div>{todoData.title}</div>
        )}
      </div>
      <div>
        {seletedId === todoData.id && editEnabled ? (
          <>
            <Button
              type='button'
              children='Update'
              handleClick={() => handleUpdateTodo(todoData)}
              extraClassName='mr-2'
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
              extraClassName='mr-2'
            />
            <Button
              type='button'
              children='Delete'
              handleClick={() => handleDeletePost(todoData.id)}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default TodoList;
